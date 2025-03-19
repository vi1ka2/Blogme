# Blogging Website Backend(Basic) (MERN)

This is a simple blogging website backend built using Node.js, Express, and MongoDB. It allows users to create posts, like posts, and comment on them. 

## Features
- Create and fetch blog posts
- Like blog posts
- Comment on blog posts

## Tech Stack
- Node.js
- Express.js
- MongoDB (Mongoose)

## API Endpoints

### Posts
- **Create a Post**
  - `POST /api/posts`
  - Body: `{ "title": "Post Title", "content": "Post Content" }`
- **Get All Posts**
  - `GET /api/posts`

### Likes
- **Like a Post**
  - `POST /api/posts/:id/like`

### Comments
- **Comment on a Post**
  - `POST /api/posts/:id/comment`
  - Body: `{ "comment": "Nice post!" }`

## License
This project is open-source and available under the MIT License.
