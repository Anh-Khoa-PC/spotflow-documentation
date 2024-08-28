---
title: InlineJS
pagination_next: null
---
import Admonitions from "../../src/components/Admonition/Admonitions"


## Introduction

InlineJS is Spotflow's JavaScript library designed to simplify the integration of payment functionalities into your web applications. By embedding InlineJS into your checkout page, you can create a seamless payment experience without the need for redirects. It integrates smoothly into your application, providing a streamlined checkout experience.

<!-- <Admonitions icon={"💡"} style={{backgroundColor: "purple"}}>
For React components and usage, <a href="https://github.com/Spotflow-One/react-spotflow-checkout" style={{textDecoration: "underline"}}>link</a>

For Vue.js components and usage, <a href="https://github.com/Spotflow-One/vue-spotflow-checkout" style={{textDecoration: "underline"}}>link</a>

For Angular components and usage, <a href="https://github.com/Spotflow-One/angular-spotflow-checkout" style={{textDecoration: "underline"}}>link</a>
</Admonitions> -->

## Browser Support

Spotflow InlineJS is compatible with all recent versions of modern web browsers that support ECMAScript 5 or later. This includes: 

- Google Chrome and Safari on all platforms.
- Mozilla Firefox and Microsoft Edge on desktop platforms.

While we support popular browsers, older versions and those with JavaScript restrictions, like Internet Explorer 9 and Opera Mini in Super Saver mode, are not supported.

## Installation

To integrate InlineJS into your web application, you can install via NPM: <span style={{color: "red"}}>`npm install @spot-flow/checkout-inline-js`</span> or CDN <span style={{color: "red"}}>`<script src="https://dr4h9151gox1m.cloudfront.net/dist/checkout-inline.js"></script>`</span> or via Yarn: <span style={{color: "red"}}>`yarn add @spot-flow/checkout-inline-js`</span>

If you used <span style={{color: "red"}}>`NPM`</span> or <span style={{color: "red"}}>`Yarn`</span>, ensure you import the library as shown below:

```js
// Add for NPM, Yarn
import { CheckoutForm } from "@spot-flow/checkout-inline-js";

const checkout = new CheckoutForm()
```

## Usage

### One Time Payment

```js
import { CheckoutForm } from "@spot-flow/checkout-inline-js";

const checkout = new CheckoutForm(
      merchantKey = "<sk_test_f998479c0eedhXXXXXXXXXXXXXXXX>"// This is your Merchant Secret Key generated for your Merchant on Spotflow
      email = "email",
      amount = 1000,
    );
checkout.setup();
```

Alternatively, to integrate InlineJS into your web application, you can include it directly in your HTML via a CDN. Include the following script tag in the <span style={{color: "red"}}>`<head>`</span> section of your HTML file: 

**HTML**

<span style={{color: "red"}}>`<script src="https://dr4h9151gox1m.cloudfront.net/dist/checkout-inline.js"></script>`</span>

<br></br>
<br></br>

```js
<button onclick="openCheckout()">
  Make Payment
</button>
```

```js
<script>
  const openCheckout = () => {
    const { CheckoutForm } = SpotflowCheckout
    const checkout = new CheckoutForm({}
    );
    checkout.setup({
      email: "customer@email.com",
      encryptionKey: "N9cCZmhZh1GITKnBMqSe5IFiljvj/HI739kGoOmoDNs=",
      merchantKey: "sk_test_6988f8d1539a48ab945764ec361fa3eb",
      amount: 5,
      onSuccess: (value) => {
        console.log("Fully Success", { value })
      }
    });
  };
</script>
```

:::warning[Protect Your Secret Key]
For enhanced security, avoid exposing your secret key on your application. API requests requiring your secret key should originate from your server environment. This safeguards your sensitive information and reduces the risk of unauthorized access. 
:::

## InlineJS Object

The InlineJS library provides a global <span >`Spotflow`</span> object with the following methods:
- **merchantKey**: Initializes the InlineJS library with your merchant secret key.
- **openCheckout()**: Opens the checkout modal with specified options.
- **closeCheckout():** Closes the checkout modal.
- **on(event, callback)**: Subscribes to InlineJS events i.e onclick.

## Subscriptions

```js
Spotflow.openCheckout({
  amount: 1000,
  currency: "NGN",
  merchantKey: "<sk_test_f998479c0eedhXXXXXXXXXXXXXXXX>" // This is your Merchant Secret Key generated for your Merchant on Spotflow
  plan: "plan_id", // Replace with your plan ID
  email: "customer@example.com",
  encryptionKey: "N9cCZmhZh1GITKnBMqSe5IFiljvj/HI739kGoOmoDNs=" // This is your encryption key for your card payment

  
  onSuccess: (value) => {
    console.log("Fully Success", { value })
      // Handles subscription creation or failure
  }
});
```

**Request Body:**

```yaml
{
    "amount": 1000,
    "currency": "NGN",
    "plan": "plan_id",
    "email": "customer@example.com",
}
```

**Response:**
```yaml
{
    "status": "success" | "failed",
    "data": {
        // Subscription details
    }
}
```

By following this guide and effectively utilizing InlineJS, you can implement a smooth and secure payment experience into your application.