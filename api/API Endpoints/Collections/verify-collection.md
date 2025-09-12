---
title: Verify Payment Collection
hide_title: true
---

## Verify Payment Collection

Confirm the status of a payment

<span style={{color: "green"}}>`GET`</span> https://api.spotflow.co/api/v1/payments/verify?reference=

## Headers

| <p style={{fontWeight: '400'}}>authorization <br></br> <span style={{color: "red"}}>`String`</span></p> | <p style={{fontWeight: '400'}}><span style={{color: "red"}}>`Bearer SECRET_KEY`</span> <br></br> *Include your secret key in the request header as a Bearer token for authorization. Unauthorized requests will result in a 401 HTTP status code*.</p> |
|:----------|:-----------|

## Query Parameters

**reference**

This is the unique reference <span style={{color: "red"}}>`ID`</span> returned at payment creation.

## Sample Response

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```yaml
{
    "id": "7c7495f4-4f5d-4c0f-bfc1-7b85e22d8774",
    "reference": "ref-83fdbf78-ba13-47d1-9833-f87613579e14",
    "spotflowReference": "SPF-KPY-a2c688cd10c2459aa6576d8c9024ef80",
    "amount": 100.00,
    "currency": "NGN",
    "totalFees": 0.00,
    "channel": "bank_transfer",
    "status": "successful",
    "customer": {
        "id": "28d102db-6c7b-4b82-b0a1-5f7688ab9988",
        "name": "Leone Mayert",
        "email": "customer@email.com",
        "phoneNumber": "629-543-7126"
    },
    "rate": 1496.52,
    "region": "Nigeria",
    "bankDetails": {
        "accountNumber": "759046",
        "bankName": "wema"
    },
    "createdAt": "2025-02-21T09:50:36Z"
}
```