---
title: List Sub Accounts
hide_title: true
pagination_next: null
---

## List Sub Accounts
This retrieves and lists all the sub accounts you've created. This both for your main account and sub accounts.

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


**Sample Response for All Sub Accounts:** 

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```yaml
{
    "content": [
        {
            "id": "f10a95be-c916-4f92-a2bd-a0f7922328dc",
            "balanceId": "bln_4943d9bf-6c27-454d-921d-6d460dd6289f",
            "accountName": "Newly Account",
            "accountNumber": "9844207661",
            "parentAccountId": "43bbf6b7-6bf0-4aec-b145-eef4d3b29a75",
            "currency": "NGN",
            "mode": "test",
            "accountTag": "sub-account",
            "status": "active",
            "createdAt": "2025-07-02T15:14:31.104863Z",
            "updatedAt": "2025-07-02T15:14:31.104872Z"
        },
        {
            "id": "2a7cf97c-6317-4da1-9cd0-34c0c33af8e8",
            "balanceId": "bln_ab2dada2-a60d-456d-8a05-f8c6e1f00c66",
            "accountName": "Newly Account",
            "accountNumber": "2868767881",
            "parentAccountId": "43bbf6b7-6bf0-4aec-b145-eef4d3b29a75",
            "currency": "NGN",
            "mode": "test",
            "accountTag": "sub-account",
            "status": "active",
            "createdAt": "2025-07-02T14:17:22.354473Z",
            "updatedAt": "2025-07-02T14:17:22.354479Z"
        },
        {
            "id": "e0189fb1-3210-42e9-96fe-aeb5215c086c",
            "balanceId": "bln_9b38a55f-2665-4a05-8936-e8067c131f98",
            "accountName": "Newly Account",
            "accountNumber": "8213714164",
            "parentAccountId": "43bbf6b7-6bf0-4aec-b145-eef4d3b29a75",
            "currency": "NGN",
            "mode": "test",
            "accountTag": "sub-account",
            "status": "active",
            "createdAt": "2025-07-02T14:09:45.536072Z",
            "updatedAt": "2025-07-02T14:09:45.536082Z"
        }
    ],
    "pageNumber": 0,
    "pageSize": 10,
    "totalElements": 3,
    "totalPages": 1
}
```

**Sample Response for Your Main Account:** 

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```yaml
{
    "content": [
        {
            "id": "43bbf6b7-6bf0-4aec-b145-eef4d3b29a75",
            "balanceId": "bln_f429c9bf-231e-4a14-ad94-f41fff523ec1",
            "accountName": "Main NGN Account",
            "accountNumber": "0958094143",
            "currency": "NGN",
            "mode": "test",
            "accountTag": "main-account",
            "status": "active",
            "createdAt": "2025-07-01T15:18:24.349353Z",
            "updatedAt": "2025-07-01T15:18:24.349378Z"
        }
    ],
    "pageNumber": 0,
    "pageSize": 10,
    "totalElements": 1,
    "totalPages": 1
}
```
