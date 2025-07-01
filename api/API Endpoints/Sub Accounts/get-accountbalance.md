---
title: Get Account Balance
hide_title: true
pagination_next: null
---

## Get Account Balance
Get balance details for a specific account after top-up

<span style={{color: "green"}}>`GET`</span>  https://api.spotflow.co/api/v1/balances/:accountNumber/balance

**Headers**

| <p style={{fontWeight: '400'}}>authorization <br></br> <span style={{color: "red"}}>`String`</span></p> | <p style={{fontWeight: '400'}}><span style={{color: "red"}}>`Bearer SECRET_KEY`</span> <br></br> *Include your secret key in the request header as a Bearer token for authorization. Unauthorized requests will result in a 401 HTTP status code*.</p> |
|:----------|:-----------|


## Query Parameters

| <p style={{fontWeight: '400'}}>accountNumber <br></br> <span style={{color: "red"}}>`Integer`</span></p> | <p style={{fontWeight: '400'}}>This filters by the account number created specifically for an account.</p> |
|:----------|:-----------|


**Sample Response:** 

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```yaml
{
 "accountId": "3d533d2c-32d7-429d-b0ae-ed9d6e72d7a5",
 "currency": "NGN",
 "balance": 25500.00,
 "availableBalance": 25500.00,
 "accountTag": "main-account"
}
```
