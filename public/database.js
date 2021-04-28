let db;
let budgetVersion;

const request = indexedDB.open('budget', budgetVersion || 3);

request.onupgradeneeded = function (e) {
    console.log('Upgrade needed in IndexDB');

    const { oldVersion } = e;
    const newVersion = e.newVersion || db.version;

    console.log(`db version from ${oldVersion} to ${newVersion} ✓`);

    db = e.target.result;

    if (db.objectStoreNames.length === 0) {
        db.createObjectStore('BudgetStore', { autoIncrement: true });
    }
};

request.onerror = function (e) {
    console.log(`oh dear. ${e.target.errorCode}`);
};

function checkDatabase() {
    console.log('db checked ✓');

    let transaction = db.transaction(['BudgetStore'], 'readwrite');
    const store = transaction.objectStore('BudgetStore');
    const getAll = store.getAll();

    getAll.onsuccess = function () {
        if (getAll.result.length > 0) {
            fetch('/api/transaction/bulk', {
                method: 'POST',
                body: JSON.stringify(getAll.result),
                headers: {
                    Accept: 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                },
            })
                .then((response) => response.json())
                .then((res) => {
                    if (res.length !== 0) {
                        transaction = db.transaction(['BudgetStore'], 'readwrite');
                        const currentStore = transaction.objectStore('BudgetStore');
                        currentStore.clear();
                        console.log('stored transactions cleared ✓');
                    }
                });
        }
    };
}

request.onsuccess = function (e) {
    console.log('noice ✓');
    db = e.target.result;
    if (navigator.onLine) {
        console.log('backend online ✓');
        checkDatabase();
    }
};

const saveRecord = (record) => {
    console.log('✓ saveRecord ✓');
    const transaction = db.transaction(['BudgetStore'], 'readwrite');
    const store = transaction.objectStore('BudgetStore');
    store.add(record);
};

window.addEventListener('online', checkDatabase);
