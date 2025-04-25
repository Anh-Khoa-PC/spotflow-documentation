---
title: Fetch Subscriptions
pagination_prev: null
hide_title: true
---

## Fetch Subscriptions

Get details of a single subscription plan via their subscription ID, email or customerID. 

<span style={{color: "green"}}>`GET`</span> https://api.spotflow.co/api/v1/plans/:plan-id/subscriptions

## Headers

| <p style={{fontWeight: '400'}}>authorization <br></br> <span style={{color: "red"}}>`String`</span></p> | <p style={{fontWeight: '400'}}><span style={{color: "red"}}>`Bearer SECRET_KEY`</span> <br></br> *Include your secret key in the request header as a Bearer token for authorization. Unauthorized requests will result in a 401 HTTP status code*.</p> |
|:----------|:-----------|
## Path Parameters

**subscription-id** <span style={{color: "red"}}>`int32`</span>

This is the unique <span style={{color: "red"}}>`ID`</span> of the subscription or customer you want to fetch. You can also use the customer email to fetch.


## Sample Response

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

## Fetch Subscription by subscription-id
```yaml
{
    "id": "1de082ac-3cad-453c-817c-663541a5a06c",
    "customerId": "95e4a0fa-9fb2-4dd4-9c81-cf6f4dad04a3",
    "planId": "b99cf70b-3a86-43cc-b868-140c97c6c9f6",
    "status": "cancelled",
    "startDate": "2025-03-12T12:28:19Z",
    "nextPaymentDate": "2025-03-13T12:28:19Z",
    "createdAt": "2025-03-12T12:28:19Z",
    "metadata": {
        "SubscriptionPlan": "MonthlyPass",
        "chargeToMerchant": "true",
        "productName": "Algo.ai"
    },
    "currency": "NGN",
    "regionName": "Nigeria",
    "amount": 100
}
```

