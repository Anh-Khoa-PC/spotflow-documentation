---
title: Fetch Virtual Account By ID
hide_title: true
---

## Fetch Virtual Account by ID

Get details of your created virtual account by its ID

<span style={{color: "green"}}>`GET`</span> https://api.spotflow.co/api/v1/virtual-account/:id

**Headers**

| <p style={{fontWeight: '400'}}>authorization <br></br> <span style={{color: "red"}}>`String`</span></p> | <p style={{fontWeight: '400'}}><span style={{color: "red"}}>`Bearer SECRET_KEY`</span> <br></br> _Include your secret key in the request header as a Bearer token for authorization. Unauthorized requests will result in a 401 HTTP status code_.</p> |
| :------------------------------------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

## Path Parameters

**id** <span style={{color: "red"}}>`int32`</span>

This is the unique <span style={{color: "red"}}>`ID`</span> generated upon creation of your virtual account in either NGN or GHS.

**Sample Response in NGN:**

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```yaml
{
    "id": "9e164443-d10c-4dda-952b-a1a76af37057",
    "accountNumber": "6474247770",
    "accountName": "SPOTFLOW/Jenny Hemsworth",
    "bankName": "Nombank MFB",
    "mode": "live",
    "createdAt": "2025-07-02T15:02:33.605434Z",
    "updatedAt": "2025-07-02T15:06:17.999528Z",
    "lifecycle": "temporary"
}
```

**Sample Response in GHS:**

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```yaml
{
    "id": "a3652e3d-4a3c-4620-bc2b-22d5b19e7f4e",
    "accountNumber": "7003000100286",
    "accountName": "Jenny Hemsworth",
    "bankName": "Affinity",
    "mode": "live",
    "createdAt": "2025-08-07T13:25:16.008229Z",
    "updatedAt": "2025-08-07T13:25:26.442561Z",
    "lifecycle": "temporary",
    "expiresAt": "2025-08-07T13:25:26.405854300Z"
}
```
