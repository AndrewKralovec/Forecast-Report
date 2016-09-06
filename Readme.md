# BlueWolf
Forecast Web Application
# About
BlueWolf is a ASP.NET CORE application with c# for the back end and Angular 2 with typeScript for the front end. <br />  
The client side code is located under the ClientApp folder in the root directory   <br />
Webpack is being used for building and bundling client-side resources.   <br />
Bootstrap is used for layout and styling.   <br />
BlueWolf uses a Sqlite database called BlueWolf.db located under the DB folder in the root directory. Its made of two tables USERS and History. <br />
There are two third party API's forecast.io and Google Maps. The forecast.io API key is stored under secrets and the Google Maps key is a public one.<br />
Highcharts is used as the visualization library to view forecast information.  

#  Author 
**Andrew kralovec**, email: [akrala@yahoo.com](mailto:akrala@yahoo.com)

# Start BlueWolf 
cd AndrewKralovec
npm install
dotnet run 

# Deploy this website on Heroku 
<a href="https://dashboard.heroku.com/new?template=https://github.com/AndrewKralovec/Forecast-Report">
  <img src="https://www.herokucdn.com/deploy/button.svg" alt="Deploy">
</a>
