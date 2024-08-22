---
title: List Subscriptions
pagination_prev: null
hide_title: true
---

## List Subscriptions

Retrieve details of all subscriptions associated with a customer's plan ID.

<span style={{color: "green"}}>`GET`</span> https://dev-api.spotflow.one/api/v1/plans/:plan-id/subscriptions

## Headers

| <p style={{fontWeight: '400'}}>authorization <br></br> <span style={{color: "red"}}>`string`</span></p> | <p style={{fontWeight: '400'}}><span style={{color: "red"}}>`Bearer SECRET_KEY`</span> <br></br> *Include your secret key in the request header as a Bearer token for authorization. Unauthorized requests will result in a 401 HTTP status code*.</p> |
|:----------|:-----------|

## Path Parameters

**plan-id** <span style={{color: "red"}}>`int32`</span>

This is the unique <span style={{color: "red"}}>`ID`</span> of the plan you want to fetch


## Sample Response

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```json
{
    "content": [
        {
            "id": "722d7b6c-1fb6-4b01-bfd5-26bcd571ccb4",
            "customerId": "b5d1111b-59f3-4f31-9e96-4f8f72cc5923",
            "planId": "3cbab046-f06a-4815-941d-d8cc7be43d59",
            "status": "cancelled",
            "startDate": "2024-07-25T16:40:19Z",
            "nextPaymentDate": "2024-07-26T16:40:19Z",
            "createdAt": "2024-07-25T16:40:19Z",
            "customer": {
                "id": "b5d1111b-59f3-4f31-9e96-4f8f72cc5923",
                "name": "Earline Bradtke",
                "email": "customer@email.com"
            }
        },
        {
            "id": "a3df0260-e673-40eb-82da-f65b691cd8e3",
            "customerId": "b5d1111b-59f3-4f31-9e96-4f8f72cc5923",
            "planId": "3cbab046-f06a-4815-941d-d8cc7be43d59",
            "status": "active",
            "startDate": "2024-07-23T12:40:15Z",
            "nextPaymentDate": "2024-07-24T12:40:15Z",
            "createdAt": "2024-07-23T12:40:15Z",
            "customer": {
                "id": "b5d1111b-59f3-4f31-9e96-4f8f72cc5923",
                "name": "Earline Bradtke",
                "email": "customer@email.com"
            }
        }
    ],
    "pageNumber": 0,
    "pageSize": 10,
    "totalElements": 2,
    "totalPages": 1
}
```

## Error Handling

If an error occurs, the API will return an appropriate HTTP status code and error message in the response body. Check out our <a target="_blank" href={"../../errors"} style={{textDecoration: "underline"}}>error documentation</a> for more details. 