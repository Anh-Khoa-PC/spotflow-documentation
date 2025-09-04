---
title: List All Banks
hide_title: true
---

## List All Banks

Get details of all banks, their names and codes. Currently, this is for NGN and GHS only. 

<span style={{color: "green"}}>`GET`</span> https://api.spotflow.co/api/v1/transfers/banks/:currency

**Headers**

| <p style={{fontWeight: '400'}}>authorization <br></br> <span style={{color: "red"}}>`String`</span></p> | <p style={{fontWeight: '400'}}><span style={{color: "red"}}>`Bearer SECRET_KEY`</span> <br></br> _Include your secret key in the request header as a Bearer token for authorization. Unauthorized requests will result in a 401 HTTP status code_.</p> |
| :------------------------------------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Response for NGN Banks:**

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```yaml
[
    {
        "bankCode": "SPB-56234",
        "bankName": "Nombank"
    },
    {
        "bankCode": "SPB-49366",
        "bankName": "5TT MFB "
    },
    {
        "bankCode": "SPB-99058",
        "bankName": "9Japay"
    },
    {
        "bankCode": "SPB-41463",
        "bankName": "9PSB"
    },
    {
        "bankCode": "SPB-14771",
        "bankName": "AB Microfinance Bank"
    },
    {
        "bankCode": "SPB-78923",
        "bankName": "AG Mortgage Bank"
    },
    {
        "bankCode": "SPB-15052",
        "bankName": "AMJU Microfinance Bank"
    },
    {
        "bankCode": "SPB-56019",
        "bankName": "ARM MFB "
    },
    {
        "bankCode": "SPB-72010",
        "bankName": "ASO Savings & Loans"
    },
    {
        "bankCode": "SPB-32542",
        "bankName": "Abbey Mortgage Bank"
    },
    {
        "bankCode": "SPB-25169",
        "bankName": "Abucoop MFB"
    },
    {
        "bankCode": "SPB-99065",
        "bankName": "Access Bank"
    },
    {
        "bankCode": "SPB-67276",
        "bankName": "Access Yellow"
    },
    {
        "bankCode": "SPB-75051",
        "bankName": "Accion Microfinance Bank"
    },
    {
        "bankCode": "SPB-80634",
        "bankName": "Adamawa Mortgage Bank "
    },
    {
        "bankCode": "SPB-64440",
        "bankName": "Addosser Microfinance Bank"
    },
    {
        "bankCode": "SPB-80673",
        "bankName": "Aella MFB"
    },
    {
        "bankCode": "SPB-98273",
        "bankName": "Airtel Smartcash PSB"
    },
    {
        "bankCode": "SPB-88312",
        "bankName": "Alternative Bank"
    },
    {
        "bankCode": "SPB-48971",
        "bankName": "Ampersand Microfinance Bank"
    },
    {
        "bankCode": "SPB-14515",
        "bankName": "Asset Matrix Microfinance Bank"
    },
    {
        "bankCode": "SPB-19417",
        "bankName": "Auchi Microfinance Bank"
    },
    {
        "bankCode": "SPB-28219",
        "bankName": "Auchi Poly MFB"
    },
    {
        "bankCode": "SPB-42074",
        "bankName": "Avuenegbe MFB"
    },
    {
        "bankCode": "SPB-86362",
        "bankName": "BLOOMS MFB"
    },
    {
        "bankCode": "SPB-17323",
        "bankName": "Bank 78"
    },
    {
        "bankCode": "SPB-16976",
        "bankName": "Bank of Agriculture"
    },
    {
        "bankCode": "SPB-38960",
        "bankName": "Baobab Microfinance Bank"
    },
    {
        "bankCode": "SPB-19808",
        "bankName": "Bestar MFB"
    },
    {
        "bankCode": "SPB-51311",
        "bankName": "Betastack Technologies"
    },
    {
        "bankCode": "SPB-68797",
        "bankName": "Boost MFB"
    },
    {
        "bankCode": "SPB-94561",
        "bankName": "Bowen Microfinance Bank"
    },
    {
        "bankCode": "SPB-27425",
        "bankName": "Bowman MFB"
    },
    {
        "bankCode": "SPB-41970",
        "bankName": "Branch International Financial Services"
    },
    {
        "bankCode": "SPB-29628",
        "bankName": "Bud Infrastructure"
    },
    {
        "bankCode": "SPB-76977",
        "bankName": "Build MicroFinance Bank"
    },
    {
        "bankCode": "SPB-10139",
        "bankName": "Capricon Digital"
    },
    {
        "bankCode": "SPB-77452",
        "bankName": "Carbon"
    },
    {
        "bankCode": "SPB-78721",
        "bankName": "Cash Connect MFB"
    },
    {
        "bankCode": "SPB-77942",
        "bankName": "Charis MFB"
    },
    {
        "bankCode": "SPB-81905",
        "bankName": "Chukwunenye Microfinance Bank"
    },
    {
        "bankCode": "SPB-17273",
        "bankName": "Citibank Nigeria Limited"
    },
    {
        "bankCode": "SPB-61137",
        "bankName": "Contec Global Infotech Limited"
    },
    {
        "bankCode": "SPB-70088",
        "bankName": "Core Step MFB"
    },
    {
        "bankCode": "SPB-45680",
        "bankName": "Creditville MFB"
    },
    {
        "bankCode": "SPB-76814",
        "bankName": "Crust MFB"
    },
    {
        "bankCode": "SPB-54623",
        "bankName": "DSC Microfinance Bank"
    },
    {
        "bankCode": "SPB-32972",
        "bankName": "Davodani Microfinance Bank"
    },
    {
        "bankCode": "SPB-91988",
        "bankName": "Diamond Bank"
    },
    {
        "bankCode": "SPB-26437",
        "bankName": "Dillon MFB "
    },
    {
        "bankCode": "SPB-73749",
        "bankName": "Doje Microfinance Bank Limited"
    },
    {
        "bankCode": "SPB-69799",
        "bankName": "Dot MFB"
    },
    {
        "bankCode": "SPB-72387",
        "bankName": "E-Settlement Ltd."
    },
    {
        "bankCode": "SPB-41143",
        "bankName": "Eastman MFB "
    },
    {
        "bankCode": "SPB-60428",
        "bankName": "Ecobank Nigeria"
    },
    {
        "bankCode": "SPB-12714",
        "bankName": "Ekondo Microfinance Bank"
    },
    {
        "bankCode": "SPB-91133",
        "bankName": "Enrich Microfinance Bank"
    },
    {
        "bankCode": "SPB-61588",
        "bankName": "Enterprise Bank"
    },
    {
        "bankCode": "SPB-55288",
        "bankName": "FSDH Merchant Bank"
    },
    {
        "bankCode": "SPB-15742",
        "bankName": "Fairmoney Microfinance Bank"
    },
    {
        "bankCode": "SPB-49631",
        "bankName": "Fidelity Bank"
    },
    {
        "bankCode": "SPB-82579",
        "bankName": "Finatrust MFB"
    },
    {
        "bankCode": "SPB-19661",
        "bankName": "First Bank of Nigeria"
    },
    {
        "bankCode": "SPB-90550",
        "bankName": "First City Monument Bank"
    },
    {
        "bankCode": "SPB-52570",
        "bankName": "First Marina Trust Limited"
    },
    {
        "bankCode": "SPB-95741",
        "bankName": "First Monnie Wallet"
    },
    {
        "bankCode": "SPB-11874",
        "bankName": "Flexi MFB"
    },
    {
        "bankCode": "SPB-93876",
        "bankName": "Flutterwave"
    },
    {
        "bankCode": "SPB-37209",
        "bankName": "GTBank"
    },
    {
        "bankCode": "SPB-76221",
        "bankName": "Globus Bank"
    },
    {
        "bankCode": "SPB-78028",
        "bankName": "Goldman MFB"
    },
    {
        "bankCode": "SPB-42838",
        "bankName": "Good News Microfinance Bank"
    },
    {
        "bankCode": "SPB-33383",
        "bankName": "Greenacres MFB"
    },
    {
        "bankCode": "SPB-64520",
        "bankName": "Grooming MFB"
    },
    {
        "bankCode": "SPB-92212",
        "bankName": "Habari Pay"
    },
    {
        "bankCode": "SPB-69662",
        "bankName": "Hackman Microfinance Bank"
    },
    {
        "bankCode": "SPB-42869",
        "bankName": "Hala Credit Microfinance Bank"
    },
    {
        "bankCode": "SPB-41077",
        "bankName": "Heritage Bank"
    },
    {
        "bankCode": "SPB-80273",
        "bankName": "Hope Payment Service Bank"
    },
    {
        "bankCode": "SPB-81315",
        "bankName": "Ibile Microfinance Bank"
    },
    {
        "bankCode": "SPB-56688",
        "bankName": "Ikoyi Osun MFB"
    },
    {
        "bankCode": "SPB-20392",
        "bankName": "Jaiz Bank"
    },
    {
        "bankCode": "SPB-99186",
        "bankName": "Jubilee-Life Mortgage  Bank"
    },
    {
        "bankCode": "SPB-91720",
        "bankName": "Kenechukwu Microfinance Bank"
    },
    {
        "bankCode": "SPB-81593",
        "bankName": "Key Stone Bank"
    },
    {
        "bankCode": "SPB-40285",
        "bankName": "Kolomoni MFB"
    },
    {
        "bankCode": "SPB-84435",
        "bankName": "Konga Pay"
    },
    {
        "bankCode": "SPB-88760",
        "bankName": "Kredi Microfinance Bank"
    },
    {
        "bankCode": "SPB-55452",
        "bankName": "Kuda Microfinance Bank"
    },
    {
        "bankCode": "SPB-18660",
        "bankName": "LIVINGTRUST MORTGAGE BANK"
    },
    {
        "bankCode": "SPB-97879",
        "bankName": "LOMA BANK"
    },
    {
        "bankCode": "SPB-18303",
        "bankName": "Lapo Microfinance Bank"
    },
    {
        "bankCode": "SPB-35681",
        "bankName": "LeadCity MFB"
    },
    {
        "bankCode": "SPB-31381",
        "bankName": "Letshego Microfinance Bank"
    },
    {
        "bankCode": "SPB-42356",
        "bankName": "Lotus Bank"
    },
    {
        "bankCode": "SPB-85324",
        "bankName": "Mainstreet Microfinance Bank"
    },
    {
        "bankCode": "SPB-97812",
        "bankName": "Malachy MFB"
    },
    {
        "bankCode": "SPB-45863",
        "bankName": "Mega MFB"
    },
    {
        "bankCode": "SPB-90205",
        "bankName": "Mkobo Microfinance Bank"
    },
    {
        "bankCode": "SPB-56787",
        "bankName": "Momo Payment Service Bank"
    },
    {
        "bankCode": "SPB-68949",
        "bankName": "Moneytronics MFB"
    },
    {
        "bankCode": "SPB-88671",
        "bankName": "Moniepoint Microfinance Bank"
    },
    {
        "bankCode": "SPB-28411",
        "bankName": "Moremonee Microfinance Bank Limited"
    },
    {
        "bankCode": "SPB-29787",
        "bankName": "NPF MicroFinance Bank"
    },
    {
        "bankCode": "SPB-94694",
        "bankName": "Netapps Technology"
    },
    {
        "bankCode": "SPB-12287",
        "bankName": "Nirsal MFB"
    },
    {
        "bankCode": "SPB-45676",
        "bankName": "Noun MFB"
    },
    {
        "bankCode": "SPB-40960",
        "bankName": "OAU Microfinance Bank"
    },
    {
        "bankCode": "SPB-12158",
        "bankName": "Omiye MFB"
    },
    {
        "bankCode": "SPB-17293",
        "bankName": "Optimus Bank"
    },
    {
        "bankCode": "SPB-63826",
        "bankName": "Paga"
    },
    {
        "bankCode": "SPB-50516",
        "bankName": "Page Financials"
    },
    {
        "bankCode": "SPB-24390",
        "bankName": "Palmpay"
    },
    {
        "bankCode": "SPB-83957",
        "bankName": "Parallex MF Bank"
    },
    {
        "bankCode": "SPB-10282",
        "bankName": "Parkway-ReadyCash"
    },
    {
        "bankCode": "SPB-68625",
        "bankName": "PayAttitude Online"
    },
    {
        "bankCode": "SPB-17646",
        "bankName": "Paycom (Opay)"
    },
    {
        "bankCode": "SPB-38158",
        "bankName": "Paystack Titan"
    },
    {
        "bankCode": "SPB-85313",
        "bankName": "Poder finance "
    },
    {
        "bankCode": "SPB-45837",
        "bankName": "Polaris Bank"
    },
    {
        "bankCode": "SPB-50398",
        "bankName": "Premium Trust Bank"
    },
    {
        "bankCode": "SPB-35291",
        "bankName": "Pristine Divitis Microfinance Bank"
    },
    {
        "bankCode": "SPB-15864",
        "bankName": "Projetcs Microfinance Bank"
    },
    {
        "bankCode": "SPB-77666",
        "bankName": "Prospa Capital MFB"
    },
    {
        "bankCode": "SPB-84057",
        "bankName": "Providus Bank"
    },
    {
        "bankCode": "SPB-92784",
        "bankName": "Randalpha Microfinance Bank"
    },
    {
        "bankCode": "SPB-87170",
        "bankName": "RenMoney Microfinance Bank"
    },
    {
        "bankCode": "SPB-67897",
        "bankName": "Royal Exchange Microfinance Bank"
    },
    {
        "bankCode": "SPB-18622",
        "bankName": "Rubies MFB"
    },
    {
        "bankCode": "SPB-44845",
        "bankName": "Safe Haven MFB"
    },
    {
        "bankCode": "SPB-75082",
        "bankName": "Sciart Finance"
    },
    {
        "bankCode": "SPB-85236",
        "bankName": "Shalom Microfinance Bank"
    },
    {
        "bankCode": "SPB-64167",
        "bankName": "Smart Cash PSB"
    },
    {
        "bankCode": "SPB-76790",
        "bankName": "Sparkle"
    },
    {
        "bankCode": "SPB-72837",
        "bankName": "Spectrum MFB"
    },
    {
        "bankCode": "SPB-19205",
        "bankName": "Stanbic IBTC Bank"
    },
    {
        "bankCode": "SPB-82786",
        "bankName": "Standard Chartered Bank Nigeria"
    },
    {
        "bankCode": "SPB-94111",
        "bankName": "Stellas MFB"
    },
    {
        "bankCode": "SPB-53659",
        "bankName": "Sterling Bank Plc"
    },
    {
        "bankCode": "SPB-99967",
        "bankName": "Summit Bank"
    },
    {
        "bankCode": "SPB-40577",
        "bankName": "SunTrust Bank Nigeria Limited"
    },
    {
        "bankCode": "SPB-77082",
        "bankName": "TENN MFB"
    },
    {
        "bankCode": "SPB-32360",
        "bankName": "Taj Bank"
    },
    {
        "bankCode": "SPB-21937",
        "bankName": "Tatum Bank"
    },
    {
        "bankCode": "SPB-37129",
        "bankName": "Tellerone MFB"
    },
    {
        "bankCode": "SPB-92218",
        "bankName": "Titan Trust Bank"
    },
    {
        "bankCode": "SPB-47293",
        "bankName": "Toprate Microfinance Bank"
    },
    {
        "bankCode": "SPB-78128",
        "bankName": "UNN Microfinance Bank"
    },
    {
        "bankCode": "SPB-54809",
        "bankName": "Uda MFB"
    },
    {
        "bankCode": "SPB-15445",
        "bankName": "Ukpor MFB"
    },
    {
        "bankCode": "SPB-68792",
        "bankName": "Umuoji MFB"
    },
    {
        "bankCode": "SPB-91410",
        "bankName": "Unical MFB"
    },
    {
        "bankCode": "SPB-67377",
        "bankName": "Union Bank of Nigeria"
    },
    {
        "bankCode": "SPB-27561",
        "bankName": "United Bank for Africa"
    },
    {
        "bankCode": "SPB-57690",
        "bankName": "Unity Bank"
    },
    {
        "bankCode": "SPB-56559",
        "bankName": "VFD Microfinance Bank Limited"
    },
    {
        "bankCode": "SPB-13303",
        "bankName": "Vale Finance"
    },
    {
        "bankCode": "SPB-14925",
        "bankName": "Victory MFB"
    },
    {
        "bankCode": "SPB-76729",
        "bankName": "Wema Bank"
    },
    {
        "bankCode": "SPB-10695",
        "bankName": "Whitecrust Finance"
    },
    {
        "bankCode": "SPB-68961",
        "bankName": "XPress MTS"
    },
    {
        "bankCode": "SPB-99921",
        "bankName": "XPress Payments"
    },
    {
        "bankCode": "SPB-40420",
        "bankName": "XPress Wallet"
    },
    {
        "bankCode": "SPB-65421",
        "bankName": "Yello Digital Services"
    },
    {
        "bankCode": "SPB-22023",
        "bankName": "ZWallet"
    },
    {
        "bankCode": "SPB-33105",
        "bankName": "Zenith Bank"
    },
    {
        "bankCode": "SPB-86777",
        "bankName": "Zikora Microfinance Bank"
    },
    {
        "bankCode": "SPB-17751",
        "bankName": "eTranzact"
    }
]
```
**Sample Response for GHS Banks:**

