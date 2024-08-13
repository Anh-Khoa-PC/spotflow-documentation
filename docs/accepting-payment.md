---
title: Accepting Payment
id: accepting-payment
---
<!-- <div class="accepting-payment"> -->
:::note[To summarize]
*Payments are processed by creating a transaction using either our API, JavaScript libraries, Inline JS, or SDKs.*
:::

<br></br>

At Spotflow, we understand that every business is unique, which is why we offer a diverse range of payment solutions to cater to the specific needs of your business.

## For seamless in-app or website checkout:

- **Spotflow Embed**: Our client-side integration provides a smooth and intuitive checkout experience for your customers. By embedding our JavaScript library directly into your checkout page, you can create a smooth payment flow without redirecting users away from your site. We handle the entire payment process, from initiating the transaction to delivering payment confirmation.

**For businesses with custom payment flows**:

- **Spotflow Classic**: If you prefer to build your own unique payment experience, our Payment API empowers you to create custom payment flows tailored to your business. You have full control over the user interface and payment collection process while leveraging Spotflow's robust payment processing capabilities.

:::note[]
When a payment is successful, Spotflow notifies you by sending a "charge.success" webhook event to the designated webhook URL you provide. Learn more about using <a style={{textDecoration: "underline"}} target="_blank" href={"https://hookdeck.com/webhooks/guides/what-are-webhooks-how-they-work"}>webhooks</a>
:::

With Spotflow, you can choose the payment solution that best aligns with your business goals and technical capabilities. Our dedicated support team is always ready to assist you in selecting the optimal solution and providing guidance throughout the integration process.

:::warning[Note]
**For maximum security and to prevent unauthorized access, always keep your Spotflow secret key strictly confined to your server environment**. Exposing it on the client-side creates a significant security risk. To ensure the integrity of your application and protect sensitive data, all interactions with the Spotflow API must be initiated and managed exclusively from your server while your frontend gets the response from your server.
:::
<!-- </div> -->