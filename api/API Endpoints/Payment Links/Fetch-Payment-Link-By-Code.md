---
title: Fetch Payment Link By Code
hide_title: true
pagination_next: null
---

## Fetch Payment Collection

Get details of a specific payment by its ID

<span style={{color: "green"}}>`GET`</span> https://api.spotflow.co/api/v1/payments/:payment-id

## Headers

| <p style={{fontWeight: '400'}}>authorization <br></br> <span style={{color: "red"}}>`String`</span></p> | <p style={{fontWeight: '400'}}><span style={{color: "red"}}>`Bearer SECRET_KEY`</span> <br></br> *Include your secret key in the request header as a Bearer token for authorization. Unauthorized requests will result in a 401 HTTP status code*.</p> |
|:----------|:-----------|

## Path Parameters

**payment-id** <span style={{color: "red"}}>`int32`</span>

This is the unique <span style={{color: "red"}}>`ID`</span> generated upon payment creation to track and reference the transaction that you want to fetch

## Sample Response

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```yaml
{
    "id": "c6f09813-ba29-4a10-95ea-d826222c57d6",
    "reference": "ref-b6e299d6-2220-40e3-b0bf-8018f09baf61",
    "spotflowReference": "SPF-FLW-d5e80bfa65a443389bb9d2e51c365a85",
    "amount": 10.00,
    "currency": "USD",
    "localAmount": 15030.10,
    "totalFees": 20.00,
    "localCurrency": "NGN",
    "channel": "card",
    "status": "successful",
    "customer": {
        "id": "95e4a0fa-9fb2-4dd4-9c81-cf6f4dad04a3",
        "email": "deborah+m@spotflow.one"
    },
    "providerMessage": "Approved successful",
    "rate": 1503.01,
    "region": "Nigeria",
    "card": {
        "type": "Mastercard",
        "firstSix": "555556",
        "lastFour": "1842"
    },
    "createdAt": "2025-02-21T15:45:48Z",
    "metadata": {
        "SubscriptionPlan": "MonthlyPass",
        "productName": "Algo.ai"
    }
}
```