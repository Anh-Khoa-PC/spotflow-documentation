---
title: Get Account Balance
hide_title: true
pagination_next: null
---

## Get Account Balance
Get account balance details for a specific sub-account before and after top-up.

<span style={{color: "green"}}>`GET`</span>  https://api.spotflow.co/api/v1/balances/accounts/:accountNumber/balance

**Headers**

| <p style={{fontWeight: '400'}}>authorization <br></br> <span style={{color: "red"}}>`String`</span></p> | <p style={{fontWeight: '400'}}><span style={{color: "red"}}>`Bearer SECRET_KEY`</span> <br></br> *Include your secret key in the request header as a Bearer token for authorization. Unauthorized requests will result in a 401 HTTP status code*.</p> |
|:----------|:-----------|


## Query Parameters

| <p style={{fontWeight: '400'}}>accountNumber <br></br> <span style={{color: "red"}}>`Integer`</span></p> | <p style={{fontWeight: '400'}}>This filters by the account number created specifically for a sub account. You can either use the account number for a specific sub account or your main account.</p> |
|:----------|:-----------|


**Sample Response with Sub Account Number:** 

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```yaml
{
    "accountId": "e0189fb1-3210-42e9-96fe-aeb5215c086c",
    "balance": 0.00,
    "availableBalance": 0.00,
    "accountTag": "sub-account",
    "parentAccountId": "43bbf6b7-6bf0-4aec-b145-eef4d3b29a75"
}
```

**Sample Response with Main Account Number:** 

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```yaml
{
    "accountId": "43bbf6b7-6bf0-4aec-b145-eef4d3b29a75",
    "balance": 80700.00,
    "availableBalance": 80700.00,
    "accountTag": "main-account"
}
```
