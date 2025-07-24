---
title: Resolve Bank Account
hide_title: true
---

## Resolve Bank Account

Get/Validate A Specific Account Number and Bank Code with its details i.e the account name.

<span style={{color: "green"}}>`GET`</span> https://api.spotflow.co/api/v1/transfers/resolve-account?accountNumber=1255730890&bankCode=090645

**Headers**

| <p style={{fontWeight: '400'}}>authorization <br></br> <span style={{color: "red"}}>`String`</span></p> | <p style={{fontWeight: '400'}}><span style={{color: "red"}}>`Bearer SECRET_KEY`</span> <br></br> _Include your secret key in the request header as a Bearer token for authorization. Unauthorized requests will result in a 401 HTTP status code_.</p> |
| :------------------------------------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

## Query Parameters

| <p style={{fontWeight: '400'}}> accountNumber <br></br> <span style={{color: "red"}}>`String`</span></p> | This is the account number you want to get/validate.  |
|:----------|:-----------|
| bankCode <br></br> <span style={{color: "red"}}>`String`</span> | This is the bank code of the account number on our system gotten from the <a target="_blank" href={"../Transfer API/fetch-allbanks.md"} style={{textDecoration: "underline"}}> Fetch All Banks endpoint </a> |


**Sample Response:**

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```yaml
{
    "accountNumber": "1255730890",
    "accountName": "SPOTFLOW/Alice Hemsworth"
}
```