## Fetch Subscription by customerId
```yaml
{
    "content": [
        {
            "id": "2cf2d1de-9c36-4b62-84b4-c1bccd7294bc",
            "customerId": "aec7a027-e587-49f8-986e-1765fb8b2d10",
            "planId": "b99cf70b-3a86-43cc-b868-140c97c6c9f6",
            "status": "active",
            "startDate": "2025-04-16T10:44:10Z",
            "nextPaymentDate": "2025-04-16T10:45:10Z",
            "createdAt": "2025-04-16T10:44:10Z",
            "metadata": {
                "title": "Creator",
                "productName": "Gab"
            },
            "currency": "NGN",
            "regionName": "Nigeria",
            "amount": 100
        },
        {
            "id": "640c37af-49f0-47ba-a292-d837d63a9e00",
            "customerId": "aec7a027-e587-49f8-986e-1765fb8b2d10",
            "planId": "b99cf70b-3a86-43cc-b868-140c97c6c9f6",
            "status": "cancelled",
            "startDate": "2025-03-26T09:50:47Z",
            "nextPaymentDate": "2025-03-27T09:50:47Z",
            "createdAt": "2025-03-26T09:50:47Z",
            "metadata": {
                "title": "Creator",
                "productName": "Gab"
            },
            "currency": "NGN",
            "regionName": "Nigeria",
            "amount": 100
        },
        {
            "id": "880d2dd6-b4eb-43ea-add9-eefda1befca2",
            "customerId": "aec7a027-e587-49f8-986e-1765fb8b2d10",
            "planId": "b99cf70b-3a86-43cc-b868-140c97c6c9f6",
            "status": "cancelled",
            "startDate": "2025-03-12T15:13:06Z",
            "nextPaymentDate": "2025-03-13T15:13:06Z",
            "createdAt": "2025-03-12T15:13:06Z",
            "metadata": {
                "SubscriptionPlan": "MonthlyPass",
                "chargeToMerchant": "true",
                "productName": "Algo.ai"
            },
            "currency": "NGN",
            "regionName": "Nigeria",
            "amount": 100
        },
        {
            "id": "9c6982c8-8b82-475f-af83-5eafa82f0b39",
            "customerId": "aec7a027-e587-49f8-986e-1765fb8b2d10",
            "planId": "1c009e92-27ed-4298-948b-944c9434b568",
            "status": "active",
            "startDate": "2025-04-22T15:47:35Z",
            "nextPaymentDate": "2025-04-26T15:47:35Z",
            "createdAt": "2025-04-22T15:47:35Z",
            "metadata": {
                "title": "Creator",
                "productName": "Gab"
            },
            "currency": "NGN",
            "regionName": "Nigeria",
            "amount": 1000
        },
        {
            "id": "d16ab9f3-fae2-4dfe-938b-dbe8a1edc1d5",
            "customerId": "aec7a027-e587-49f8-986e-1765fb8b2d10",
            "planId": "b99cf70b-3a86-43cc-b868-140c97c6c9f6",
            "status": "cancelled",
            "startDate": "2025-03-12T14:57:32Z",
            "nextPaymentDate": "2025-03-13T14:57:32Z",
            "createdAt": "2025-03-12T14:57:32Z",
            "metadata": {
                "SubscriptionPlan": "MonthlyPass",
                "chargeToMerchant": "true",
                "productName": "Algo.ai"
            },
            "currency": "NGN",
            "regionName": "Nigeria",
            "amount": 100
        },
        {
            "id": "d6375a78-71ab-4004-883f-4dd5c09987de",
            "customerId": "aec7a027-e587-49f8-986e-1765fb8b2d10",
            "planId": "b99cf70b-3a86-43cc-b868-140c97c6c9f6",
            "status": "cancelled",
            "startDate": "2025-03-12T15:55:40Z",
            "nextPaymentDate": "2025-03-13T15:55:40Z",
            "createdAt": "2025-03-12T15:55:40Z",
            "metadata": {
                "SubscriptionPlan": "MonthlyPass",
                "chargeToMerchant": "true",
                "productName": "Algo.ai"
            },
            "currency": "NGN",
            "regionName": "Nigeria",
            "amount": 100
        },
        {
            "id": "e3bcf07a-bd0a-4133-bdb4-5ed92efc3c46",
            "customerId": "aec7a027-e587-49f8-986e-1765fb8b2d10",
            "planId": "b99cf70b-3a86-43cc-b868-140c97c6c9f6",
            "status": "cancelled",
            "startDate": "2025-03-12T15:55:59Z",
            "nextPaymentDate": "2025-03-13T15:55:59Z",
            "createdAt": "2025-03-12T15:55:59Z",
            "metadata": {
                "SubscriptionPlan": "MonthlyPass",
                "chargeToMerchant": "true",
                "productName": "Algo.ai"
            },
            "currency": "NGN",
            "regionName": "Nigeria",
            "amount": 100
        },
        {
            "id": "fe422229-2eac-433e-b410-79328aa9f29f",
            "customerId": "aec7a027-e587-49f8-986e-1765fb8b2d10",
            "planId": "7ed04a73-ff18-4f2c-9c01-6aaf3d253b5f",
            "status": "active",
            "startDate": "2025-04-22T15:42:46Z",
            "nextPaymentDate": "2025-04-26T15:42:46Z",
            "createdAt": "2025-04-22T15:42:46Z",
            "metadata": {
                "title": "Creator",
                "productName": "Gab"
            },
            "currency": "NGN",
            "regionName": "Nigeria",
            "amount": 100
        }
    ],
    "pageNumber": 0,
    "pageSize": 10,
    "totalElements": 8,
    "totalPages": 1
}
```

## Fetch Subscription by email
Ensure you encode your URI component (i.e your email) especially if you are using an email like customer+@email.com.
```yaml
{
    "content": [
        {
            "id": "00b52f8c-b04e-41af-a417-fea2737b1bd2",
            "customerId": "4e1232bd-59c8-472f-a6d1-2b976430807e",
            "planId": "1c009e92-27ed-4298-948b-944c9434b568",
            "status": "active",
            "startDate": "2025-04-25T09:24:39Z",
            "nextPaymentDate": "2025-04-26T09:24:39Z",
            "createdAt": "2025-04-25T09:24:39Z",
            "metadata": {
                "title": "Creator",
                "productName": "Gab"
            },
            "currency": "NGN",
            "regionName": "Nigeria",
            "amount": 1000
        },
        {
            "id": "ef078818-16b4-4054-8843-9caaa3ecb153",
            "customerId": "4e1232bd-59c8-472f-a6d1-2b976430807e",
            "planId": "1c009e92-27ed-4298-948b-944c9434b568",
            "status": "active",
            "startDate": "2025-04-25T09:23:52Z",
            "nextPaymentDate": "2025-04-26T09:23:52Z",
            "createdAt": "2025-04-25T09:23:52Z",
            "metadata": {
                "title": "Creator",
                "productName": "Gab"
            },
            "currency": "NGN",
            "regionName": "Nigeria",
            "amount": 1000
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