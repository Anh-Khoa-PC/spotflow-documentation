---
title: Android SDK
---
import Admonitions from "../../src/components/Admonition/Admonitions"

# Introduction 

The Spotflow Android SDK empowers developers to seamlessly integrate payment functionalities into their Android applications. It provides UI components and methods that allow you accept payment in your Android app.

## Project Requirements

To integrate the Spotflow Android SDK into your project, ensure the following prerequisites are met:

- Android Studio 4.1 or later
- Android SDK API level 21 or higher while the minimum supported SDK version is 15
- Android Gradle Plugin 7.2 and above
- Gradle 7.1.3 and above
- AndroidX

:::warning[Beta Release]
The Android SDK is currently a beta release. If you encounter any issues, kindly reach out to our support team at **support@spotflow.one**. 
:::

## Installation

1. Add the Spotflow SDK dependency to your app-level <span style={{color: "red"}}>`build.gradle`</span> file:

```groovy
dependencies {
  implementation 'com.spotflow:spotflow-android:latest_version'
}
```

2. Add the Internet permission to your <span style={{color: "red"}}>`AndroidManifest.xml`</span> file:

```xml
<uses-permission android:name="android.permission.INTERNET" />
```

3. Sync your project with Gradle files to download the SDK into your project. Upon installation, you gain access to the UI components and methods to accept seamless payment experiences in your Android app.

## Parameters Required by the Library

| Parameter | Type | Description |
|:----------|:-----------|:---------|
|<span style={{color: "red"}}>`merchantId`</span> | <span style={{color: "red"}}>`String`</span> |  The unique identifier for the merchant.|
|<span style={{color: "red"}}>`paymentId`</span> | <span style={{color: "red"}}>`String`</span> | The unique identifier for the payment transaction.|
|<span style={{color: "red"}}>`fromCurrency`</span> | <span style={{color: "red"}}>`String`</span> | The currency from which the payment is made.|
|<span style={{color: "red"}}>`toCurrency`</span> | <span style={{color: "red"}}>`String`</span> | The currency to which the payment is converted.|
|<span style={{color: "red"}}>`amount`</span> | <span style={{color: "red"}}>`Double`</span> | The amount to be paid.|
|<span style={{color: "red"}}>`key`</span> | <span style={{color: "red"}}>`String`</span> | The API key for authenticating the transaction.|
|<span style={{color: "red"}}>`provider`</span> | <span style={{color: "red"}}>`String`</span> | The payment provider handling the transaction.|
|<span style={{color: "red"}}>`customerEmail`</span> | <span style={{color: "red"}}>`String`</span> | The email address of the customer.|
|<span style={{color: "red"}}>`customerName`</span> | <span style={{color: "red"}}>`String?`</span> | The name of the customer (optional).|
|<span style={{color: "red"}}>`customerPhoneNumber`</span> | <span style={{color: "red"}}>`String?`</span> | The phone number of the customer (optional).|
|<span style={{color: "red"}}>`customerId`</span> | <span style={{color: "red"}}>`String?`</span> | The unique identifier for the customer (optional).|
|<span style={{color: "red"}}>`paymentDescription`</span> | <span style={{color: "red"}}>`String?`</span> | A description of the payment (optional).|
|<span style={{color: "red"}}>`appLogo`</span> | <span style={{color: "red"}}>`Int?`</span> | The resource ID for the app logo (optional).|
|<span style={{color: "red"}}>`appName`</span> | <span style={{color: "red"}}>`String?`</span> | The name of the app (optional).|


:::warning[Protect Your API Keys]
For enhanced security, avoid exposing your API keys on your application. API requests requiring your API key should originate from your server environment. This safeguards your sensitive information and reduces the risk of unauthorized access. 
:::


## Usage with Jetpack Compose

For users utilizing Jetpack Compose, you can directly use the composable function <span style={{color: "red"}}>`PaymentUI`</span>.

### Integration Example

```kotlin
// MainActivity.kt
package com.example.app

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import com.spotflow.compose.PaymentUI

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            PaymentUI(
                merchantId = "your_merchant_id",
                paymentId = "your_payment_id",
                fromCurrency = "USD",
                toCurrency = "EUR",
                amount = 100.0,
                key = "your_key",
                customerEmail = "customer@example.com",
                customerName = "John Doe",
                customerPhoneNumber = "1234567890",
                paymentDescription = "Payment for services",
                appLogo = R.drawable.your_logo,
                appName = "Your App",
                onSuccess = { transactionId, paymentData ->
                    // Handle successful payment
                },
                onFailure = { errorCode, errorMessage ->
                    // Handle payment failure
                }
            )
        }
    }
}

```

## Usage by Launching an Activity

For users who do not use Jetpack Compose, you can integrate the payment functionality by launching a provided activity.

### Integration Example

```kotlin
// MainActivity.kt
package com.example.app

import android.app.Activity
import android.content.Intent
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.spotflow.compose.PaymentActivity

class MainActivity : AppCompatActivity() {

    private val PAYMENT_REQUEST_CODE = 1001

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // Initialize payment
        SpotFlowPaymentActivity.start(
            context = this,
            merchantId = "your_merchant_id",
            paymentId = "your_payment_id",
            fromCurrency = "USD",
            toCurrency = "EUR",
            amount = 100.0,
            key = "your_key",
            provider = "provider_name",
            customerEmail = "customer@example.com",
            customerName = "John Doe",
            customerPhoneNumber = "1234567890",
            customerId = "customer_id",
            paymentDescription = "Payment for services",
            appLogo = R.drawable.your_logo,
            appName = "Your App",
            requestCode = PAYMENT_REQUEST_CODE
        )
    }

    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.onActivityResult(requestCode, resultCode, data)
        if (requestCode == PAYMENT_REQUEST_CODE) {
            if (resultCode == Activity.RESULT_OK) {
                val transactionId = data?.getStringExtra("transactionId")
                val paymentData = data?.getSerializableExtra("paymentData") as? Map<String, Any>
                // Handle successful payment
            } else if (resultCode == Activity.RESULT_CANCELED) {
                val errorCode = data?.getStringExtra("errorCode")
                val errorMessage = data?.getStringExtra("errorMessage")
                // Handle payment failure
            }
        }
    }
}
```

## Help

<Admonitions type={"note"}>Feel free to create issues and pull requests on <a href="https://github.com/Spotflow-One/spotflow-android" target="_blank" style={{textDecoration: "underline"}}>GitHub</a> if you need any help.</Admonitions>