---
title: Create Bulk Plans
---

# Create Bulk Plans

Create bulk subscription plans with Spotflow

<span style={{color: "orange"}}>`POST`</span> http://dev-api.spotflow.one/api/v1/plans/bulk

## Headers

| <p style={{fontWeight: '400'}}>authorization <br></br> <span style={{color: "red"}}>`string`</span></p> | <p style={{fontWeight: '400'}}><span style={{color: "red"}}>`Bearer SECRET_KEY`</span> <br></br> *Include your secret key in the request header as a Bearer token for authorization. Unauthorized requests will result in a 401 HTTP status code*.</p> |
|:----------|:-----------|

## Body Parameters

Add a form-data with a key of “file” in the request body. In the value tab, upload a CSV or XLS file of your bulk subscriptions.

## Sample Response

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```json
{
    "status": "success",
    "failedRequests": []
}
```