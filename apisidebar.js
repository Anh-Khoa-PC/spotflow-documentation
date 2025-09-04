/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {
  api: 
  [
      {
        type: 'doc',
        id: 'intro',
        className: 'intro'
      },
      {
        type: 'doc',
        id: 'authentication',
        className: 'authentication'
      },
      {
        type: 'doc',
        id: 'errors',
        className: 'errors'
      },
      {
        type: 'doc',
        id: 'fetch-region-for-merchant'
      },
      // {
      //   type: 'category',
      //   label: 'API Endpoints',
      //   className: 'api-endpoints-class',
      //   items:[
          {
            type: 'category',
            label: 'Payments Collection',
            className: 'collections',
            collapsed: false,
            items: [
              "API Endpoints/Collections/Create-Collection",
              "API Endpoints/Collections/initialize-collections",
              "API Endpoints/Collections/verify-collection",
              "API Endpoints/Collections/authorize-collections",
              // "API Endpoints/Collections/validate-collections",
              // "API Endpoints/Collections/create-bulk-collections",
              "API Endpoints/Collections/list-collections",
              "API Endpoints/Collections/fetch-collections",
            ]
          },
          {
            type: 'category',
            label: 'Subscription Plans',
            className: 'subscription-plans',
            collapsed: false,
            items: [
              'API Endpoints/Subscription Plans/create-single-plan',
              'API Endpoints/Subscription Plans/create-bulk-plans',
              'API Endpoints/Subscription Plans/list-single-plans',
              // 'API Endpoints/Subscription Plans/list-all-plans',
              'API Endpoints/Subscription Plans/fetch-plan',
              'API Endpoints/Subscription Plans/update-plan',
              'API Endpoints/Subscription Plans/cancel-plan',
              'API Endpoints/Subscription Plans/activate-plan'
            ]
          },
          {
            type: 'category',
            label: 'Subscriptions',
            className: 'subscriptions',
            collapsed: false,
            items: [
              // 'API Endpoints/Subscriptions/create-subscription',
              'API Endpoints/Subscriptions/list-subscription',
              'API Endpoints/Subscriptions/fetch-subscription',
              'API Endpoints/Subscriptions/activate-subscription',
              'API Endpoints/Subscriptions/cancel-subscription',
            ]
          },
          {
            type: "category",
            label: "Sub Accounts",
            className: "subaccounts",
            collapsed: "false",
            items: [
              'API Endpoints/Sub Accounts/create-subaccounts',
              'API Endpoints/Sub Accounts/fetch-subaccount-by-id',
              //'API Endpoints/Sub Accounts/fetch-subaccounts',
              'API Endpoints/Sub Accounts/get-accountbalance-bysubaccount',
              'API Endpoints/Sub Accounts/get-accountbalance',
              'API Endpoints/Sub Accounts/get-main-accountbalance',
              'API Endpoints/Sub Accounts/list-subaccounts'
            ]
          },
          {
            type: "category",
            label: "Transfer API",
            className: "transferapi",
            collapsed: "false",
            items: [
              'API Endpoints/Transfer API/create-transfer',
              'API Endpoints/Transfer API/list-allbanks',
              'API Endpoints/Transfer API/resolve-bankaccount',
              'API Endpoints/Transfer API/fetch-transferreference',
            ]
          },
          {
            type: "category",
            label: "Bulk Transfer API",
            className: "bulktransferapi",
            collapsed: "false",
            items: [
              'API Endpoints/Transfer API/Bulk Transfer APIS/create-bulk-transfer.md',
              'API Endpoints/Transfer API/Bulk Transfer APIS/get-bulk-transfer-by-ID.md',
              'API Endpoints/Transfer API/Bulk Transfer APIS/get-bulk-transfer-categories.md',
              'API Endpoints/Transfer API/Bulk Transfer APIS/get-all-bulk-transfers.md',
              'API Endpoints/Transfer API/Bulk Transfer APIS/get-bulk-transfers-by-ID.md',
              'API Endpoints/Transfer API/Bulk Transfer APIS/validate-bulktransferCSV.md',
            ]
          },
          {
            type: "category",
            label: "Virtual Accounts",
            className: "virtualaccounts",
            collapsed: "false",
            items: [
              'API Endpoints/Virtual Accounts/create-virtualaccounts',
              'API Endpoints/Virtual Accounts/fetch-virtualaccounts',
              'API Endpoints/Virtual Accounts/list-virtualaccounts'
            ]
          }
          // {
          //   type: 'category',
          //   label: 'Settlement',
          //   className: 'settlement',
          //   collapsed: false,
          //   items: [
          //     "API Endpoints/Settlements/list-settlements",
          //     // "API Endpoints/Settlements/list-settlements-transaction",
          //     "API Endpoints/Settlements/get-settlement"
          //   ]
          // },
          // {
          //   type: 'category',
          //   label: 'Disputes',
          //   className: 'disputes',
          //   collapsed: false,
          //   items: [
          //     "API Endpoints/Disputes/list-disputes",
          //     "API Endpoints/Disputes/fetch-dispute",
          //     "API Endpoints/Disputes/get-collection-disputes",
          //     "API Endpoints/Disputes/update-dispute",
          //     "API Endpoints/Disputes/add-dispute-proof",
          //     "API Endpoints/Disputes/resolve-dispute"
          //   ]
          // },
          // {
          //   type: 'category',
          //   label: 'Refund',
          //   className: 'refund',
          //   collapsed: false,
          //   items: [
          //     'API Endpoints/Refunds/create-refund',
          //     'API Endpoints/Refunds/list-refunds',
          //     'API Endpoints/Refunds/fetch-refunds',
          //   ]
          // },
        ] 
      }
    // ]
// }

export default sidebars;