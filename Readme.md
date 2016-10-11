# SkyCast
Forecast Web Application

# About
SkyCast is a ASP.NET CORE application with c# for the back end and Angular 2 with typescript for the front end. 
The client side code is located under the ClientApp folder in the root directory  
Webpack is being used for building and bundling client-side resources.  
Bootstrap is used for layout and styling.  
SkyCast uses a Sqlite database called BlueWolf.db located under the DB folder in the root directory. Its made of two tables USERS and History. The database will stay as a sqlite database, but is being imporved to include the asp.net identiy framework i the next project update. 
There are two third party API's forecast.io and Google Maps. The forecast.io API key is stored under secrets and the Google Maps key is a public one.  
Highchairs is used as the visualization library to view forecast information.  
X-unit is used for unit testing   

# Requirements
Users would like their users to be able to enter in any location and retrieve current and useful information about the weather in that area, as well as a future forecast.  
Charts should be included for historic weather information about that area using any visualization library of the developers choice, allowing the user to see relevant information within a reasonable time period.  
Users feels that allowing a user to track his or her search history would be a valuable addition, and would like to see a way of storing queries made by a specific user between browser sessions.
Users want clean looking website with its own custome icons of the developers choice. 

# Controllers:
There are three controllers, Home, Forecast, and User located under the Controllers folder in the root directory.  
The Home controller handles the index views.   
The Forecast makes requests to forecast.io api. The api key is stored in user secrets. Forecast accepts a Location object that is made up of lat/lng and date (which is optional on the client side). It also has an override for the ToString method to make for more readable request to the forecast api.   
User controller handles all the user information. This includes login,search history, etc. All the user information is saved into the sqlite database located under root.   

# ClientApp:
ClientApp is the root directory for the client side view. Angular2 is being used as the framework for ClientApp. The main folder are services, models, and components.   
Services contains the services that request and map responses to the server controllers.   
Models contains all the model classes that are used for typecasting data.   
Components has all the Angular components that present the view to the user and control the logic behind them. When a user first logins in, they are redirected to the login page, all other pages/routes besides home are restricted. After a user logs in they can see historic weather on a chart, see past searches, or search for forecasts. The search can be either by lat/long or by address. The user also has the option to search a date, given a location.    

#  Notes 
Pages my take some time loading due to server, do not be alarmed if a page first appears blank, it will load. 


username:root@test.com     password:linux  
or  
username:test@yahoo.com    password:1234  

#  Author 
**Andrew kralovec**, email: [akrala@yahoo.com](mailto:akrala@yahoo.com)

# Start SkyCast 
cd AndrewKralovec
npm install
dotnet restore
dotnet run 
