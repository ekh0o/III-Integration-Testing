# Hex to RGB REST API

This project implements a simple REST API using Node.js and Express.  
The API converts HEX color values into RGB format.  
The project includes unit tests, integration tests, and manual API testing.

---

## 📁 Project Structure

hex-api/  \
│  \
├── server.js  \
├── package.json  \
├── .gitignore  \
├── README.md  \
│  \
├── src/  \
│   ├── app.js  \
│   ├── routes/  \
│   │   └── hex.js  \
│   └── utils/  \
│       └── hexToRgb.js  \
│  \
└── tests/  \
├── unit/  \
│   └── hexToRgb.test.js  \
└── integration/  \
└── hexRoute.test.js

---

## 🚀 Installation

Install dependencies:
```npm install```

---

## ▶ Running the Server

Start the API:
```npm start```

The server runs at: ```http://localhost:3000```

---

## 🌐 API Endpoint

### Convert HEX to RGB
```GET /api/hex-to-rgb/:hex```

### Example Request

```GET http://localhost:3000/api/hex-to-rgb/FF00FF```

### Example Response

```json
{
  "rgb": { "r": 255, "g": 0, "b": 255 }
}
```

### Error Response

```json
{
  "error": "Invalid hex format"
}
```

## 🧪 Running Tests
Run all tests: ```npm test```

## ✔ Unit Tests
Located in ```tests/unit/```  
Tests the ```hexToRgb``` utility function.

## ✔ Integration Tests
Located in ```tests/integration/```  
Tests the Express route ```/api/hex-to-rgb/:hex```.

## 🧪 Manual Testing (Postman)
You can manually test the API using Postman or any REST client.

Example request: ```ET http://localhost:3000/api/hex-to-rgb/FFAA00```

Expected response: 
```Json
{
  "rgb": { "r": 255, "g": 170, "b": 0 }
}
```

## 📄 Documentation (PDF)
A separate PDF file is included containing:
* Unit test results
* Integration test results
* Postman screenshots
* Explanations of each test type

## ✔ Requirements Completed
* REST API implemented
* Unit tests created
* Integration tests created
* Manual API testing performed
* README.md written
* PDF documentation created
