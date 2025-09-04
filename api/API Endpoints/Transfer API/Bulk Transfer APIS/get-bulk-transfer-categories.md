---
title: Get Bulk Transfer By Its Categories
hide_title: true
---

## Get Bulk Transfer By Its Categories

Get details of an uploaded bulk transfer by the categories you created with.

<span style={{color: "green"}}>`GET`</span> https://api.spotflow.co/api/v1/transfers/bulk/categories

**Headers**

| <p style={{fontWeight: '400'}}>authorization <br></br> <span style={{color: "red"}}>`String`</span></p> | <p style={{fontWeight: '400'}}><span style={{color: "red"}}>`Bearer SECRET_KEY`</span> <br></br> _Include your secret key in the request header as a Bearer token for authorization. Unauthorized requests will result in a 401 HTTP status code_.</p> |
| :------------------------------------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |


**Sample Response:**

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```yaml
[
    "creator payout",
    "salaries",
    "payment",
    "disburse"
]
```
