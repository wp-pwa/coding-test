# SERVER - Level 1

Using node and express, you have to create a small server with the following specifications:

- It can be started on `http://localhost:4000`.
- It has an endpoint called **sum** which outputs the sum of two numbers, passed by url args (a and b): `http://localhost:4000/sum/:a/:b`. For example, `http://localhost:4000/sum/12/2` should output *14*.
- It has a similar endpoint which outputs the multiplication of those numbers, called **mul**: `http://localhost:4000/mul/:a/:b`.

Extra tasks (welcomed, but not required):

- Export and unit test the functions which do the sum and the multiplication using a node unit tester like [tape](https://www.npmjs.com/package/tape) or [ava](https://www.npmjs.com/package/ava).
