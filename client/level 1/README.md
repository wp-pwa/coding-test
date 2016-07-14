# Client - Level 1

Using whatever you want *(but we probably recommend jQuery)* you have to create a HTML page with the following specifications:

- On the top of the screen, it has to render two buttons:
  - **Display all posts**
  - **Display gadgets posts**
- The *Display all posts* button should fetch the first 5 posts from [govoid.es](http://www.govoid.es).
- The *Display gadget posts* button should fetch the first 5 posts of the category **gadgets** from [govoid.es](http://www.govoid.es).
- The API endpoint is http://www.govoid.es/wp-json/posts.
- The API documentation is http://v2.wp-api.org/.
- You can use whatever you want to fetch the content, for example [jQuery ajax](http://api.jquery.com/jquery.ajax/), [fetch](https://developer.mozilla.org/en/docs/Web/API/Fetch_API), [wordpress-rest-api](https://www.npmjs.com/package/wordpress-rest-api)...
- Once fetched, you should display the titles in a list. A new fetch (using the other button) should replace those titles.
- A loading indicator is welcomed.

The design is not really important in this test. You don't need to lose time in that.
