---
title: Create Bulk Transfer
pagination_prev: null
hide_title: true
---

## Create Bulk Transfer
You can use this endpoint to perform bulk bank account transfer to multiple bank accounts.

Please note that, by default, merchant configuration for setting regions and service providers is not enabled on new accounts. To create bank transfer successfully after successful sign up and KYB onboarding, contact our support team at support@spotflow.one and request merchant configuration activation for your account.   

<span style={{color: "orange"}}>`POST`</span> https://api.spotflow.co/api/v1/transfers/bulk?category=disburse&currency=NGN&narration=ref-transfer

**Headers**

| <p style={{fontWeight: '400'}}>authorization <br></br> <span style={{color: "red"}}>`String`</span></p> | <p style={{fontWeight: '400'}}><span style={{color: "red"}}>`Bearer SECRET_KEY`</span> <br></br> *Include your secret key in the request header as a Bearer token for authorization. Unauthorized requests will result in a 401 HTTP status code*.</p> |
|:----------|:-----------|
| content-type <br></br> <span style={{color: "red"}}>`String`</span> | <span style={{color: "red"}}>`application/json`</span> |

**Request Query Parameters**

| <p style={{fontWeight: '400'}}>category <br></br> <span style={{color: "red"}}>`String`</span></p> | <p style={{fontWeight: '400'}}>Specify a unique category of your choice for your company to track a transaction for later reconciliation. </p> |
|:---------|:---------|
| currency <br></br> <span style={{color: "red"}}>`String`</span> | Select the currency for the transfer. This is in our supported currency which is currently only NGN and GHS. |
| narration <br></br> <span style={{color: "red"}}>`String`</span> | This is optional information for you to give details about the reason for the transfer |


## Request Body Parameters

Add a form-data with a key of “file” in the request body. In the value tab, upload a CSV file of your bulk transfer. Ensure all the required fields such as the amount, currency, bank_code, branch_code, account_number, account_name, and narration are present in your CSV file before uploading it. 

**Sample Response For NGN:** 

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```yaml
{
    "id": "da2d336f-bb99-49c8-90f9-2ea18d4571bf",
    "category": "Salaries",
    "totalAmount": 580.00,
    "currency": "NGN",
    "count": 4,
    "fileName": "newbulktransfers.csv",
    "reference": "07621d66-0bed-4bd6-9950-82209db00bae",
    "spotflowReference": "SPF-BTRSF-d39434141c34456c8c7c987b42c01a80",
    "status": "initiated",
    "createdAt": "2025-09-03T17:05:31.284748Z"
}
```

**Sample Response For GHS:** 

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```yaml
{
    "id": "3d845022-e208-4fe9-bd8d-be9bc87e37a2",
    "category": "Creator Payout",
    "totalAmount": 580.00,
    "currency": "GHS",
    "count": 4,
    "fileName": "GHSbulktransfers.csv",
    "reference": "605a8096-7353-49b5-a433-78dd7a0acbb3",
    "spotflowReference": "SPF-BTRSF-c2ab10af96cc4fe4aca82ece637d2f3d",
    "status": "initiated",
    "createdAt": "2025-09-03T22:44:36.738968Z"
}
```
