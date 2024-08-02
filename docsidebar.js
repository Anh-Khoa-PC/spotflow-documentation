/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {
    tutorialSidebar: 
  [
    {
      type: 'doc',
      id: 'home',
      className: 'home'
    },
    {
      type: 'doc',
      id: 'accepting-payment'
    },
    {
      type: 'doc',
      id: 'recurring-payment'
    },
    {
      type: 'doc',
      id: 'currency-exchange',
    },
    {
      type: 'doc',
      id: 'settlement'
    },
    {
      type: 'category',
      label: 'Developer Tools',
      collapsed: false,
      items: [
        "Developer Tools/overview",
        "Developer Tools/ios-sdk",
        "Developer Tools/android-sdk",
        "Developer Tools/flutter-sdk",
        "Developer Tools/inline-js"
      ]
    },
    {
      type: 'category',
      label: 'Libraries',
      collapsed: false,
      items: [
        "Libraries/overview",
        "Libraries/react-library",
        "Libraries/angular-library",
        "Libraries/vue-library"
      ]
    }
  ]
}

export default sidebars;