# SERVER - Level 2

Using node and express, you have to create a small server with the following specifications:

- It can be started on http://localhost:4000.
- It is written in ES6/ES7 syntax using babel (babel-cli).
- It restarts itself on changes using nodemon.
- It has an endpoint called **wait** which waits a number of seconds before returning a result. This number is passed by url args: http://localhost:4000/wait/:seg. For example, http://localhost:4000/wait/5 should wait for 5 seconds, then output *success*.
- The delay function used to wait must be created with a Promise.
- That promise must be consumed with a ES7 async/await function.

#### Extra tasks (welcomed, but not required)

- Deploy your server to production and give us an url (or just an IP). You can use Digital Ocean if you want. Use this link to get $10: [Digital Ocean](https://m.do.co/c/f355476b48bb).

#### Needed info

In order to use promises or async functions in express you need to wrap them with this function

```javascript
const Promise = require('bluebird')
function wrap (genFn) {
    const cr = Promise.coroutine(genFn);
    return function (req, res, next) {
        cr(req, res, next).catch(next);
    }
}
```

Then, simply do:

```javascript
app.get('/your-endpoint', wrap(async function (req, res) {
  const data = await getData();
}));
```
