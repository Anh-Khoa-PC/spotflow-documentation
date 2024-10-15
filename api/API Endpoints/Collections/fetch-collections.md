---
title: Fetch Payment Collection
hide_title: true
pagination_next: null
---

## Fetch Payment Collection

Get details of a specific payment by its ID

<span style={{color: "green"}}>`GET`</span> https://dev-api.spotflow.co/api/v1/payments/:payment-id

## Headers

| <p style={{fontWeight: '400'}}>authorization <br></br> <span style={{color: "red"}}>`String`</span></p> | <p style={{fontWeight: '400'}}><span style={{color: "red"}}>`Bearer SECRET_KEY`</span> <br></br> *Include your secret key in the request header as a Bearer token for authorization. Unauthorized requests will result in a 401 HTTP status code*.</p> |
|:----------|:-----------|
| Origin <br></br> <span style={{color: "red"}}>`Data`</span> | https://app.spotflow.co |

## Path Parameters

**payment-id** <span style={{color: "red"}}>`int32`</span>

This is the unique <span style={{color: "red"}}>`ID`</span> generated upon payment creation to track and reference the transaction that you want to fetch

## Sample Response

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```yaml
{
    "id": "97297586-9ebd-4bc4-a36b-c1046229115e",
    "reference": "ref-e0750822-3a9a-4dd2-bddf-7b92bbd640ce",
    "spotflowReference": "SPF-FLW-fec25ef2d9154f56b7b67e438af4279a",
    "amount": 20.00,
    "currency": "USD",
    "localAmount": 30809.20,
    "localCurrency": "NGN",
    "channel": "card",
    "status": "successful",
    "customer": {
        "id": "b5d1111b-59f3-4f31-9e96-4f8f72cc5923",
        "name": "Earline Bradtke",
        "email": "customer@email.com"
    },
    "providerMessage": "successful",
    "rate": 1540.46,
    "provider": "flutterwave",
    "region": "Nigeria",
    "createdAt": "2024-08-06T22:57:54Z"
}
```