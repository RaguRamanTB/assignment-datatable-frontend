# DataTable - A simple web-based datatable

DataTable is a simple web-based datatable that supports pagination, sorting, search, and a selectable number of entries in the table. This repository is the front-end (React.js) for the DataTable Application.

## Installation

Clone the repository and use [Node.js](https://nodejs.org/en/download/) and package manager **npm** to install and run DataTable.

```bash
cd assignment-datatable-frontend\
npm install
npm start
```

The application should be up and running at [http://localhost:8081/](http://localhost:8081/). _CORS_ is enabled, so do not change the **PORT** in .env file.

## Dependencies and other packages

1. Redux and React-redux - State management
2. [Bulma.io](https://bulma.io/) and [Material UI](https://mui.com/) - Component styling
3. Axios - HTTP Client

## Notes

1. The versions of Node.js and npm for development are **v16.16.0** and **8.11.0** respectively. For other dependency versions, please refer _package.json_ file.
2. Make sure you start the [back-end](https://github.com/RaguRamanTB/assignment-datatable-backend) server before starting the front-end application.