<span style={{color: "green"}}>`200 OK`</span>
<br></br>
<br></br>

```yaml
[
    {
        "bankCode": "SPB-44675",
        "bankName": "MTN Mobile Money"
    },
    {
        "bankCode": "SPB-85595",
        "bankName": "Vodafone Mobile Money"
    },
    {
        "bankCode": "SPB-93244",
        "bankName": "Airtel-Tigo Mobile Money"
    },
    {
        "bankCode": "SPB-63428",
        "bankName": "The Hongkong and Shanghai Banking Corporation Limited"
    },
    {
        "bankCode": "SPB-22156",
        "bankName": "Giro Elszamolasforgalmi Zrt."
    },
    {
        "bankCode": "SPB-10082",
        "bankName": "First National Bank Ghana Limited"
    },
    {
        "bankCode": "SPB-75923",
        "bankName": "OMNIBANK GHANA LIMITED"
    },
    {
        "bankCode": "SPB-38629",
        "bankName": "GHL Bank Ltd"
    },
    {
        "bankCode": "SPB-41702",
        "bankName": "Consolidated Bank Ghana Limited"
    },
    {
        "bankCode": "SPB-37723",
        "bankName": "GH PREPAID"
    },
    {
        "bankCode": "SPB-54365",
        "bankName": " VISA"
    },
    {
        "bankCode": "SPB-88357",
        "bankName": "Standard Chartered Bk Ghana Int"
    },
    {
        "bankCode": "SPB-61961",
        "bankName": "UNITED BANK FOR AFRICA (GHANA) LTD"
    },
    {
        "bankCode": "SPB-92201",
        "bankName": "Partner Banka d.d."
    },
    {
        "bankCode": "SPB-26909",
        "bankName": "Agricultural Development Bank Limited"
    },
    {
        "bankCode": "SPB-50656",
        "bankName": "Bank of Ghana"
    },
    {
        "bankCode": "SPB-46467",
        "bankName": "Barclays Bank of Ghana Limited"
    },
    {
        "bankCode": "SPB-93332",
        "bankName": "GCB Bank Limited"
    },
    {
        "bankCode": "SPB-53768",
        "bankName": "Universal Merchant Bank"
    },
    {
        "bankCode": "SPB-96368",
        "bankName": "National Investment Bank Ltd"
    },
    {
        "bankCode": "SPB-17230",
        "bankName": "Societe Generale Ghana Limited"
    },
    {
        "bankCode": "SPB-44233",
        "bankName": "Standard Chartered Bank Ghana Limited"
    },
    {
        "bankCode": "SPB-76983",
        "bankName": "Societe Generale Haitienne de Banque S.A. (Sogebank)"
    },
    {
        "bankCode": "SPB-98131",
        "bankName": "BNG Bank N V"
    },
    {
        "bankCode": "SPB-33573",
        "bankName": "Cal Bank Limited"
    },
    {
        "bankCode": "SPB-88123",
        "bankName": "DBS Group Holdings Ltd"
    },
    {
        "bankCode": "SPB-85219",
        "bankName": "Financial Brokerage Group (Fbg)"
    },
    {
        "bankCode": "SPB-42506",
        "bankName": "Arb Apex Bank Limited"
    },
    {
        "bankCode": "SPB-87677",
        "bankName": "Stock Exchange Of Hong Kong Ltd, The"
    },
    {
        "bankCode": "SPB-19263",
        "bankName": "Guaranty Trust Bank (Ghana) Ltd"
    },
    {
        "bankCode": "SPB-49864",
        "bankName": "Fidelity Bank Ghana Ltd."
    },
    {
        "bankCode": "SPB-37410",
        "bankName": "Banque Sahelo-Saharienne Pour LInvestissment et le Commerce (Ghana) Lt"
    },
    {
        "bankCode": "SPB-11570",
        "bankName": "Guaranty Trust Bank (UK) Limited"
    },
    {
        "bankCode": "SPB-45721",
        "bankName": "Bank of Baroda (Ghana) Limited"
    },
    {
        "bankCode": "SPB-98481",
        "bankName": "Gatehouse Bank Plc"
    },
    {
        "bankCode": "SPB-57986",
        "bankName": "Access Bank (Ghana) PLC"
    },
    {
        "bankCode": "SPB-20711",
        "bankName": "Noble Group Ltd"
    },
    {
        "bankCode": "SPB-60268",
        "bankName": "Ghazanfar Bank"
    },
    {
        "bankCode": "SPB-78802",
        "bankName": "Social Security And National Insurance Trust"
    },
    {
        "bankCode": "SPB-80181",
        "bankName": "Energy Bank Ghana Limited"
    },
    {
        "bankCode": "SPB-58159",
        "bankName": "Ghana Revenue Authority"
    },
    {
        "bankCode": "SPB-60120",
        "bankName": "Pacific Eagle Asset Management Ltd"
    },
    {
        "bankCode": "SPB-85010",
        "bankName": "Independent Petroleum Group"
    },
    {
        "bankCode": "SPB-14134",
        "bankName": "Controller And Accountant-GeneralS Department"
    },
    {
        "bankCode": "SPB-30029",
        "bankName": "Partners Group AG"
    },
    {
        "bankCode": "SPB-52712",
        "bankName": "Compass Global Holdings Pty Ltd"
    },
    {
        "bankCode": "SPB-36960",
        "bankName": "Global Exchange Centre Limited"
    },
    {
        "bankCode": "SPB-66971",
        "bankName": "Volta River Authority"
    },
    {
        "bankCode": "SPB-91342",
        "bankName": "Norma Group Holding"
    },
    {
        "bankCode": "SPB-30434",
        "bankName": "Tronox Global Holdings Pty Limited"
    },
    {
        "bankCode": "SPB-21990",
        "bankName": "Cqlt Saargummi Technologies SAR.l"
    },
    {
        "bankCode": "SPB-62737",
        "bankName": "Pigeon Corporation"
    },
    {
        "bankCode": "SPB-17446",
        "bankName": "Ping An Of China Asset Management (Hong Kong) Company Ltd"
    },
    {
        "bankCode": "SPB-63560",
        "bankName": "Gebr. Heinemann Se And Co.KG"
    },
    {
        "bankCode": "SPB-78720",
        "bankName": "Cgnpc Huasheng Investment Limited"
    },
    {
        "bankCode": "SPB-81029",
        "bankName": "Premium Bank Ghana Limited"
    },
    {
        "bankCode": "SPB-37451",
        "bankName": "G.H. Financials Ltd"
    },
    {
        "bankCode": "SPB-14041",
        "bankName": "Asahi Group Holdings, Ltd."
    },
    {
        "bankCode": "SPB-75445",
        "bankName": "Heritage Bank Limited"
    },
    {
        "bankCode": "SPB-46992",
        "bankName": "Grabtaxi Holdings PTE LTD"
    },
    {
        "bankCode": "SPB-75224",
        "bankName": "Al Ghurair International Exchange"
    },
    {
        "bankCode": "SPB-26254",
        "bankName": "Dogan Sirketler Grubu Holding AS"
    },
    {
        "bankCode": "SPB-19427",
        "bankName": "GN Bank Limited"
    },
    {
        "bankCode": "SPB-96694",
        "bankName": "Banque Populaire de Rabat-Kenitra"
    },
    {
        "bankCode": "SPB-13758",
        "bankName": "Prudential Bank Ltd"
    },
    {
        "bankCode": "SPB-47517",
        "bankName": "First Atlantic Bank Ltd"
    },
    {
        "bankCode": "SPB-99834",
        "bankName": "FBN Bank (Ghana) Limited"
    },
    {
        "bankCode": "SPB-87877",
        "bankName": "Privredna banka Zagreb d.d."
    },
    {
        "bankCode": "SPB-19774",
        "bankName": "Ghana International Bank plc"
    },
    {
        "bankCode": "SPB-86143",
        "bankName": "Republic Bank (Ghana) Ltd"
    },
    {
        "bankCode": "SPB-44111",
        "bankName": "Guaranty Trust Bank Kenya Limited"
    },
    {
        "bankCode": "SPB-61664",
        "bankName": "Stanbic Bank Ghana Limited"
    },
    {
        "bankCode": "SPB-81092",
        "bankName": "Bank of Africa - Ghana"
    },
    {
        "bankCode": "SPB-18044",
        "bankName": "ZENITH BANK (GHANA) LIMITED"
    },
    {
        "bankCode": "SPB-43253",
        "bankName": "FINANCIJSKA AGENCIJA"
    },
    {
        "bankCode": "SPB-98212",
        "bankName": "Ecobank Ghana (GH130100)"
    },
    {
        "bankCode": "SPB-18229",
        "bankName": "SERVICES INTEGRITY SAVINGS & LOANS"
    },
    {
        "bankCode": "SPB-80753",
        "bankName": "DALEX FINANCE AND LEASING COMPANY"
    },
    {
        "bankCode": "SPB-67771",
        "bankName": "FIRST BANK OF NIGERIA"
    },
    {
        "bankCode": "SPB-33570",
        "bankName": "SAHEL - SAHARA BANK (BSIC)"
    },
    {
        "bankCode": "SPB-55753",
        "bankName": "BESTPOINT SAVINGS AND LOANS"
    },
    {
        "bankCode": "SPB-36349",
        "bankName": "ABSA BANK GHANA LIMITED"
    }
]
```