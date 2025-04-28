---
title: Fetch Region For Merchant
hide_title: true
---

## Fetch Region

Get your available regions on Spotflow

<span style={{color: "green"}}>`GET`</span> https://api.spotflow.co/api/v1/merchant/regions

## Headers

| <p style={{fontWeight: '400'}}>authorization <br></br> <span style={{color: "red"}}>`String`</span></p> | <p style={{fontWeight: '400'}}><span style={{color: "red"}}>`Bearer SECRET_KEY`</span> <br></br> *Include your secret key in the request header as a Bearer token for authorization. Unauthorized requests will result in a 401 HTTP status code*.</p> |
|:----------|:-----------|

## Sample Response

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```yaml
[
    {
        "id": 1,
        "name": "Nigeria",
        "currency": "NGN",
        "status": "active",
        "createdAt": "2024-10-17T15:06:41Z",
        "paymentChannels": [
            "bank_transfer",
            "ussd",
            "card"
        ]
    },
    {
        "id": 2,
        "name": "Ghana",
        "currency": "GHS",
        "status": "active",
        "createdAt": "2024-11-01T15:42:57Z",
        "paymentChannels": [
            "mobile_money"
        ]
    }
]
```