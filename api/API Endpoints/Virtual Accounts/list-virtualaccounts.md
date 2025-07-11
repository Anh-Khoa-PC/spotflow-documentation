---
title: List Virtual Accounts
hide_title: true
pagination_next: null
---

## List Virtual Accounts
This retrieves and lists all the active virtual accounts you created. 

<span style={{color: "green"}}>`GET`</span>  https://api.spotflow.co/api/v1/virtual-accounts

**Headers**

| <p style={{fontWeight: '400'}}>authorization <br></br> <span style={{color: "red"}}>`String`</span></p> | <p style={{fontWeight: '400'}}><span style={{color: "red"}}>`Bearer SECRET_KEY`</span> <br></br> *Include your secret key in the request header as a Bearer token for authorization. Unauthorized requests will result in a 401 HTTP status code*.</p> |
|:----------|:-----------|


## Query Parameters

| <p style={{fontWeight: '400'}}>accountNumber <br></br> <span style={{color: "red"}}>`Integer`</span></p> | <p style={{fontWeight: '400'}}>This filters by the account number created for the sub accounts. The account number you're using is your main-account account number (either test or live) found on <a target="_blank" href={"../Sub Accounts/list-subaccounts.md"} style={{textDecoration: "underline"}}> Get all main sub accounts endpoint </a> and not one of the virtual account numbers you created. </p> |
|:----------|:-----------|


**Sample Response:** 

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```yaml
[
  {
    "id": "9e164443-d10c-4dda-952b-a1a76af37057",
    "accountNumber": "6474247770",
    "accountName": "SPOTFLOW/Jenny Hemsworth",
    "bankName": "Nomba MFB",
    "type": "INDIVIDUAL",
    "mode": "live",
    "createdAt": "2025-05-19T10:15:30Z",
    "updatedAt": "2025-05-19T10:15:30Z",
    "lifecycle": "temporary",
    "amount": 900,
    "reference": "001",
    "expiresAt": "2025-05-19T10:45:30Z"
  }
]
```
