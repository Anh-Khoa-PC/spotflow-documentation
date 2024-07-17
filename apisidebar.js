/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {
  tutorialSidebar: 
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
        type: 'category',
        label: 'API Endpoints',
        className: 'api-endpoints-class',
        items:[
          {
            type: 'category',
            label: 'Collections',
            className: 'collections',
            items: [
              "API Endpoints/Collections/Create-Collection",
              "API Endpoints/Collections/verify-collection",
              "API Endpoints/Collections/authorize-collections",
              "API Endpoints/Collections/validate-collections",
              "API Endpoints/Collections/create-bulk-collections",
              "API Endpoints/Collections/list-collections",
              "API Endpoints/Collections/fetch-collections",
            ]
          },
          {
            type: 'category',
            label: 'Subscription Plans',
            className: 'subscription-plans',
            items: [
              'API Endpoints/Subscription Plans/create-single-plan',
              'API Endpoints/Subscription Plans/create-bulk-plans',
              'API Endpoints/Subscription Plans/list-single-plans',
              'API Endpoints/Subscription Plans/list-all-plans',
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
            items: [
              'API Endpoints/Subscriptions/create-subscription',
              'API Endpoints/Subscriptions/list-subscription',
              'API Endpoints/Subscriptions/fetch-subscription',
              'API Endpoints/Subscriptions/activate-subscription',
              'API Endpoints/Subscriptions/cancel-subscription',
            ]
          },
          {
            type: 'category',
            label: 'Settlement',
            className: 'settlement',
            items: [
              "API Endpoints/Settlements/list-settlements",
              "API Endpoints/Settlements/list-settlements-transaction",
              "API Endpoints/Settlements/get-settlement"
            ]
          },
          {
            type: 'category',
            label: 'Disputes',
            className: 'disputes',
            items: [
              "API Endpoints/Disputes/list-disputes",
              "API Endpoints/Disputes/fetch-dispute",
              "API Endpoints/Disputes/get-collection-disputes",
              "API Endpoints/Disputes/update-dispute",
              "API Endpoints/Disputes/add-dispute-proof",
              "API Endpoints/Disputes/resolve-dispute"
            ]
          },
          {
            type: 'category',
            label: 'Refund',
            className: 'refund',
            items: [
              'API Endpoints/Refunds/create-refund',
              'API Endpoints/Refunds/list-refunds',
              'API Endpoints/Refunds/fetch-refunds',
            ]
          },
        ] 
      }
    ]
}

export default sidebars;