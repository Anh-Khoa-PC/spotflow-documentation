---
title: List Sub Accounts
hide_title: true
pagination_next: null
---

## List Sub Accounts
This retrieves and lists all the sub accounts you've created. This is both for your main account and sub accounts.

<span style={{color: "green"}}>`GET`</span>  https://api.spotflow.co/api/v1/accounts?accountTag=main-account

**Headers**

| <p style={{fontWeight: '400'}}>authorization <br></br> <span style={{color: "red"}}>`String`</span></p> | <p style={{fontWeight: '400'}}><span style={{color: "red"}}>`Bearer SECRET_KEY`</span> <br></br> *Include your secret key in the request header as a Bearer token for authorization. Unauthorized requests will result in a 401 HTTP status code*.</p> |
|:----------|:-----------|


## Query Parameters (Note that these are all optional)

| <p style={{fontWeight: '400'}}>page <br></br> <span style={{color: "red"}}>`Integer`</span></p> | <p style={{fontWeight: '400'}}>**Indicate the specific page to retrieve.**. If not provided, the first page will be returned by default.</p> |
|:----------|:-----------|
| size <br></br> <span style={{color: "red"}}>`Integer`</span> | **Indicate the number of records per page.**. If unspecified, a default of 10 records will be returned. |
| accountTag <br></br> <span style={{color: "red"}}>`String`</span> | **This can either be** <span style={{color: "red"}}>`sub-account`</span>, or <span style={{color: "red"}}>`main-account`</span>. |
| currency <br></br> <span style={{color: "red"}}>`String`</span> | Choose the currency you want for your sub account. According, to our currently supported currencies, this is in NGN or GHS. |
| mode <br></br> <span style={{color: "red"}}>`String`</span> | **According to your secret key used in the authorization i.e sk_live or sk_test,** this can either be in live or test mode. |
| accountNumber <br></br> <span style={{color: "red"}}>`String`</span> | **This filters by the account number** created for the sub accounts. |
| accountTag <br></br> <span style={{color: "red"}}>`String`</span> | This filters with the tag 'main-account' or 'sub-account' in both GHS and NGN currencies. |
| from <br></br> <span style={{color: "red"}}>`String`</span> | **This is the date of the created sub account** you want to filter by in this format; <span style={{color: "red"}}>`2024-08-20`</span>. |
| to <br></br> <span style={{color: "red"}}>`String`</span> | **This is the end of the date of the created sub accounts** you want to filter by in this format; <span style={{color: "red"}}>`2024-08-27`</span>. |


**Sample Response For Tag 'Main-Account':** 

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```yaml
{
    "content": [
        {
            "id": "c1fba25a-a36b-479c-b17d-64dbaf3ba32c",
            "balanceId": "bln_52448a75-248e-4277-932f-5af5c325d372",
            "accountName": "Main GHS Account",
            "accountNumber": "7706438396",
            "currency": "GHS",
            "mode": "live",
            "accountTag": "main-account",
            "status": "active",
            "createdAt": "2025-07-22T11:25:28.792959Z",
            "updatedAt": "2025-08-07T11:56:49.337647Z"
        },
        {
            "id": "44a6b88c-5f90-4610-b45d-c867310451ee",
            "balanceId": "bln_18aecff5-1d0c-4f3d-8059-237c68803f63",
            "accountName": "Main USD Account",
            "accountNumber": "8450588278",
            "currency": "USD",
            "mode": "live",
            "accountTag": "main-account",
            "status": "active",
            "createdAt": "2025-07-22T11:25:28.791028Z",
            "updatedAt": "2025-07-22T11:25:28.791035Z"
        },
        {
            "id": "fb73e4e6-efaf-4d40-906f-6a5e4c8cb25b",
            "balanceId": "bln_e7e2d9a2-5127-4dd2-b02b-0219c9afe213",
            "accountName": "Main NGN Account",
            "accountNumber": "5236790403",
            "currency": "NGN",
            "mode": "live",
            "accountTag": "main-account",
            "status": "active",
            "createdAt": "2025-07-01T15:18:24.465921Z",
            "updatedAt": "2025-08-07T11:56:57.299985Z"
        }
    ],
    "pageNumber": 0,
    "pageSize": 10,
    "totalElements": 3,
    "totalPages": 1
}
```

