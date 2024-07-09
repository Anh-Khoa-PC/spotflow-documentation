---
id: intro
title: Introduction
sidebar_position: 1
---

# API Reference

Spotflow's APIs provide seamless payment aggregation solutions for your application. Learn how to easily integrate our APIs to streamline your in-app payments.

Spotflow's API is designed to be `RESTful`, utilizing familiar resource structures for most interactions. However, there might be a few exceptions from the strict REST principles for specific functionalities. These exceptions will be clearly documented within the API reference. This means you can expect:

- **Predictable Resource-Oriented URLs**: URLs are designed to be clear and intuitivr, reflecting the resources you're interacting with (e.g /collections, /users).
- **Form-Encoded Request Bodies**: Data sent to the API uses a simple, well-understood format called form-encoded data.
- **JSON-Encoded Responses**: Our API returns data in JSON response format, providing structured and easy-to-parse data/
- **Standard HTTP Methods and Response Codes**: Our API utilizes standard HTTP verbs for different actions like GET for retrieving data, POST for creating new resources, PUT for updating existing ones and DEL for trashing existing ones. It also returns standard HTTP response codes to indicate success or failure (e.g., 200 for success, 400 for bad request).
- **Content-Type**: When sending request to the API, you should ensure your request includes a Content-Type header set to application/JSON. This informs the API about the format of the data you are sending.



## API Keys and Authentication:

To ensure secure communication with Spotflow's API, you'll need to authenticate your requests using an API key. ALL endpoints require authentication with your API Keys. Your API key acts as a unique identifier for your application and allows us to differentiate between test and live mode usage. Specific instructions for including your API key within your requests will be provided in the documentation for each API endpoint.