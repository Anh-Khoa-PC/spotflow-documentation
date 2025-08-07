---
title: Get Main Account Balance
hide_title: true
pagination_next: null
---

## Get Main Account Balance
Retrieves paginated balances for main accounts with optional currency, mode, and date filters.

<span style={{color: "green"}}>`GET`</span>  https://api.spotflow.co/api/v1/balances

**Headers**

| <p style={{fontWeight: '400'}}>authorization <br></br> <span style={{color: "red"}}>`String`</span></p> | <p style={{fontWeight: '400'}}><span style={{color: "red"}}>`Bearer SECRET_KEY`</span> <br></br> *Include your secret key in the request header as a Bearer token for authorization. Unauthorized requests will result in a 401 HTTP status code*.</p> |
|:----------|:-----------|


## Query Parameters (Note that these are all optional)

| <p style={{fontWeight: '400'}}>page <br></br> <span style={{color: "red"}}>`Integer`</span></p> | <p style={{fontWeight: '400'}}>**Indicate the specific page to retrieve.**. If not provided, the first page will be returned by default.</p> |
|:----------|:-----------|
| size <br></br> <span style={{color: "red"}}>`Integer`</span> | **Indicate the number of records per page.**. If unspecified, a default of 10 records will be returned. |
| currency <br></br> <span style={{color: "red"}}>`String`</span> | Choose the currency you want for your sub account. According, to our currently supported currencies, this is in NGN or GHS. |
| mode <br></br> <span style={{color: "red"}}>`String`</span> | **According to your secret key used in the authorization i.e sk_live or sk_test,** this can either be in live or test mode. |
| from <br></br> <span style={{color: "red"}}>`String`</span> | **This is the date of the created sub account** you want to filter by in this format; <span style={{color: "red"}}>`2024-08-20`</span>. |
| to <br></br> <span style={{color: "red"}}>`String`</span> | **This is the end of the date of the created sub accounts,** you want to filter by in this format; <span style={{color: "red"}}>`2024-08-27`</span>. |

**Sample Response:** 

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```yaml
[
    {
        "accountNumber": "7706438396",
        "currency": "GHS",
        "balance": 3.00,
        "availableBalance": 3.00,
        "accountTag": "main-account"
    },
    {
        "accountNumber": "8450588278",
        "currency": "USD",
        "balance": 0.00,
        "availableBalance": 0.00,
        "accountTag": "main-account"
    },
    {
        "accountNumber": "5236790403",
        "currency": "NGN",
        "balance": 796.00,
        "availableBalance": 796.00,
        "accountTag": "main-account"
    }
]
```