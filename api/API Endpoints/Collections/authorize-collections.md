---
title: Authorize Payments
---

# Authorize Payment

This authorizes a payment by pre-approving the transaction before final validation.

<span style={{color: "orange"}}>`POST`</span> http://dev-api.spotflow.one/api/v1/payments/authorize

## Headers

| <p style={{fontWeight: '400'}}>authorization <br></br> <span style={{color: "red"}}>`string`</span></p> | <p style={{fontWeight: '400'}}><span style={{color: "red"}}>`Bearer SECRET_KEY`</span> <br></br> *Include your secret key in the request header as a Bearer token for authorization. Unauthorized requests will result in a 401 HTTP status code*.</p> |
|:----------|:-----------|
| content-type <br></br> <span style={{color: "red"}}>`string`</span> | <span style={{color: "red"}}>`application/json`</span> |

## Body Parameters

| <p style={{fontWeight: '400'}}>reference <br></br> <span style={{color: "red"}}>`String`</span></p> | <p style={{fontWeight: '400'}}>This is the unique reference ID returned at the initial payment creation. </p> |
|:----------|:-----------|
| authorization (PIN)<br></br> <span style={{color: "red"}}>`String`</span> | A confidential or secret code required to authenticate and verify identity for card transactions. |

## Sample Request Body

```json
{
    "reference": "ref-e0750822-3a9a-4dd2-bddf-7b92bbd640ce",
    "authorization": {
        "pin": "3310"
    }
}
```

## Sample Response

<span style={{color: "green"}}>`200 OK`</span>

<br></br>
<br></br>

```json
{
    "id": "97297586-9ebd-4bc4-a36b-c1046229115e",
    "reference": "ref-e0750822-3a9a-4dd2-bddf-7b92bbd640ce",
    "spotflowReference": "SPF-FLW-fec25ef2d9154f56b7b67e438af4279a",
    "amount": 20.00,
    "currency": "USD",
    "channel": "card",
    "status": "pending_validation",
    "customer": {
        "id": "b5d1111b-59f3-4f31-9e96-4f8f72cc5923",
        "name": "Earline Bradtke",
        "email": "customer@email.com"
    },
    "provider": "flutterwave",
    "providerMessage": "Please enter the OTP sent to your mobile number 080****** and email te**@rave**.com",
    "rate": {
        "from": "NGN",
        "to": "USD",
        "rate": 1540.46
    },
    "authorization": {
        "mode": "otp"
    },
    "createdAt": "2024-08-06T22:57:54Z"
}
```