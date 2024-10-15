---
title: Fetch Region For Merchant
---

# Fetch Region

Get your available regions on Spotflow

<span style={{color: "green"}}>`GET`</span> https://dev-api.spotflow.co/api/v1/merchant/regions

## Headers

| <p style={{fontWeight: '400'}}>authorization <br></br> <span style={{color: "red"}}>`String`</span></p> | <p style={{fontWeight: '400'}}><span style={{color: "red"}}>`Bearer SECRET_KEY`</span> <br></br> *Include your secret key in the request header as a Bearer token for authorization. Unauthorized requests will result in a 401 HTTP status code*.</p> |
|:----------|:-----------|
| Origin <br></br> <span style={{color: "red"}}>`Data`</span> | https://app.spotflow.co |

## Sample Response

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```yaml
[
    {
        "id": 1,
        "name": "Nigeria",
        "status": "active",
        "createdAt": "2024-06-07T10:30:47Z"
    }
]
```