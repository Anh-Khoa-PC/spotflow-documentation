---
title: Cancel Subscription
pagination_next: null
---

# Cancel Subscription

Cancel a specific existing subscription payment

<span style={{color: "orange"}}>`POST`</span> https://dev-api.spotflow.co/api/v1/subscriptions/:subscription-id/cancel

## Headers

| <p style={{fontWeight: '400'}}>authorization <br></br> <span style={{color: "red"}}>`String`</span></p> | <p style={{fontWeight: '400'}}><span style={{color: "red"}}>`Bearer SECRET_KEY`</span> <br></br> *Include your secret key in the request header as a Bearer token for authorization. Unauthorized requests will result in a 401 HTTP status code*.</p> |
|:----------|:-----------|
| Origin <br></br> <span style={{color: "red"}}>`Data`</span> | https://app.spotflow.co |

## Path Parameters

**plan-id** <span style={{color: "red"}}>`int32`</span>

This is the unique <span style={{color: "red"}}>`ID`</span> of the plan you want to cancel

## Sample Response

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```yaml
{
    "id": "722d7b6c-1fb6-4b01-bfd5-26bcd571ccb4",
    "customerId": "b5d1111b-59f3-4f31-9e96-4f8f72cc5923",
    "planId": "3cbab046-f06a-4815-941d-d8cc7be43d59",
    "status": "cancelled",
    "startDate": "2024-07-25T16:40:19Z",
    "nextPaymentDate": "2024-07-26T16:40:19Z",
    "createdAt": "2024-07-25T16:40:19Z"
}
```