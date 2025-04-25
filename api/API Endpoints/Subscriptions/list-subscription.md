---
title: List Subscriptions
pagination_prev: null
hide_title: true
---

## List Subscriptions By PlanId

Retrieve details of all subscriptions associated with a customer's plan ID.

<span style={{color: "green"}}>`GET`</span> https://api.spotflow.co/api/v1/plans/:plan-id/subscriptions

## Headers

| <p style={{fontWeight: '400'}}>authorization <br></br> <span style={{color: "red"}}>`String`</span></p> | <p style={{fontWeight: '400'}}><span style={{color: "red"}}>`Bearer SECRET_KEY`</span> <br></br> *Include your secret key in the request header as a Bearer token for authorization. Unauthorized requests will result in a 401 HTTP status code*.</p> |
|:----------|:-----------|
## Path Parameters

**plan-id** <span style={{color: "red"}}>`int32`</span>

This is the unique <span style={{color: "red"}}>`ID`</span> of the plan


## Sample Response

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```yaml
{
    "content": [
        {
            "id": "0a22c2df-6ab6-4aaa-b603-47b1df24008a",
            "customerId": "f23add52-22cd-4c0c-bf62-c54b97f434a9",
            "planId": "b99cf70b-3a86-43cc-b868-140c97c6c9f6",
            "status": "cancelled",
            "startDate": "2025-03-24T16:47:58Z",
            "nextPaymentDate": "2025-03-25T16:47:58Z",
            "createdAt": "2025-03-24T16:47:58Z",
            "customer": {
                "id": "f23add52-22cd-4c0c-bf62-c54b97f434a9",
                "name": "Lera Zieme",
                "email": "deborah+a@spotflow.one"
            },
            "metadata": {
                "SubscriptionPlan": "MonthlyPass",
                "productName": "Algo.ai"
            },
            "currency": "NGN",
            "regionName": "Nigeria",
            "amount": 100
        },
        {
            "id": "1755a25a-edfa-49ce-bc59-32f61c73f694",
            "customerId": "8fafb047-3528-4054-bc84-b9417708ec7d",
            "planId": "b99cf70b-3a86-43cc-b868-140c97c6c9f6",
            "status": "cancelled",
            "startDate": "2025-03-12T15:25:26Z",
            "nextPaymentDate": "2025-03-13T15:25:26Z",
            "createdAt": "2025-03-12T15:25:26Z",
            "customer": {
                "id": "8fafb047-3528-4054-bc84-b9417708ec7d",
                "email": "deborah+testbus@spotflow.one"
            },
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
            "id": "1de082ac-3cad-453c-817c-663541a5a06c",
            "customerId": "95e4a0fa-9fb2-4dd4-9c81-cf6f4dad04a3",
            "planId": "b99cf70b-3a86-43cc-b868-140c97c6c9f6",
            "status": "cancelled",
            "startDate": "2025-03-12T12:28:19Z",
            "nextPaymentDate": "2025-03-13T12:28:19Z",
            "createdAt": "2025-03-12T12:28:19Z",
            "customer": {
                "id": "95e4a0fa-9fb2-4dd4-9c81-cf6f4dad04a3",
                "email": "deborah+m@spotflow.one"
            },
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
            "id": "1fd68e22-10f0-47b1-8481-38005f2b00a7",
            "customerId": "f23add52-22cd-4c0c-bf62-c54b97f434a9",
            "planId": "b99cf70b-3a86-43cc-b868-140c97c6c9f6",
            "status": "active",
            "startDate": "2025-03-24T16:55:55Z",
            "nextPaymentDate": "2025-03-25T16:55:55Z",
            "createdAt": "2025-03-24T16:55:55Z",
            "customer": {
                "id": "f23add52-22cd-4c0c-bf62-c54b97f434a9",
                "name": "Lera Zieme",
                "email": "deborah+a@spotflow.one"
            },
            "metadata": {
                "SubscriptionPlan": "MonthlyPass",
                "productName": "Algo.ai"
            },
            "currency": "NGN",
            "regionName": "Nigeria",
            "amount": 100
        },
        {
            "id": "2cf2d1de-9c36-4b62-84b4-c1bccd7294bc",
            "customerId": "aec7a027-e587-49f8-986e-1765fb8b2d10",
            "planId": "b99cf70b-3a86-43cc-b868-140c97c6c9f6",
            "status": "active",
            "startDate": "2025-04-16T10:44:10Z",
            "nextPaymentDate": "2025-04-16T10:45:10Z",
            "createdAt": "2025-04-16T10:44:10Z",
            "customer": {
                "id": "aec7a027-e587-49f8-986e-1765fb8b2d10",
                "name": "Kola",
                "email": "deborah+newmerch@spotflow.one",
                "phoneNumber": "0987654321"
            },
            "metadata": {
                "title": "Creator",
                "productName": "Gab"
            },
            "currency": "NGN",
            "regionName": "Nigeria",
            "amount": 100
        },
        {
            "id": "3a80a860-c2f1-44af-ab0b-406b4c4f6462",
            "customerId": "f23add52-22cd-4c0c-bf62-c54b97f434a9",
            "planId": "b99cf70b-3a86-43cc-b868-140c97c6c9f6",
            "status": "cancelled",
            "startDate": "2025-03-14T09:53:08Z",
            "nextPaymentDate": "2025-03-15T09:53:08Z",
            "createdAt": "2025-03-14T09:53:08Z",
            "customer": {
                "id": "f23add52-22cd-4c0c-bf62-c54b97f434a9",
                "name": "Lera Zieme",
                "email": "deborah+a@spotflow.one"
            },
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
            "id": "42edc196-9656-4851-a918-95766a0b5f1c",
            "customerId": "f23add52-22cd-4c0c-bf62-c54b97f434a9",
            "planId": "b99cf70b-3a86-43cc-b868-140c97c6c9f6",
            "status": "active",
            "startDate": "2025-03-20T10:43:04Z",
            "nextPaymentDate": "2025-03-22T10:43:04Z",
            "createdAt": "2025-03-20T10:43:04Z",
            "customer": {
                "id": "f23add52-22cd-4c0c-bf62-c54b97f434a9",
                "name": "Lera Zieme",
                "email": "deborah+a@spotflow.one"
            },
            "metadata": {
                "SubscriptionPlan": "MonthlyPass",
                "productName": "Algo.ai"
            },
            "currency": "NGN",
            "regionName": "Nigeria",
            "amount": 100
        },
        {
            "id": "449f977e-934e-4c06-9d38-825369aaf791",
            "customerId": "f23add52-22cd-4c0c-bf62-c54b97f434a9",
            "planId": "b99cf70b-3a86-43cc-b868-140c97c6c9f6",
            "status": "cancelled",
            "startDate": "2025-03-13T17:11:34Z",
            "nextPaymentDate": "2025-03-14T17:11:34Z",
            "createdAt": "2025-03-13T17:11:34Z",
            "customer": {
                "id": "f23add52-22cd-4c0c-bf62-c54b97f434a9",
                "name": "Lera Zieme",
                "email": "deborah+a@spotflow.one"
            },
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
            "id": "5250cf7a-0cb7-4bdf-97a2-b9dae0cf7aef",
            "customerId": "f23add52-22cd-4c0c-bf62-c54b97f434a9",
            "planId": "b99cf70b-3a86-43cc-b868-140c97c6c9f6",
            "status": "active",
            "startDate": "2025-03-20T12:29:26Z",
            "nextPaymentDate": "2025-03-21T12:29:26Z",
            "createdAt": "2025-03-20T12:29:26Z",
            "customer": {
                "id": "f23add52-22cd-4c0c-bf62-c54b97f434a9",
                "name": "Lera Zieme",
                "email": "deborah+a@spotflow.one"
            },
            "metadata": {
                "SubscriptionPlan": "MonthlyPass",
                "productName": "Algo.ai"
            },
            "currency": "NGN",
            "regionName": "Nigeria",
            "amount": 100
        },
        {
            "id": "607f83ba-8c6c-4072-a12e-b42b14aa600f",
            "customerId": "f23add52-22cd-4c0c-bf62-c54b97f434a9",
            "planId": "b99cf70b-3a86-43cc-b868-140c97c6c9f6",
            "status": "cancelled",
            "startDate": "2025-03-18T09:18:54Z",
            "nextPaymentDate": "2025-03-19T09:18:54Z",
            "createdAt": "2025-03-18T09:18:54Z",
            "customer": {
                "id": "f23add52-22cd-4c0c-bf62-c54b97f434a9",
                "name": "Lera Zieme",
                "email": "deborah+a@spotflow.one"
            },
            "metadata": {
                "SubscriptionPlan": "MonthlyPass",
                "chargeToMerchant": "true",
                "productName": "Algo.ai"
            },
            "currency": "NGN",
            "regionName": "Nigeria",
            "amount": 100
        }
    ],
    "pageNumber": 0,
    "pageSize": 10,
    "totalElements": 25,
    "totalPages": 3
}
```

## Error Handling

If an error occurs, the API will return an appropriate HTTP status code and error message in the response body. Check out our <a target="_blank" href={"../../errors"} style={{textDecoration: "underline"}}>error documentation</a> for more details. 