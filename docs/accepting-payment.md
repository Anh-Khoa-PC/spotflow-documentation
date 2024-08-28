---
title: Accepting Payment
id: accepting-payment
---

import Admonitions from "../src/components/Admonition/Admonitions"

<!-- <div class="accepting-payment"> -->
<!-- :::note[To summarize]
*Payments are processed by creating a transaction using either our API, JavaScript libraries, Inline JS, or SDKs.*
::: -->
<Admonitions type={"warning"} title={"To Summarize"} icon={"👌"}>
{
    <i>Payments are processed by creating a transaction using either our API, JavaScript libraries, Inline JS, or SDKs.</i>
}
</Admonitions>

<br></br>

At Spotflow, we understand that every business is unique, which is why we offer a diverse range of payment solutions to cater to the specific needs of your business.

**For seamless in-app or website checkout**:

- **Spotflow Embed**: Our client-side integration provides a smooth and intuitive checkout experience for your customers. By embedding our JavaScript library directly into your checkout page, you can create a smooth payment flow without redirecting users away from your site. We handle the entire payment process, from initiating the transaction to delivering payment confirmation.

**For businesses with custom payment flows**:

- **Spotflow Classic**: If you prefer to build your own unique payment experience, our Payment API empowers you to create custom payment flows tailored to your business. You have full control over the user interface and payment collection process while leveraging Spotflow's robust payment processing capabilities.


<Admonitions type={"warning"} icon={"👌"}>
    When a payment is successful, Spotflow notifies you by sending a "payment_successful" webhook event to the designated webhook URL you provide. Learn more about using <a style={{textDecoration: "underline"}} target="_blank" href={"https://hookdeck.com/webhooks/guides/what-are-webhooks-how-they-work"}>webhooks</a>
</Admonitions>


With Spotflow, you can choose the payment solution that best aligns with your business goals and technical capabilities. Our dedicated support team is always ready to assist you in selecting the optimal solution and providing guidance throughout the integration process.

:::warning[Note]
**For maximum security and to prevent unauthorized access, always keep your Spotflow secret key strictly confined to your server environment**. Exposing it on the client-side creates a significant security risk. To ensure the integrity of your application and protect sensitive data, all interactions with the Spotflow API must be initiated and managed exclusively from your server while your frontend gets the response from your server.
:::
<!-- </div> -->

## Prerequisites for Accepting Card Payments with Spotflow Classic

1. **Account Activation**

- Verification Required: Ensure your Spotflow account is fully activated and verified.

**2. Merchant Configuration**

- **Default Disabled:** By default, merchant configuration is not enabled on new accounts.
- **Enablement Request:** To accept card payments successfully, contact our support team at [support@spotflow.one](mailto:support@spotflow.one) and request merchant configuration activation for your account.

**3. PCI-DSS Compliance**

- **Certification Requirement:** To process card payments through our Payment APIs, you must be PCI-DSS (Payment Card Industry Data Security Standard) certified.
- **Level Requirement:** Spotflow may require a specific PCI-DSS compliance level (e.g., Level 1). Please consult with Spotflow support at [support@spotflow.one](mailto:support@spotflow.one) for more details.

## PCI-DSS: Protecting Your Customers

The Payment Card Industry Data Security Standard (PCI-DSS) is a comprehensive set of security requirements designed to safeguard cardholder data. By adhering to PCI-DSS, any business/organization can significantly reduce the risk of data breaches and fraud. This standard applies to any entity that handles cardholder information, making it essential for maintaining customer trust.

To learn more about PCI-DSS compliance, visit the PCI Security Standards Council <a target="_blank" href={"https://www.pcisecuritystandards.org/"}>official website</a>.

## Accepting Card Payments with Spotflow Classic

**Firstly**, To accept card payments with our Payment API, you've to collect the required card and payment information from your customer. This data should be structured into a data object following this specified format, sent to our endpoint: 

<span style={{color: "orange"}}>`POST`</span> https://dev-api.spotflow.one/api/v1/payments

```json
{
    "reference": "ref-{{$randomUUID}}",
    "amount": 20,
    "currency": "USD",
    "customer": {
        "email": "customer@email.com"
    },
    "channel": "card",
    "card": {
        "pan": "5531886652142950",
        "cvv": "564",
        "expiryMonth": "09",
        "expiryYear": "32"
    }
}
```

**Request Body Parameters**

