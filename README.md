# api-assignment
API assignment course 4

I have created a notes API, in which you can create a note and view all notes by using GET & POST as my HTTP methods. I have included a few status codes like 200, 201, 404, 500. I have also created a .env file to store the MongoDB connection string so sensitive information is hidden.

**Features:**
- Create a new note
- Retrieve all notes
- MongoDB for data storage
- Thunder Client to handle HTTP status codes

GET /notes to retrieve all notes
POST /notes to create a note

HTTP status codes used:
200 → ok
201 → created
400 → bad request
404 → not found
500 → internal server error

**What is needed for the API to be run locally:**

1. Node.js installed
2. MongoDB Atlas account or local mongoDB
3. Thunder Client VS Code Extension

**How to set it all up:**

- Install dependencies
   npm install

- Create a .env file in the project root
  
- Add your mongoDB URI in your .env file

(example) MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>
PORT=3000 

- Start the server
  -> node index.js

- Check if the server is running on http://localhost:3000

- Create a note

In Thunder Client, choose method: POST

URL: http://localhost:3000/notes

Write a note with title and content in JSON format

(example) {
  "title": "my first note",
  "content": "this is the content of my note"
}


**- View all notes
**

Change method to GET

URL: http://localhost:3000/notes
