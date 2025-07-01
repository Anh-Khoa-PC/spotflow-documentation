---
title: Fetch Sub Accounts By ID
hide_title: true
---

## Fetch Sub Accounts by ID
Get details of your created sub account by its ID

<span style={{color: "green"}}>`GET`</span>  https://api.spotflow.co/api/v1/accounts/:id

**Headers**

| <p style={{fontWeight: '400'}}>authorization <br></br> <span style={{color: "red"}}>`String`</span></p> | <p style={{fontWeight: '400'}}><span style={{color: "red"}}>`Bearer SECRET_KEY`</span> <br></br> *Include your secret key in the request header as a Bearer token for authorization. Unauthorized requests will result in a 401 HTTP status code*.</p> |
|:----------|:-----------|


## Path Parameters

**id** <span style={{color: "red"}}>`int32`</span>

This is the unique <span style={{color: "red"}}>`ID`</span> generated upon <a target="_blank" href={"../api/API Endpoints/Sub Accounts/create-subaccounts.md"} style={{textDecoration: "underline"}}> creation of your sub account.</a>.

**Sample Response:** 

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```yaml
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "balanceId": "wallet-123456",
  "accountName": "Operations Account",
  "accountNumber": "0123456789",
  "parentAccountId": "123456",
  "currency": "NGN",
  "mode": "live",
  "status": "active",
  "createdAt": "2025-05-19T10:15:30Z",
  "updatedAt": "2025-05-19T10:15:30Z"
}
```
