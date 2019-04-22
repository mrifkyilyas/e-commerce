## E-Commerce

#### List of basic routes:

| Route          | HTTP | Header(s) | Body                                | Description                                                  |
| -------------- | ---- | --------- | ----------------------------------- | ------------------------------------------------------------ |
| user/register      | POST | none      |name: String<br /> email: String<br />password: String | Create a user (role auto user)<br />success:<br />(201), example: {"_id": String, "name": String, "email": String, "password": String,}<br />errors:<br />(500), error |
| user/login         | POST | none      | email: String<br />password: String | Login and get token based on credentials<br />success:<br />(200), example: {"_id": String, "name": String, "email": String, "password": String,  "token": String}<br />errors:<br />(400), {message: 'Invalid email/password'}<br />(500), error |




#### List of article routes:

| Route                    | HTTP   | Header(s)                                                    | Body                                                         | Description                                                  |
| ------------------------ | :----- | :----------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| /products                | GET    | Authenticated:<br />(token)                                  | none                                                         | Get all product<br />success:<br />(200), example: [{"name": String, "quantity": Number, "price": Number, "pictureUrl": String}, {"name": String, "quantity": Number, "price": Number, "image": String}, etc]<br />errors:<br />(500), error |
| /products/sell                | GET    | Authenticated:<br />(token)  , authorized                                | none                                                         | Get all product selling by user<br />success:<br />(200), example: [{"name": String, "quantity": Number, "price": Number, "pictureUrl": String}, {"name": String, "quantity": Number, "price": Number, "image": String}, etc]<br />errors:<br />(500), error |
| /product/:id/ | GET    :productId| Authenticated:<br />(token)<br />Authorized:<br /> | none                                                         | Get a single product info<br />success:<br />(200), example:  {"name": String, "quantity": Number, "price": Number, "image": String}<br />errors:<br />(404), example: {message: 'Product not found'}<br />(500), error |
| /product                | POST   | Authenticated:<br />(token),<br />Authorized:<br /> | name: String<br />quantity: Number<br />price: Number<br />image: File | Create a product<br />success:<br />(201), example:  {"name": String, "quantity": Number, "price": Number, "image": String}<br />errors:<br />(400), example: {"message": String}<br />(500), error |
| /product/:productId     | PUT    | Authenticated:<br />(token)<br />Authorized:<br /> | name: String<br />quantity: Number<br />price: Number<br />image: File | Update a product with new info<br />success:<br />(200), example:  {"name": String, "quantity": Number, "price": Number, "image": String}<br />errors:<br />(404), example: {message: 'Product not found'}<br />(500), error |
| /product/:productId     | DELETE | Authenticated:<br />(token),<br />Authorized:<br /> | none                                                         | Delete a product<br />success:<br />(200), example: {message: 'Product successfully deleted'}<br />errors:<br />(404), example: {message: 'Product not found'}<br />(500), error |



