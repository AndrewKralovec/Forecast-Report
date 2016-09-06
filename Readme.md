# BlueWolf
Forecast Web Application

# About
BlueWolf is a ASP.NET CORE application with c# for the back end and Angular 2 with typeScript for the front end. 
The client side code is located under the ClientApp folder in the root directory 
Webpack is being used for building and bundling client-side resources. 
Bootstrap is used for layout and styling. 
BlueWolf uses a Sqlite database called BlueWolf.db located under the DB folder in the root directory. Its made of two tables USERS and History. 
There are two third party API's forecast.io and Google Maps. The forecast.io API key is stored under secrets and the Google Maps key is a public one.
Highcharts is used as the visualization library to view forecast information.

#  Notes 
Pages my take some time loading, do not be alarmed if a page first appears blank at first 
Login credentials 

username:root@test.com     password:linux
or
username:test@yahoo.com    password:1234

#  Author 
**Andrew kralovec**, email: [akrala@yahoo.com](mailto:akrala@yahoo.com)

# Start BlueWolf 
cd AndrewKralovec
npm install
dotnet run 
