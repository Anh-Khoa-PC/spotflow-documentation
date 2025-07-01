---
title: Get Account Balance By Sub Account
hide_title: true
pagination_next: null
---

## Get Account Balance By Sub Account
Retrieves balances for all direct sub-accounts of the specified main account

<span style={{color: "green"}}>`GET`</span>  https://api.spotflow.co/api/v1/balances/:accountNumber/sub-balances

**Headers**

| <p style={{fontWeight: '400'}}>authorization <br></br> <span style={{color: "red"}}>`String`</span></p> | <p style={{fontWeight: '400'}}><span style={{color: "red"}}>`Bearer SECRET_KEY`</span> <br></br> *Include your secret key in the request header as a Bearer token for authorization. Unauthorized requests will result in a 401 HTTP status code*.</p> |
|:----------|:-----------|


## Query Parameters

| <p style={{fontWeight: '400'}}>accountNumber <br></br> <span style={{color: "red"}}>`Integer`</span></p> | <p style={{fontWeight: '400'}}>This filters by the specified main account number.</p> |
|:----------|:-----------|


**Sample Response:** 

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```yaml
[
  {
    "accountId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "currency": "NGN",
    "balance": 0,
    "availableBalance": 0,
    "accountTag": "main-account",
    "parentAccountId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  }
]
```
