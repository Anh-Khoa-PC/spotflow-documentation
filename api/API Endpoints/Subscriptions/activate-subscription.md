---
title: Activate Subscriptions
pagination_prev: null
hide_title: true
---

## Activate Subscriptions

Reactivate a previously canceled subscription.

<span style={{color: "green"}}>`GET`</span> https://api.spotflow.co/api/v1/plans/:plan-id/subscriptions

## Headers

| <p style={{fontWeight: '400'}}>authorization <br></br> <span style={{color: "red"}}>`String`</span></p> | <p style={{fontWeight: '400'}}><span style={{color: "red"}}>`Bearer SECRET_KEY`</span> <br></br> *Include your secret key in the request header as a Bearer token for authorization. Unauthorized requests will result in a 401 HTTP status code*.</p> |
|:----------|:-----------|
## Path Parameters

**subscription-id** <span style={{color: "red"}}>`int32`</span>

This is the unique <span style={{color: "red"}}>`ID`</span> of the subscription you want to activate. Y


## Sample Response

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

## Fetch Subscription by subscription-id
```yaml
{
    "id": "4799b60f-81ee-4655-b967-f080952f9bea",
    "customerId": "95e4a0fa-9fb2-4dd4-9c81-cf6f4dad04a3",
    "planId": "961ca3d6-0505-4bc5-8dd3-fc160ac4afc9",
    "status": "active",
    "startDate": "2025-02-19T10:25:02Z",
    "nextPaymentDate": "2025-02-20T10:25:02Z",
    "createdAt": "2025-02-19T10:25:02Z",
    "metadata": {
        "SubscriptionPlan": "MonthlyPass",
        "productName": "Algo.ai"
    },
    "currency": "USD",
    "regionName": "Global",
    "amount": 0
}
```


## Error Handling

If an error occurs, the API will return an appropriate HTTP status code and error message in the response body. Check out our <a target="_blank" href={"../../errors"} style={{textDecoration: "underline"}}>error documentation</a> for more details. 