---
title: Recurring Payment
id: recurring-payment
hide_title: true
---
import Admonitions from "../src/components/Admonition/Admonitions"


# Recurring Payment


Spotflow offers robust recurring payment capabilities to streamline your subscription-based business operations. This consists of two flexible methods for handling recurring payments:

1. **Automated Payment Plans**: Set up a billing cycle and amount, and let Spotflow handle the rest. We'll automatically charge your customers on the specified dates.
2. **Manual Card Charging**: For complete control, manage your subscriptions and charge customer cards directly using the card token. This option requires you to handle the payment process independently.

<Admonitions type={"warning"}>
**Limited to card payments**: Subsequent payments can be processed more quickly by storing a customer's card authorization after their initial successful card transaction. Please note that recurring payments are only supported on payment methods that can be tokenized. Hence, this is currently limited to card payments.
</Admonitions>

## Payment Plans

Spotflow allows you to create payment plans that represents a recurring billing schedule for a customer. It defines the billing cycle, amount, currency, frequency, and other relevant details for your subscription products. Once a customer subscribes to a plan, Spotflow automatically handles the recurring charges on the specified dates.

**Key features of payment plans**:
- **Customization**: Define billing cycles (daily, weekly, monthly, annually, etc.), amount, and other plan-specific details.
- **Automatic charging**: Spotflow handles the recurring charges on the specified dates.

## Creating a Payment Plan

To set up a recurring billing plan, you'll need to provide the following information:

- **Plan Title**: A descriptive label for the plan, which will be used in customer communications.
- **Billing Frequency**: Specify how often you want to charge your customers. Choose from daily, weekly, monthly, quarterly, annually, or a custom interval (e.g., every 2 months).
- **Amount**: Determine the charge amount for each billing cycle. You can set this upfront or define it dynamically during payment collection.
- **Currency**: Select the currency for the charges. This has to be specified always as you can choose for it to either be in USD or in the local currency of your region.
- **Region ID**:  Specify the region ID for the payment. This is important as we are aware some merchants have different prices for a specific product across different regions. To see our available regions, kindly go to our <span style={{color: "red"}}>`Fetch Region List`</span> endpoint to know your region ID.

Once you've defined these parameters, use Spotflow <span style={{color: "red"}}>`Create Payment Plan`</span> endpoint to establish the recurring billing structure. Here's a sample of what the request body and response looks like: 

<span style={{color: "red"}}>`POST/api/v1/plans`</span>

<br></br>
<br></br>
**Request Body**:
```json
{
    "title": "Audiomack",
    "frequency": "DAILY", // Can be daily, weekly, monthly, yearly
    "internalReference": "test",
    "amount": 10,
    "currency": "NGN",
    "regionId": "1"
}
```

**Response**:
```json
{
    "id": "plan_id",
    "title": "Audiomack",
    "frequency": "DAILY",
    "internalReference": "test",
    "amount": 10,
    "currency": "USD",
    "status": "active",
    "createdAt": "2024-07-23T12:17:44.508587Z"
 }
```

## Adding a Customer to a Subscription

To enroll a customer in a subscription, simply reference the plan ID when initiating their first charge. This streamlined process applies to all payment methods supported by Spotflow, including <span style={{color: "red"}}>`Inline`</span>, <span style={{color: "red"}}>`Classic`</span>, and <span style={{color: "red"}}>`Direct Card Charge`</span>.
<Admonitions type={'warning'} icon={'📌'} title={'Important'}>
Ensure consistency in currency selection by using the same currency for both the payment plan and the initial charge.
</Admonitions>
<br></br>
<Admonitions type={"note"} icon={"💳"} title={'Card Payment'}>
Please note that specifying a payment plan when processing a card payment automatically designates the card as the default payment method for subsequent subscription charges.
</Admonitions>
<br></br>

```js
<script>
    const openCheckout = () => {
    const { CheckoutForm } = SpotflowCheckout
    const checkout = new CheckoutForm(
        merchantKey = "merchant_key",
        email = "email",
        amount = 1000,
    );
    checkout.setup();
};
</script>
```

After the initial successful payment, Spotflow will charge the card subsequently based on the frequency set for the payment plan.

## Canceling and activating

There are two ways to cancel your subscription:

1. You can cancel an individual customer's subscription from the Plans page on the dashboard or through the <span style={{color: "red"}}>`Cancel Subscription Endpoint`</span>.
2. Canceling an entire payment plan will cancel all associated subscriptions, which can also be done via the Plans page on your dashboard or through the <span style={{color: "red"}}>`Cancel Plan Endpoint`</span>.

Canceling a subscription will trigger a webhook event.

Canceled subscriptions and plans can be activated later, via the <span style={{color: "red"}}>`Activate Subscription`</span> and <span style={{color: "red"}}>`Update Plan`</span> endpoints respectively.

## Webhooks

Every time you attempt to charge a customer's card, an event will be sent to a specified webhook URL with the details of the charge and the result. A webhook will also be sent when a subscription is canceled.

Here are some webhook payloads examples:

**Successful Charge**:
```json
{
  "event": "charge.success",
  "data": {
    "id": "ch_1234567890123456",
    "amount": 10000,
    "currency": "NGN",
    "customer_id": "cus_1234567890123456",
    "created_at": "2023-11-22T12:34:56Z",
    "authorization_code": "AUTH_1234567890123456",
    "payment_method": "card",
    "status": "success",
    "metadata": {
      "order_id": "order_12345"
    }
  },
  "livemode": false
}
```
<br></br>
<Admonitions type={"note"} icon={"💻"} title={'Webhooks'}>
Spotflow provides webhooks to notify you of payment events (e.g., successful charge, failed charge, subscription canceled).
</Admonitions>

**Canceled Subscription**:

```json
{
  "event": "subscription.canceled",
  "data": {
    "id": "sub_1234567890123456",
    "customer_id": "cus_1234567890123456",
    "status": "canceled",
    "canceled_at": "2023-11-22T12:34:56Z",
    "plan_id": "plan_1234567890123456",
    "current_period_end": "2023-12-22T12:34:56Z",
    "metadata": {
      "reason": "customer_request"
    }
  }
}
```

## Card Tokenization

To ensure secure handling of customer card information, Spotflow utilizes card tokenization. Tokenization allows you to implement recurring payments by saving a *token* representing the customer's card and using that on subsequent charges. When a customer provides their card details, we replace the sensitive information with a unique token. This token can then be used for subsequent transactions without exposing the original card data.

Key benefits of card tokenization:
- **Enhanced security**: Protects sensitive card information from breaches.
- **Simplified payment processing**: Streamline recurring payments with tokenized cards.
- **PCI compliance**: Helps meet PCI DSS compliance requirements.

:::warning
Card tokenization is a prerequisite for recurring payments.

Also, You should never save a customer's card details; the details are represented by a *token*, which is what you save.
:::

## See more

To learn more about what you can do with plans on Spotflow, check out our <span style={{color: "red"}}>`API Reference`</span>. If you've got any questions, don’t hesitate to reach out to our support team at **support@spotflow.one**.