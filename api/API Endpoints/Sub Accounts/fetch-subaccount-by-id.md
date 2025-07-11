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

This is the unique <span style={{color: "red"}}>`ID`</span> generated upon <a target="_blank" href={"../Sub Accounts/create-subaccounts"} style={{textDecoration: "underline"}}> creation of your sub account. You can also use your main account id found on the <a target="_blank" href={"../Sub Accounts/list-subaccounts.md"} style={{textDecoration: "underline"}}> Get all main sub accounts endpoint </a> </a>.

**Sample Response:** 

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```yaml
{
    "id": "e0189fb1-3210-42e9-96fe-aeb5215c086c",
    "balanceId": "bln_9b38a55f-2665-4a05-8936-e8067c131f98",
    "accountName": "Newly LLC",
    "accountNumber": "8213714164",
    "parentAccountId": "43bbf6b7-6bf0-4aec-b145-eef4d3b29a75",
    "currency": "NGN",
    "mode": "test",
    "status": "active",
    "createdAt": "2025-07-02T14:09:45.536072Z",
    "updatedAt": "2025-07-02T14:09:45.536082Z"
}
```