| <p style={{fontWeight: '400'}}>reference <br></br> <span style={{color: "red"}}>`String`</span></p> | <p style={{fontWeight: '400'}}>Specify a unique reference ID generated by your company to identify each customer.</p> |
|:---------|:---------|
| amount <br></br> <span style={{color: "red"}}>`Integer`</span> | Amount should be in the subunit of our supported currency i.e your local currency or USD. |
| currency <br></br> <span style={{color: "red"}}>`String`</span> | Select the currency for the charges. Can either be in USD or in the local currency of your collection region.|
| customer email <br></br> <span style={{color: "red"}}>`String`</span> | The customer’s email address |
| channel <br></br> <span style={{color: "red"}}>`String`</span> | The channel is Card |
| pan <br></br> <span style={{color: "red"}}>`Integer`</span> | This is the 16-digit number displayed on the front of the card. E.g 5399838383838381 |
| cvv <br></br> <span style={{color: "red"}}>`Integer`</span>| **Card Verification Value**; This is the 3 or 4 digit security code found on the back of the customers card. |
| expiryMonth <br></br> <span style={{color: "red"}}>`Integer`</span>| The expiration month is represented by the first two-digit value on the card, indicating the month in which the card will no longer be valid. |
| expiryYear <br></br> <span style={{color: "red"}}>`Integer`</span>| The expiration year is represented by the last two digits of the card's expiration date. |

**Secondly**, to ensure the complete security of card data during transmission, Spotflow employs AES-256 encryption. The payment data you collected in the previous step must be encrypted using your unique encryption key before making requests to the Payments API. This encryption key can be found in the API Keys and Webhooks section of your dashboard settings.

AES-256 encryption is widely supported across programming languages. The sample code snippet below demonstrates a basic implementation in Java using the AES/ECB/PKCS5Padding algorithm. For production environments, consider using more secure modes like AES/GCM and implementing proper error handling.

```java
import java.util.Base64;

import javax.crypto.Cipher;

import javax.crypto.KeyGenerator;

import java.security.MessageDigest;

import javax.crypto.SecretKey;

import javax.crypto.spec.GCMParameterSpec;

import javax.crypto.spec.SecretKeySpec;

import java.nio.charset.StandardCharsets;



public class EncryptionUtils {



    public static String encrypt(String data, String key) throws Exception {

        byte[] rawKey = getRawKey(key);

        SecretKeySpec skeySpec = new SecretKeySpec(rawKey, "AES");

        Cipher cipher = Cipher.getInstance("AES/ECB/PKCS5Padding");

        cipher.init(Cipher.ENCRYPT_MODE, skeySpec);

        byte[] encryptedData = cipher.doFinal(data.getBytes(StandardCharsets.UTF_8));

        return Base64.getEncoder().encodeToString(encryptedData);

    }



    private static byte[] getRawKey(String key) throws Exception {

        MessageDigest md = MessageDigest.getInstance("MD5");

        byte[] bytes = md.digest(key.getBytes(StandardCharsets.UTF_8));

        byte[] rawKey = new byte[16]; // AES requires a 128-bit key

        System.arraycopy(bytes, 0, rawKey, 0, Math.min(bytes.length, rawKey.length));

        return rawKey;

    }

}
```

Furthermore, Once the payment data has been encrypted, use it within the POST request to our <a target="_blank" href={"../api/API Endpoints/Collections/Create-Collection"} style={{textDeocration: "underline"}}>Create payment endpoint API</a>

**Sample Request Body**

```json
{
    "reference": "ref-{{$randomUUID}}",
    "amount": 20,
    "currency": "USD",
    "customer": {
        "email": "customer@email.com"
    },
    "channel": "card",
    "encryptedCard": "vz2KC3dBalXYV8r13pS7eDp5ALfC3esjjcaouxxxxxxxxxxxxx"
}
```

**Sample Response**

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```json
{
    "id": "9d5cb1e0-d4f4-4434-9223-d985a9da68b5",
    "reference": "ref-5bc0ff00-f194-4ae1-9d3c-9ecd0f76e374",
    "spotflowReference": "SPF-FLW-2ec238d8b8764a33b1b9e43cd2cf2342",
    "amount": 20.00,
    "currency": "USD",
    "localAmount": 30951.60,
    "localCurrency": "NGN",
    "channel": "card",
    "status": "pending",
    "customer": {
        "id": "3839716c-35b4-40f9-a04f-af8a399fb147",
        "email": "customer@email.com"
    },
    "rate": 1547.58,
    "provider": "flutterwave",
    "region": "Nigeria",
    "authorization": {
        "mode": "pin"
    },
    "card": {
        "type": "Mastercard",
        "firstSix": "553188",
        "lastFour": "2950"
    }
}
```

