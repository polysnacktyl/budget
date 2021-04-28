# Budget Tracker
[check out the deployed application](https://sheltered-river-46144.herokuapp.com/)


## Description
This budget tracker allows users to track positive and negative total transactions with their personal budgets which are stored and retrieved from a Mongo database and displayed in the browser. The tracker is also a progressive web app which can be installed on the user's device and will maintain usability with or without an active internet connection. Utilizing IndexDB and the browser cache, transactions submitted by the user when no connection is available will be stored on the client side until a new connection is detected and the transactions can be added to the database after-the-fact. 


## Installation 
To get this code up and running in VS Code:

1. ```git clone git@github.com:polysnacktyl/budget.git```

2. ```npm install```

3. ```npm start```

To install the live application on your device: 
1. launch Google Chrome 
2. navigate to the live application.
3. click the download icon at the far right of the url bar
4. click install app
5. the app should automatically launch once the download is complete

    ##### note: for Mac users who have not changed relevant defaults, the file should save into user/Applications which stores Chrome-specific applications. This folder is one level deeper than the default for your computer's main Applications folder. They are, perhaps unwisely, both named "Applications." 
## Usage
To track your budget: 
1. enter your starting amount in `transaction amount` field with a description in the `transaction name` field. 
2. click  `+$$$`
3. for each successive transaction, enter the amount and click +$$$ or -$$$, depending on whether the funds were being added to or subtracted from your budget. 

## Features 

## Credits
## Contributions