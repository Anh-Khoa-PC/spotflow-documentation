---
title: List Virtual Accounts
hide_title: true
pagination_next: null
---

## List Virtual Accounts
This retrieves and lists all the active virtual accounts you created. 

<span style={{color: "green"}}>`GET`</span>  https://api.spotflow.co/api/v1/virtual-accounts

**Headers**

| <p style={{fontWeight: '400'}}>authorization <br></br> <span style={{color: "red"}}>`String`</span></p> | <p style={{fontWeight: '400'}}><span style={{color: "red"}}>`Bearer SECRET_KEY`</span> <br></br> *Include your secret key in the request header as a Bearer token for authorization. Unauthorized requests will result in a 401 HTTP status code*.</p> |
|:----------|:-----------|


## Query Parameters

| <p style={{fontWeight: '400'}}>accountNumber <br></br> <span style={{color: "red"}}>`Integer`</span></p> | <p style={{fontWeight: '400'}}>This filters by the account number created for the sub accounts. The account number you're using is your main-account account number (either test or live) found on <a target="_blank" href={"../Sub Accounts/list-subaccounts.md"} style={{textDecoration: "underline"}}> Get all main sub accounts endpoint </a> and not one of the virtual account numbers you created. </p> |
|:----------|:-----------|


**Sample Response for NGN Accounts:** 

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```yaml
[
    {
        "id": "9e164443-d10c-4dda-952b-a1a76af37057",
        "accountNumber": "6474247770",
        "accountName": "SPOTFLOW/Jame Hemsworth",
        "bankName": "Nombank MFB",
        "mode": "live",
        "createdAt": "2025-07-02T15:02:33.605434Z",
        "updatedAt": "2025-07-02T15:33:33.295748Z",
        "lifecycle": "temporary",
        "expiresAt": "2025-07-02T15:32:33.014293190Z"
    },
    {
        "id": "c60a3dfe-688b-4780-8833-880699971115",
        "accountNumber": "5934774256",
        "accountName": "SPOTFLOW/Jame Hemsworth",
        "bankName": "Nombank MFB",
        "mode": "live",
        "createdAt": "2025-07-02T15:01:14.473648Z",
        "updatedAt": "2025-07-02T15:13:32.309414Z",
        "lifecycle": "temporary",
        "expiresAt": "2025-07-02T15:11:13.174038874Z"
    },
    {
        "id": "4735bcd9-40bb-4a1d-8b9b-aeb47f72952b",
        "accountNumber": "5203436924",
        "accountName": "SPOTFLOW/Kharli Aime",
        "bankName": "Nombank MFB",
        "mode": "live",
        "createdAt": "2025-07-03T12:13:23.794469Z",
        "updatedAt": "2025-07-03T12:45:29.684567Z",
        "lifecycle": "temporary",
        "expiresAt": "2025-07-03T12:43:21.865450589Z"
    },
    {
        "id": "2f2306d8-6cc2-4e7f-846f-7e4e0e438c0d",
        "accountNumber": "3518763559",
        "accountName": "SPOTFLOW/Kharli Aime",
        "bankName": "Nombank MFB",
        "mode": "live",
        "createdAt": "2025-07-03T12:15:39.168211Z",
        "updatedAt": "2025-07-03T12:50:30.658214Z",
        "lifecycle": "temporary",
        "expiresAt": "2025-07-03T12:45:38.560870030Z"
    },
    {
        "id": "610446e7-2908-468b-9ff5-fad885eeebce",
        "accountNumber": "2186060869",
        "accountName": "SPOTFLOW/Jenny Hemsworth",
        "bankName": "Nombank MFB",
        "mode": "live",
        "createdAt": "2025-07-03T13:43:05.635025Z",
        "updatedAt": "2025-07-03T14:15:31.871827Z",
        "lifecycle": "temporary",
        "expiresAt": "2025-07-03T14:13:04.464439030Z"
    },
    {
        "id": "24db78fc-f0b7-4113-99f9-2e66652b6fa2",
        "accountNumber": "1255730960",
        "accountName": "SPOTFLOW/Jenny Hemsworth",
        "bankName": "Nombank MFB",
        "mode": "live",
        "createdAt": "2025-07-11T01:36:43.849432Z",
        "updatedAt": "2025-07-11T02:08:10.839284Z",
        "lifecycle": "temporary",
        "expiresAt": "2025-07-11T02:06:42.869383564Z"
    },
    {
        "id": "e3331da6-2c28-4d11-97a6-309ab2148b4c",
        "accountNumber": "4331150267",
        "accountName": "SPOTFLOW/Jenny Hemsworth",
        "bankName": "Nombank MFB",
        "mode": "live",
        "createdAt": "2025-07-14T13:48:30.019360Z",
        "updatedAt": "2025-07-14T14:19:09.076049Z",
        "lifecycle": "temporary",
        "expiresAt": "2025-07-14T14:18:29.037267532Z"
    },
    {
        "id": "92d139d0-739a-49ea-be6d-223924f394fb",
        "accountNumber": "8579826652",
        "accountName": "SPOTFLOW/SPOTFLOW",
        "bankName": "Nombank MFB",
        "mode": "live",
        "createdAt": "2025-07-14T15:11:17.120098Z",
        "updatedAt": "2025-07-14T15:44:14.389165Z",
        "lifecycle": "temporary",
        "reference": "SPF-SPA-28812556ef75442888e1ae43463788f0",
        "expiresAt": "2025-07-14T15:41:16.139635971Z"
    },
    {
        "id": "132f8de1-af19-47fe-91e5-bce3eb7db2b0",
        "accountNumber": "9707455568",
        "accountName": "SPOTFLOW/Newly",
        "bankName": "Nombank MFB",
        "mode": "live",
        "createdAt": "2025-08-07T11:56:57.294211Z",
        "updatedAt": "2025-08-07T11:56:57.294219Z",
        "lifecycle": "permanent"
    }
]
```