**Sample Response For Tag 'Sub-Account':** 

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```yaml
{
    "content": [
        {
            "id": "28d13bb8-9df4-4aa6-be9a-a06095b2b0b7",
            "balanceId": "bln_be74ded7-bd35-4f0d-8e85-8482c4b5f926",
            "accountName": "Ollie Account",
            "accountNumber": "1985812247",
            "parentAccountId": "43bbf6b7-6bf0-4aec-b145-eef4d3b29a75",
            "currency": "GHS",
            "mode": "live",
            "accountTag": "sub-account",
            "status": "active",
            "createdAt": "2025-08-07T12:44:37.908495Z",
            "updatedAt": "2025-08-07T12:44:38.690709Z"
        },
        {
            "id": "0aec7f5d-a1fd-41d7-95aa-b829ba392c3e",
            "balanceId": "bln_dba6f202-25fc-4ce1-8373-72b45aed3339",
            "accountNumber": "6743913402",
            "parentAccountId": "fb73e4e6-efaf-4d40-906f-6a5e4c8cb25b",
            "currency": "NGN",
            "mode": "live",
            "accountTag": "sub-account",
            "status": "active",
            "createdAt": "2025-07-22T11:25:28.808407Z",
            "updatedAt": "2025-08-07T11:56:26.740354Z"
        },
        {
            "id": "44a2f6a2-61fa-4b4f-8557-900b51ec6cc3",
            "balanceId": "bln_d853feba-9b9f-47b6-9c96-f99f45c0ab35",
            "accountNumber": "2666467442",
            "parentAccountId": "fb73e4e6-efaf-4d40-906f-6a5e4c8cb25b",
            "currency": "NGN",
            "mode": "live",
            "accountTag": "sub-account",
            "status": "active",
            "createdAt": "2025-07-22T11:25:28.806772Z",
            "updatedAt": "2025-08-07T11:56:39.858975Z"
        },
        {
            "id": "442522c3-5854-4bf5-8809-93dab37abbb2",
            "balanceId": "bln_e0accb20-8e77-42cc-b5f5-fe3e26c7cc05",
            "accountNumber": "6213070280",
            "parentAccountId": "fb73e4e6-efaf-4d40-906f-6a5e4c8cb25b",
            "currency": "NGN",
            "mode": "live",
            "accountTag": "sub-account",
            "status": "active",
            "createdAt": "2025-07-22T11:25:28.805164Z",
            "updatedAt": "2025-08-07T11:56:39.355754Z"
        },
        {
            "id": "bef589f7-6725-4775-a34c-d6e49be8829a",
            "balanceId": "bln_dc061efe-e5c9-409d-bc88-403d0c20729e",
            "accountNumber": "4220043086",
            "parentAccountId": "fb73e4e6-efaf-4d40-906f-6a5e4c8cb25b",
            "currency": "NGN",
            "mode": "live",
            "accountTag": "sub-account",
            "status": "active",
            "createdAt": "2025-07-22T11:25:28.803476Z",
            "updatedAt": "2025-08-07T11:56:48.485754Z"
        },
        {
            "id": "43752cef-c7b1-4c07-b852-74b35c993583",
            "balanceId": "bln_5ac1291f-97f0-4370-b37f-8a8418638ca4",
            "accountNumber": "2195480305",
            "parentAccountId": "fb73e4e6-efaf-4d40-906f-6a5e4c8cb25b",
            "currency": "NGN",
            "mode": "live",
            "accountTag": "sub-account",
            "status": "active",
            "createdAt": "2025-07-22T11:25:28.801295Z",
            "updatedAt": "2025-08-07T11:56:38.901888Z"
        }
    ],
    "pageNumber": 0,
    "pageSize": 10,
    "totalElements": 6,
    "totalPages": 1
}
```