**Upon successful payment creation**, the transaction's initial status will be <span style={{color: "red"}}>`pending`</span> which shows it's a payment needing authorization. The subsequent authentication method required depends on the specific card type and the authorization mode.

## Authorize Card Payment

The method used to authorize a card payment varies depending on the card type and its authorization mode.

### Making a Card Payment that Requires PIN

When making the initial request for a card payment, if successful, the system returns a sample response as seen above, indicating a <span style={{color: "red"}}>`pending`</span> status and requiring <span style={{color: "red"}}>`PIN`</span> authorization.

Following the initial response, get the required card PIN and make a request to our <a target="_blank" href={"../api/API Endpoints/Collections/authorize-collections"} style={{textDecoration: "underline"}}>Authorize Payment Endpoint</a> using the provided transaction reference returned in the initial response as shown in the sample request below:

**Sample Request Body**

```json
{
    "reference": "ref-e0750822-3a9a-4dd2-bddf-7b92bbd640ce",
    "authorization": {
        "pin": "3310"
    }
}
```

Upon successful payment authorization, the transaction's initial status can be <span style={{color: "red"}}>`failed`</span> or <span style={{color: "red"}}>`pending`</span> as shown in the response below: 

**Sample Response**

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```json
{
    "id": "9d5cb1e0-d4f4-4434-9223-d985a9da68b5",
    "reference": "ref-5bc0ff00-f194-4ae1-9d3c-9ecd0f76e374",
    "spotflowReference": "SPF-FLW-2ec238d8b8764a33b1b9e43cd2cf2342",
    "amount": 20.00,
    "currency": "USD",
    "localAmount": 30951.60,
    "localCurrency": "NGN",
    "channel": "card",
    "status": "pending",
    "customer": {
        "id": "3839716c-35b4-40f9-a04f-af8a399fb147",
        "email": "customer@email.com"
    },
    "providerMessage": "Please enter the OTP sent to your mobile number 080****** and email te**@rave**.com",
    "rate": 1547.58,
    "provider": "flutterwave",
    "region": "Nigeria",
    "authorization": {
        "mode": "otp"
    },
    "card": {
        "type": "Mastercard",
        "firstSix": "553188",
        "lastFour": "2950"
    },
    "createdAt": "2024-08-27T15:18:01Z"
}
```

### Making a Card Payment that Requires OTP Authorization

After making a request to authorize the card, a pending status will be returned along with the OTP authorization mode. This indicates that an <span style={{color: "red"}}>`OTP`</span> has been sent to the registered phone number or email tied to the customer’s bank account. You would need to get the <span style={{color: "red"}}>`OTP`</span> to validate the transaction. 

What you need to do next is get the OTP sent to the customer’s phone/email and submit a validation request to our <a target="_blank" href={"../api/API Endpoints/Collections/authorize-collections"} style={{textDecoration: "underline"}}>Authorize Payment Endpoint</a>  using the OTP and initial transaction reference as shown in the sample request below:

**Sample Request Body**

```json
{
    "reference": "ref-e0750822-3a9a-4dd2-bddf-7b92bbd640ce",
    "authorization": {
        "otp": "12345"
    }
}
```

**Sample Response**

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```json
{
    "id": "9d5cb1e0-d4f4-4434-9223-d985a9da68b5",
    "reference": "ref-5bc0ff00-f194-4ae1-9d3c-9ecd0f76e374",
    "spotflowReference": "SPF-FLW-2ec238d8b8764a33b1b9e43cd2cf2342",
    "amount": 20.00,
    "currency": "USD",
    "localAmount": 30951.60,
    "localCurrency": "NGN",
    "channel": "card",
    "status": "successful",
    "customer": {
        "id": "3839716c-35b4-40f9-a04f-af8a399fb147",
        "email": "customer@email.com"
    },
    "providerMessage": "successful",
    "rate": 1547.58,
    "provider": "flutterwave",
    "region": "Nigeria",
    "card": {
        "type": "Mastercard",
        "firstSix": "553188",
        "lastFour": "2950"
    },
    "createdAt": "2024-08-27T15:18:01Z"
}
```

