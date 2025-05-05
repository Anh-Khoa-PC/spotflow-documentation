---
title: Validate Payment Collection
---

# Validate Payment Collection

This validates the payment by verifying payment details and ensuring sufficient funds following authorization.

<span style={{color: "orange"}}>`POST`</span> https://api.spotflow.co/api/v1/payments/validate

## Headers

| <p style={{fontWeight: '400'}}>authorization <br></br> <span style={{color: "red"}}>`String`</span></p> | <p style={{fontWeight: '400'}}><span style={{color: "red"}}>`Bearer SECRET_KEY`</span> <br></br> *Include your secret key in the request header as a Bearer token for authorization. Unauthorized requests will result in a 401 HTTP status code*.</p> |
|:----------|:-----------|
| content-type <br></br> <span style={{color: "red"}}>`String`</span> | <span style={{color: "red"}}>`application/json`</span> |

## Body Parameters

| <p style={{fontWeight: '400'}}>reference <br></br> <span style={{color: "red"}}>`String`</span></p> | <p style={{fontWeight: '400'}}>This is the unique reference ID returned at the initial payment creation. </p> |
|:----------|:-----------|
| validation (OTP) <br></br> <span style={{color: "red"}}>`String`</span> | **One-Time Password (OTP)**: A randomly generated six-digit code sent to the customer's phone number for verification. |

## Sample Request Body

```yaml
{
    "reference": "ref-e0750822-3a9a-4dd2-bddf-7b92bbd640ce",
    "authorization": {
        "otp": "12345"
    }
}
```

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
    "channel": "card",
    "status": "successful",
    "customer": {
        "id": "b5d1111b-59f3-4f31-9e96-4f8f72cc5923",
        "name": "Earline Bradtke",
        "email": "customer@email.com"
    },
    "providerMessage": "successful",
    "rate": {
        "from": "NGN",
        "to": "USD",
        "rate": 1540.46
    },
    "createdAt": "2024-08-06T22:57:54Z"
}
```