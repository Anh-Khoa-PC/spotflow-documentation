---
title: Validate Bulk Transfer
pagination_prev: null
hide_title: true
---

## Validate Bulk Transfer File
Use this endpoint to confirm your bulk transfer CSV file has all the necessary details needed and won't fail when uploaded for the bulk transfer transaction.  

<span style={{color: "orange"}}>`POST`</span> https://api.spotflow.co/api/v1/transfers/bulk/validate

**Headers**

| <p style={{fontWeight: '400'}}>authorization <br></br> <span style={{color: "red"}}>`String`</span></p> | <p style={{fontWeight: '400'}}><span style={{color: "red"}}>`Bearer SECRET_KEY`</span> <br></br> *Include your secret key in the request header as a Bearer token for authorization. Unauthorized requests will result in a 401 HTTP status code*.</p> |
|:----------|:-----------|
| content-type <br></br> <span style={{color: "red"}}>`String`</span> | <span style={{color: "red"}}>`application/json`</span> |


## Request Body Parameters

Add a form-data with a key of “file” in the request body. In the value tab, upload a CSV file of your bulk transfer. Ensure all the required fields such as the amount, currency, bank_code, branch_code, account_number, account_name, and narration are present in your CSV file before uploading it. 

**Sample Response:** 

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```yaml
{
    "failedRequests": [],
    "totalRequests": 2
}
```
