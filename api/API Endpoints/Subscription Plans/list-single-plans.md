---
title: List Plans
---

# List Plans

This retrieves and lists all subscription plans available on your integration

<span style={{color: "green"}}>`GET`</span> https://dev-api.spotflow.one/api/v1/plans?page=&size=

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
            "id": "ce13b342-96ee-4d37-a9a0-00dc5d5c30b2",
            "title": "Mackins",
            "frequency": "MONTHLY",
            "internalReference": "ref-9090",
            "amount": 5700.00,
            "currency": "NGN",
            "status": "active",
            "createdAt": "2024-08-06T14:44:24Z"
        },
        {
            "id": "74da5e15-ea37-4b75-8b3b-02f51a1e849a",
            "title": "Bugify",
            "frequency": "DAILY",
            "internalReference": "kpyg-7070",
            "amount": 1000.00,
            "currency": "USD",
            "status": "active",
            "createdAt": "2024-08-06T14:44:24Z"
        },
        {
            "id": "ed011d21-9a10-46d7-9347-5673a3f968e2",
            "title": "Spoolie",
            "frequency": "DAILY",
            "internalReference": "ref-323",
            "amount": 10.00,
            "currency": "USD",
            "status": "active",
            "createdAt": "2024-07-10T16:29:47Z"
        },
        {
            "id": "3cbab046-f06a-4815-941d-d8cc7be43d59",
            "title": "Navigately-Mini",
            "frequency": "DAILY",
            "internalReference": "test-5050",
            "amount": 10.00,
            "currency": "USD",
            "status": "active",
            "createdAt": "2024-07-23T12:17:45Z"
        }
    ],
    "pageNumber": 0,
    "pageSize": 10,
    "totalElements": 4,
    "totalPages": 1
}
```