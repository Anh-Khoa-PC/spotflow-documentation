---
title: Flutter SDK
---

# Flutter SDK

Our Flutter SDK provides a rich set of pre-built UI components and APIs to seamlessly integrate payment functionalities within your Flutter application.

## Introduction

The <span style={{color: "red"}}>`Spotflow Flutter SDK`</span> package allows developers to effortlessly integrate seamless payment functionalities into their Flutter applications. It supports both Android and iOS platforms, making it versatile for mobile app development.

## Installation

To use the <span style={{color: "red"}}>`Spotflow Flutter SDK`</span> package, add the following dependencies to your <span style={{color: "red"}}>`pubspec.yaml`</span> file:

```yaml
dependencies:
  spotflow: ^0.1.0-beta.1
```

Then run <span style={{color: "red"}}>`flutter pub get`</span> to fetch the package.

:::warning[Beta Release]
The Flutter SDK is currently a beta release. If you encounter any issues, kindly reach out to our support team at support@spotflow.one.
:::

## Usage

### Making Payments
To start the <span style={{color: "red"}}>`Spotflow`</span> package, use the <span style={{color: "red"}}>`Spotflow().start()`</span> method. This method requires a <span style={{color: "red"}}>`BuildContext`</span> and a <span style={{color: "red"}}>`SpotFlowPaymentManager`</span> with various parameters.

Here is an example of how to make a payment using the <span style={{color: "red"}}>`Spotflow`</span> package:

```dart
Spotflow().start( context: context,
 paymentManager: SpotFlowPaymentManager( merchantId: "",
  customerEmail: "customer@example.com" ,
  customerName: "John Snow", //optional
  customerPhoneNumber: "000-000-000", //optional
  customerId: "unique_id" //optional
  planId: "plan_id",
  amount: "amount",
  key: "your_api_key",
  encryptionKey: "encryption_key",
  paymentDescription: "Product purchase",
  appLogo: SizedBox() // Optional
 ),
 onComplete: (paymentResponseBody) {
 }
 );
```

### Parameters

- **context**: The <span style={{color: "red"}}>`BuildContext`</span> of the application.
- **paymentManager**: An instance of <span style={{color: "red"}}>`SpotFlowPaymentManager`</span> containing the payment details.
- onComplete: An optional function to be called when the payment is completed successfully.

## SpotFlowPaymentManager

The <span style={{color: "red"}}>`SpotFlowPaymentManager`</span> class requires the following parameters:
- **customerEmail**: The email address of the customer.
- **amount**: The amount to be paid.
- **key**: The API key for the payment provider.
- **planId**: The unique identifier for the payment plan.
- **encryptionKey**: The encryption key for securing the transaction.
- **customerId**: *(optional)*: The unique identifier for the customer.
- **customerName**: *(optional)*: The name of the customer.
- **customerPhoneNumber**: *(optional)*: The phone number of the customer.
- **paymentDescription**: *(optional)*: A description of the payment.
- **appLogo**: *(optional)*: An image widget for the application logo.
- **appName**: *(optional)*: The name of the application.

### Testing Your Implementation

Test cards can be found <a href="https://docs.spotflow.one/testing-payment" target="_blank" style={{textDecoration: "underline"}}>here</a>

## Running the Example Project

An example project has been provided on our <a href="https://github.com/Spotflow-One/spotflow_flutter" style={{textDecoration: "underline"}}>Github Repository</a>. Clone the repository and navigate to the example folder. Open it with a supported IDE or run <span style={{color: "red"}}>`flutter run`</span> from the terminal in that folder.