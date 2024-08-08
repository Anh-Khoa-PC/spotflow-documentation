---
title: iOS SDK
---

# Introduction

The Spotflow iOS SDK is a SwiftUI library that allows developers to integrate payment collection functionality into their iOS applications. It provides a simple interface to navigate to a payment screen, handle payment logic, and manage success or failure callbacks using the <span style={{color: "red"}}>`SpotFlowPaymentUI`</span> class.


:::warning[Beta Release]
The iOS SDK is currently a beta release. If you encounter any issues, kindly reach out to our support team at **support@spotflow.one**. 
:::

## Project Requirements

To integrate the Spotflow iOS SDK into your project, ensure the following prerequisites are met:

- XCode 12 or later
- iOS 11 or later
- Swift 5.3 or later
- CocoaPods (for package/dependency management)

## Installation

### Swift Package Manager

To add <span style={{color: "red"}}>`SpotFlow - iOS SDK`</span> to your project using Swift Package Manager, add the following dependency to your <span style={{color: "red"}}>`Package.swift`</span> file:

```swift
dependencies: [
    .package(url: "<https://github.com/yourusername/SpotFlow-iOS-SDK.git>", from: "1.0.0")
],
targets: [
    .target(
        name: "YourApp",
        dependencies: ["SpotFlow-iOS-SDK"]),
]
```

## Usage

### Importing the Library

To use <span style={{color: "red"}}>`SpotFlow - iOS SDK`</span> in your SwiftUI view, import the library at the top of your Swift file:

```swift
import SpotFlow_iOS_SDK
```

### Navigating to the Payment Screen

To navigate to the payment screen and initiate a payment process, create an instance of <span style={{color: "red"}}>`SpotFlowPaymentManager`</span> with the required parameters and pass it to <span style={{color: "red"}}>`SpotFlowPaymentUI`</span>.

### Example Usage

```swift
import SwiftUI
import SpotFlow_iOS_SDK

struct ContentView: View {
    @State private var showPaymentScreen = false

    var body: some View {
        VStack {
            Text("Welcome to My App")
                .font(.largeTitle)
                .padding()

            Button("Buy Now") {
                showPaymentScreen = true
            }
            .padding()
            .background(Color.blue)
            .foregroundColor(.white)
            .cornerRadius(8)
        }
        .background(
            NavigationLink(
                destination: SpotFlowPaymentUI(
                    manager: SpotFlowPaymentManager(
                        merchantId: "your_merchant_id",
                        paymentId: "your_payment_id",
                        fromCurrency: "USD",
                        toCurrency: "EUR",
                        amount: 9.99,
                        key: "your_key",
                        provider: "your_provider",
                        customerEmail: "customer@example.com",
                        customerName: "John Doe",
                        customerPhoneNumber: "1234567890",
                        customerId: "customer_id",
                        paymentDescription: "Payment for goods",
                        appLogo: Image(systemName: "app.fill"),
                        appName: "My App"
                    ),
                    onPaymentSuccess: {
                        print("Payment successful")
                    },
                    onPaymentFailure: { error in
                        print("Payment failed: \\(error.localizedDescription)")
                    }
                ),
                isActive: $showPaymentScreen,
                label: {
                    EmptyView()
                }
            )
        )
    }
}
```

## SpotFlowPaymentUI Parameters

- <span style={{color: "red"}}>`manager`</span>: An instance of <span style={{color: "red"}}>`SpotFlowPaymentManager`</span> containing payment and customer information.
- <span style={{color: "red"}}>`onPaymentSuccess`</span>: A closure that gets called when the payment is successful.
- <span style={{color: "red"}}>`onPaymentFailure`</span>: A closure that gets called when the payment fails, with an error as a parameter.

## SpotFlowPaymentManager

<span style={{color: "red"}}>`SpotFlowPaymentManager`</span> is a struct that holds all necessary information for a payment transaction.

### Properties

- <span style={{color: "red"}}>`merchantId`</span>: The merchant ID (String).
- <span style={{color: "red"}}>`paymentId`</span>: The payment ID (String).
- <span style={{color: "red"}}>`fromCurrency`</span>: The currency being paid from (String).
- <span style={{color: "red"}}>`toCurrency`</span>: The currency being paid to (String).
- <span style={{color: "red"}}>`amount`</span>: The amount to be paid (Double).
- <span style={{color: "red"}}>`key`</span>: The API key for the payment provider (String).
- <span style={{color: "red"}}>`customerEmail`</span>: The customer's email (String).
- <span style={{color: "red"}}>`customerName`</span>: The customer's name (String, optional).
- <span style={{color: "red"}}>`customerPhoneNumber`</span>: The customer's phone number (String, optional).
- <span style={{color: "red"}}>`customerId`</span>: The customer ID (String, optional).
- <span style={{color: "red"}}>`paymentDescription`</span>: A description of the payment (String, optional).
- <span style={{color: "red"}}>`appLogo`</span>: The logo of the app (Image, optional).
- <span style={{color: "red"}}>`appName`</span>: The name of the app (String, optional).


### Initializer

```swift
init(
    merchantId: String,
    paymentId: String,
    fromCurrency: String,
    toCurrency: String,
    amount: Double,
    key: String,
    customerEmail: String,
    customerName: String? = nil,
    customerPhoneNumber: String? = nil,
    customerId: String? = nil,
    paymentDescription: String? = nil,
    appLogo: Image? = nil,
    appName: String? = nil
)
```

## Handling Error Messages

This SDK provides comprehensive error handling mechanisms to assist in troubleshooting and providing informative feedback to users. Upon encountering an error, detailed error codes and descriptions are returned. By extracting error messages from the response, you can effectively communicate the issue to the user and take appropriate actions. Ensure you implement appropriate error handling mechanisms to provide informative feedback to the user.

## Testing

Thoroughly test the integration with different payment scenarios including successful payments, failures, and edge cases to ensure a smooth user experience. Spotflow provides testing helpers that allows you to simulate different payment scenarios.

For your convenience, here are the testing helpers available:

- **Card Testing**: Use the card details provided by your payment provider’s documentation to simulate successful and failed card transactions.
- **Bank Transfer Testing**: Test bank transfer scenarios with the testing account details provided by your payment provider’s documentation.
- **USSD Testing**: You can also test USSD transactions using the provided USSD codes and instructions from your payment provider’s documentation.

These testing helpers help you ensure that your integration handles various payment scenarios effectively before deploying your application to a production environment. It's recommended to thoroughly test your integration with these testing details to provide a reliable payment experience to your users.