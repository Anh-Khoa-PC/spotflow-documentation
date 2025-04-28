---
title: Update Plan
hide_title: true
---


## Update Plan

Update the details of an existing subscription plan

<span style={{color: "orange"}}>`POST`</span> https://api.spotflow.co/api/v1/plans/:plan-id


## Headers



| <p style={{fontWeight: '400'}}>authorization <br></br> <span style={{color: "red"}}>`String`</span></p> | <p style={{fontWeight: '400'}}><span style={{color: "red"}}>`Bearer SECRET_KEY`</span> <br></br> *Include your secret key in the request header as a Bearer token for authorization. Unauthorized requests will result in a 401 HTTP status code*.</p> |
|:----------|:-----------|
| content-type <br></br> <span style={{color: "red"}}>`String`</span> | <span style={{color: "red"}}>`application/json`</span>|

## Path Parameters

**plan-id** <span style={{color: "red"}}>`int32`</span>

This is the unique <span style={{color: "red"}}>`ID`</span> of the subscription plan you want to update.

## Body Parameters

| <p style={{fontWeight: '400'}}>title <br></br> <span style={{color: "red"}}>`String`</span></p> | <p style={{fontWeight: '400'}}>Name/Title of plan</p> |
|:---------|:---------|
| amount <br></br> <span style={{color: "red"}}>`Integer`</span> | Amount should be in the subunit of our supported currency i.e your local currency or USD. |
| currency <br></br> <span style={{color: "red"}}>`String`</span> | Select the currency for the charges. Can either be in USD or in the local currency of your collection region.|


## Sample Response before Update

<span style={{color: "green"}}>`200 OK`</span>

<br></br>
<br></br>

```yaml
{
    "id": "18a60cb1-02c3-48be-bb7e-53b80e3e183a",
    "title": "FitClock",
    "frequency": "DAILY",
    "internalReference": "fit-clock",
    "status": "active",
    "regions": [
        "Ghana",
        "Nigeria"
    ],
    "subscribers": 1,
    "subscriptions": 1,
    "createdAt": "2025-03-20T15:06:22Z",
    "pricingOptions": [
        {
            "amount": 500,
            "currency": "NGN"
        },
        {
            "amount": 5,
            "currency": "GHS"
        }
    ]
}
```

## Sample Request Body for Update

```yaml
{
    "title": "Fitness Plus",
    "frequency": "weekly",
    "internalReference": "ref-fitnessproduct",
    "pricingOptions": [
        {
            "amount": 1000,
            "currency": "NGN"
        },
        {
            "amount": 5,
            "currency": "GHS"
        }
    ]
}
```

## Sample Response after Update

<span style={{color: "green"}}>`200 OK`</span>

<br></br>
<br></br>

```yaml
{
    "id": "18a60cb1-02c3-48be-bb7e-53b80e3e183a",
    "title": "Fitness Plus",
    "frequency": "WEEKLY",
    "internalReference": "ref-fitnessproduct",
    "status": "active",
    "regions": [
        "Ghana",
        "Nigeria"
    ],
    "subscribers": 1,
    "subscriptions": 1,
    "createdAt": "2025-03-20T15:06:22Z",
    "pricingOptions": [
        {
            "amount": 1000,
            "currency": "NGN"
        },
        {
            "amount": 5,
            "currency": "GHS"
        }
    ]
}
```
