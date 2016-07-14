# SERVER - Level 1

Using node and express, you have create a small server with the following specifications:

- It can be started on http://localhost:4000.
- It has an endpoint called **sum** which outputs the sum of two numbers, passed by url args (a and b): http://localhost:4000/sum/:a/:b. For example, http://localhost:4000/12/2 should output *14*.
- It has a similar endpoint which outputs the multiplication of those numbers, called **mul**: http://localhost:4000/mul/:a/:b.


These are welcomed, but not required:

- Export and unit test the functions which does the sum and the multiplication using a node unit tester like [tape](https://www.npmjs.com/package/tape) or [ava](https://www.npmjs.com/package/ava).
- **Deploy to production:**  Deploy your server to production and give us an url (or just an IP) to try it. There are many  free nodejs hostings, anyways here in Worona we use Digital Ocean if you want to try it here you have 10€ to start ([referral link](https://m.do.co/c/f355476b48bb))
