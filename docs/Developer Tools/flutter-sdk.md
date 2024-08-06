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
  spotflow: ^1.0.0
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
    paymentId: "unique_payment_id",
    fromCurrency: "NGN",
    toCurrency: "USD",
    amount: 10,
    key: "your_api_key",
    paymentDescription: "Product purchase",
    appLogo: SizedBox() // Optional
 );
```

### Parameters

- **context**: The <span style={{color: "red"}}>`BuildContext`</span> of the application.
- **paymentManager**: An instance of <span style={{color: "red"}}>`SpotFlowPaymentManager`</span> containing the payment details.

## SpotFlowPaymentManager

The <span style={{color: "red"}}>`SpotFlowPaymentManager`</span> class requires the following parameters:
- **merchantId**: The unique identifier for the merchant.
- **customerEmail**: The email address of the customer.
- **paymentId**: A unique identifier for the payment.
- **fromCurrency**: The currency from which the amount is being converted.
- **toCurrency**: The currency to which the amount is being converted.
- **amount**: The amount to be paid.
- **key**: The API key for the payment provider.
- **paymentDescription**: A description of the payment.
- **appLogo**: An image widget for the application logo.

### Testing Your Implementation

Use test cards provided by your payment provider to test your implementation.

## Running the Example Project

<!-- An example project has been provided on our [Github repository]("https://github.com/Spotflow-One/spotflow_flutter") -->
. Clone the repository and navigate to the example folder. Open it with a supported IDE or run <span style={{color: "red"}}>`flutter run`</span> from the terminal in that folder.