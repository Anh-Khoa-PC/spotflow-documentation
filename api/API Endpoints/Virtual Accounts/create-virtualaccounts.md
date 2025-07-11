---
title: Create Virtual Accounts
pagination_prev: null
hide_title: true
---

## Create Virtual Account
Virtual accounts don't act as independent money storage - they simply channel incoming payments straight to your account. These accounts cannot process outgoing payments or be linked to payment terminals. Since virtual accounts do not serve as containers for funds, there's no need for BVN verification during setup.

This endpoint is used to create a virtual account to receive payments.

<span style={{color: "orange"}}>`POST`</span> https://api.spotflow.co/api/v1/virtual-accounts/temporary

**Headers**

| <p style={{fontWeight: '400'}}>authorization <br></br> <span style={{color: "red"}}>`String`</span></p> | <p style={{fontWeight: '400'}}><span style={{color: "red"}}>`Bearer SECRET_KEY`</span> <br></br> *Include your secret key in the request header as a Bearer token for authorization. Unauthorized requests will result in a 401 HTTP status code*.</p> |
|:----------|:-----------|
| content-type <br></br> <span style={{color: "red"}}>`String`</span> | <span style={{color: "red"}}>`application/json`</span> |

**Request Body Parameters**

| <p style={{fontWeight: '400'}}>accountName <br></br> <span style={{color: "red"}}>`String`</span></p> | <p style={{fontWeight: '400'}}>Your desired naming for your account.</p> |
|:---------|:---------|
| currency <br></br> <span style={{color: "red"}}>`String`</span> | Note that currently, you can only create virtual accounts in NGN.|
| amount <br></br> <span style={{color: "red"}}>`Integer`</span> | Amount should be in the subunit of our supported currency i.e NGN for now. |
| expiresIn <br></br> <span style={{color: "red"}}>`Integer`</span> | This is optional to add. By default, the time it takes for a virtual account to expire is 30 mins. However, you can customize the time to lesser as you desire. |

**Sample Request Body:**

```yaml
{
"accountName": "Jenny Hemsworth",
"currency": "NGN",
"amount": 1500,
"expiresIn": 10
}

```

**Sample Response:** 

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```yaml
{
 "id": "a57aa726-45d9-4870-b12d-f7fd82df5b2a",
 "accountNumber": "5590739654",
 "accountName": "SPOTFLOW/Jenny Hemsworth",
 "bankName": "Jollof Bank",
 "mode": "test",
 "lifecycle": "temporary"
}
```
**Configure Webhook URL:**

Note that you should receive webhook and email notifications when a created virtual account is funded. Configure the endpoint in your system to receive payment status updates whenever a created virtual account is funded. Update and add your Webhook URL on the merchant dashboard. You can do this in Settings > API & Webhooks > URLs > Webhook URL.
