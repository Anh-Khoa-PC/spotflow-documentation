---
title: Get Bulk Transfer By ID
hide_title: true
---

## Get Bulk Transfer By ID

Get details of an uploaded bulk transfer by its id.

<span style={{color: "green"}}>`GET`</span> https://api.spotflow.co/api/v1/transfers/bulk/:id

**Headers**

| <p style={{fontWeight: '400'}}>authorization <br></br> <span style={{color: "red"}}>`String`</span></p> | <p style={{fontWeight: '400'}}><span style={{color: "red"}}>`Bearer SECRET_KEY`</span> <br></br> _Include your secret key in the request header as a Bearer token for authorization. Unauthorized requests will result in a 401 HTTP status code_.</p> |
| :------------------------------------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
## Path Parameters

**id**

This is the id of the bulk transfer that was uploaded.


**Sample Response for NGN Transfer:**

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```yaml
{
    "id": "9c8db743-0627-47c9-9042-29c10a4692ef",
    "category": "disburse",
    "totalAmount": 206.00,
    "currency": "NGN",
    "count": 2,
    "fileName": "bulk_disbursements new.csv",
    "reference": "1c7966f9-a119-47a7-b44b-2186eaf6ba12",
    "spotflowReference": "SPF-BTRSF-a482a107f2004689b36988a5239720f0",
    "status": "initiated",
    "createdAt": "2025-09-03T12:45:06.314679Z"
}
```
**Sample Response for GHS Transfer:**

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
