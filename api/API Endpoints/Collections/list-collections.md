---
title: List Payment
---

# List Payments

This retrieves and lists all payment collections available for a specific merchant 

<span style={{color: "green"}}>`GET`</span> http://dev-api.spotflow.one/api/v1/payments?page=&size=

## Headers

| <p style={{fontWeight: '400'}}>authorization <br></br> <span style={{color: "red"}}>`string`</span></p> | <p style={{fontWeight: '400'}}><span style={{color: "red"}}>`Bearer SECRET_KEY`</span> <br></br> *Include your secret key in the request header as a Bearer token for authorization. Unauthorized requests will result in a 401 HTTP status code*.</p> |
|:----------|:-----------|

## Query Parameters

| <p style={{fontWeight: '400'}}>perPage <br></br> <span style={{color: "red"}}>`Integer`</span></p> | <p style={{fontWeight: '400'}}>**Indicate the number of records per page**. If unspecified, a default of 10 records will be returned.</p> |
|:----------|:-----------|
| page <br></br> <span style={{color: "red"}}>`Integer`</span> | **Indicate the specific page to retrieve**. If not provided, the first page will be returned by default. |

## Sample Response

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```json
{
    "content": [
        {
            "id": "0c44319c-4727-4437-bd37-132f54eebe6c",
            "reference": "SPF-LYEC0L2O-2E149AD9-7B49-4363-9686-91833B15F2D9",
            "spotflowReference": "SPF-FLUTTERWAVE-6f62eb26dc4e462d8ba70ba0acc577c8-ba24fe75-39ce-4cde-997d-ea3a64b33a02",
            "amount": 14.99,
            "currency": "USD",
            "channel": "bank_transfer",
            "status": "successful",
            "customer": {
                "id": "3839716c-35b4-40f9-a04f-af8a399fb147",
                "email": "customer@email.com"
            },
            "provider": "flutterwave",
            "providerMessage": "success",
            "rate": {
                "from": "USD",
                "to": "NGN",
                "rate": 107.7428709698959
            },
            "createdAt": "2024-07-09T11:32:36Z"
        },
        {
            "id": "12871b4c-5708-4cdd-8fb0-a86e4f8cd48c",
            "reference": "SPF-LY78146X-494164E5-D259-40F6-947F-D226BF751970",
            "spotflowReference": "SPF-da08008c1f3f4861b8a48936196817d8",
            "amount": 14.99,
            "currency": "USD",
            "channel": "card",
            "status": "successful",
            "customer": {
                "id": "3839716c-35b4-40f9-a04f-af8a399fb147",
                "email": "customer@email.com"
            },
            "provider": "flutterwave",
            "providerMessage": "successful",
            "rate": {
                "from": "USD",
                "to": "NGN",
                "rate": 132.3244393277609
            },
            "createdAt": "2024-07-04T12:08:21Z"
        },
        {
            "id": "236a5f75-5862-4374-b2c0-7580f99884eb",
            "reference": "SPF-LYEC07C2-F46035BA-4CB3-4D88-AE01-2E8D14F591A2",
            "spotflowReference": "SPF-FLUTTERWAVE-cc1f20ef9eaa4d6c9fdc8038fbeec130-ba24fe75-39ce-4cde-997d-ea3a64b33a02",
            "amount": 14.99,
            "currency": "USD",
            "channel": "bank_transfer",
            "status": "successful",
            "customer": {
                "id": "3839716c-35b4-40f9-a04f-af8a399fb147",
                "email": "customer@email.com"
            },
            "provider": "flutterwave",
            "providerMessage": "success",
            "rate": {
                "from": "USD",
                "to": "NGN",
                "rate": 123.92055801581718
            },
            "createdAt": "2024-07-09T11:32:18Z"
        },
        {
            "id": "6ce25b6c-6eee-4f4f-9c64-900d3501b832",
            "reference": "SPF-LY77V2CX-188E4179-81C4-4A21-A583-D3C4B0387732",
            "spotflowReference": "SPF-f8bc3f96fdc546c79fa885d1d57724c1",
            "amount": 14.99,
            "currency": "USD",
            "channel": "card",
            "status": "initiated",
            "customer": {
                "id": "3839716c-35b4-40f9-a04f-af8a399fb147",
                "email": "customer@email.com"
            },
            "provider": "flutterwave",
            "rate": {
                "from": "USD",
                "to": "NGN",
                "rate": 138.48545676289962
            },
            "createdAt": "2024-07-04T12:06:01Z"
        },
        {
            "id": "a2fa9231-c584-49b7-b033-095c362037c1",
            "reference": "SPF-LY784CLH-D3A981F0-9ADE-4D4E-B49A-7545989E72DB",
            "spotflowReference": "SPF-1616d4ec98a941dc98ed724363ec2c81",
            "amount": 14.99,
            "currency": "USD",
            "channel": "bank_transfer",
            "status": "successful",
            "customer": {
                "id": "3839716c-35b4-40f9-a04f-af8a399fb147",
                "email": "customer@email.com"
            },
            "provider": "flutterwave",
            "providerMessage": "success",
            "rate": {
                "from": "USD",
                "to": "NGN",
                "rate": 128.52063951793096
            },
            "createdAt": "2024-07-04T12:09:10Z"
        },
        {
            "id": "bdaaee73-d72f-420a-8f4d-4e490b071e72",
            "reference": "SPF-LYEBYDE0-D5422917-790E-4B40-845C-89FB6D15D991",
            "spotflowReference": "SPF-FLUTTERWAVE-d648d3ba2c25407d834529f632bea40f-ba24fe75-39ce-4cde-997d-ea3a64b33a02",
            "amount": 14.99,
            "currency": "USD",
            "channel": "card",
            "status": "successful",
            "customer": {
                "id": "3839716c-35b4-40f9-a04f-af8a399fb147",
                "email": "customer@email.com"
            },
            "provider": "flutterwave",
            "providerMessage": "successful",
            "rate": {
                "from": "USD",
                "to": "NGN",
                "rate": 133.09509342343202
            },
            "createdAt": "2024-07-09T11:30:58Z"
        },
        {
            "id": "e64ba833-ba53-4cda-9b9d-a3bc3c6600c1",
            "reference": "SPF-LY780VGA-036C64C0-C5DF-4F1E-B028-DE90E5442295",
            "spotflowReference": "SPF-0a0a991fe749401ca1a3c1e3e0e4f07c",
            "amount": 14.99,
            "currency": "USD",
            "channel": "card",
            "status": "initiated",
            "customer": {
                "id": "3839716c-35b4-40f9-a04f-af8a399fb147",
                "email": "customer@email.com"
            },
            "provider": "flutterwave",
            "rate": {
                "from": "USD",
                "to": "NGN",
                "rate": 157.09356615346204
            },
            "createdAt": "2024-07-04T12:06:28Z"
        }
    ],
    "pageNumber": 0,
    "pageSize": 10,
    "totalElements": 7,
    "totalPages": 1
}
```