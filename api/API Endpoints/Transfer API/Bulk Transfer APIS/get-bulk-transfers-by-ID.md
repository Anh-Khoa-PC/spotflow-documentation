---
title: Fetch Bulk Transfers By ID
hide_title: true
---

## Fetch Bulk Transfers By ID

Fetch all transfer details present in a bulk transfer file by its specific id to know the status of each transaction.

<span style={{color: "green"}}>`GET`</span> https://api.spotflow.co/api/v1/transfers/bulk/:id/transfers

**Headers**

| <p style={{fontWeight: '400'}}>authorization <br></br> <span style={{color: "red"}}>`String`</span></p> | <p style={{fontWeight: '400'}}><span style={{color: "red"}}>`Bearer SECRET_KEY`</span> <br></br> _Include your secret key in the request header as a Bearer token for authorization. Unauthorized requests will result in a 401 HTTP status code_.</p> |
| :------------------------------------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
## Path Parameters

**id**

This is the specific id used to get the individual transfer details in the uploaded bulk transfer file.


**Sample Response for Transfer:**

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```yaml
{
    "content": [
        {
            "reference": "717e122c-2638-42a8-93e3-bef9ed1c1c4f",
            "spotflowReference": "SPF-TRSF-df079383ed3c41e19da8d459db41cf86",
            "amount": 150.00,
            "currency": "NGN",
            "transferMode": "BULK",
            "destination": {
                "accountNumber": "2254567789",
                "accountName": "Hailey Finney",
                "bankCode": "SPB-17646",
                "bankName": "Paycom (Opay)"
            },
            "narration": "Payment for services rendered",
            "status": "successful"
        },
        {
            "reference": "93cfe3f5-a1c1-4165-b92c-b3bbdca1eb93",
            "spotflowReference": "SPF-TRSF-98646993a000437f98f27f6fcc1e22a7",
            "amount": 120.00,
            "currency": "NGN",
            "transferMode": "BULK",
            "destination": {
                "accountNumber": "8168890978",
                "accountName": "James Hemsworth",
                "bankCode": "SPB-17646",
                "bankName": "Paycom (Opay)"
            },
            "narration": "Payment for services rendered",
            "status": "successful"
        },
        {
            "reference": "31ab9387-7bb2-4e99-9577-a11e5dace03f",
            "spotflowReference": "SPF-TRSF-02cd89088fb94288aafffa09f2d94929",
            "amount": 110.00,
            "currency": "NGN",
            "transferMode": "BULK",
            "destination": {
                "accountNumber": "2128904323",
                "accountName": "Charles Bailey",
                "bankCode": "SPB-27561",
                "bankName": "United Bank for Africa"
            },
            "narration": "Payment for services rendered",
            "status": "successful"
        },
        {
            "reference": "8dd67c7e-85fc-4d18-b9b6-d83421639231",
            "spotflowReference": "SPF-TRSF-20df42486f4f41668aa31faf8d74f899",
            "amount": 200.00,
            "currency": "NGN",
            "transferMode": "BULK",
            "destination": {
                "accountNumber": "8090211345",
                "accountName": "Aimee Oleandra",
                "bankCode": "SPB-33105",
                "bankName": "Zenith Bank"
            },
            "narration": "Payment for services rendered",
            "status": "successful"
        }
    ],
    "pageNumber": 0,
    "pageSize": 10,
    "totalElements": 4,
    "totalPages": 1
}
```

---
title: Fetch Bulk Transfers By ID
hide_title: true
---

## Fetch Bulk Transfers By ID

Fetch all transfer details present in a bulk transfer file by its specific id to know the status of each transaction.

<span style={{color: "green"}}>`GET`</span> https://api.spotflow.co/api/v1/transfers/bulk/:id/transfers

**Headers**

| <p style={{fontWeight: '400'}}>authorization <br></br> <span style={{color: "red"}}>`String`</span></p> | <p style={{fontWeight: '400'}}><span style={{color: "red"}}>`Bearer SECRET_KEY`</span> <br></br> _Include your secret key in the request header as a Bearer token for authorization. Unauthorized requests will result in a 401 HTTP status code_.</p> |
| :------------------------------------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
## Path Parameters

**id**

This is the specific id used to get the individual transfer details in the uploaded bulk transfer file.


**Sample Response for Transfer:**

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```yaml
{
    "content": [
        {
            "reference": "717e122c-2638-42a8-93e3-bef9ed1c1c4f",
            "spotflowReference": "SPF-TRSF-df079383ed3c41e19da8d459db41cf86",
            "amount": 150.00,
            "currency": "NGN",
            "transferMode": "BULK",
            "destination": {
                "accountNumber": "2254567789",
                "accountName": "Hailey Finney",
                "bankCode": "057"
            },
            "narration": "Payment for services rendered",
            "status": "successful"
        },
        {
            "reference": "93cfe3f5-a1c1-4165-b92c-b3bbdca1eb93",
            "spotflowReference": "SPF-TRSF-98646993a000437f98f27f6fcc1e22a7",
            "amount": 120.00,
            "currency": "NGN",
            "transferMode": "BULK",
            "destination": {
                "accountNumber": "8168890978",
                "accountName": "James Hemsworth",
                "bankCode": "305"
            },
            "narration": "Payment for services rendered",
            "status": "successful"
        },
        {
            "reference": "31ab9387-7bb2-4e99-9577-a11e5dace03f",
            "spotflowReference": "SPF-TRSF-02cd89088fb94288aafffa09f2d94929",
            "amount": 110.00,
            "currency": "NGN",
            "transferMode": "BULK",
            "destination": {
                "accountNumber": "2128904323",
                "accountName": "Charles Bailey",
                "bankCode": "033"
            },
            "narration": "Payment for services rendered",
            "status": "successful"
        },
        {
            "reference": "8dd67c7e-85fc-4d18-b9b6-d83421639231",
            "spotflowReference": "SPF-TRSF-20df42486f4f41668aa31faf8d74f899",
            "amount": 200.00,
            "currency": "NGN",
            "transferMode": "BULK",
            "destination": {
                "accountNumber": "8090211345",
                "accountName": "Aimee Oleandra",
                "bankCode": "375"
            },
            "narration": "Payment for services rendered",
            "status": "successful"
        }
    ],
    "pageNumber": 0,
    "pageSize": 10,
    "totalElements": 4,
    "totalPages": 1
}
```
