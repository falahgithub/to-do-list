****To-Do List Web App****

This repository contains a To-Do List web application that demonstrates my understanding and proficiency in using MongoDB, Express, Node.js, and other related technologies. The main file of this application is app.js.




**Features**

Allows users to create custom to-do lists by accessing the web app through the following URL format: {url}/{newlistname}.

Utilizes MongoDB for data storage and retrieval.

Implements Express.js as the web application framework.

Leverages the power of Node.js for server-side logic and functionality.





**Prerequisites**

To run this web application locally or deploy it to a server, make sure you have the following software and dependencies installed:

MongoDB: Ensure that MongoDB is installed and running on your machine or server.

Node.js: Install the latest stable version of Node.js from the official website.

Install the required dependencies by running the following command:
 *npm install*


Before running the application, you need to configure the MongoDB connection settings. Open the app.js file and find the following line:
mongoose.connect('mongodb://localhost:27017/todoListDB');


Replace 'mongodb://localhost:27017/todoListDB' with your MongoDB connection string. If you're using a remote MongoDB server, replace localhost with the server address.

Running the Application

To start the To-Do List web application, run the following command in the project's directory:   *node app.js*





**Usage**


To create a new to-do list, enter the desired list name in the browser's address bar after the application's URL. For example, to create a list named "work", use the following URL: http://localhost:3000/work.
Once the list is created, you can add or remove tasks within the list.

To add a new task, simply type the task description in the input field and press Enter or click the "+" button.

To delete a task, click the checkbox next to the task.

To access a different list, replace the list name in the address bar with the desired list name.


**Contributions**


Contributions to this project are welcome. If you find any issues or have suggestions for improvement, please feel free to submit a pull request or open an issue in the repository.



**Acknowledgments**


Special thanks to the developers and contributors of MongoDB, Express, and Node.js for providing the powerful tools and frameworks used in this project.
