---
title: Authorize Payment Collection
hide_title: true
---

## Authorize Payment Collection

This authorizes a payment by pre-approving the transaction before final validation. Authorization required could be PIN, OTP, 3DS, AVS, etc. For more details, check out <a target="_blank" href={"/accepting-payment"} style={{textDecoration: "underline"}}>our documentation</a>. 

<span style={{color: "orange"}}>`POST`</span> https://api.spotflow.co/api/v1/payments/authorize

## Headers

| <p style={{fontWeight: '400'}}>authorization <br></br> <span style={{color: "red"}}>`String`</span></p> | <p style={{fontWeight: '400'}}><span style={{color: "red"}}>`Bearer SECRET_KEY`</span> <br></br> *Include your secret key in the request header as a Bearer token for authorization. Unauthorized requests will result in a 401 HTTP status code*.</p> |
|:----------|:-----------|
| content-type <br></br> <span style={{color: "red"}}>`String`</span> | <span style={{color: "red"}}>`application/json`</span> |

## Body Parameters

| <p style={{fontWeight: '400'}}>reference <br></br> <span style={{color: "red"}}>`String`</span></p> | <p style={{fontWeight: '400'}}>This is the unique reference ID returned at the initial payment creation. </p> |
|:----------|:-----------|
| authorization (PIN)<br></br> <span style={{color: "red"}}>`String`</span> | A confidential or secret code required to authenticate and verify identity for card transactions. |

## Sample Request Body For PIN + OTP Card Payment

```yaml
{
    "reference": "ref-b6e299d6-2220-40e3-b0bf-8018f09baf61",
    "authorization": {
        "pin": "4321"
    }
}
```

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
    "status": "pending",
    "customer": {
        "id": "95e4a0fa-9fb2-4dd4-9c81-cf6f4dad04a3",
        "email": "customer@email.com"
    },
    "providerMessage": "Please enter your OTP sent to your phone",
    "rate": 1503.01,
    "region": "Nigeria",
    "authorization": {
        "mode": "otp"
    },
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

Following the step gotten after the initial authorization response, you’ve to further authorize the payment to validate the payment with the One Time-Password (OTP).

**Sample Request Body For OTP Card Payment**

```yaml
{
    "reference": "ref-b6e299d6-2220-40e3-b0bf-8018f09baf61",
    "authorization": {
        "otp": "654321"
    }
}
```

**Sample Response**

<span style={{color: "green"}}>`200 OK`</span>
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
        "email": "customer@email.com"
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