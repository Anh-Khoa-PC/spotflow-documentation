---
title: Fetch Transfer By Reference
hide_title: true
---

## Fetch Transfer By Reference

Get details of a particular transfer by its reference id.

<span style={{color: "green"}}>`GET`</span> https://api.spotflow.co/api/v1/transfers/reference/:reference

**Headers**

| <p style={{fontWeight: '400'}}>authorization <br></br> <span style={{color: "red"}}>`String`</span></p> | <p style={{fontWeight: '400'}}><span style={{color: "red"}}>`Bearer SECRET_KEY`</span> <br></br> _Include your secret key in the request header as a Bearer token for authorization. Unauthorized requests will result in a 401 HTTP status code_.</p> |
| :------------------------------------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
## Path Parameters

**reference**

This is the reference id of the transfer that you made on your account using what's in the 'reference' and not 'spotflowReference'.


**Sample Response for NGN Transfer:**

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```yaml
{
    "reference": "ref-005",
    "spotflowReference": "SPF-TRSF-641c47676e4c4036a6826acf9fc9e950",
    "amount": 150,
    "currency": "NGN",
    "destination": {
        "accountNumber": "8083233890",
        "accountName": "Alice Hemsworth",
        "bankCode": "SPB-17646"
    },
    "narration": "transfertest",
    "status": "SUCCESSFUL"
}
```
**Sample Response for GHS Transfer:**

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```yaml
{
    "reference": "ref-005",
    "spotflowReference": "SPF-TRSF-0f700d1f77bf4d69b0f8b7005b2aadb1",
    "amount": 1.00,
    "currency": "GHS",
    "destination": {
        "accountNumber": "7003000100386",
        "accountName": "Joel Finney",
        "bankCode": "SPB-80181",
        "bankName": "Affinity"
    },
    "narration": "Transfer", 
    "status": "SUCCESSFUL"
}
```
