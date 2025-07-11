---
title: Get Account Balance By Sub Account
hide_title: true
pagination_next: null
---

## Get Account Balance By Sub Account
Retrieves account balance details for all direct sub-accounts of the specified main account.

<span style={{color: "green"}}>`GET`</span>  https://api.spotflow.co/api/v1/balances/accounts/:accountNumber/sub-balances

**Headers**

| <p style={{fontWeight: '400'}}>authorization <br></br> <span style={{color: "red"}}>`String`</span></p> | <p style={{fontWeight: '400'}}><span style={{color: "red"}}>`Bearer SECRET_KEY`</span> <br></br> *Include your secret key in the request header as a Bearer token for authorization. Unauthorized requests will result in a 401 HTTP status code*.</p> |
|:----------|:-----------|


## Query Parameters

| <p style={{fontWeight: '400'}}>accountNumber <br></br> <span style={{color: "red"}}>`Integer`</span></p> | <p style={{fontWeight: '400'}}>This filters by the specified main account number i.e you're using the account number with the tag "main NGN account" (test or live), created internally for your merchant via the <a target="_blank" href={"../Sub Accounts/list-subaccounts.md"} style={{textDecoration: "underline"}}> Get all main sub accounts endpoint </a> .</p> |
|:----------|:-----------|


**Sample Response:** 

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```yaml
[
    {
        "accountId": "e0189fb1-3210-42e9-96fe-aeb5215c086c",
        "balance": 0,
        "availableBalance": 0,
        "accountTag": "sub-account",
        "parentAccountId": "43bbf6b7-6bf0-4aec-b145-eef4d3b29a75"
    },
    {
        "accountId": "2a7cf97c-6317-4da1-9cd0-34c0c33af8e8",
        "balance": 0,
        "availableBalance": 0,
        "accountTag": "sub-account",
        "parentAccountId": "43bbf6b7-6bf0-4aec-b145-eef4d3b29a75"
    }
]
```
