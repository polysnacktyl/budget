# Budget Tracker
![image](https://github.com/polysnacktyl/budget/blob/main/public/icons/images/budget-demo.gif?raw=true)
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
2. direct the browser to https://sheltered-river-46144.herokuapp.com/
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
- MongoDB NoSQL database structure for dynamic collections and intuitive queries. 
- Browser Cache and IndexDB for a user-experience so painless you may never even notice your internet connection dropped. 
- In-browser and stand-alone application functionalities through Chrome. 
- Automatic connection checks--no need to refresh. 

## Contributions
For questions, comments, or contributions, please reach out via email to polysnacktyl@gmail.com. 
