# Mini Message Board

## Overview

- Part of The Odin Project's Node Section
- This project is a simple message board, allowing users to post and view messages
- Displays a list of messages
- Users can submit new messages using a form
- Stores messages in-memory

## Tech Stack

- Node.js: JavaScript runtime for server-side logic.
- Express.js: Web framework for handling routes and requests.
- EJS: Embedded JavaScript templating for rendering dynamic HTML pages.

## Routes

- `GET /`: Display the message board with a list of messages.
- `GET /new`: Display a form to submit new messages.
- `POST /new`: Handles form submissions for new messages.
- `GET /message/:id`: Displays details of an individual message based on its index.

## File structure

- `controllers/`: Handles different parts of the message board (index, message details, new message).
- `models/`: In-memory message data.
- `routes/`: Manages all routes (index, message details, new message).
- `views/`: EJS templates for rendering pages.
- `app.js`: Main server file.

## Contact

Created by [@nabelk](https://www.linkedin.com/in/nabil-khalid-36791a241/) - feel free to contact me!