If the status of the transaction is either <span style={{color: "red"}}>`success`</span> or <span style={{color: "red"}}>`failed`</span>, it is important to <a target="_blank" href={"../api/API Endpoints/Collections/verify-collection"}>Verify the Payment</a> to confirm the final status of the transaction.

### Making a Card Payment that Requires 3DS Authorization

Based on the initial request made to authorize the card, it automatically detects that 3DS authorization is required and immediately returns the redirect URL in the response with 3DS as the authorization mode, as shown in the following sample response:

**Sample Response**

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```json
{
    "id": "6945c177-6558-4a56-8257-7e880903dbc6",
    "reference": "ref-11f6941a-5db9-4c44-ab83-1d5eab966ce8",
    "spotflowReference": "SPF-FLW-b532e4c3dd9a4b0a9a79cf575117af19",
    "amount": 20.00,
    "currency": "USD",
    "localAmount": 30939.40,
    "localCurrency": "NGN",
    "channel": "card",
    "status": "pending",
    "customer": {
        "id": "3839716c-35b4-40f9-a04f-af8a399fb147",
        "email": "customer@email.com"
    },
    "providerMessage": "Please enter the OTP sent to your mobile number 080****** and email te**@rave**.com",
    "rate": 1546.97,
    "provider": "flutterwave",
    "region": "Nigeria",
    "authorization": {
        "mode": "3DS",
        "redirectUrl": "https://ravesandboxapi.flutterwave.com/mockvbvpage?ref=FLW-MOCK-89d9dd4cc3846b8dbbfea6b4060f7721&code=00&message=Approved.%20Successful&receiptno=RN1724773095768"
    },
    "card": {
        "type": "Mastercard",
        "firstSix": "543889",
        "lastFour": "0229"
    }
}
```

To complete the authorization process, it is crucial to redirect your customer to the designated URL provided within the authorization response. This external page will facilitate the collection of the OTP sent to their registered mobile number or email address. Upon successful OTP verification, the customer will be redirected back to your application.

### Making a Card Payment that Requires AVS Authorization

For cards requiring Address Verification System (AVS) checks, the system automatically detects this requirement upon initiating the payment. A subsequent response will indicate the need for AVS authorization with <span style={{color: "red"}}>`pending`</span> status and authentication mode as <span style={{color: "red"}}>`avs`</span> like the sample response below:

```json
{
    "id": "fb720170-0659-4c18-a6ea-0a141a498e69",
    "reference": "ref-7b968e38-eecc-4558-9d62-c50ffb7187c6",
    "spotflowReference": "SPF-KPY-fcd8dfacfa1b45e68ebf55b9029330ee",
    "amount": 20.00,
    "currency": "USD",
    "localAmount": 31069.00,
    "localCurrency": "NGN",
    "channel": "card",
    "status": "pending",
    "customer": {
        "id": "3839716c-35b4-40f9-a04f-af8a399fb147",
        "email": "customer@email.com"
    },
    "providerMessage": "Address verification required",
    "rate": 1553.45,
    "provider": "korapay",
    "region": "Nigeria",
    "authorization": {
        "mode": "avs"
    },
    "card": {
        "type": "Mastercard",
        "firstSix": "538406",
        "lastFour": "2071"
    }
}
```
Upon receiving a response indicating the need for AVS verification, you need to gather the customer's address details and submit a validation request to our <a target="_blank" href={"../api/API Endpoints/Collections/authorize-collections"} style={{textDecoration: "underline"}}>Authorize Payment Endpoint</a> with a sample request as shown below:

```json
{
    "reference": "ref-c2040ff9-9332-4417-b64e-14daf3ec8061",
    "authorization": {
        "avs": {
            "state": "Lagos",
            "city": "Lekki",
            "country": "Nigeria",
            "address": "Osapa, Lekki",
            "zipCode": "101010"
        }
    }
}
```

