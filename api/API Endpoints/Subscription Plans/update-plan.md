---
title: Update Plan
---


# Update Plan

Update the details of an existing subscription plan

<span style={{color: "orange"}}>`POST`</span> https://dev-api.spotflow.one/api/v1/plans/:plan-id


## Headers



| <p style={{fontWeight: '400'}}>authorization <br></br> <span style={{color: "red"}}>`string`</span></p> | <p style={{fontWeight: '400'}}><span style={{color: "red"}}>`Bearer SECRET_KEY`</span> <br></br> *Include your secret key in the request header as a Bearer token for authorization. Unauthorized requests will result in a 401 HTTP status code*.</p> |
|:----------|:-----------|
| content-type <br></br> <span style={{color: "red"}}>`string`</span> | <span style={{color: "red"}}>`application/json`</span>

## Path Parameters

**plan-id** <span style={{color: "red"}}>`int32`</span>

This is the unique <span style={{color: "red"}}>`ID`</span> of the subscription plan you want to update.

## Body Parameters

| <p style={{fontWeight: '400'}}>title <br></br> <span style={{color: "red"}}>`String`</span></p> | <p style={{fontWeight: '400'}}>Name/Title of plan</p> |
|:---------|:---------|
| amount <br></br> <span style={{color: "red"}}>`Integer`</span> | Amount should be in the subunit of our supported currency i.e your local currency or USD. |
| currency <br></br> <span style={{color: "red"}}>`String`</span> | Select the currency for the charges. Can either be in USD or in the local currency of your collection region.|


## Sample Request Body

```json
{
    "title": "Navigately Mini" //formerly Audioly
}
```

## Sample Response

<span style={{color: "green"}}>`200 OK`</span>

<br></br>
<br></br>

```json
{
    "id": "3cbab046-f06a-4815-941d-d8cc7be43d59",
    "title": "Navigately Mini",
    "frequency": "DAILY",
    "internalReference": "test",
    "amount": 70,
    "currency": "USD",
    "status": "active",
    "createdAt": "2024-07-23T12:17:45Z"
}
```