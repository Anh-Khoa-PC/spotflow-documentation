---
title: Fetch Plan
---

# Fetch Plan

Reactivate a previously canceled single subscription plan.

<span style={{color: "green"}}>`GET`</span>  https://dev-api.spotflow.one/api/v1/plans/:plan-id

## Headers

| <p style={{fontWeight: '400'}}>authorization <br></br> <span style={{color: "red"}}>`string`</span></p> | <p style={{fontWeight: '400'}}><span style={{color: "red"}}>`Bearer SECRET_KEY`</span> <br></br> *Include your secret key in the request header as a Bearer token for authorization. Unauthorized requests will result in a 401 HTTP status code*.</p> |
|:----------|:-----------|

## Path Parameters

**plan-id** <span style={{color: "red"}}>`int32`</span>

This is the unique <span style={{color: "red"}}>`ID`</span> of the subscription plan you want to fetch.

## Sample Response

<span style={{color: "green"}}>`200 OK`</span>

<br></br>
<br></br>

```json
{
    "id": "11aa6bc6-52e6-4821-900c-f33f9bf0c060",
    "title": "Dstv Sub",
    "frequency": "MONTHLY",
    "internalReference": "test-1212",
    "amount": 1000.00,
    "currency": "USD",
    "status": "active",
    "createdAt": "2024-06-06T19:43:55Z"
}
```