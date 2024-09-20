# RESTful API

1. **Node.js** using **Express.js**, built for REST APIs.

2. **API** stands for **Application Programming Interface**.

3. **REST** has become the standard for building APIs, widely preferred by developers over `RPC (Remote Procedure Call)` and `SOAP (Simple Object Access Protocol)`.

4. **REST** recommends certain architectural constraints:

   - **Uniform Interface**
   - **Statelessness**
   - **Client-Server Architecture**
   - **Cacheability**
   - **Layered System**
   - **Code on Demand**

5. **HTTP Methods**  
   The following HTTP methods are commonly used in REST-based architecture:

6. **POST**:  
   The `POST` verb in an HTTP request indicates that a new resource is created on the server. It corresponds to the **Create** operation in `CRUD (Create, Retrieve, Update, Delete)`.

7. **GET**:  
   The purpose of the `GET` operation is to retrieve an existing resource from the server and return it, typically in **XML** or **JSON** format. It corresponds to the **Read** part in `CRUD`.

8. **PUT**:  
   The `PUT` method is used to update an existing resource. This corresponds to the **Update** part in `CRUD`.

   ```bash
   HTTP PUT http://example.com/users/123
   HTTP PUT http://example.com/users/123/name/Ravi
   ```

9. DELETE:
   The DELETE method is used to remove resources from the server. An HTTP response code of 200 (OK) is sent upon successful deletion.

> Written By Parv gugnani
