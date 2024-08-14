---
title: Verify Payment
---

# Verify Payment

Confirm the status of a payment

<span style={{color: "green"}}>`GET`</span> https://dev-api.spotflow.one/api/v1/payments/verify?merchantId=&reference=

## Headers

| <p style={{fontWeight: '400'}}>authorization <br></br> <span style={{color: "red"}}>`string`</span></p> | <p style={{fontWeight: '400'}}><span style={{color: "red"}}>`Bearer SECRET_KEY`</span> <br></br> *Include your secret key in the request header as a Bearer token for authorization. Unauthorized requests will result in a 401 HTTP status code*.</p> |
|:----------|:-----------|

## Query Parameters

**plan-id** <span style={{color: "red"}}>`int32`</span>

This is the unique <span style={{color: "red"}}>`ID`</span> of the merchant you want to verify.

**reference**

This is the unique reference <span style={{color: "red"}}>`ID`</span> returned at payment creation.

## Sample Response

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>
```json
{
    "id": "1371fadb-e54f-4e44-b20c-1bc69467d091",
    "reference": "ref-5d812671-e09a-4408-be1b-6d6c5276045a",
    "spotflowReference": "SPF-a238ecca87ff4ccf84e39b7711d40438",
    "amount": 500.00,
    "currency": "USD",
    "channel": "bank_transfer",
    "status": "successful",
    "customer": {
        "id": "80cc4f8b-f2bf-4b6e-891f-382935c180a3",
        "email": "Roberto_Walter@yahoo.com"
    },
    "provider": "korapay",
    "providerMessage": "Payment on Spotflow",
    "rate": {
        "from": "USD",
        "to": "NGN",
        "rate": 174.1693201427236
    },
    "createdAt": "2024-07-03T13:39:29Z"
}
```