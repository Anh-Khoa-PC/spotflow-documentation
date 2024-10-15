---
title: Verify Payment Collection
---

# Verify Payment Collection

Confirm the status of a payment

<span style={{color: "green"}}>`GET`</span> https://dev-api.spotflow.co/api/v1/payments/verify?merchantId=&reference=

## Headers

| <p style={{fontWeight: '400'}}>authorization <br></br> <span style={{color: "red"}}>`String`</span></p> | <p style={{fontWeight: '400'}}><span style={{color: "red"}}>`Bearer SECRET_KEY`</span> <br></br> *Include your secret key in the request header as a Bearer token for authorization. Unauthorized requests will result in a 401 HTTP status code*.</p> |
|:----------|:-----------|
| Origin <br></br> <span style={{color: "red"}}>`Data`</span> | https://app.spotflow.co |

## Query Parameters

**merchant-id** <span style={{color: "red"}}>`int32`</span>

This is the unique <span style={{color: "red"}}>`ID`</span> of the merchant you want to verify.

**reference**

This is the unique reference <span style={{color: "red"}}>`ID`</span> returned at payment creation.

## Sample Response

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```yaml
{
    "id": "03d06d45-b99b-4ec3-8853-ed2711cfa783",
    "reference": "ref-2a0b9ee8-b48d-4849-8a09-e50827fd0bed",
    "spotflowReference": "SPF-FLW-5b006ceeb0a54bb1acbd1c7da87784f0",
    "amount": 5000.00,
    "currency": "NGN",
    "channel": "card",
    "status": "successful",
    "customer": {
        "id": "3839716c-35b4-40f9-a04f-af8a399fb147",
        "email": "customer@email.com"
    },
    "providerMessage": "successful",
    "rate": 1,
    "provider": "flutterwave",
    "region": "Nigeria",
    "createdAt": "2024-08-20T11:49:41Z"
}
```