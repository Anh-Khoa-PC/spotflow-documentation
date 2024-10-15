---
title: List Payments Collection
hide_title: true
---

## List Payments Collection

This retrieves and lists all payment collections available for a specific merchant 

<span style={{color: "green"}}>`GET`</span> https://dev-api.spotflow.co/api/v1/payments?page=&size=

## Headers

| <p style={{fontWeight: '400'}}>authorization <br></br> <span style={{color: "red"}}>`String`</span></p> | <p style={{fontWeight: '400'}}><span style={{color: "red"}}>`Bearer SECRET_KEY`</span> <br></br> *Include your secret key in the request header as a Bearer token for authorization. Unauthorized requests will result in a 401 HTTP status code*.</p> |
|:----------|:-----------|
| Origin <br></br> <span style={{color: "red"}}>`Data`</span> | https://app.spotflow.co |

## Query Parameters

| <p style={{fontWeight: '400'}}>perPage <br></br> <span style={{color: "red"}}>`Integer`</span></p> | <p style={{fontWeight: '400'}}>**Indicate the number of records per page**. If unspecified, a default of 10 records will be returned.</p> |
|:----------|:-----------|
| page <br></br> <span style={{color: "red"}}>`Integer`</span> | **Indicate the specific page to retrieve**. If not provided, the first page will be returned by default. |
| status <br></br> <span style={{color: "red"}}>`String`</span> | **This can either be** <span style={{color: "red"}}>`successful`</span>, <span style={{color: "red"}}>`pending`</span> or <span style={{color: "red"}}>`failed`</span>. |
| channel <br></br> <span style={{color: "red"}}>`String`</span> | **This can either be** <span style={{color: "red"}}>`card`</span>, <span style={{color: "red"}}>`bank`</span>, <span style={{color: "red"}}>`transfer`</span> or <span style={{color: "red"}}>`USSD`</span> for local currency payments. |
| provider <br></br> <span style={{color: "red"}}>`String`</span> | **These are available payment providers** on Spotflow such as Flutterwave, Korapay etc. |
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
        },
        {
            "id": "173073e5-2508-4086-8cbc-057be4d7f0bc",
            "reference": "SPF|SUBS|fbbb578a25bf40959121151404458913",
            "spotflowReference": "SPF-FLW-5be6a46d29e5417f94bc9e6732a67b34",
            "amount": 5000.00,
            "currency": "NGN",
            "channel": "card",
            "status": "successful",
            "customer": {
                "id": "3839716c-35b4-40f9-a04f-af8a399fb147",
                "email": "customer@email.com"
            },
            "providerMessage": "Approved",
            "rate": 1,
            "provider": "flutterwave",
            "region": "Nigeria",
            "createdAt": "2024-08-27T14:00:04Z"
        },
        {
            "id": "30e95cdd-7ac4-45f1-8b3b-f9040934cf33",
            "reference": "SPF|SUBS|23e8e55fa85d4dc388b36e7d2746bdf3",
            "spotflowReference": "SPF-FLW-9e19a042141a4b49b34853bc4c51f2b2",
            "amount": 60.00,
            "currency": "USD",
            "localAmount": 92813.40,
            "localCurrency": "NGN",
            "channel": "card",
            "status": "successful",
            "customer": {
                "id": "3839716c-35b4-40f9-a04f-af8a399fb147",
                "email": "customer@email.com"
            },
            "providerMessage": "Approved",
            "rate": 1546.89,
            "provider": "flutterwave",
            "region": "Nigeria",
            "createdAt": "2024-08-27T14:00:24Z"
        },
        {
            "id": "55d15d17-d681-4456-931d-6f8f2d4288ec",
            "reference": "SPF|SUBS|e3c2ff54c5fc42d7ad1efab3a71afc3d",
            "spotflowReference": "SPF-FLW-525146100c3949f08c3a3b057c750a3d",
            "amount": 5000.00,
            "currency": "NGN",
            "channel": "card",
            "status": "successful",
            "customer": {
                "id": "3839716c-35b4-40f9-a04f-af8a399fb147",
                "email": "customer@email.com"
            },
            "providerMessage": "Approved",
            "rate": 1,
            "provider": "flutterwave",
            "region": "Nigeria",
            "createdAt": "2024-08-27T14:00:28Z"
        },
        {
            "id": "590ca8b6-18dc-4bfc-8b28-940c69fc9937",
            "reference": "ref-2a6fa25d-aac3-48f3-994a-8605d7a69ad6",
            "spotflowReference": "SPF-FLW-c4d287bca17b4dbba268cb8c70af2a8c",
            "amount": 5000.00,
            "currency": "NGN",
            "channel": "card",
            "status": "successful",
            "customer": {
                "id": "3839716c-35b4-40f9-a04f-af8a399fb147",
                "email": "customer@email.com"
            },
            "providerMessage": "Approved. Successful",
            "rate": 1,
            "provider": "flutterwave",
            "region": "Nigeria",
            "card": {
                "type": "Visa",
                "firstSix": "418742",
                "lastFour": "4246"
            },
            "createdAt": "2024-08-26T12:14:18Z"
        },
        {
            "id": "5a9108bf-07f8-4b59-9f73-ece8ef3ecabd",
            "reference": "SPF|SUBS|98eb769329954beba5ac2655d6f4fd0b",
            "spotflowReference": "SPF-FLW-d6d219fc1f1046d1b658295dcf97af6a",
            "amount": 60.00,
            "currency": "USD",
            "localAmount": 92813.40,
            "localCurrency": "NGN",
            "channel": "card",
            "status": "successful",
            "customer": {
                "id": "3839716c-35b4-40f9-a04f-af8a399fb147",
                "email": "customer@email.com"
            },
            "providerMessage": "Approved",
            "rate": 1546.89,
            "provider": "flutterwave",
            "region": "Nigeria",
            "createdAt": "2024-08-27T14:00:18Z"
        },
        {
            "id": "61d8099e-2104-4e36-8a32-f635d77c19e8",
            "reference": "SPF-M0AWG4I5-858B-A67C-735-1E3B",
            "spotflowReference": "SPF-FLW-b0ea6a195eb943cdba426d08acbe1bd1",
            "amount": 60.00,
            "currency": "USD",
            "localAmount": 93009.00,
            "localCurrency": "NGN",
            "channel": "card",
            "status": "successful",
            "customer": {
                "id": "3839716c-35b4-40f9-a04f-af8a399fb147",
                "email": "customer@email.com"
            },
            "providerMessage": "Approved. Successful",
            "rate": 1550.15,
            "provider": "flutterwave",
            "region": "Nigeria",
            "card": {
                "type": "Visa",
                "firstSix": "418742",
                "lastFour": "4246"
            },
            "createdAt": "2024-08-26T11:13:00Z"
        },
        {
            "id": "63fdc226-87ec-49e8-b966-de3eab5c56a8",
            "reference": "SPF-M0AWSM5F-344D-5B31-ACA-0F45",
            "spotflowReference": "SPF-FLW-33645f1ad1af4b48a4be87d17ce3485f",
            "amount": 60.00,
            "currency": "USD",
            "localAmount": 92994.60,
            "localCurrency": "NGN",
            "channel": "card",
            "status": "successful",
            "customer": {
                "id": "3839716c-35b4-40f9-a04f-af8a399fb147",
                "email": "customer@email.com"
            },
            "providerMessage": "Approved. Successful",
            "rate": 1549.91,
            "provider": "flutterwave",
            "region": "Nigeria",
            "card": {
                "type": "Visa",
                "firstSix": "455605",
                "lastFour": "2643"
            },
            "createdAt": "2024-08-26T11:22:41Z"
        },
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
        },
        {
            "id": "71cbb692-f113-46da-a5b2-bd88109cd32a",
            "reference": "SPF|SUBS|ec0e71543fbc4d68b7ad31a70e8ed576",
            "spotflowReference": "SPF-FLW-669e827801264a89a43ce366411383a8",
            "amount": 60.00,
            "currency": "USD",
            "localAmount": 92813.40,
            "localCurrency": "NGN",
            "channel": "card",
            "status": "successful",
            "customer": {
                "id": "3839716c-35b4-40f9-a04f-af8a399fb147",
                "email": "customer@email.com"
            },
            "providerMessage": "Approved",
            "rate": 1546.89,
            "provider": "flutterwave",
            "region": "Nigeria",
            "createdAt": "2024-08-27T14:00:19Z"
        }
    ],
    "pageNumber": 0,
    "pageSize": 10,
    "totalElements": 31,
    "totalPages": 4
}
```