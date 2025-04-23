---
title: List Payments Collection
hide_title: true
---

## List Payments Collection

This retrieves and lists all payment collections available for a specific merchant 

<span style={{color: "green"}}>`GET`</span> https://api.spotflow.co/api/v1/payments?page=&size=

## Headers

| <p style={{fontWeight: '400'}}>authorization <br></br> <span style={{color: "red"}}>`String`</span></p> | <p style={{fontWeight: '400'}}><span style={{color: "red"}}>`Bearer SECRET_KEY`</span> <br></br> *Include your secret key in the request header as a Bearer token for authorization. Unauthorized requests will result in a 401 HTTP status code*.</p> |
|:----------|:-----------|

## Query Parameters

| <p style={{fontWeight: '400'}}>perPage <br></br> <span style={{color: "red"}}>`Integer`</span></p> | <p style={{fontWeight: '400'}}>**Indicate the number of records per page**. If unspecified, a default of 10 records will be returned.</p> |
|:----------|:-----------|
| page <br></br> <span style={{color: "red"}}>`Integer`</span> | **Indicate the specific page to retrieve**. If not provided, the first page will be returned by default. |
| status <br></br> <span style={{color: "red"}}>`String`</span> | **This can either be** <span style={{color: "red"}}>`successful`</span>, <span style={{color: "red"}}>`pending`</span> or <span style={{color: "red"}}>`failed`</span>. |
| channel <br></br> <span style={{color: "red"}}>`String`</span> | **This can either be** <span style={{color: "red"}}>`card`</span>, <span style={{color: "red"}}>`bank`</span>, <span style={{color: "red"}}>`transfer`</span> or <span style={{color: "red"}}>`USSD`</span> for local currency payments. |
| provider <br></br> <span style={{color: "red"}}>`String`</span> | **These are available payment providers** on Spotflow such as Flutterwave, Paystack, Korapay etc. |
| from <br></br> <span style={{color: "red"}}>`String`</span> | **This is the date of the payment** you want to fetch in this format; <span style={{color: "red"}}>`2024-08-20`</span>. |
| to <br></br> <span style={{color: "red"}}>`String`</span> | **This is the end of the date of the payment** you want to fetch in this format; <span style={{color: "red"}}>`2024-08-27`</span>. |


