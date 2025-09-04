---
title: Get All Bulk Transfers
hide_title: true
---

## Get All Bulk Transfers

Get details of all bulk transfer files you have uploaded.

<span style={{color: "green"}}>`GET`</span> https://api.spotflow.co/api/v1/transfers/bulk

**Headers**

| <p style={{fontWeight: '400'}}>authorization <br></br> <span style={{color: "red"}}>`String`</span></p> | <p style={{fontWeight: '400'}}><span style={{color: "red"}}>`Bearer SECRET_KEY`</span> <br></br> _Include your secret key in the request header as a Bearer token for authorization. Unauthorized requests will result in a 401 HTTP status code_.</p> |
| :------------------------------------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Response for Bulk Transfers:**

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```yaml
{
    "content": [
        {
            "id": "7462105c-9f26-47b2-b9e1-473c9650f16e",
            "category": "disburse",
            "totalAmount": 206.00,
            "currency": "NGN",
            "count": 2,
            "fileName": "bulk_disbursements-3.csv",
            "reference": "45ed9f6d-f1d1-438b-ab70-3da96a331fe4",
            "spotflowReference": "SPF-BTRSF-070d6e696e0142b7a419b186596c6a21",
            "status": "initiated",
            "createdAt": "2025-09-01T10:25:09.957071Z"
        },
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
        },
        {
            "id": "24f850b9-3e55-4789-8e35-20b482128ad9",
            "category": "payment",
            "totalAmount": 200.00,
            "currency": "NGN",
            "count": 2,
            "fileName": "bulk_transfers.csv",
            "reference": "c9600dcc-46ff-4b82-a868-6d2ab946cbdf",
            "spotflowReference": "SPF-BTRSF-8d8b7ebeead743b095346044ebae4124",
            "status": "initiated",
            "createdAt": "2025-09-03T14:51:28.864366Z"
        },
        {
            "id": "deaaee10-9e95-4e9c-9f6d-587630c33e1e",
            "category": "payment",
            "totalAmount": 300.00,
            "currency": "NGN",
            "count": 2,
            "fileName": "bulktransfers.csv",
            "reference": "33d3eb26-0cba-4b2f-9f2a-f4a4bf482b70",
            "spotflowReference": "SPF-BTRSF-3ff52f0f49fc467182a10b151033703d",
            "status": "initiated",
            "createdAt": "2025-09-03T16:18:07.469342Z"
        },
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
        },
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
    ],
    "pageNumber": 0,
    "pageSize": 10,
    "totalElements": 6,
    "totalPages": 1
}
```