---
title: Fetch Plan
hide_title: true
---

## Fetch Plan

Get details of a single subscription plan.

<span style={{color: "green"}}>`GET`</span>  https://api.spotflow.co/api/v1/plans/:plan-id

## Headers

| <p style={{fontWeight: '400'}}>authorization <br></br> <span style={{color: "red"}}>`String`</span></p> | <p style={{fontWeight: '400'}}><span style={{color: "red"}}>`Bearer SECRET_KEY`</span> <br></br> *Include your secret key in the request header as a Bearer token for authorization. Unauthorized requests will result in a 401 HTTP status code*.</p> |
|:----------|:-----------|

## Path Parameters

**plan-id** <span style={{color: "red"}}>`int32`</span>

This is the unique <span style={{color: "red"}}>`ID`</span> of the subscription plan you want to fetch.

## Sample Response for Local Payments

<span style={{color: "green"}}>`200 OK`</span>

<br></br>
<br></br>

```yaml
{
    "id": "acbabde0-1293-4b8b-9eb9-7e532e34d9bf",
    "title": "My Nutrifit",
    "frequency": "DAILY",
    "internalReference": "ref-prod",
    "status": "active",
    "regions": [
        "Nigeria",
        "Ghana"
    ],
    "subscribers": 0,
    "subscriptions": 0,
    "createdAt": "2025-04-24T13:50:17Z",
    "pricingOptions": [
        {
            "amount": 100,
            "currency": "NGN"
        },
        {
            "amount": 10,
            "currency": "GHS"
        }
    ]
}
```

## Sample Response for Global Payments

<span style={{color: "green"}}>`200 OK`</span>

<br></br>
<br></br>

```yaml
{
    "id": "250657ea-acda-491e-9e98-7889c30095af",
    "title": "GlobalPayAza",
    "frequency": "DAILY",
    "internalReference": "usd-plan",
    "status": "active",
    "regions": [
        "Global"
    ],
    "subscribers": 1,
    "subscriptions": 1,
    "createdAt": "2025-09-12T14:22:48Z",
    "pricingOptions": [
        {
            "amount": 0.5,
            "currency": "USD"
        }
    ]
}
```