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
        "bankCode": "090645",
        "bankName": "Nombank"
    },
    {
        "bankCode": "090832",
        "bankName": "5TT MFB "
    },
    {
        "bankCode": "090629",
        "bankName": "9Japay"
    },
    {
        "bankCode": "120001",
        "bankName": "9PSB"
    },
    {
        "bankCode": "090270",
        "bankName": "AB Microfinance Bank"
    },
    {
        "bankCode": "418",
        "bankName": "AG Mortgage Bank"
    },
    {
        "bankCode": "090180",
        "bankName": "AMJU Microfinance Bank"
    },
    {
        "bankCode": "090816",
        "bankName": "ARM MFB "
    },
    {
        "bankCode": "090001",
        "bankName": "ASO Savings & Loans"
    },
    {
        "bankCode": "070010",
        "bankName": "Abbey Mortgage Bank"
    },
    {
        "bankCode": "820",
        "bankName": "Abucoop MFB"
    },
    {
        "bankCode": "044",
        "bankName": "Access Bank"
    },
    {
        "bankCode": "100052",
        "bankName": "Access Yellow"
    },
    {
        "bankCode": "090134",
        "bankName": "Accion Microfinance Bank"
    },
    {
        "bankCode": "070030",
        "bankName": "Adamawa Mortgage Bank "
    },
    {
        "bankCode": "090160",
        "bankName": "Addosser Microfinance Bank"
    },
    {
        "bankCode": "090614",
        "bankName": "Aella MFB"
    },
    {
        "bankCode": "120004",
        "bankName": "Airtel Smartcash PSB"
    },
    {
        "bankCode": "100029",
        "bankName": "Alternative Bank"
    },
    {
        "bankCode": "090529",
        "bankName": "Ampersand Microfinance Bank"
    },
    {
        "bankCode": "090287",
        "bankName": "Asset Matrix Microfinance Bank"
    },
    {
        "bankCode": "090264",
        "bankName": "Auchi Microfinance Bank"
    },
    {
        "bankCode": "090817",
        "bankName": "Auchi Poly MFB"
    },
    {
        "bankCode": "090478",
        "bankName": "Avuenegbe MFB"
    },
    {
        "bankCode": "090743",
        "bankName": "BLOOMS MFB"
    },
    {
        "bankCode": "110072",
        "bankName": "Bank 78"
    },
    {
        "bankCode": "090367",
        "bankName": "Bank of Agriculture"
    },
    {
        "bankCode": "090136",
        "bankName": "Baobab Microfinance Bank"
    },
    {
        "bankCode": "090615",
        "bankName": "Bestar MFB"
    },
    {
        "bankCode": "110074",
        "bankName": "Betastack Technologies"
    },
    {
        "bankCode": "090819",
        "bankName": "Boost MFB"
    },
    {
        "bankCode": "50931",
        "bankName": "Bowen Microfinance Bank"
    },
    {
        "bankCode": "090804",
        "bankName": "Bowman MFB"
    },
    {
        "bankCode": "050006",
        "bankName": "Branch International Financial Services"
    },
    {
        "bankCode": "983",
        "bankName": "Bud Infrastructure"
    },
    {
        "bankCode": "090613",
        "bankName": "Build MicroFinance Bank"
    },
    {
        "bankCode": "956",
        "bankName": "Capricon Digital"
    },
    {
        "bankCode": "100026",
        "bankName": "Carbon"
    },
    {
        "bankCode": "748",
        "bankName": "Cash Connect MFB"
    },
    {
        "bankCode": "090815",
        "bankName": "Charis MFB"
    },
    {
        "bankCode": "090490",
        "bankName": "Chukwunenye Microfinance Bank"
    },
    {
        "bankCode": "023",
        "bankName": "Citibank Nigeria Limited"
    },
    {
        "bankCode": "100032",
        "bankName": "Contec Global Infotech Limited"
    },
    {
        "bankCode": "766",
        "bankName": "Core Step MFB"
    },
    {
        "bankCode": "090611",
        "bankName": "Creditville MFB"
    },
    {
        "bankCode": "090560",
        "bankName": "Crust MFB"
    },
    {
        "bankCode": "090821",
        "bankName": "DSC Microfinance Bank"
    },
    {
        "bankCode": "50159",
        "bankName": "DavoDani MFB"
    },
    {
        "bankCode": "090391",
        "bankName": "Davodani Microfinance Bank"
    },
    {
        "bankCode": "063",
        "bankName": "Diamond Bank"
    },
    {
        "bankCode": "090828",
        "bankName": "Dillon MFB "
    },
    {
        "bankCode": "090404",
        "bankName": "Doje Microfinance Bank Limited"
    },
    {
        "bankCode": "090470",
        "bankName": "Dot MFB"
    },
    {
        "bankCode": "999999",
        "bankName": "E-Settlement Ltd."
    },
    {
        "bankCode": "090707",
        "bankName": "Eastman MFB "
    },
    {
        "bankCode": "050",
        "bankName": "Ecobank Nigeria"
    },
    {
        "bankCode": "090097",
        "bankName": "Ekondo Microfinance Bank"
    },
    {
        "bankCode": "090539",
        "bankName": "Enrich Microfinance Bank"
    },
    {
        "bankCode": "084",
        "bankName": "Enterprise Bank"
    },
    {
        "bankCode": "400001",
        "bankName": "FSDH Merchant Bank"
    },
    {
        "bankCode": "090551",
        "bankName": "Fairmoney Microfinance Bank"
    },
    {
        "bankCode": "070",
        "bankName": "Fidelity Bank"
    },
    {
        "bankCode": "090111",
        "bankName": "Finatrust MFB"
    },
    {
        "bankCode": "011",
        "bankName": "First Bank of Nigeria"
    },
    {
        "bankCode": "214",
        "bankName": "First City Monument Bank"
    },
    {
        "bankCode": "050022",
        "bankName": "First Marina Trust Limited"
    },
    {
        "bankCode": "309",
        "bankName": "First Monnie Wallet"
    },
    {
        "bankCode": "090835",
        "bankName": "Flexi MFB"
    },
    {
        "bankCode": "622",
        "bankName": "Flutterwave"
    },
    {
        "bankCode": "058",
        "bankName": "GTBank"
    },
    {
        "bankCode": "000027",
        "bankName": "Globus Bank"
    },
    {
        "bankCode": "090574",
        "bankName": "Goldman MFB"
    },
    {
        "bankCode": "090495",
        "bankName": "Good News Microfinance Bank"
    },
    {
        "bankCode": "090599",
        "bankName": "Greenacres MFB"
    },
    {
        "bankCode": "090195",
        "bankName": "Grooming MFB"
    },
    {
        "bankCode": "110059",
        "bankName": "Habari Pay"
    },
    {
        "bankCode": "090147",
        "bankName": "Hackman Microfinance Bank"
    },
    {
        "bankCode": "090291",
        "bankName": "Hala Credit Microfinance Bank"
    },
    {
        "bankCode": "030",
        "bankName": "Heritage Bank"
    },
    {
        "bankCode": "120002",
        "bankName": "Hope Payment Service Bank"
    },
    {
        "bankCode": "090118",
        "bankName": "Ibile Microfinance Bank"
    },
    {
        "bankCode": "090536",
        "bankName": "Ikoyi Osun MFB"
    },
    {
        "bankCode": "301",
        "bankName": "Jaiz Bank"
    },
    {
        "bankCode": "090602",
        "bankName": "Kenechukwu Microfinance Bank"
    },
    {
        "bankCode": "082",
        "bankName": "Key Stone Bank"
    },
    {
        "bankCode": "899",
        "bankName": "Kolomoni MFB"
    },
    {
        "bankCode": "100025",
        "bankName": "Konga Pay"
    },
    {
        "bankCode": "090380",
        "bankName": "Kredi Microfinance Bank"
    },
    {
        "bankCode": "090267",
        "bankName": "Kuda Microfinance Bank"
    },
    {
        "bankCode": "090620",
        "bankName": "LOMA BANK"
    },
    {
        "bankCode": "090177",
        "bankName": "Lapo Microfinance Bank"
    },
    {
        "bankCode": "397",
        "bankName": "LeadCity MFB"
    },
    {
        "bankCode": "090420",
        "bankName": "Letshego Microfinance Bank"
    },
    {
        "bankCode": "000029",
        "bankName": "Lotus Bank"
    },
    {
        "bankCode": "090171",
        "bankName": "Mainstreet Microfinance Bank"
    },
    {
        "bankCode": "648",
        "bankName": "Malachy MFB"
    },
    {
        "bankCode": "090824",
        "bankName": "Mega MFB"
    },
    {
        "bankCode": "090455",
        "bankName": "Mkobo Microfinance Bank"
    },
    {
        "bankCode": "120003",
        "bankName": "Momo Payment Service Bank"
    },
    {
        "bankCode": "090692",
        "bankName": "Moneytronics MFB"
    },
    {
        "bankCode": "090405",
        "bankName": "Moniepoint Microfinance Bank"
    },
    {
        "bankCode": "090685",
        "bankName": "Moremonee Microfinance Bank Limited"
    },
    {
        "bankCode": "070001",
        "bankName": "NPF MicroFinance Bank"
    },
    {
        "bankCode": "950",
        "bankName": "Netapps Technology"
    },
    {
        "bankCode": "090194",
        "bankName": "Nirsal MFB"
    },
    {
        "bankCode": "090822",
        "bankName": "Noun MFB"
    },
    {
        "bankCode": "090345",
        "bankName": "OAU Microfinance Bank"
    },
    {
        "bankCode": "090295",
        "bankName": "Omiye MFB"
    },
    {
        "bankCode": "327",
        "bankName": "Paga"
    },
    {
        "bankCode": "070008",
        "bankName": "Page Financials"
    },
    {
        "bankCode": "100033",
        "bankName": "Palmpay"
    },
    {
        "bankCode": "000030",
        "bankName": "Parallex MF Bank"
    },
    {
        "bankCode": "100003",
        "bankName": "Parkway-ReadyCash"
    },
    {
        "bankCode": "329",
        "bankName": "PayAttitude Online"
    },
    {
        "bankCode": "305",
        "bankName": "Paycom (Opay)"
    },
    {
        "bankCode": "100039",
        "bankName": "Paystack Titan"
    },
    {
        "bankCode": "050021",
        "bankName": "Poder finance "
    },
    {
        "bankCode": "076",
        "bankName": "Polaris Bank"
    },
    {
        "bankCode": "000031",
        "bankName": "Premium Trust Bank"
    },
    {
        "bankCode": "090499",
        "bankName": "Pristine Divitis Microfinance Bank"
    },
    {
        "bankCode": "090503",
        "bankName": "Projetcs Microfinance Bank"
    },
    {
        "bankCode": "50739",
        "bankName": "Prospa Capital MFB"
    },
    {
        "bankCode": "101",
        "bankName": "Providus Bank"
    },
    {
        "bankCode": "090496",
        "bankName": "Randalpha Microfinance Bank"
    },
    {
        "bankCode": "090198",
        "bankName": "RenMoney Microfinance Bank"
    },
    {
        "bankCode": "090138",
        "bankName": "Royal Exchange Microfinance Bank"
    },
    {
        "bankCode": "090175",
        "bankName": "Rubies MFB"
    },
    {
        "bankCode": "090286",
        "bankName": "Safe Haven MFB"
    },
    {
        "bankCode": "050024",
        "bankName": "Sciart Finance"
    },
    {
        "bankCode": "090502",
        "bankName": "Shalom Microfinance Bank"
    },
    {
        "bankCode": "942",
        "bankName": "Smart Cash PSB"
    },
    {
        "bankCode": "090325",
        "bankName": "Sparkle"
    },
    {
        "bankCode": "090436",
        "bankName": "Spectrum MFB"
    },
    {
        "bankCode": "039",
        "bankName": "Stanbic IBTC Bank"
    },
    {
        "bankCode": "068",
        "bankName": "Standard Chartered Bank Nigeria"
    },
    {
        "bankCode": "667",
        "bankName": "Stellas MFB"
    },
    {
        "bankCode": "232",
        "bankName": "Sterling Bank Plc"
    },
    {
        "bankCode": "080003",
        "bankName": "Summit Bank"
    },
    {
        "bankCode": "100",
        "bankName": "SunTrust Bank Nigeria Limited"
    },
    {
        "bankCode": "000026",
        "bankName": "Taj Bank"
    },
    {
        "bankCode": "000042",
        "bankName": "Tatum Bank"
    },
    {
        "bankCode": "090788",
        "bankName": "Tellerone MFB"
    },
    {
        "bankCode": "000025",
        "bankName": "Titan Trust Bank"
    },
    {
        "bankCode": "090801",
        "bankName": "Toprate Microfinance Bank"
    },
    {
        "bankCode": "090251",
        "bankName": "UNN Microfinance Bank"
    },
    {
        "bankCode": "672",
        "bankName": "Uda MFB"
    },
    {
        "bankCode": " 090820",
        "bankName": "Ukpor MFB"
    },
    {
        "bankCode": "090814",
        "bankName": "Umuoji MFB"
    },
    {
        "bankCode": "090193",
        "bankName": "Unical MFB"
    },
    {
        "bankCode": "032",
        "bankName": "Union Bank of Nigeria"
    },
    {
        "bankCode": "033",
        "bankName": "United Bank for Africa"
    },
    {
        "bankCode": "215",
        "bankName": "Unity Bank"
    },
    {
        "bankCode": "566",
        "bankName": "VFD Microfinance Bank Limited"
    },
    {
        "bankCode": "050020",
        "bankName": "Vale Finance"
    },
    {
        "bankCode": "090813",
        "bankName": "Victory MFB"
    },
    {
        "bankCode": "035",
        "bankName": "Wema Bank"
    },
    {
        "bankCode": "050035",
        "bankName": "Whitecrust Finance"
    },
    {
        "bankCode": "148",
        "bankName": "XPress MTS"
    },
    {
        "bankCode": "738",
        "bankName": "XPress Payments"
    },
    {
        "bankCode": "391",
        "bankName": "XPress Wallet"
    },
    {
        "bankCode": "964",
        "bankName": "Yello Digital Services"
    },
    {
        "bankCode": "792",
        "bankName": "ZWallet"
    },
    {
        "bankCode": "057",
        "bankName": "Zenith Bank"
    },
    {
        "bankCode": "090504",
        "bankName": "Zikora Microfinance Bank"
    },
    {
        "bankCode": "306",
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
        "bankCode": "MTN",
        "bankName": "MTN Mobile Money"
    },
    {
        "bankCode": "VODAFONE",
        "bankName": "Vodafone Mobile Money"
    },
    {
        "bankCode": "AIRTELTIGO",
        "bankName": "Airtel-Tigo Mobile Money"
    },
    {
        "bankCode": "10550214",
        "bankName": "The Hongkong and Shanghai Banking Corporation Limited"
    },
    {
        "bankCode": "11088200",
        "bankName": "Giro Elszamolasforgalmi Zrt."
    },
    {
        "bankCode": "11276282",
        "bankName": "First National Bank Ghana Limited"
    },
    {
        "bankCode": "11299458",
        "bankName": "OMNIBANK GHANA LIMITED"
    },
    {
        "bankCode": "11319374",
        "bankName": "GHL Bank Ltd"
    },
    {
        "bankCode": "11350352",
        "bankName": "Consolidated Bank Ghana Limited"
    },
    {
        "bankCode": "1812142W72",
        "bankName": "GH PREPAID"
    },
    {
        "bankCode": "190815670S",
        "bankName": " VISA"
    },
    {
        "bankCode": "2006168ICS",
        "bankName": "Standard Chartered Bk Ghana Int"
    },
    {
        "bankCode": "2006228LG0",
        "bankName": "UNITED BANK FOR AFRICA (GHANA) LTD"
    },
    {
        "bankCode": "20112200",
        "bankName": "Partner Banka d.d."
    },
    {
        "bankCode": "20313200",
        "bankName": "Agricultural Development Bank Limited"
    },
    {
        "bankCode": "20313400",
        "bankName": "Bank of Ghana"
    },
    {
        "bankCode": "20313500",
        "bankName": "Barclays Bank of Ghana Limited"
    },
    {
        "bankCode": "20313600",
        "bankName": "GCB Bank Limited"
    },
    {
        "bankCode": "20313800",
        "bankName": "Universal Merchant Bank"
    },
    {
        "bankCode": "20313900",
        "bankName": "National Investment Bank Ltd"
    },
    {
        "bankCode": "20314100",
        "bankName": "Societe Generale Ghana Limited"
    },
    {
        "bankCode": "20314200",
        "bankName": "Standard Chartered Bank Ghana Limited"
    },
    {
        "bankCode": "20321900",
        "bankName": "Societe Generale Haitienne de Banque S.A. (Sogebank)"
    },
    {
        "bankCode": "20497300",
        "bankName": "BNG Bank N V"
    },
    {
        "bankCode": "22031960",
        "bankName": "Cal Bank Limited"
    },
    {
        "bankCode": "25449292",
        "bankName": "DBS Group Holdings Ltd"
    },
    {
        "bankCode": "25528546",
        "bankName": "Financial Brokerage Group (Fbg)"
    },
    {
        "bankCode": "25544088",
        "bankName": "Arb Apex Bank Limited"
    },
    {
        "bankCode": "25549518",
        "bankName": "Stock Exchange Of Hong Kong Ltd, The"
    },
    {
        "bankCode": "25562284",
        "bankName": "Guaranty Trust Bank (Ghana) Ltd"
    },
    {
        "bankCode": "25570554",
        "bankName": "Fidelity Bank Ghana Ltd."
    },
    {
        "bankCode": "25785380",
        "bankName": "Banque Sahelo-Saharienne Pour LInvestissment et le Commerce (Ghana) Lt"
    },
    {
        "bankCode": "25817360",
        "bankName": "Guaranty Trust Bank (UK) Limited"
    },
    {
        "bankCode": "25892776",
        "bankName": "Bank of Baroda (Ghana) Limited"
    },
    {
        "bankCode": "25897096",
        "bankName": "Gatehouse Bank Plc"
    },
    {
        "bankCode": "26153374",
        "bankName": "Access Bank (Ghana) PLC"
    },
    {
        "bankCode": "26153460",
        "bankName": "Noble Group Ltd"
    },
    {
        "bankCode": "26156818",
        "bankName": "Ghazanfar Bank"
    },
    {
        "bankCode": "26545578",
        "bankName": "Social Security And National Insurance Trust"
    },
    {
        "bankCode": "26675842",
        "bankName": "Energy Bank Ghana Limited"
    },
    {
        "bankCode": "26699422",
        "bankName": "Ghana Revenue Authority"
    },
    {
        "bankCode": "26708398",
        "bankName": "Pacific Eagle Asset Management Ltd"
    },
    {
        "bankCode": "26852136",
        "bankName": "Independent Petroleum Group"
    },
    {
        "bankCode": "26935088",
        "bankName": "Controller And Accountant-GeneralS Department"
    },
    {
        "bankCode": "26935170",
        "bankName": "Partners Group AG"
    },
    {
        "bankCode": "26955918",
        "bankName": "Compass Global Holdings Pty Ltd"
    },
    {
        "bankCode": "27096388",
        "bankName": "Global Exchange Centre Limited"
    },
    {
        "bankCode": "27108818",
        "bankName": "Volta River Authority"
    },
    {
        "bankCode": "27127004",
        "bankName": "Norma Group Holding"
    },
    {
        "bankCode": "27208826",
        "bankName": "Tronox Global Holdings Pty Limited"
    },
    {
        "bankCode": "27209142",
        "bankName": "Cqlt Saargummi Technologies SAR.l"
    },
    {
        "bankCode": "27257744",
        "bankName": "Pigeon Corporation"
    },
    {
        "bankCode": "27349456",
        "bankName": "Ping An Of China Asset Management (Hong Kong) Company Ltd"
    },
    {
        "bankCode": "27352014",
        "bankName": "Gebr. Heinemann Se And Co.KG"
    },
    {
        "bankCode": "27404306",
        "bankName": "Cgnpc Huasheng Investment Limited"
    },
    {
        "bankCode": "27451510",
        "bankName": "Premium Bank Ghana Limited"
    },
    {
        "bankCode": "27452668",
        "bankName": "G.H. Financials Ltd"
    },
    {
        "bankCode": "27457008",
        "bankName": "Asahi Group Holdings, Ltd."
    },
    {
        "bankCode": "27462484",
        "bankName": "Heritage Bank Limited"
    },
    {
        "bankCode": "27464082",
        "bankName": "Grabtaxi Holdings PTE LTD"
    },
    {
        "bankCode": "27466360",
        "bankName": "Al Ghurair International Exchange"
    },
    {
        "bankCode": "27547278",
        "bankName": "Dogan Sirketler Grubu Holding AS"
    },
    {
        "bankCode": "50480908",
        "bankName": "GN Bank Limited"
    },
    {
        "bankCode": "60002121",
        "bankName": "Banque Populaire de Rabat-Kenitra"
    },
    {
        "bankCode": "60003190",
        "bankName": "Prudential Bank Ltd"
    },
    {
        "bankCode": "60003191",
        "bankName": "First Atlantic Bank Ltd"
    },
    {
        "bankCode": "60003193",
        "bankName": "FBN Bank (Ghana) Limited"
    },
    {
        "bankCode": "96683220",
        "bankName": "Privredna banka Zagreb d.d."
    },
    {
        "bankCode": "96788653",
        "bankName": "Ghana International Bank plc"
    },
    {
        "bankCode": "96793657",
        "bankName": "Republic Bank (Ghana) Ltd"
    },
    {
        "bankCode": "96855152",
        "bankName": "Guaranty Trust Bank Kenya Limited"
    },
    {
        "bankCode": "97151844",
        "bankName": "Stanbic Bank Ghana Limited"
    },
    {
        "bankCode": "97155860",
        "bankName": "Bank of Africa - Ghana"
    },
    {
        "bankCode": "98357706",
        "bankName": "ZENITH BANK (GHANA) LIMITED"
    },
    {
        "bankCode": "99730556",
        "bankName": "FINANCIJSKA AGENCIJA"
    },
    {
        "bankCode": "GH130100",
        "bankName": "Ecobank Ghana (GH130100)"
    },
    {
        "bankCode": "SISL",
        "bankName": "SERVICES INTEGRITY SAVINGS & LOANS"
    },
    {
        "bankCode": "DFLC",
        "bankName": "DALEX FINANCE AND LEASING COMPANY"
    },
    {
        "bankCode": "FBN",
        "bankName": "FIRST BANK OF NIGERIA"
    },
    {
        "bankCode": "BSIC",
        "bankName": "SAHEL - SAHARA BANK (BSIC)"
    },
    {
        "bankCode": "BPSL",
        "bankName": "BESTPOINT SAVINGS AND LOANS"
    },
    {
        "bankCode": "ABSA",
        "bankName": "ABSA BANK GHANA LIMITED"
    }
]
```
