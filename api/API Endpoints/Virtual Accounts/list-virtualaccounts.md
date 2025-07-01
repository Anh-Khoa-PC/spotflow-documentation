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


## Query Parameters (Note that this is optional)

| <p style={{fontWeight: '400'}}>accountNumber <br></br> <span style={{color: "red"}}>`String`</span></p> | <p style={{fontWeight: '400'}}>**This filters by the account number** created for the sub accounts.</p> |
|:----------|:-----------|


**Sample Response:** 

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```yaml
[
  {
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "accountNumber": "1234567890",
    "accountName": "John Doe",
    "bankName": "Access Bank",
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