**Sample Response**

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```json
{
    "id": "fb720170-0659-4c18-a6ea-0a141a498e69",
    "reference": "ref-7b968e38-eecc-4558-9d62-c50ffb7187c6",
    "spotflowReference": "SPF-KPY-fcd8dfacfa1b45e68ebf55b9029330ee",
    "amount": 20.00,
    "currency": "USD",
    "localAmount": 31069.00,
    "localCurrency": "NGN",
    "channel": "card",
    "status": "successful",
    "customer": {
        "id": "3839716c-35b4-40f9-a04f-af8a399fb147",
        "email": "customer@email.com"
    },
    "providerMessage": "Card charged successfully",
    "rate": 1553.45,
    "provider": "korapay",
    "region": "Nigeria",
    "card": {
        "type": "Mastercard",
        "firstSix": "538406",
        "lastFour": "2071"
    },
    "createdAt": "2024-08-28T10:47:32Z"
}
```

If the status of the transaction at this point is either <span style={{color: "red"}}>`success`</span> or <span style={{color: "red"}}>`failed`</span>, <a target="_blank" href={"../api/API Endpoints/Collections/verify-collection"}>Verify the Payment</a> to confirm the final status of the transaction but if the transaction status is  <span style={{color: "red"}}>`pending`</span>, this means an extra authorization step is required and the authorization mode returned in the data object should be used to determine the next authorization type required for the card payment.

## Making a Card Payment that Requires Phone Enrollment (Verve Cards)

After making the request to create a <span style={{color: "red"}}>`card payment`</span> and then authorizing the payment, if the payment status is <span style={{color: "red"}}>`pending`</span> and the authorization mode is <span style={{color: "red"}}>`ENROLL`</span>, this means the customer's card is not yet enrolled for online payments. Card enrollment is necessary to proceed with the transaction.

**Sample Request:**

```json
{
  "reference": "ref-039f334f-e308-4dd9-9aff-024df32934e5",
  "authorization": {
      "pin": "1234"
    },
  "merchantId": "ba24fe75-39ce-4cde-997d-ea3a64b33a02"
}
```

**Sample Response:**

```json
{
    "id": "cad7247a-d37d-4120-b1f3-bd2d8bc15a9a",
    "reference": "ref-039f334f-e308-4dd9-9aff-024df32934e5",
    "spotflowReference": "SPF-KPY-51e21877f9c346b48c050186471f98ab",
    "amount": 10.00,
    "currency": "USD",
    "localAmount": 15542.30,
    "localCurrency": "NGN",
    "channel": "card",
    "status": "pending",
    "customer": {
        "id": "3839716c-35b4-40f9-a04f-af8a399fb147",
        "email": "customer@email.com"
    },
    "providerMessage": "Kindly enter the phone number registered with your bank",
    "rate": 1554.23,
    "provider": "korapay",
    "region": "Nigeria",
    "authorization": {
        "mode": "enroll"
    },
    "card": {
        "type": "Maestro",
        "firstSix": "506146",
        "lastFour": "3210"
    },
    "createdAt": "2024-08-28T11:04:05Z"
}
```

Upon receiving a response indicating a <span style={{color: "red"}}>`'Phone Enroll'`</span> verification is required, collect the customer's phone number registered with the bank account and submit a validation request to our <a target="_blank" href={"../api/API Endpoints/Collections/authorize-collections"} style={{textDecoration: "underline"}}>Authorize Payment Endpoint</a> with a sample request as shown below:

```json
{
    "reference": "ref-91e20470-cf74-451f-8d52-d9168ad1aa55",
    "authorization": {
        "phoneNumber": "08000000000"
    }
}
```

**Sample Response:**

```json
{
    "id": "cad7247a-d37d-4120-b1f3-bd2d8bc15a9a",
    "reference": "ref-039f334f-e308-4dd9-9aff-024df32934e5",
    "spotflowReference": "SPF-KPY-51e21877f9c346b48c050186471f98ab",
    "amount": 10.00,
    "currency": "USD",
    "localAmount": 15542.30,
    "localCurrency": "NGN",
    "channel": "card",
    "status": "pending",
    "customer": {
        "id": "3839716c-35b4-40f9-a04f-af8a399fb147",
        "email": "customer@email.com"
    },
    "providerMessage": "Transaction in progress",
    "rate": 1554.23,
    "provider": "korapay",
    "region": "Nigeria",
    "authorization": {
        "mode": "otp"
    },
    "card": {
        "type": "Maestro",
        "firstSix": "506146",
        "lastFour": "3210"
    },
    "createdAt": "2024-08-28T11:04:05Z"
}
```

