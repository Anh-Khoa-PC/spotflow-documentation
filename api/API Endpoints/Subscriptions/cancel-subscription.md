---
title: Cancel Subscription
pagination_next: null
---

# Cancel Subscription

Cancel a specific existing subscription payment

<span style={{color: "orange"}}>`POST`</span> https://api.spotflow.co/api/v1/subscriptions/:subscription-id/cancel

## Headers

| <p style={{fontWeight: '400'}}>authorization <br></br> <span style={{color: "red"}}>`String`</span></p> | <p style={{fontWeight: '400'}}><span style={{color: "red"}}>`Bearer SECRET_KEY`</span> <br></br> *Include your secret key in the request header as a Bearer token for authorization. Unauthorized requests will result in a 401 HTTP status code*.</p> |
|:----------|:-----------|

## Path Parameters

**subscription-id** <span style={{color: "red"}}>`int32`</span>

This is the unique <span style={{color: "red"}}>`ID`</span> of the subscription you want to cancel

## Sample Response

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```yaml
{
    "id": "2cf2d1de-9c36-4b62-84b4-c1bccd7294bc",
    "customerId": "aec7a027-e587-49f8-986e-1765fb8b2d10",
    "planId": "b99cf70b-3a86-43cc-b868-140c97c6c9f6",
    "status": "cancelled",
    "startDate": "2025-04-16T10:44:10Z",
    "nextPaymentDate": "2025-04-16T10:45:10Z",
    "createdAt": "2025-04-16T10:44:10Z",
    "metadata": {
        "title": "Creator",
        "productName": "Gab"
    },
    "currency": "NGN",
    "regionName": "Nigeria",
    "amount": 100
}
```