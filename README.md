**About The App**
Makes requests to the back end hosted on Heroku to get data and manipulate it based on the request made.

**Wire frames**

- link to the planning of the app - https://www.figma.com/file/nBxqy5LubcdW81W69UMk02/samachara?node-id=0%3A1

During the designing of the app, decisions were made to change the look slightly to make the app more accessable and easy to use.

The decision to make comment nav a child of comments to have easy access to editing the comment list was also made.

**Endpoints**

- '/' -> Shows a list of all articles
- '/topics/:topics/articles -> Shows articles that are :topic specific
- '/articles/:article_id' -> Shows the article with that article_id
- '/users' -> Shows a list of users and can select specific users

**More to come...**

- '/users/articles/:username' -> to Show the articles by that user
- '/users/:username' -> to edit user details and delete user
- '/articles/:article_id -> adding the option to edit articles
- '/articles' -> adding options to add articles
