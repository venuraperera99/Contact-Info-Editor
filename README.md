# Contact Information Editor

## Overview

This project consists of a server and client application for managing contact information. The server is built using Flask and connects to a MySQL database, while the client is a React application.

## Setup Instructions

### Server

1. **Create a Virtual Environment**

    ```bash
    python -m venv venv
    ```

2. **Activate the Virtual Environment**

    #### On Windows:
    ```bash
    venv\Scripts\activate
    ```

    #### On macOS/Linux:
    ```bash
    source venv/bin/activate
    ```

3. **Install Dependencies**

    ```bash
    pip install -r requirements.txt
    ```

4. **Create a .env File**

    In the root directory of the server, create a `.env` file with the following content:

    ```env
    DB_HOST=<IP ADDRESS>
    DB_USER=<USER>
    DB_PASSWORD=<PASS>
    DB_NAME=<NAME>
    ```

5. **Run the Server**

    ```bash
    python app.py
    ```

    The server will start and listen on [http://localhost:5000](http://localhost:5000).

### Client

1. **Navigate to the Client Directory**

    ```bash
    cd client
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Run the Client**

    ```bash
    npm start
    ```

    The client will start and be accessible at [http://localhost:3000](http://localhost:3000).

## Notes

- Ensure that your MySQL server is running and accessible from the Flask application.
- The server and client applications should be started in separate terminals.
- Make sure to create a `.env` file in the server's root directory with the appropriate database configuration.

## Contributing

Feel free to submit issues or pull requests to improve the project.
