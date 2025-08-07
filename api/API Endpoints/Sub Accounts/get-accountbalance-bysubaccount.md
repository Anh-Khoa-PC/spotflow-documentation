---
title: Get Account Balance By Sub Account
hide_title: true
pagination_next: null
---

## Get Account Balance By Sub Account
Retrieves account balance details for all direct sub-accounts of the specified main account in both NGN and GHS.

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
        "accountNumber": "2868767881",
        "currency": "NGN",
        "balance": 0.00,
        "availableBalance": 0.00,
        "accountTag": "sub-account",
        "parentAccountNumber": "0958094143"
    },
    {
        "accountNumber": "3458060339",
        "currency": "NGN",
        "balance": 0.00,
        "availableBalance": 0.00,
        "accountTag": "sub-account",
        "parentAccountNumber": "0958094143"
    },
    {
        "accountNumber": "4312758120",
        "currency": "NGN",
        "balance": 0.00,
        "availableBalance": 0.00,
        "accountTag": "sub-account",
        "parentAccountNumber": "0958094143"
    },
    {
        "accountNumber": "8213714164",
        "currency": "NGN",
        "balance": 0.00,
        "availableBalance": 0.00,
        "accountTag": "sub-account",
        "parentAccountNumber": "0958094143"
    },
    {
        "accountNumber": "9844207661",
        "currency": "NGN",
        "balance": 0.00,
        "availableBalance": 0.00,
        "accountTag": "sub-account",
        "parentAccountNumber": "0958094143"
    },
    {
        "accountNumber": "8052510880",
        "currency": "NGN",
        "balance": 0.00,
        "availableBalance": 0.00,
        "accountTag": "sub-account",
        "parentAccountNumber": "0958094143"
    },
    {
        "accountNumber": "1985812247",
        "currency": "GHS",
        "balance": 0.00,
        "availableBalance": 0.00,
        "accountTag": "sub-account",
        "parentAccountNumber": "0958094143"
    }
]
```
