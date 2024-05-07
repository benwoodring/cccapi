```
# CCC API

## About
The Christian Creeds & Confessions API is a Node.js project that provides a digital repository of historic Christian confessions and catechisms. This API allows users to search and access various documents and excerpts from a robust database, making it an invaluable resource for scholars, theologians, and anyone interested in Christian theology.

## Features
- **Search Functionality**: Users can perform keyword searches within the texts to find specific discussions or topics.
- **Document Retrieval**: Access specific sections of confessions and catechisms.
- **Historical Context**: Each document includes metadata such as the date of writing, authors, and historical significance.

## Installation

To install and run the CCC API locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ccc-api.git
   ```
2. Navigate to the project directory:
   ```bash
   cd reformed-confessions-api
   ```
3. Install the required packages:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   npm start
   ```

## Usage

Once the server is running, you can make API calls to the following endpoints:

- **GET /ccc**
  - Description: Retrieve a list of all confessions and catechisms.
  - Query Parameters:
    - `col`: string (required) - Specify the document to search.
        - Thirty Nine Articles (thirtynine)
    - `search`: string (optional) - Filter documents by keywords.

- **GET /ccc/:id**
  - Description: Fetch a specific confession or catechism by its ID.
  - Path Parameters:
    - `id`: integer - The unique identifier of a document.

Example request:
```bash
curl http://localhost:3000/cccapi/1
```

## Built With
- **Node.js** - The runtime environment for running the JavaScript server.
- **Express.js** - The web application framework used for building the API.
- **MongoDB** - The database used for storing the document data.


## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contact
For any questions or suggestions, please contact [ben@benjaminjwoodring.com](mailto:ben@benjaminjwoodring.com).
