
# 🏊‍♀️🏋🏾‍♀️Activity API (Tracking App)🤺⛹🏾‍♀️

Welcome to Activity API. This API allows users to track their activities, create activities, change and delete them using unique ID codes.



## ⬆️ ⬆️ ⬆️ Installation ⬆️ ⬆️ ⬆️

Command: "npm install"
Install dependencies:
"express", "helmet" and "uuid"

## 👩🏽‍💻🧑🏼‍💻👩🏻‍💻 Usage 👩🏽‍💻🧑🏼‍💻👩🏻‍💻

Command to start the server: 
"node index.js"


## 🔚🔚🔚 Endpoints 🔚🔚🔚

Use Postman (or other API testing applications) to test the endpoints.

--use a 📚GET📖 request with "localhost:3000/activities" to read all activities logged

--use a 🆕POST🆕 request with "localhost:3000/activities" to create a new activity, typing your activity name and other properties in the body

--use a ✍️PUT📝 request with "localhost:3000/activities/your_id_here" to update an existing activity with your specific ID, typing your updated properties in the body

--use a ❌DELETE❌ request with "localhost:3000/activities/your_id_here" to remove an existing activity with your specific ID