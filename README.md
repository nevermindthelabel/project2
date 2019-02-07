# Project-2
P2-Team-3 Collaboration Project

# Project Title: TrafficMon (Traffic Monitor)

## Team Members:


Matt Kilcup <p>
Brenden Knight <p>
James Barker <p>
Adam Karman <p>
Charles Bess, Jr.


## Overview

TrafficMon is a reporting application to post and review “reported” traffic conditions by users in your area. All “reported” traffic conditions are posted by TrafficMon application users. Casual users (Non-registered users) can view traffic alerts but not post traffic alerts.

TrafficMon alerts are searchable by City or State. Only authenticated users can post reports for viewing.


## Running the application

## Heroku and JawsDB


### 1. Heroku Launch

The application can be launched from the following link to Heroku:

- 

The application and database (JawsDB) will run through Heroku.


- OR - 




## Running the application (local)


### 1. Install mySQL

- mySQL (https://dev.mysql.com/downloads/installer/)


### 2. Clone the application

Clone the application from the following location... 

- https://github.com/cbessjr/Project-2


### 3. SQL Schema

- Run the schema (found in schema.sql) to create the database
   
 
### 4. SQL Connection Update
 
Once the application has been cloned, create a .ENV file at the root of the cloned application. 

Add the following data to the .ENV file:

```
MYSQL_USERNAME="user name"
PASS="password"
HOST="localhost"
```

Add the user name and password to the local database connection. The values must be inside the quotations as shown above.


### 5. Install NPM

- NPM (Node Package Manager) (https://docs.npmjs.com/getting-started/installing-node)

Once NPM has been installed run the following command:

```NPM I``` 

The cloned package.json will allow the command to install all the set dependencies for the application. 


### 6. Install NPM Packages (Only if problems persist after the NPM installation. All packages should be installed when the command “NPM i” is processed)

Install the package(s) from the terminal in the folder the application was cloned.

### Dependencies

- bcrypt-nodejs (https://www.npmjs.com/package/bcrypt-nodejs)
- connect-flash (https://www.npmjs.com/package/connect-flash)
- dotenv (https://www.npmjs.com/package/dotenv)
- express (https://www.npmjs.com/package/express)
- express-handlebars (https://www.npmjs.com/package/express-handlebars)
- express-session (https://www.npmjs.com/package/express-session)
- mysql2 (https://www.npmjs.com/package/mysql2)
- passport (https://www.npmjs.com/package/passport)
- passport-local (https://www.npmjs.com/package/passport-local)
- sequelize (https://www.npmjs.com/package/sequelize)


### Dev Dependencies

- chai (https://www.npmjs.com/package/chai)
- chai-http (https://www.npmjs.com/package/chai-http)
- cross-env (https://www.npmjs.com/package/cross-env)
- eslint (https://www.npmjs.com/package/eslint)
- eslint-config-prettier (https://www.npmjs.com/package/eslint-config-prettier)
- eslint-plugin-prettier (https://www.npmjs.com/package/eslint-plugin-prettier)
- mocha (https://www.npmjs.com/package/mocha)
- prettier (https://www.npmjs.com/package/prettier)

 
### 7. Using the Application
 
Run the following command from the terminal:

```node server.js```

The command will connect to the database.

<br>

From the browser, navigate to the following location:

[localhost:8080](http:\\localhost:8080)

<br>
  
Below are the screens of the application:




![Image of Home Screen](https://github.com/cbessjr/Project-2/blob/master/public/img/Home_Screen.png)

<br>

![Image of New User Screen](https://github.com/cbessjr/Project-2/blob/master/public/img/New_User_Screen.png)

<br>

![Image of Search Screen](https://github.com/cbessjr/Project-2/blob/master/public/img/Search_Screen.png)

<br>

![Image of New Report](https://github.com/cbessjr/Project-2/blob/master/public/img/New_Report_Screen.png)

<br>

![Image of Login Menu](https://github.com/cbessjr/Project-2/blob/master/public/img/Login_Menu.png)

<br>



  
### Future Updates
  
- Validation for City and State
- Reporting by data constraint for persisting incidents
- Push notification alerts
- Area maps images based on report

