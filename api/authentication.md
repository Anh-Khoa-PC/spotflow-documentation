---
title: Authentication
hide_title: true
sidebar_position: 2
---
<!-- <div className='authBody'> -->
<!-- <span className='authHead'> -->
## Authentication
<!-- </span> -->

Secure authentication is crucial for protecting your account and ensuring authorized access. All API requests require authentication with your secret key, kindly include it in the <span style={{color: "red"}}>`Authorization`</span> header for secure access.


### API Key Management

Spotflow provides two key types for API access: public keys and secret keys. You can manage these keys from your Spotflow dashboard.

- **Public Keys**: Primarily used for frontend integrations with Spotflow Inline and Mobile SDKs. These keys are designed to initiate payment collections for your account but cannot modify other account details.

- **Secret Keys (sk_test_ for test mode, sk_live_ for live mode)**: These keys grant extensive privileges and must be kept confidential, ***Never share your secret keys in public locations like code repositories (GitHub), client-side code, or other unsecured environments.***
<br></br>
:::warning[Compromised Secret Keys]
If you suspect a compromise or wish to reset your secret keys, you can do so from your Spotflow dashboard.
:::
<br></br>
<!-- :::important[Restricted API Keys]
For advanced users, Spotflow offers restricted API keys that allow for granular permission control.
::: -->
<br></br>
### Authentication Process

All API requests to Spotflow must be authenticated using your secret key. Here's how to achieve this:
- **Include your secret key** in the Authorization header of every request. The specific format for including the key will be detailed in the individual API endpoint documentation.
- **HTTPS is mandatory**: All API requests must be made over HTTPS for secure communication. Requests made over plain HTTP will fail.
- **Authentication Failure**: Calls made without proper authentication will result in a 401 Unauthorized status code response from the API.

Secure your API requests by including an Authorization header in the following format:
<p style={{color: 'red'}}>`Authorization: Bearer SECRET_KEY`</p>

```json
{
    "Authorization": "Bearer sk_test_6988f8d1539a48ab945764ec361fa3eb"
}
```

We've provided a sample API key so you can test with no delay. To test functionalities specific to your account, you'll need to replace this sample key with your own. Do not submit personally identifiable information in requests made with this sample API key. This key is for testing purposes only and may not have the necessary security restrictions for handling sensitive data.

By following these guidelines, you can ensure secure and authorized access while integrating with Spotflow's APIs.
<!-- </div> -->