After making the request successfully, you would get a response on how to proceed. If the transaction requires additional authorization and is in a <span style={{color: "red"}}>`pending/transaction in progress`</span> status, the response will indicate the necessary steps and provide the corresponding authorization mode. The transaction status at this stage can be either <span style={{color: "red"}}>`successful`</span> or <span style={{color: "red"}}>`failed`</span>.

If the status of the transaction is either <span style={{color: "red"}}>`success`</span> or <span style={{color: "red"}}>`failed`</span>, <a target="_blank" href={"../api/API Endpoints/Collections/verify-collection"} style={{textDecoration: "underline"}}>verify the payment</a> to confirm the final status of the transaction.

## Verify Payment

After charging a card, verification is crucial. Utilize your payment reference to confirm the transaction's final status by sending a request to our <a target="_blank" href={"../api/API Endpoints/Collections/verify-collection"} style={{textDecoration: "underline"}}>Verify Payment endpoint</a>.

Here are the query parameters and sample response needed for verifying a card payment:

**Query Parameters**


**merchant-id** <span style={{color: "red"}}>`int32`</span>

This is the unique <span style={{color: "red"}}>`ID`</span> of the merchant you want to verify

**reference**

This is the unique reference <span style={{color: "red"}}>`ID`</span> returned at payment creation.

**Sample Response**

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```json
{
    "id": "03d06d45-b99b-4ec3-8853-ed2711cfa783",
    "reference": "ref-2a0b9ee8-b48d-4849-8a09-e50827fd0bed",
    "spotflowReference": "SPF-FLW-5b006ceeb0a54bb1acbd1c7da87784f0",
    "amount": 5000.00,
    "currency": "NGN",
    "channel": "card",
    "status": "successful",
    "customer": {
        "id": "3839716c-35b4-40f9-a04f-af8a399fb147",
        "email": "customer@email.com"
    },
    "providerMessage": "successful",
    "rate": 1,
    "provider": "flutterwave",
    "region": "Nigeria",
    "createdAt": "2024-08-20T11:49:41Z"
}
```

## Accepting Bank Transfer Payments with Spotflow Classic

**Body Parameters:**

| <p style={{fontWeight: '400'}}>reference <br></br> <span style={{color: "red"}}>`String`</span></p> | <p style={{fontWeight: '400'}}>Specify a unique reference ID generated by your company to identify each customer.</p> |
|:---------|:---------|
| amount <br></br> <span style={{color: "red"}}>`Integer`</span> | Amount should be in the subunit of our supported currency i.e your local currency or USD. |
| currency <br></br> <span style={{color: "red"}}>`String`</span> | Select the currency for the charges. Can either be in USD or in the local currency of your collection region.|
| customer email <br></br> <span style={{color: "red"}}>`String`</span> | The customer’s email address |
| channel <br></br> <span style={{color: "red"}}>`String`</span> |  The channel is bank transfer of the payment providers available on the system |

**Sample Request Body for Bank Transfer Payments**

```json
{
    "reference": "ref-{{$randomUUID}}",
    "amount":10,
    "currency": "USD",
    "customer": {
        "name": "{{$randomFirstName}} {{$randomLastName}}",
        "email": "customer@email.com"
    },
    "channel": "bank_transfer"
}
```

**Sample Response for Bank Trasnfer Payments**

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```json
{
    "id": "d5eab137-38df-4b23-bc8b-2b8f4839b6fa", //payment id
    "reference": "ref-300caf7a-3f09-4f88-add3-bb7fb82ccf61",
    "spotflowReference": "SPF-KPY-8246d0866da9474f97a7d5691791ddff",
    "amount": 10.00,
    "currency": "USD",
    "localAmount": 15553.40,
    "localCurrency": "NGN",
    "channel": "bank_transfer",
    "status": "pending",
    "customer": {
        "id": "3839716c-35b4-40f9-a04f-af8a399fb147",
        "name": "Julien Rippin",
        "email": "customer@email.com"
    },
    "rate": 1555.34,
    "provider": "korapay",
    "region": "Nigeria",
    "bankDetails": {
        "accountNumber": "8836512027",
        "bankName": "Test Bank"
    }
}
```

If the status of the transaction shows either <span style={{color: "red"}}>`pending`</span>, <span style={{color: "red"}}>`sucessful`</span> or <span style={{color: "red"}}>`failed`</span>, <a target="_blank" href={"../api/API Endpoints/Collections/verify-collection"}>Verify the Payment</a> to confirm the final status of the transaction.
