<!-- ---
title: Fetch Sub Accounts
hide_title: true
pagination_next: null
---

## Fetch Sub Accounts
Get details of all the sub accounts under your main accounts.

<span style={{color: "green"}}>`GET`</span>  https://api.spotflow.co/api/v1/accounts/main-accounts

**Headers**

| <p style={{fontWeight: '400'}}>authorization <br></br> <span style={{color: "red"}}>`String`</span></p> | <p style={{fontWeight: '400'}}><span style={{color: "red"}}>`Bearer SECRET_KEY`</span> <br></br> *Include your secret key in the request header as a Bearer token for authorization. Unauthorized requests will result in a 401 HTTP status code*.</p> |
|:----------|:-----------|


## Query Parameters (Note that these are all optional)

| <p style={{fontWeight: '400'}}>page <br></br> <span style={{color: "red"}}>`Integer`</span></p> | <p style={{fontWeight: '400'}}>**Indicate the specific page to retrieve.**. If not provided, the first page will be returned by default.</p> |
|:----------|:-----------|
| size <br></br> <span style={{color: "red"}}>`Integer`</span> | **Indicate the number of records per page.**. If unspecified, a default of 10 records will be returned. |
| currency <br></br> <span style={{color: "red"}}>`String`</span> | Choose the currency you want for your sub account. According, to our currently supported currencies, this is in NGN. |
| mode <br></br> <span style={{color: "red"}}>`String`</span> | **According to your secret key used in the authorization i.e sk_live or sk_test,** this can either be in live or test mode. |


**Sample Response:** 

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```yaml
{
  "content": [
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
  ],
  "pageNumber": 0,
  "pageSize": 0,
  "totalElements": 0,
  "totalPages": 0
}
``` -->