## Sample Response

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```yaml
{
  "content": [
    {
      "id": "1b780061-1816-43d2-8d2a-c11c9b825bdd",
      "reference": "ref-0ff18314-7925-4de8-9471-c3112676bcb1",
      "spotflowReference": "SPF-FLW-1ba7e132368a4fe68eb6e65515fd2f6c",
      "amount": 10.0,
      "currency": "USD",
      "localAmount": 14980.2,
      "totalFees": 20.0,
      "localCurrency": "NGN",
      "channel": "card",
      "status": "successful",
      "customer": {
        "id": "95e4a0fa-9fb2-4dd4-9c81-cf6f4dad04a3",
        "email": "customer@email.com"
      },
      "providerMessage": "Approved successful",
      "rate": 1498.02,
      "provider": "flutterwave",
      "region": "Nigeria",
      "card": {
        "type": "Mastercard",
        "firstSix": "555556",
        "lastFour": "1842"
      },
      "createdAt": "2025-02-20T09:16:45Z",
      "metadata": {
        "SubscriptionPlan": "MonthlyPass",
        "productName": "Algo.ai"
      }
    },
    {
      "id": "b77a03db-926f-4dc7-8302-20b393be2ffe",
      "reference": "ref-c75298fe-ce02-42b8-b01b-bfb8e32dec62",
      "spotflowReference": "SPF-FLW-4d43835ef1c8417aa8367070f9a0b8ed",
      "amount": 10.0,
      "currency": "USD",
      "localAmount": 15336.9,
      "totalFees": 20.0,
      "localCurrency": "NGN",
      "channel": "card",
      "status": "successful",
      "customer": {
        "id": "95e4a0fa-9fb2-4dd4-9c81-cf6f4dad04a3",
        "email": "customer@email.com"
      },
      "providerMessage": "Approved successful",
      "rate": 1533.69,
      "provider": "flutterwave",
      "region": "Nigeria",
      "card": {
        "type": "Visa",
        "firstSix": "411111",
        "lastFour": "2555"
      },
      "createdAt": "2025-02-19T10:26:26Z",
      "metadata": {
        "SubscriptionPlan": "MonthlyPass",
        "productName": "Algo.ai"
      }
    },
    {
      "id": "3fbc3ac6-11f8-407a-bfdf-e67120331112",
      "reference": "ref-f1f73574-0705-4136-8fe8-88a4ff6287ad",
      "spotflowReference": "SPF-FLW-79258c8b94a34deab4139cbcec322980",
      "amount": 10.0,
      "currency": "USD",
      "localAmount": 15335.5,
      "totalFees": 20.0,
      "localCurrency": "NGN",
      "channel": "card",
      "status": "successful",
      "customer": {
        "id": "95e4a0fa-9fb2-4dd4-9c81-cf6f4dad04a3",
        "email": "customer@email.com"
      },
      "providerMessage": "Approved successful",
      "rate": 1533.55,
      "provider": "flutterwave",
      "region": "Nigeria",
      "card": {
        "type": "Visa",
        "firstSix": "411111",
        "lastFour": "2555"
      },
      "createdAt": "2025-02-19T10:25:02Z",
      "metadata": {
        "SubscriptionPlan": "MonthlyPass",
        "productName": "Algo.ai"
      }
    },
    {
      "id": "7100ddcc-2de0-45d1-ac09-4b2e1c5a0925",
      "reference": "ref-ee7d48c6-81b1-4dd3-b14a-804f133662ee",
      "spotflowReference": "SPF-FLW-af6e6397cb774575ace8852aaa0de218",
      "amount": 10.0,
      "currency": "USD",
      "localAmount": 15359.2,
      "totalFees": 20.0,
      "localCurrency": "NGN",
      "channel": "card",
      "status": "successful",
      "customer": {
        "id": "95e4a0fa-9fb2-4dd4-9c81-cf6f4dad04a3",
        "email": "customer@email.com"
      },
      "providerMessage": "Approved successful",
      "rate": 1535.92,
      "provider": "flutterwave",
      "region": "Nigeria",
      "card": {
        "type": "Visa",
        "firstSix": "411111",
        "lastFour": "2555"
      },
      "createdAt": "2025-02-19T10:06:53Z",
      "metadata": {
        "SubscriptionPlan": "MonthlyPass",
        "productName": "Algo.ai"
      }
    },
    {
      "id": "fb099345-f9bd-4075-a3a6-eea361845c97",
      "reference": "ref-07ecd9c7-3687-43b8-b7ff-9cadfe010476",
      "spotflowReference": "SPF-FLW-4ddeffb11c6f40c7b9293a36292e6f46",
      "amount": 200.0,
      "currency": "NGN",
      "totalFees": 20.0,
      "channel": "card",
      "status": "successful",
      "customer": {
        "id": "d2b3750d-6420-43e5-881c-6cea2c1ef9c4",
        "email": "customer@email.com"
      },
      "providerMessage": "Approved successful",
      "rate": 1535.92,
      "provider": "flutterwave",
      "region": "Nigeria",
      "card": {
        "type": "Visa",
        "firstSix": "411111",
        "lastFour": "2555"
      },
      "createdAt": "2025-02-19T10:05:45Z",
      "metadata": {
        "title": "Creator",
        "productName": "Gab"
      }
    },
    {
      "id": "575bea7c-148e-4835-8575-d40a0a19fd4b",
      "reference": "ref-9e9f2817-82fc-47d0-993c-a9ead96c0149",
      "spotflowReference": "SPF-FLW-d039ef320381405d976a5b097cf5e71e",
      "amount": 10.0,
      "currency": "USD",
      "localAmount": 15367.9,
      "totalFees": 20.0,
      "localCurrency": "NGN",
      "channel": "card",
      "status": "successful",
      "customer": {
        "id": "95e4a0fa-9fb2-4dd4-9c81-cf6f4dad04a3",
        "email": "customer@email.com"
      },
      "providerMessage": "Approved successful",
      "rate": 1536.79,
      "provider": "flutterwave",
      "region": "Nigeria",
      "card": {
        "type": "Visa",
        "firstSix": "411111",
        "lastFour": "2555"
      },
      "createdAt": "2025-02-19T09:04:40Z",
      "metadata": {
        "SubscriptionPlan": "MonthlyPass",
        "productName": "Algo.ai"
      }
    },
    {
      "id": "98045230-adb5-4c0f-9a5f-d6dcf6f5ddbd",
      "reference": "ref-ba1921fc-b1ad-442f-9978-7a7a9ac4903c",
      "spotflowReference": "SPF-FLW-e104ca60fdc94e1e9e0146f8de250467",
      "amount": 100.0,
      "currency": "NGN",
      "totalFees": 20.0,
      "channel": "card",
      "status": "successful",
      "customer": {
        "id": "95e4a0fa-9fb2-4dd4-9c81-cf6f4dad04a3",
        "email": "customer@email.com"
      },
      "providerMessage": "Approved successful",
      "rate": 1536.79,
      "provider": "flutterwave",
      "region": "Nigeria",
      "card": {
        "type": "Visa",
        "firstSix": "411111",
        "lastFour": "2555"
      },
      "createdAt": "2025-02-19T09:03:26Z",
      "metadata": {
        "SubscriptionPlan": "MonthlyPass",
        "productName": "Algo.ai"
      }
    },
    {
      "id": "48b0e095-735d-4763-9b78-62e16adc446b",
      "reference": "ref-74a9b9c4-4d2d-46b8-aa4b-0bc1ca10317b",
      "spotflowReference": "SPF-FLW-63544769cad4438db4e5456b354a9ba8",
      "amount": 300.0,
      "currency": "NGN",
      "totalFees": 20.0,
      "channel": "card",
      "status": "successful",
      "customer": {
        "id": "95e4a0fa-9fb2-4dd4-9c81-cf6f4dad04a3",
        "email": "customer@email.com"
      },
      "providerMessage": "Approved successful",
      "rate": 1539.24,
      "provider": "flutterwave",
      "region": "Nigeria",
      "card": {
        "type": "Visa",
        "firstSix": "411111",
        "lastFour": "2555"
      },
      "createdAt": "2025-02-18T22:02:47Z",
      "metadata": {
        "SubscriptionPlan": "MonthlyPass",
        "productName": "Algo.ai"
      }
    },
    {
      "id": "740fc1e5-c272-4bb4-96cf-f3f54f6fb1a8",
      "reference": "ref-bbdb06dd-157c-45a4-9032-5eab0b750038",
      "spotflowReference": "SPF-FLW-1304e5a420744829ace4e5b18bcaaa5a",
      "amount": 10.0,
      "currency": "USD",
      "localAmount": 15320.1,
      "totalFees": 20.0,
      "localCurrency": "NGN",
      "channel": "card",
      "status": "successful",
      "customer": {
        "id": "95e4a0fa-9fb2-4dd4-9c81-cf6f4dad04a3",
        "email": "customer@email.com"
      },
      "providerMessage": "Approved successful",
      "rate": 1532.01,
      "provider": "flutterwave",
      "region": "Nigeria",
      "card": {
        "type": "Visa",
        "firstSix": "411112",
        "lastFour": "8482"
      },
      "createdAt": "2025-02-18T17:05:41Z",
      "metadata": {
        "SubscriptionPlan": "MonthlyPass",
        "productName": "Algo.ai"
      }
    },
    {
      "id": "e0a0bc86-a2e6-46d8-91dc-1e50261b40d7",
      "reference": "ref-24676c48-31df-4968-8a04-54602c784ef5",
      "spotflowReference": "SPF-FLW-9d27bb78a7be40a8ae0fa86b54dab3c8",
      "amount": 10.0,
      "currency": "USD",
      "localAmount": 15334.9,
      "totalFees": 20.0,
      "localCurrency": "NGN",
      "channel": "card",
      "status": "successful",
      "customer": {
        "id": "95e4a0fa-9fb2-4dd4-9c81-cf6f4dad04a3",
        "email": "customer@email.com"
      },
      "providerMessage": "Approved successful",
      "rate": 1533.49,
      "provider": "flutterwave",
      "region": "Nigeria",
      "card": {
        "type": "Mastercard",
        "firstSix": "555556",
        "lastFour": "1842"
      },
      "createdAt": "2025-02-18T16:48:54Z",
      "metadata": {
        "SubscriptionPlan": "MonthlyPass",
        "productName": "Algo.ai"
      }
    }
  ],
  "pageNumber": 0,
  "pageSize": 10,
  "totalElements": 39,
  "totalPages": 4
}
```