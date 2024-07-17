---
title: Errors
sidebar_position: 3
hide_title: true
---

## Errors


### Spotflow API Response Codes

Spotflow leverages standardized HTTP response codes to consistently communicate the outcome of your API requests. Understanding these codes is essential for interpreting the success or failure of your interactions with the Spotflow platform.

<br></br>
<br></br>

<p style={{fontSize: "20px", fontWeight: "bold"}}>Success (2xx)</p>

- **200 OK**: The request was processed successfully. **Don't assume everything went as planned!** Always examine the response data object to determine the specific outcome (e.g., successful or failed charge). Even a 200 response might indicate an error within the data object.

- **201 Created**: A new resource was created successfully through your request. This typically occurs when creating new entities like users or collections within your Spotflow account.

<br></br>
<br></br>


<p style={{fontSize: "20px", fontWeight: "bold"}}>Client Errors(4xx)</p>

- **400 Bad Request**: The request failed due to invalid or missing required parameters. Double-check your request to ensure all required parameters are present and formatted correctly.

- **401 Unauthorized**: Authentication failed. This could be caused by an invalid or missing secret key in the authorization header. Make sure you're using the correct secret key associated with your Spotflow account and that it's included in the authorization header of your request.

- **403 Forbidden**: The API key you used doesn't have the required permissions to perform the specific action. Spotflow utilizes a permission-based system for API keys, where each key type grants access to a defined set of functionalities. Ensure you're using a key with the appropriate permissions for the action you're trying to execute.

- **404 Not Found**: The requested resource does not exist on the Spotflow platform. This might occur if you're trying to access a user ID that doesn't exist or referencing an incorrect endpoint URL.

- **409 Conflict**: The request conflicts with another ongoing request, potentially due to using the same idempotency key. Idempotency keys help prevent accidental duplicate actions. If you receive this error, it's recommended to retry the request with a new idempotency key.

- **429 Too Many Requests**: The API received an excessive number of requests from your application in a short period. This might indicate an issue with your integration logic or excessive retries. We recommend implementing exponential backoff for your requests to avoid overwhelming the API and encountering this error.

<br></br>
<br></br>

<p style={{fontSize: "20px", fontWeight: "bold"}}>Server Error (5xx)</p>

- **500, 502, 503, 504**: These codes indicate errors on Spotflow's servers. While uncommon, please report any instances of these errors you encounter to support@spotflow.one. We will work to resolve the issue on our end as soon as possible.

<br></br>
<br></br>


## Error Handling

Beyond the HTTP status codes, Spotflow's API responses may also include specific error types and messages to provide more details about the encountered issue. This section provides guidance on handling various error conditions that you might encounter while interacting with Spotflow's API. Understanding these errors and their potential solutions is crucial for building robust integrations, as it can help you pinpoint the exact cause of the problem and implement appropriate solutions.

### General Error Handling:
- **Uncertain Outcomes**: For certain error types (e.g., connection errors), the outcome of the API call might be unclear. In such cases, don't assume success or failure.

- **Webhooks**: Spotflow utilizes webhooks to notify you about events and actions. Relying on webhooks can provide valuable information about the eventual outcome of an API call, even if the initial request encounters an error due to network issues or other transient problems.

### Specific Error Types

Here's a breakdown of common Spotflow API error types and recommended solutions:

| Error Type | Description | Solutions |
|:----------|:-----------|:---------|
|Invalid Request Errors, `(Spotflow:: InvalidRequestError)`|This error indicates a problem with the structure or content of your request. It could be due to invalid parameters, incorrect formatting, or attempting an action in an invalid state. The error response will typically include a specific error code and message to help you diagnose the issue.|Consult the Spotflow API documentation for detailed information on specific error codes and how to resolve them.|
|Connection Errors `(Spotflow::APIConnectionError)`|Network issues between your server and Spotflow can sometimes cause connection errors. In such cases, the outcome of the API call is indeterminate. You cannot rely on the response to indicate success or failure.|<ul><li>**Listen for webhook notifications**: Spotflow utilizes webhooks to notify you about events and actions. If a connection error occurs during an operation, you might still receive a webhook notification informing you of the eventual outcome.</li><li>**Idempotency Key**: When creating or updating resources, use idempotency keys. This enables you to safely retry the request using the same key in case of connection failures, preventing unintended duplicate actions caused by retries</li></ul>
|API Errors `(Spotflow::APIError)`|These errors, while uncommon, indicate issues on Spotflow server.|<ul><li>**Consider the outcome** of the request as inconclusive</li><li>**Utilize webhooks** to gain insights into the eventual outcome of the operation.</li><li>**Refer to our guide** on server errors within the Spotflow documentation for strategies on handling unexpected situations.</li></ul>
|Authentication Errors `(Spotflow::AuthenticationError)`|These errors occur when Spotflow cannot authenticate your request using the provided credentials.|<ul><li>**Verify that you're using** the correct API key associated with your Spotflow account.</li><li>**Verify that your request** contains a valid, active API key within the authorization header.</li></ul>
|Permission Errors `(Spotflow::PermissionError)`|These errors indicate that the API key used lacks the necessary permissions for the attempted action.|<ul><li>**Double-check if you're using a restricted API** key that doesn't have access to the requested service.</li><li>**If working within the Spotflow dashboard**, ensure your user role has the required permissions to perform the action.</li></ul>
|Rate Limit Errors `(Spotflow::RateLimitError)`|These errors occur when your application makes excessive API calls withtin a short period|<ul><li>**Retry the API call** after a reasonable delay if a single request triggers this error.</li><li>**Contact Spotflow support in advance** if you anticipate a significant increase in API traffic and require a higher rate limit.</li></ul>
<br></br>
By understanding these error types and implementing the recommended solutions, you can build more resilient and informative integrations with Spotflow API. 