## Instructions
Please be sure to have node installed.

```
npm install
npm start
open localhost:8000 in your browser
```

## Description

# Hi kWantera!
Thank you for the awesome opportunity! I've enjoyed being able to learn Angular 2, TypeScript, and Observables.

This project was built with Node and Express on the backend, and Angular 2 and TypeScript on the frontend.

I am dynamically parsing the CSV files on the backend to account for any csv files located in the data folder.

I've chosen to use the angular-highcharts package to present the stock data.

The largest hurdle I encountered was binding the highcharts component data to the chart component.
I wanted to attempt to build a dynamic, and flexible solution, although I feel that I've cheated by manipulating the data on the backend to handle for highcharts.
I am also passing the highcharts object from the service to the component, rather than generating the highchart specific data on the component.

Another hurdle I encountered was deciding on rolling my own custom build solution, or leveraging the angular cli.
I wound up deciding to go with the angular cli so that I could focus on the problem, rather than the build.

Being the first time I've worked with Angular 2, Observables, and TypeScript, this project took much longer than I'd like to admit versus in React and Redux, but presented a wealth of learnings.

Web App Programming Challenge
=============================

Use either Python or JavaScript (Python ([Flask](http://flask.pocoo.org), [Django](http://djangoproject.com)) / JavaScript ([Node](https://nodejs.org/))) to create a backend, and a JavaScript framework/library ([Angular 2](https://angular.io/), [React](https://facebook.github.io/react/), etc) on the frontend, create a standalone RESTful web application which loads data from the CSV files (located in the data directory of this repository) and plots three lines (one for each stock symbol) onto a chart using the charting library of your choice. The y-axis of the chart should be the "Close" price field, the x-axis should be the "Date" field.

Your code will be assessed on quality, style, readability, and documentation. Please include a brief description of how you went about accomplishing the task and any hurdles you might have faced. In the description, be sure to also include instructions for running the app. Final deliverable should be compressed and e-mailed back to us.

If you're not sure which charting library to use, you could research one or more of the following libraries:

- [Dygraphs](http://dygraphs.com)
- [c3.js](http://c3js.org)
- [d3.js](http://d3js.org)
- [Highcharts](http://www.highcharts.com/)
- [Google charts](https://developers.google.com/chart)

Bonus points
------------
- Calculate and plot a moving average on top of the price
- Angular 2 & TypeScript on the frontend
- Allow interactive toggling between multiple stocks
- Allow interactive date selection and/or zooming of x-axis
- Load the CSV files into a database to be used directly by the web app
