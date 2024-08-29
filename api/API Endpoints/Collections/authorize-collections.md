---
title: Authorize Payment
---

# Authorize Payment

This authorizes a payment by pre-approving the transaction before final validation. Authorization required could be PIN, OTP, 3DS, AVS, etc. For more details, check out <a target="_blank" href={"/accepting-payment"} style={{textDecoration: "underline"}}>our documentation</a>. 

<span style={{color: "orange"}}>`POST`</span> https://dev-api.spotflow.one/api/v1/payments/authorize

## Headers

| <p style={{fontWeight: '400'}}>authorization <br></br> <span style={{color: "red"}}>`String`</span></p> | <p style={{fontWeight: '400'}}><span style={{color: "red"}}>`Bearer SECRET_KEY`</span> <br></br> *Include your secret key in the request header as a Bearer token for authorization. Unauthorized requests will result in a 401 HTTP status code*.</p> |
|:----------|:-----------|
| content-type <br></br> <span style={{color: "red"}}>`String`</span> | <span style={{color: "red"}}>`application/json`</span> |

## Body Parameters

| <p style={{fontWeight: '400'}}>reference <br></br> <span style={{color: "red"}}>`String`</span></p> | <p style={{fontWeight: '400'}}>This is the unique reference ID returned at the initial payment creation. </p> |
|:----------|:-----------|
| authorization (PIN)<br></br> <span style={{color: "red"}}>`String`</span> | A confidential or secret code required to authenticate and verify identity for card transactions. |

## Sample Request Body

```yaml
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

```yaml
{
    "id": "6cf2cfac-3919-42d8-89ec-ab73e594d225",
    "reference": "ref-592109f8-9734-49e3-8c73-711510fac8b4",
    "spotflowReference": "SPF-FLW-4146f5abadb74f6395e3625503543940",
    "amount": 5000.00,
    "currency": "NGN",
    "channel": "card",
    "status": "pending",
    "customer": {
        "id": "3839716c-35b4-40f9-a04f-af8a399fb147",
        "email": "customer@email.com"
    },
    "rate": 1,
    "provider": "flutterwave",
    "region": "Nigeria",
    "authorization": {
        "mode": "pin"
    },
    "card": {
        "type": "Mastercard",
        "firstSix": "553188",
        "lastFour": "2950"
    }
}
```

Following the step gotten after the initial authorization response, you’ve to further authorize the payment to validate the payment.

**Sample Request Body**

```yaml
{
    "reference": "ref-592109f8-9734-49e3-8c73-711510fac8b4",
    "authorization": {
        "otp": "12345"
    }
}
```

**Sample Response**

<span style={{color: "green"}}>`200 OK`</span>
<br></br>

```yaml
{
    "id": "6cf2cfac-3919-42d8-89ec-ab73e594d225",
    "reference": "ref-592109f8-9734-49e3-8c73-711510fac8b4",
    "spotflowReference": "SPF-FLW-4146f5abadb74f6395e3625503543940",
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
    "card": {
        "type": "Mastercard",
        "firstSix": "553188",
        "lastFour": "2950"
    },
    "createdAt": "2024-08-27T12:43:59Z"
}
```