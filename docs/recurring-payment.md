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

<Admonitions type={"warning"} icon={"💳"}>
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
- **Region ID**:  Specify the region ID for the payment. This is important as we are aware some merchants have different prices for a specific product across different regions. To know your region ID, kindly go to our <a target="_blank" style={{textDecoration: "underline"}} href={"../api/fetch-region-for-merchant"}>Fetch Region for Merchant</a> endpoint.

Once you've defined these parameters, use Spotflow <a target="_blank" href={"../api/API Endpoints/Subscription Plans/create-single-plan"} style={{textDecoration: "underline"}}>Create Plan</a> endpoint to establish the recurring billing structure. Here's a sample of what the request body and response looks like: 

<span style={{color: "red"}}>`POST`</span> https://dev-api.spotflow.one/api/v1/plans

<br></br>
**Request Body**:

```yaml
{
  "title": "Navigately Mini",
  "frequency": "DAILY", // Can be daily, weekly, monthly, yearly
  "internalReference": "ref-8080",
  "amount": 10,
  "currency": "NGN",
  "regionId": "1"
}
```

**Response**:
```yaml
 {
  "id": "plan_id",
  "title": "Navigately Mini",
  "frequency": "DAILY",
  "internalReference": "ref-8080",
  "amount": 10,
  "currency": "USD",
  "status": "active",
  "createdAt": "2024-07-23T12:17:44.508587Z"
 }
```

## Adding a Customer to a Subscription

To enroll a customer in a subscription, simply reference the plan ID when initiating their first charge. This streamlined process applies to all payment methods supported by Spotflow, including <span style={{color: "red"}}>`Embed`</span> and <span style={{color: "red"}}>`Classic`</span>. Here’s a sample request and a sample response below:

**Sample Request:**

```yaml
{
  "reference": "ref-{{$randomUUID}}",
  "planId": "5212007d-569f-4be5-a674-18ba21efb95f",
  "amount": 5000,
  "currency": "NGN",
  "customer": {
      "email": "customer@email.com"
  },
  "channel": "card",
  "encryptedCard": "tbkROEv/afX0e8W60hfDuxWvZ5ErlW2InTN5q8FpM24jaD1gdxISO3uLqWl8CSP9DXujSAMEM6M6S/V7SEbcukhAN/Toj1mTrSBmYZ7lQvfAc0009W70ErZ0wD4z6d+wIvDdOVzJZw=="
}

```

**Sample Response:**
```yaml
{
  "id": "6cf2cfac-3919-42d8-89ec-ab73e594d225",
  "reference": "ref-592109f8-9734-49e3-8c73-711510fac8b4",
  "spotflowReference": "SPF-FLW-4146f5abadb74f6395e3625503543940",
  "amount": 5000.00,
  "currency": "NGN",
  "channel": "card",
  "status": "pending",
  "customer": {
      "id": "3839716c-35b4-40f9-a04f-af8a399fb147",
      "email": "customer@email.com"
  },
  "rate": 1,
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

Ensure you authorize the payment with our <a target="_blank" href={"../api/API Endpoints/Collections/authorize-collections"} style={{textDecoration: "underline"}}>Authorize Payment Endpoint</a>

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
    const checkout = new CheckoutForm({}

    );
    checkout.setup({
      email: "customer@email.com",
      encryptionKey: "N9cCZmhZh1GITKnBMqSe5IFiljvj/xxxxx",
      merchantKey: "sk_test_6988f8d1539a48ab94xxxxx",
      planId: "3cbab046-f06a-4815-941d-d8xxxxx",
      amount: 5,
      onSuccess: (value) => {
        console.log("Fully Success", { value })
      }
    });
  };
</script>
```

After the initial successful payment, Spotflow will charge the card subsequently based on the frequency set for the payment plan.

## Canceling and Activating

There are two ways to cancel your subscription:

1. You can cancel an individual customer's subscription from the Plans page on the dashboard or through the <a target="_blank" href={"../api/API Endpoints/Subscriptions/cancel-subscription"} style={{textDecoration: "underline"}}>Cancel Subscription Endpoint</a>.
2. Canceling an entire payment plan will cancel all associated subscriptions, which can also be done via the Plans page on your dashboard or through the <a target="_blank" href={"../api/API Endpoints/Subscription Plans/cancel-plan"} style={{textDecoration: "underline"}}>Cancel Plan Endpoint</a>.

Canceling a subscription will trigger a webhook event.

Canceled subscriptions and plans can be activated later, via the <a target="_blank" href={"../api/API Endpoints/Subscription Plans/activate-plan"} style={{textDecoration: "underline"}}>Activate Subscription Plan</a> and <a target="_blank" href={"../api/API Endpoints/Subscription Plans/update-plan"} style={{textDecoration: "underline"}}>Update Plan</a> endpoints respectively.

## Webhooks

Every time you attempt to charge a customer's card, an event will be sent to a specified webhook URL with the details of the charge and the result. A webhook will also be sent when a subscription is canceled.

Here are some webhook payloads examples:

**Successful Charge**:
```yaml
`{
  "event": "payment_successful",
  "data": {
    "id": "03d06d45-b99b-4ec3-8853-ed2711cfa783",
    "amount": 500,
    "currency": "NGN",
    "customer_id": "3839716c-35b4-40f9-a04f-af8a399fb147",
    "created_at": "2024-08-20T11:49:41Z",
    "channel": "card",
    "status": "success"
}`
```
<br></br>
<Admonitions type={"warning"} icon={"💻"} title={'Webhooks'}>
Spotflow provides webhooks to notify you of payment events (e.g., successful charge, failed charge, subscription canceled).
</Admonitions>

**Canceled Subscription**:

```yaml
{
  "event": "subscription.canceled",
  "data": {
    "id": "03d06d45-b99b-4ec3-8853-ed2711cfa783",
    "customer_id": "3839716c-35b4-40f9-a04f-af8a399fb147",
    "status": "cancelled",
    "canceled_at": "2024-08-20T11:49:41Z",
    "plan_id": "3cbab046-f06a-4815-941d-d8cc7be43d59"
    }
}
```

## Card Tokenization

To ensure secure handling of customer card information, Spotflow utilizes card tokenization. Tokenization allows you to implement recurring payments by saving a *token* representing the customer's card and using that on subsequent charges. When a customer provides their card details, we replace the sensitive information with a unique token. This token can then be used for subsequent transactions without exposing the original card data.

Key benefits of card tokenization:
- **Enhanced security**: Protects sensitive card information from breaches.
- **Simplified payment processing**: Streamline recurring payments with tokenized cards.
- **PCI compliance**: Helps meet PCI-DSS compliance requirements.

:::warning[Note]
Card tokenization is a prerequisite for recurring payments.

Also, You should never save a customer's card details; the details are represented by a *token*, which is what you save.
:::

## See more

To learn more about what you can do with plans on Spotflow, check out our <span style={{color: "red"}}>`API Reference`</span>. If you've got any questions, don’t hesitate to reach out to our support team at **support@spotflow.one**.