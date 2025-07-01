---
title: Create Sub Accounts
pagination_prev: null
hide_title: true
---

## Create Sub Accounts
Sub accounts are created only through the API and serve a unique purpose to act as a pocket of money where funds can sit in. Importantly, sub accounts do not require BVNs upon creation. 

Please note that, by default, merchant configuration for setting regions and service providers is not enabled on new accounts. To create sub accounts successfully after successful sign up and KYB onboarding, contact our support team at support@spotflow.one and request merchant configuration activation for your account.   

<span style={{color: "orange"}}>`POST`</span> https://api.spotflow.co/api/v1/accounts

**Headers**

| <p style={{fontWeight: '400'}}>authorization <br></br> <span style={{color: "red"}}>`String`</span></p> | <p style={{fontWeight: '400'}}><span style={{color: "red"}}>`Bearer SECRET_KEY`</span> <br></br> *Include your secret key in the request header as a Bearer token for authorization. Unauthorized requests will result in a 401 HTTP status code*.</p> |
|:----------|:-----------|
| content-type <br></br> <span style={{color: "red"}}>`String`</span> | <span style={{color: "red"}}>`application/json`</span> |

**Request Body Parameters**

| <p style={{fontWeight: '400'}}>parentAccountId <br></br> <span style={{color: "red"}}>`Integer`</span></p> | <p style={{fontWeight: '400'}}>This is the id of your main account.</p> |
|:---------|:---------|
| currency <br></br> <span style={{color: "red"}}>`String`</span> |Choose the currency you want for your sub account. According, to our currently supported currencies, this is in NGN.|
| accountName <br></br> <span style={{color: "red"}}>`String`</span> | Your desired name for your sub account. |


**Sample Request Body:**

```yaml
{
"parentAccountId": "123e4567-e89b-12d3-a456-426614174000",
"currency": "NGN",
"accountName": "Quantum Technologies"
}

```

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
