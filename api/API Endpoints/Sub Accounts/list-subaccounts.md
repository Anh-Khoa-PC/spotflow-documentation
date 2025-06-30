---
title: List Sub Accounts
hide_title: true
pagination_next: null
---

## List Sub Accounts
This retrieves and lists all the sub accounts you've created. 

<span style={{color: "green"}}>`GET`</span>  https://api.spotflow.co/api/v1/accounts

**Headers**

| <p style={{fontWeight: '400'}}>authorization <br></br> <span style={{color: "red"}}>`String`</span></p> | <p style={{fontWeight: '400'}}><span style={{color: "red"}}>`Bearer SECRET_KEY`</span> <br></br> *Include your secret key in the request header as a Bearer token for authorization. Unauthorized requests will result in a 401 HTTP status code*.</p> |
|:----------|:-----------|


## Query Parameters (Note that these are all optional)

| <p style={{fontWeight: '400'}}>page <br></br> <span style={{color: "red"}}>`Integer`</span></p> | <p style={{fontWeight: '400'}}>**Indicate the specific page to retrieve.**. If not provided, the first page will be returned by default.</p> |
|:----------|:-----------|
| size <br></br> <span style={{color: "red"}}>`Integer`</span> | **Indicate the number of records per page.**. If unspecified, a default of 10 records will be returned. |
| accountTag <br></br> <span style={{color: "red"}}>`String`</span> | **This can either be** <span style={{color: "red"}}>`sub-account`</span>, or <span style={{color: "red"}}>`main-account`</span>. |
| currency <br></br> <span style={{color: "red"}}>`String`</span> | Choose the currency you want for your sub account. According, to our currently supported currencies, this is in NGN. |
| mode <br></br> <span style={{color: "red"}}>`String`</span> | **According to your secret key used in the authorization i.e sk_live or sk_test,** this can either be in live or test mode. |
| accountNumber <br></br> <span style={{color: "red"}}>`String`</span> | **This filters by the account number** created for the sub accounts. |
| from <br></br> <span style={{color: "red"}}>`String`</span> | **This is the date of the created sub account** you want to filter by in this format; <span style={{color: "red"}}>`2024-08-20`</span>. |
| to <br></br> <span style={{color: "red"}}>`String`</span> | **This is the end of the date of the created sub accounts** you want to filter by in this format; <span style={{color: "red"}}>`2024-08-27`</span>. |


**Sample Response:** 

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```yaml
{
  "content": [
    {
      "accountId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "currency": "NGN",
      "balance": 0,
      "availableBalance": 0,
      "accountTag": "string",
      "parentAccountId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    }
  ],
  "pageNumber": 0,
  "pageSize": 0,
  "totalElements": 0,
  "totalPages": 0
}
```
