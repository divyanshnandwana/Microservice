Microservices for Order and User Notification
Objective: Create a simple microservice architecture where placing an order triggers a notification to the user.
Requirements:
Order Service
Responsible for creating orders.
Notifies the User Service when an order is placed.
User Service
Responsible for receiving notifications about new orders.
Tables:

1. Orders Table
Column Name	Data Type	Description
order_id	INT (PK)	Unique identifier for each order
user_id	INT	ID of the user who placed the order
order_details	VARCHAR	Details of the order
created_at	TIMESTAMP	Timestamp when the order was created


2. Users Table
Column Name	Data Type	Description
user_id	INT (PK)	Unique identifier for each user
username	VARCHAR	Name of the user
email	VARCHAR	Email address of the user


API Endpoints:

Order Service:
Create Order
Endpoint: POST /order
Request Body:
Response:
201 Created: Order placed and user notified.
500 Internal Server Error: If notification fails.


User Service:
Notify User
Endpoint: POST /notify
Request Body:
Response:
200 OK: User notified successfully.


Additional Notes:
Ensure that both services handle errors gracefully and log relevant information.
Consider security measures for API endpoints (e.g., authentication, rate limiting).
This setup can be extended to include features like order history, user preferences, etc.
{"userId": "123","orderDetails": "2 x Pizza, 1 x Soda"}
{"userId": "123","orderDetails": "2 x Pizza, 1 x Soda"}   




v1/order - NoSQL
Controller -> Handler -> RepositoryHelperNOSQL
v2/order -  
Controller -> Handler -> RepositoryHelperSQL