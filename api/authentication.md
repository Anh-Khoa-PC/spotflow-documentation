---
title: Authentication
sidebar_position: 2
---

# Authentication

Secure authentication is crucial for protecting your account and ensuring authorized access. Authenticate your API calls by including your secret key in the Authorization header of every request you make.

## API Key Management

Spotflow provides two key types for API access: public keys and secret keys. You can manage these keys from your Spotflow dashboard.

- **Public Keys**: Primarily used for frontend integrations with Spotflow Inline and Mobile SDKs. These keys are designed to initiate collections for your account but cannot modify other account details.

- **Secret Keys (sk_test_ for test mode, sk_live_ for live mode)**: These keys grant extensive privileges and must be kept confidential, ***Never share your secret keys in public locations like code repositories (GitHub), client-side code, or other unsecured environments.***
<br></br>
:::warning[Compromised Secret Keys]
If you suspect a compromise or wish to reset your secret keys, you can do so from your Spotflow dashboard.
:::
<br></br>
:::important[Restricted API Keys]
For advanced users, Spotflow offers restricted API keys that allow for granular permission control.
:::
<br></br>
## Authentication Process

All API requests to Spotflow must be authenticated using your secret key. Here's how to achieve this:
- Include your secret key in the Authorization header of every request. The specific format for including the key will be detailed in the individual API endpoint documentation.
- **HTTPS is mandatory**: All API requests must be made over HTTPS for secure communication. Requests made over plain HTTP will fail.
- **Authentication Failure**: Calls made without proper authentication will result in a 401 Unauthorized status code response from the API.

By following these guidelines, you can ensure secure and authorized access to Spotflow's APIs.