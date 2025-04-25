---
title: List Plans
---

# List Plans

This retrieves and lists all subscription plans available on your integration

<span style={{color: "green"}}>`GET`</span> https://api.spotflow.co/api/v1/plans?page=&size=

## Headers

| <p style={{fontWeight: '400'}}>authorization <br></br> <span style={{color: "red"}}>`String`</span></p> | <p style={{fontWeight: '400'}}><span style={{color: "red"}}>`Bearer SECRET_KEY`</span> <br></br> *Include your secret key in the request header as a Bearer token for authorization. Unauthorized requests will result in a 401 HTTP status code*.</p> |
|:----------|:-----------|

## Query Parameters

| <p style={{fontWeight: '400'}}>perPage <br></br> <span style={{color: "red"}}>`Integer`</span></p> | <p style={{fontWeight: '400'}}>**Indicate the number of records per page**. If unspecified, a default of 10 records will be returned.</p> |
|:----------|:-----------|
| page <br></br> <span style={{color: "red"}}>`Integer`</span> | **Indicate the specific page to retrieve**. If not provided, the first page will be returned by default. |

## Sample Response

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```yaml
{
    "content": [
        {
            "id": "1c009e92-27ed-4298-948b-944c9434b568",
            "title": "Dialysis",
            "frequency": "DAILY",
            "internalReference": "Dialysistestproduct",
            "status": "active",
            "regions": [
                "Nigeria",
                "Ghana"
            ],
            "subscribers": 1,
            "subscriptions": 1,
            "createdAt": "2025-03-14T13:44:27Z",
            "pricingOptions": [
                {
                    "amount": 10,
                    "currency": "GHS"
                },
                {
                    "amount": 1000,
                    "currency": "NGN"
                }
            ]
        },
        {
            "id": "d0f5028f-64d5-4ba3-be54-521359b4e564",
            "title": "Tester MA",
            "frequency": "MONTHLY",
            "internalReference": "Fee",
            "status": "active",
            "regions": [
                "Nigeria",
                "Ghana"
            ],
            "subscribers": 0,
            "subscriptions": 0,
            "createdAt": "2025-03-20T09:50:13Z",
            "pricingOptions": [
                {
                    "amount": 100.5,
                    "currency": "NGN"
                },
                {
                    "amount": 75.3,
                    "currency": "GHS"
                }
            ]
        },
        {
            "id": "7d5f2810-b052-43b3-891c-cdf722d690e1",
            "title": "Test Mack",
            "frequency": "DAILY",
            "internalReference": "Mack",
            "status": "active",
            "regions": [
                "Global"
            ],
            "subscribers": 0,
            "subscriptions": 0,
            "createdAt": "2025-03-20T09:51:25Z",
            "pricingOptions": [
                {
                    "amount": 100.5,
                    "currency": "USD"
                },
                {
                    "amount": 8999.99,
                    "currency": "USD"
                }
            ]
        },
        {
            "id": "b99cf70b-3a86-43cc-b868-140c97c6c9f6",
            "title": "Mealy",
            "frequency": "DAILY",
            "internalReference": "new",
            "status": "active",
            "regions": [
                "Nigeria",
                "Ghana"
            ],
            "subscribers": 4,
            "subscriptions": 25,
            "createdAt": "2025-02-19T08:53:52Z",
            "pricingOptions": [
                {
                    "amount": 100,
                    "currency": "NGN"
                },
                {
                    "amount": 10,
                    "currency": "GHS"
                }
            ]
        },
        {
            "id": "760bd961-f0f4-46c0-8f58-c9a815375eb2",
            "title": "Test 101",
            "frequency": "DAILY",
            "internalReference": "Newww",
            "status": "active",
            "regions": [
                "Global"
            ],
            "subscribers": 0,
            "subscriptions": 0,
            "createdAt": "2025-03-20T09:44:57Z",
            "pricingOptions": [
                {
                    "amount": 100.5,
                    "currency": "USD"
                },
                {
                    "amount": 8999.99,
                    "currency": "USD"
                }
            ]
        },
        {
            "id": "b36239bb-c303-4f38-903c-b2e851a098df",
            "title": "MyNutrimate",
            "frequency": "DAILY",
            "internalReference": "ref-89",
            "status": "active",
            "regions": [
                "Nigeria"
            ],
            "subscribers": 0,
            "subscriptions": 0,
            "createdAt": "2025-02-21T19:13:52Z",
            "pricingOptions": [
                {
                    "amount": 900,
                    "currency": "NGN"
                }
            ]
        }
    ],
    "pageNumber": 0,
    "pageSize": 10,
    "totalElements": 6,
    "totalPages": 1
}
```