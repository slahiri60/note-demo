Usage Instructions:

1. Download zip file from github
2. Unzip file to selected folder
3. Start MongoDB
4. Start application: nodemon index.js

========================================
API Endpoints (Using Postman):

1. Create Note:
   POST http://localhost:3000/notes
   JSON Body:
   {
   "noteTitle": "<note title>",
   "noteBody": "<note body>"
   }

2. Get All Notes:
   GET http://localhost:3000/notes

3. Get Single Note:
   GET http://localhost:3000/notes/<id>

4. Update Single Note:
   PATCH http://localhost:3000/notes/<id>
   JSON Body:
   {
   "noteTitle": "<updated note title>",
   "noteBody": "<updated note body>"
   }

5. Delete Single Note:
   DELETE http://localhost:3000/notes/<id>

   ========================================
   API Endpoints (Accessible from UI - http://localhost:3000):

   User Form to exercise GET, POST, PATCH, DELETE calls
