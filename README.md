# frontend-coding

Setup the project:

Make sure you install all the dependencies (currently yarn, but you can opt-out) and start the solution in dev mode.

There is a simple homepage with links to the tasks below. You can keep the pages router, but if you prefer to switch to app router it will be positively scored.

First Task:

- in the "feed" page, show a centered column of posts (use https://jsonplaceholder.typicode.com/posts to get the data) which are simple boxes with the title and body properties returned
- for each post, fetch its relative comments (https://jsonplaceholder.typicode.com/posts/{id}/comments) and show the counter, or nothing if there are no comments
- when clicking on the comment counter, the comments appear below it

Second Task:

- create a "vault" page, showing a responsive grid of square pictures (use https://jsonplaceholder.typicode.com/albums/{id}/photos to get the data) which are simple thumbnails
- when clicking on a thumbnail, the fullscreen image opens

Requirements:

- You should use MUI5 components https://mui.com/material-ui/
- You can create your own component if needed, style it with the default `styled` from MUI without installing other libraries

Keep in mind these:

- Semantic markup
- SSR considerations
- a11y considerations
- Type the responses from the API calls
- create meaningful tags in the head of each page
- add the favicon stealing it from fanvue.com ;)
