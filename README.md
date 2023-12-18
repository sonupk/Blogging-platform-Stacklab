# Blogging-platform-Stacklab

1.Create a new directory for your project and initialize it with npm.
mkdir Assignment
git clone "repo link"
cd Blogging-platform-Stacklab
npm init -y

2.Install the required dependencies - Express.js, Mongoose for MongoDB, Bcrypt.js,and other necessary packages.
npm install express mongoose bcryptjs jsonwebtoken

3.Project Structure
Blogging platform stacklab
│
├── models
│   └── blogModel.js
│
├── route
│   └── route.js
│
├── controllers
│   └── blogController.js
│


                             <=Postman collection with endpoints=>

Collection Name:Blogging Platform
BaseURL: http://localhost:3000 ( your API is running locally on port 3000)

1.Create a new blog post

Endpoint: {{BaseURL}}/blog
Method: POST
Body (JSON):

{
  "title": "My Title",
  "content": "My Content",
  "author": "My Author"
}

2.Retrieve all blog posts
Endpoint: {{BaseURL}}/blog
Method: GET

3.Retrieve a specific blog post by ID
Endpoint: {{BaseURL}}/blog/:id
Method: GET
Replace :id with the ID of the specific post

4.Update a blog post by ID
Endpoint: {{BaseURL}}/blog/:id
Method: PUT
Body (JSON):
{
  "title": "My Updated Title",
  "content": "My Updated Content",
  "author": "My Updated Author"
}
Replace :id with the ID of the post to update

5.Delete a blog post by ID
Endpoint: {{BaseURL}}/blog/:id
Method: DELETE
Replace :id with the ID of the post to delete