**Sample Response for GHS Accounts:** 

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```yaml
[
    {
        "id": "90374de8-74cf-441f-bb2d-2764907ee288",
        "accountNumber": "7003000100286",
        "accountName": "Jenny Hemsworth",
        "bankName": "Affinity",
        "mode": "live",
        "createdAt": "2025-07-29T15:51:50.192986Z",
        "updatedAt": "2025-07-29T15:52:00.279450Z",
        "lifecycle": "temporary",
        "expiresAt": "2025-07-29T15:52:00.250244121Z"
    },
    {
        "id": "3f330913-42b9-48b0-b199-7c5613a8376b",
        "accountNumber": "7003000100286",
        "accountName": "Jenny Hemsworth",
        "bankName": "Affinity",
        "mode": "live",
        "createdAt": "2025-07-30T08:44:11.549357Z",
        "updatedAt": "2025-07-30T08:44:25.505358Z",
        "lifecycle": "temporary",
        "expiresAt": "2025-07-30T08:44:25.474312342Z"
    },
    {
        "id": "4851f63a-adc3-47a4-9886-4d843b25ce1d",
        "accountNumber": "7003000100286",
        "accountName": "Newly",
        "bankName": "Affinity",
        "mode": "live",
        "createdAt": "2025-08-07T11:56:49.332961Z",
        "updatedAt": "2025-08-07T11:56:49.332968Z",
        "lifecycle": "permanent"
    },
    {
        "id": "8db9b1ce-85ac-4adc-8a2d-3a37487bddb9",
        "accountNumber": "7003000100286",
        "accountName": "Jenny Hemsworth",
        "bankName": "Affinity",
        "mode": "live",
        "createdAt": "2025-08-07T12:43:48.313732Z",
        "updatedAt": "2025-08-07T12:43:58.811783Z",
        "lifecycle": "temporary",
        "expiresAt": "2025-08-07T12:43:58.802281191Z"
    },
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
    },
    {
        "id": "75614345-9fab-4f8b-a855-5066a51f312c",
        "accountNumber": "7003000100286",
        "accountName": "Aimee Elixir",
        "bankName": "Affinity",
        "mode": "live",
        "createdAt": "2025-08-07T13:53:17.698511Z",
        "updatedAt": "2025-08-07T13:53:31.601427Z",
        "lifecycle": "temporary",
        "expiresAt": "2025-08-07T13:53:31.593613359Z"
    }
]
```