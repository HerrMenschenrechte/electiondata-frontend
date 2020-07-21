# Ad Transparency on Facebook for everyone

The website [politicaladtransparency.com](https://www.politicaladtransparency.com) offers a download of data queried from the Facebook Ad Library. The data includes all Facebook posts with political and socially relevant content for the provided countries since the launch of the library in March 2019. Starting with Denmark and Germany, countries will be added on a rolling basis. Requests for specific countries can be submitted to info@politicaladtransparency.com.

## Tech Stack

This page was built using:

- [Node JS](https://nodejs.org/en/)
- [Express Framework](https://expressjs.com/)
- [Bootstrap](https://getbootstrap.com/)
- [Azure Database for MySQL](https://azure.microsoft.com/en-us/services/mysql/)
- [Azure App Service](https://azure.microsoft.com/en-us/services/app-service/)
- [Azure App Insights](https://azure.microsoft.com/en-us/services/monitor/)
- [Azure Blob Storage](https://azure.microsoft.com/en-us/services/storage/blobs/)

For details on how the data is queried from the Ad Library API and stored in a relational data store please visit the [Github project](https://github.com/HerrMenschenrechte/electiondata-backend) for the data backend service of the application.

## Project: From Idea to Product

**Step 1:** Identified a mismatch between Facebook's API offering and its potential users. Journalists and researchers typically do not have coding abilities and can therefore not access the data without help

**Step 2:** Coded prototype data crawler and downloaded data set to test its value with users.

**Step 3:** Interviewed future users (journalists and researchers) to confirm demand for the service and understand the best way of delivering the data set

**Step 4:** Plan out the final version.

- Web Service
- Easy data access with single click download
- No data wrangling / cleaning / manipulation necessary as file is delivered in interoperable .csv format
- Hosted on Azure cloud services (App Service, Azure MySQL, Azure Blob Storage, App Insights) to ensure availability and scalability

**Step 5:** Work with web designer to create website design

**Step 6:** Code the final solution and publish

**Step 7:** Promote the page using data stories (created with Python/Pandas library) and posts on LinkedIn

**Step 8:** Continuously improve the service and add data sets based on user feedback

## Contact

In case you have any questions, comments or suggestions for improvement, please reach out to info@politicaladtransparency.com

Thanks to [Oana Toudut](https://www.linkedin.com/in/oanatoudut) for your support with the web design!
