# Solution Notes:

The solution took me three hours to complete. As I only have basic knowledge of Typescript I decided to do it in Javascript which I'm more comfortable with.

Regarding the thumbnail click display image, I decided to use a simple anchor tag rather than adding new dependencies that could display the large image in a more advanced way, but I think this should be enough for the required changes below.

What I would do to make this production ready would be to add more error handling, handling of edge cases, and unit tests with Jest.

# -----------------------------

# frontend-coding

Setup the project:

Make sure you install all the dependencies (currently yarn, but you can opt-out) and start the solution in dev mode.

There is a simple homepage with links to the tasks below.

First Task:

- in the "feed" page, show a centered column of posts (use https://jsonplaceholder.typicode.com/ to get the data) which are simple boxes with the title and body properties returned
- for each post, fetch its relative comments and show the counter, or nothing if there are no comments
- when clicking on the comment counter, the comments appear below it

Second Task:

- create a "vault" page, showing a responsive grid of square pictures (use https://jsonplaceholder.typicode.com/ to get the data) which are simple thumbnails
- when clicking on a thumbnail, the fullscreen image opens

Requirements:

- You should use MUI5 components https://mui.com/material-ui/
- You can create your own component if needed, style it with the default `styled` from MUI without installing other libraries

Bonus points:

- SSR considerations
- Type the responses from the API calls
- create meaningful tags in the head of each page
- add the favicon stealing it from fanvue.com ;)
- a11y considerations
