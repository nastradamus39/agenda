
var db = require('./collections.js').db;

// Market
var marketModel = require('./collections.js').marketModel;

// Companies
var companiesModel = require('./collections.js').companiesModel;

// Form10k
var form10kModel = require('./collections.js').form10kModel;

// median value for all companies.
var market = [
    {
        "created_at": "2015-04-24T00:45:11.559Z",
        "updated_at": "2015-04-24T00:45:11.559Z",
        type: "",
        name: "Median value",
        year: 2015,
        quarter: 4,
        currencycode: "USD",
        roc: 45.17877469125985,
        roa: 16.51386701814463,
        roe: 56.05471825115014,
        ros: 13.420754254146471,
        kgv: 0,
        kbv: 0,
        kuv: 0,
        kcfv: 0
    }
];
var companies = [
    {
        "cik": "0001467373",
        "name": "ACCENTURE PLC",
        "display_name": "ACN Accenture Plc",
        "symbol": "ACN",
        "entityid": 811083,
        "exchange": "NYSE",
        "sic_code": 7389,
        "sic_description": "Business Services, Not Elsewhere Classified",
        "created_at": "2015-04-24T00:45:11.559Z",
        "updated_at": "2015-04-24T00:45:11.559Z",
        "ask": 96.62,
        "bid": 96.58,
        "avgDailyVolume": 3116500,
        "volume": 1797901,
        "lastTradeDate": "2016-02-15T23:00:00.000Z",
        "lastTradeTime": null,
        "lastPrice": 96.63,
        "marketCap": "60.68",
        "dividendPayDate": "2015-11-12T23:00:00.000Z",
        "spread": 0.04000000000000625
    }, {
        "cik": "0001070494",
        "name": "ACADIA PHARMACEUTICALS INC",
        "display_name": "ACAD Acadia Pharmaceuticals Inc",
        "symbol": "ACAD",
        "entityid": 81806,
        "exchange": "Nasdaq Global Market",
        "sic_code": 2834,
        "sic_description": "Pharmaceutical Preparations",
        "created_at": "2015-04-24T00:45:11.556Z",
        "updated_at": "2015-04-24T00:45:11.556Z",
        "ask": 18.5,
        "bid": 18.46,
        "avgDailyVolume": 1743770,
        "volume": 1185658,
        "lastTradeDate": "2016-02-15T23:00:00.000Z",
        "lastTradeTime": null,
        "lastPrice": 18.48,
        "marketCap": "1.86",
        "dividendPayDate": null,
        "spread": 0.03999999999999915
    }, {
        "cik": "0000712034",
        "name": "ACCO BRANDS CORP",
        "display_name": "ACCO Acco Brands Corp",
        "symbol": "ACCO",
        "entityid": 582568,
        "exchange": "NYSE",
        "sic_code": 2780,
        "sic_description": "Blankbooks, Looseleaf Binders, And Bookbinding",
        "created_at": "2015-04-24T00:45:11.557Z",
        "updated_at": "2015-04-24T00:45:11.557Z",
        "ask": 6.87,
        "bid": 6.86,
        "avgDailyVolume": 613516,
        "volume": 219852,
        "lastTradeDate": "2016-02-15T23:00:00.000Z",
        "lastTradeTime": null,
        "lastPrice": 6.86,
        "marketCap": "727.16",
        "dividendPayDate": null,
        "spread": 0.009999999999999787
    }, {
        "cik": "0000934549",
        "name": "ACACIA RESEARCH CORP",
        "display_name": "ACTG Acacia Research Corp",
        "symbol": "ACTG",
        "entityid": 1231,
        "exchange": "Nasdaq Global Market",
        "sic_code": 6794,
        "sic_description": "Patent Owners and Lessors",
        "created_at": "2015-04-24T00:45:11.567Z",
        "updated_at": "2015-04-24T00:45:11.567Z",
        "ask": 3.66,
        "bid": 3.65,
        "avgDailyVolume": 781590,
        "volume": 155369,
        "lastTradeDate": "2016-02-15T23:00:00.000Z",
        "lastTradeTime": null,
        "lastPrice": 3.655,
        "marketCap": "185.44",
        "dividendPayDate": "2015-11-29T23:00:00.000Z",
        "spread": 0.010000000000000231
    }, {
        "cik": "0001138723",
        "name": "ACCURAY INC",
        "display_name": "ARAY Accuray Inc",
        "symbol": "ARAY",
        "entityid": 104630,
        "exchange": "Nasdaq Global Market",
        "sic_code": 3841,
        "sic_description": "Surgical and Medical Instruments and Apparatus",
        "created_at": "2015-04-24T00:45:11.615Z",
        "updated_at": "2015-04-24T00:45:11.615Z",
        "ask": 5.21,
        "bid": 5.2,
        "avgDailyVolume": 810442,
        "volume": 178311,
        "lastTradeDate": "2016-02-15T23:00:00.000Z",
        "lastTradeTime": null,
        "lastPrice": 5.205,
        "marketCap": "420.78",
        "dividendPayDate": null,
        "spread": 0.009999999999999787
    }, {
        "cik": "0000353020",
        "name": "AEGION CORP",
        "display_name": "AEGN Aegion Corp",
        "symbol": "AEGN",
        "entityid": 1653,
        "exchange": "Nasdaq Global Market",
        "sic_code": 1623,
        "sic_description": "Water, Sewer, Pipeline, and Communications and Power Line Constr",
        "created_at": "2015-04-24T00:45:11.572Z",
        "updated_at": "2015-04-24T00:45:11.572Z",
        "ask": 18.1,
        "bid": 18.05,
        "avgDailyVolume": 212887,
        "volume": 54837,
        "lastTradeDate": "2016-02-15T23:00:00.000Z",
        "lastTradeTime": null,
        "lastPrice": 18.07,
        "marketCap": "631.96",
        "dividendPayDate": null,
        "spread": 0.05000000000000071
    }
];
var form10k = [
    {
        "ros": 13.491938647976303,
        "roe": 51.31681854699073,
        "roa": 16.405040988369954,
        "roc": 44.006834368684046,
        "symbol": "ACN",
        "cik": "0001467373",
        "name": "10-K",
        "period": "ann",
        "year": 2014,
        "quarter": 4,
        "usdconversionrate": "1.00",
        "restated": false,
        "receiveddate": "2014-10-23T22:00:00.000Z",
        "preliminary": false,
        "periodlengthcode": "m",
        "periodlength": 12,
        "periodenddate": "2014-08-30T22:00:00.000Z",
        "original": true,
        "dcn": "0001467373-14-000467",
        "currencycode": "USD",
        "crosscalculated": false,
        "audited": true,
        "amended": false,
        "changeincurrentassets": -704532000,
        "changeincurrentliabilities": 136695000,
        "changeininventories": null,
        "dividendspaid": -1254916000,
        "effectofexchangerateoncash": "25162000",
        "capitalexpenditures": -321870000,
        "cashfromfinancingactivities": -3165416000,
        "cashfrominvestingactivities": -1056411000,
        "cashfromoperatingactivities": 3486085000,
        "cfdepreciationamortization": 620743000,
        "changeinaccountsreceivable": null,
        "investmentchangesnet": 0,
        "netchangeincash": -710580000,
        "totaladjustments": 310127000,
        "ebit": 4300512000,
        "costofrevenue": 22190212000,
        "discontinuedoperations": null,
        "equityearnings": null,
        "accountingchange": null,
        "extraordinaryitems": null,
        "grossprofit": 9684466000,
        "incomebeforetaxes": 4297701000,
        "interestexpense": -17621000,
        "netincome": 2941498000,
        "netincomeapplicabletocommon": 2941498000,
        "researchdevelopmentexpense": null,
        "totalrevenue": 31874678000,
        "sellinggeneraladministrativeexpenses": 5401969000,
        "commonstock": 76000,
        "deferredcharges": 629905000,
        "cashandcashequivalents": 4921305000,
        "cashcashequivalentsandshortterminvestments": 4923907000,
        "goodwill": 2395894000,
        "intangibleassets": null,
        "inventoriesnet": null,
        "minorityinterest": 553302000,
        "otherassets": 987879000,
        "othercurrentassets": 585381000,
        "othercurrentliabilities": null,
        "otherequity": 921586000,
        "otherliabilities": 1609137000,
        "preferredstock": null,
        "propertyplantequipmentnet": 793444000,
        "retainedearnings": 11758131000,
        "totalassets": 17930452000,
        "totalcurrentassets": 11904442000,
        "totalcurrentliabilities": 8158079000,
        "totalliabilities": 12198417000,
        "totallongtermdebt": 26403000,
        "totalreceivablesnet": 5663334000,
        "totalshorttermdebt": 330000,
        "totalstockholdersequity": 5732035000,
        "treasurystock": "-9423202000",
        "created_at": "2015-04-24T01:00:10.346Z",
        "updated_at": "2015-04-24T01:00:10.346Z",
    },
    {
        "ros": 13.505725057145538,
        "roe": 51.957061412502,
        "roa": 17.123963321849452,
        "roc": 44.79600725148452,
        "symbol": "ACN",
        "cik": "0001467373",
        "name": "10-K",
        "period": "ttm",
        "year": 2014,
        "quarter": 3,
        "usdconversionrate": "1.00",
        "restated": false,
        "receiveddate": "2014-10-23T22:00:00.000Z",
        "preliminary": false,
        "periodlengthcode": "m",
        "periodlength": 12,
        "periodenddate": "2014-05-30T22:00:00.000Z",
        "original": true,
        "dcn": "0001467373-14-000467",
        "currencycode": "USD",
        "crosscalculated": true,
        "audited": false,
        "amended": false,
        "changeincurrentassets": -454395000,
        "changeincurrentliabilities": -317285000,
        "changeininventories": null,
        "dividendspaid": -1254916000,
        "effectofexchangerateoncash": "26726000",
        "capitalexpenditures": -322642000,
        "cashfromfinancingactivities": -3604211000,
        "cashfrominvestingactivities": -1424124000,
        "cashfromoperatingactivities": 3112383000,
        "cfdepreciationamortization": 610371000,
        "changeinaccountsreceivable": null,
        "investmentchangesnet": null,
        "netchangeincash": -1889226000,
        "totaladjustments": -30734000,
        "ebit": 4204650000,
        "costofrevenue": 21566907000,
        "discontinuedoperations": null,
        "equityearnings": null,
        "accountingchange": null,
        "extraordinaryitems": null,
        "grossprofit": 9565446000,
        "incomebeforetaxes": 4174547000,
        "interestexpense": -14553000,
        "netincome": 2911482000,
        "netincomeapplicabletocommon": 2911482000,
        "researchdevelopmentexpense": null,
        "totalrevenue": 31132353000,
        "sellinggeneraladministrativeexpenses": 5378327000,
        "commonstock": 76000,
        "deferredcharges": 617447000,
        "cashandcashequivalents": 4048859000,
        "cashcashequivalentsandshortterminvestments": 4051546000,
        "goodwill": 2354811000,
        "intangibleassets": null,
        "inventoriesnet": null,
        "minorityinterest": 541667000,
        "otherassets": 942142000,
        "othercurrentassets": 694339000,
        "othercurrentliabilities": null,
        "otherequity": 986495000,
        "otherliabilities": 1616346000,
        "preferredstock": null,
        "propertyplantequipmentnet": 786599000,
        "retainedearnings": 11064794000,
        "totalassets": 17002384000,
        "totalcurrentassets": 11134693000,
        "totalcurrentliabilities": 7616168000,
        "totalliabilities": 11398753000,
        "totallongtermdebt": 26534000,
        "totalreceivablesnet": 5570061000,
        "totalshorttermdebt": 139000,
        "totalstockholdersequity": 5603631000,
        "treasurystock": "-8850092000",
        "created_at": "2015-04-24T01:47:26.251Z",
        "updated_at": "2015-04-24T01:47:26.251Z",
    },
    {
        "ros": 14.274657225856767,
        "roe": 66.16441399576549,
        "roa": 19.457333645025873,
        "roc": 49.83517800648951,
        "symbol": "ACN",
        "cik": "0001467373",
        "name": "10-K",
        "period": "ann",
        "year": 2013,
        "quarter": 4,
        "usdconversionrate": "1.00",
        "restated": false,
        "receiveddate": "2014-10-23T22:00:00.000Z",
        "preliminary": false,
        "periodlengthcode": "m",
        "periodlength": 12,
        "periodenddate": "2013-08-30T22:00:00.000Z",
        "original": false,
        "dcn": "0001467373-14-000467",
        "currencycode": "USD",
        "crosscalculated": false,
        "audited": true,
        "amended": false,
        "changeincurrentassets": -309694000,
        "changeincurrentliabilities": -259651000,
        "changeininventories": null,
        "dividendspaid": -1121738000,
        "effectofexchangerateoncash": "-89925000",
        "capitalexpenditures": -369593000,
        "cashfromfinancingactivities": -3065629000,
        "cashfrominvestingactivities": -1156215000,
        "cashfromoperatingactivities": 3303128000,
        "cfdepreciationamortization": 593028000,
        "changeinaccountsreceivable": null,
        "investmentchangesnet": 0,
        "netchangeincash": -1008641000,
        "totaladjustments": -251391000,
        "ebit": 4338680000,
        "costofrevenue": 21010110000,
        "discontinuedoperations": null,
        "equityearnings": null,
        "accountingchange": null,
        "extraordinaryitems": null,
        "grossprofit": 9384175000,
        "incomebeforetaxes": 4339294000,
        "interestexpense": -14035000,
        "netincome": 3281878000,
        "netincomeapplicabletocommon": 3281878000,
        "researchdevelopmentexpense": null,
        "totalrevenue": 30394285000,
        "sellinggeneraladministrativeexpenses": 5317537000,
        "commonstock": 75000,
        "deferredcharges": 554747000,
        "cashandcashequivalents": 5631885000,
        "cashcashequivalentsandshortterminvestments": 5634410000,
        "goodwill": 1818586000,
        "intangibleassets": null,
        "inventoriesnet": null,
        "minorityinterest": 467643000,
        "otherassets": 807665000,
        "othercurrentassets": 568277000,
        "othercurrentliabilities": null,
        "otherequity": 875156000,
        "otherliabilities": 1687654000,
        "preferredstock": null,
        "propertyplantequipmentnet": 779675000,
        "retainedearnings": 10069844000,
        "totalassets": 16867049000,
        "totalcurrentassets": 11844178000,
        "totalcurrentliabilities": 8160990000,
        "totalliabilities": 11906863000,
        "totallongtermdebt": 25600000,
        "totalreceivablesnet": 4846574000,
        "totalshorttermdebt": 0,
        "totalstockholdersequity": 4960186000,
        "treasurystock": "-7326079000",
        "created_at": "2015-04-24T01:00:10.346Z",
        "updated_at": "2015-04-24T01:00:10.346Z",
    },
    {
        "ros": 13.001376688180882,
        "roe": 61.592205957162285,
        "roa": 15.322210698023422,
        "roc": 45.24839853159284,
        "symbol": "ACN",
        "cik": "0001467373",
        "name": "10-K",
        "period": "ann",
        "year": 2012,
        "quarter": 4,
        "usdconversionrate": "1.00",
        "restated": false,
        "receiveddate": "2014-10-23T22:00:00.000Z",
        "preliminary": false,
        "periodlengthcode": "m",
        "periodlength": 12,
        "periodenddate": "2012-08-30T22:00:00.000Z",
        "original": false,
        "dcn": "0001467373-14-000467",
        "currencycode": "USD",
        "crosscalculated": false,
        "audited": true,
        "amended": false,
        "changeincurrentassets": -128459000,
        "changeincurrentliabilities": 650837000,
        "changeininventories": null,
        "dividendspaid": -950857000,
        "effectofexchangerateoncash": "-223164000",
        "capitalexpenditures": -371974000,
        "cashfromfinancingactivities": -2558855000,
        "cashfrominvestingactivities": -535385000,
        "cashfromoperatingactivities": 4256852000,
        "cfdepreciationamortization": 593545000,
        "changeinaccountsreceivable": null,
        "investmentchangesnet": 4995000,
        "netchangeincash": 939448000,
        "totaladjustments": 1431919000,
        "ebit": 3871548000,
        "costofrevenue": 20790284000,
        "discontinuedoperations": null,
        "equityearnings": null,
        "accountingchange": null,
        "extraordinaryitems": null,
        "grossprofit": 8987701000,
        "incomebeforetaxes": 3904174000,
        "interestexpense": -15061000,
        "netincome": 2553510000,
        "netincomeapplicabletocommon": 2553510000,
        "researchdevelopmentexpense": null,
        "totalrevenue": 29777985000,
        "sellinggeneraladministrativeexpenses": 5114462000,
        "commonstock": 74000,
        "deferredcharges": 537943000,
        "cashandcashequivalents": 6640526000,
        "cashcashequivalentsandshortterminvestments": 6642787000,
        "goodwill": 1215383000,
        "intangibleassets": null,
        "inventoriesnet": null,
        "minorityinterest": 478595000,
        "otherassets": 707719000,
        "othercurrentassets": 778701000,
        "othercurrentliabilities": null,
        "otherequity": 863714000,
        "otherliabilities": 1920186000,
        "preferredstock": null,
        "propertyplantequipmentnet": 779494000,
        "retainedearnings": 7904242000,
        "totalassets": 16665415000,
        "totalcurrentassets": 12587931000,
        "totalcurrentliabilities": 8109205000,
        "totalliabilities": 12519582000,
        "totallongtermdebt": 22000,
        "totalreceivablesnet": 4480711000,
        "totalshorttermdebt": 11000,
        "totalstockholdersequity": 4145833000,
        "treasurystock": "-5285625000",
        "created_at": "2015-04-24T01:00:10.346Z",
        "updated_at": "2015-04-24T01:00:10.346Z"
    },
    {
        "ros": 13.491938647976303,
        "roe": 51.31681854699073,
        "roa": 16.405040988369954,
        "roc": 44.006834368684046,
        "symbol": "ACN",
        "cik": "0001467373",
        "name": "10-K",
        "period": "ttm",
        "year": 2014,
        "quarter": 4,
        "usdconversionrate": "1.00",
        "restated": false,
        "receiveddate": "2014-10-23T22:00:00.000Z",
        "preliminary": false,
        "periodlengthcode": "m",
        "periodlength": 12,
        "periodenddate": "2014-08-30T22:00:00.000Z",
        "original": true,
        "dcn": "0001467373-14-000467",
        "currencycode": "USD",
        "crosscalculated": false,
        "audited": true,
        "amended": false,
        "changeincurrentassets": -704532000,
        "changeincurrentliabilities": 136695000,
        "changeininventories": null,
        "dividendspaid": -1254916000,
        "effectofexchangerateoncash": "25162000",
        "capitalexpenditures": -321870000,
        "cashfromfinancingactivities": -3165416000,
        "cashfrominvestingactivities": -1056411000,
        "cashfromoperatingactivities": 3486085000,
        "cfdepreciationamortization": 620743000,
        "changeinaccountsreceivable": null,
        "investmentchangesnet": 0,
        "netchangeincash": -710580000,
        "totaladjustments": 310127000,
        "ebit": 4300512000,
        "costofrevenue": 22190212000,
        "discontinuedoperations": null,
        "equityearnings": null,
        "accountingchange": null,
        "extraordinaryitems": null,
        "grossprofit": 9684466000,
        "incomebeforetaxes": 4297701000,
        "interestexpense": -17621000,
        "netincome": 2941498000,
        "netincomeapplicabletocommon": 2941498000,
        "researchdevelopmentexpense": null,
        "totalrevenue": 31874678000,
        "sellinggeneraladministrativeexpenses": 5401969000,
        "commonstock": 76000,
        "deferredcharges": 629905000,
        "cashandcashequivalents": 4921305000,
        "cashcashequivalentsandshortterminvestments": 4923907000,
        "goodwill": 2395894000,
        "intangibleassets": null,
        "inventoriesnet": null,
        "minorityinterest": 553302000,
        "otherassets": 987879000,
        "othercurrentassets": 585381000,
        "othercurrentliabilities": null,
        "otherequity": 921586000,
        "otherliabilities": 1609137000,
        "preferredstock": null,
        "propertyplantequipmentnet": 793444000,
        "retainedearnings": 11758131000,
        "totalassets": 17930452000,
        "totalcurrentassets": 11904442000,
        "totalcurrentliabilities": 8158079000,
        "totalliabilities": 12198417000,
        "totallongtermdebt": 26403000,
        "totalreceivablesnet": 5663334000,
        "totalshorttermdebt": 330000,
        "totalstockholdersequity": 5732035000,
        "treasurystock": "-9423202000",
        "created_at": "2015-04-24T01:47:26.251Z",
        "updated_at": "2015-04-24T01:47:26.251Z",
    },
    {
        "ros": 13.491938647976303,
        "roe": 51.31681854699073,
        "roa": 16.405040988369954,
        "roc": 44.006834368684046,
        "symbol": "ACN",
        "cik": "0001467373",
        "name": "10-K",
        "period": "ytd",
        "year": 2014,
        "quarter": 4,
        "usdconversionrate": "1.00",
        "restated": false,
        "receiveddate": "2014-10-23T22:00:00.000Z",
        "preliminary": false,
        "periodlengthcode": "m",
        "periodlength": 12,
        "periodenddate": "2014-08-30T22:00:00.000Z",
        "original": true,
        "dcn": "0001467373-14-000467",
        "currencycode": "USD",
        "crosscalculated": false,
        "audited": true,
        "amended": false,
        "changeincurrentassets": -704532000,
        "changeincurrentliabilities": 136695000,
        "changeininventories": null,
        "dividendspaid": -1254916000,
        "effectofexchangerateoncash": "25162000",
        "capitalexpenditures": -321870000,
        "cashfromfinancingactivities": -3165416000,
        "cashfrominvestingactivities": -1056411000,
        "cashfromoperatingactivities": 3486085000,
        "cfdepreciationamortization": 620743000,
        "changeinaccountsreceivable": null,
        "investmentchangesnet": 0,
        "netchangeincash": -710580000,
        "totaladjustments": 310127000,
        "ebit": 4300512000,
        "costofrevenue": 22190212000,
        "discontinuedoperations": null,
        "equityearnings": null,
        "accountingchange": null,
        "extraordinaryitems": null,
        "grossprofit": 9684466000,
        "incomebeforetaxes": 4297701000,
        "interestexpense": -17621000,
        "netincome": 2941498000,
        "netincomeapplicabletocommon": 2941498000,
        "researchdevelopmentexpense": null,
        "totalrevenue": 31874678000,
        "sellinggeneraladministrativeexpenses": 5401969000,
        "commonstock": 76000,
        "deferredcharges": 629905000,
        "cashandcashequivalents": 4921305000,
        "cashcashequivalentsandshortterminvestments": 4923907000,
        "goodwill": 2395894000,
        "intangibleassets": null,
        "inventoriesnet": null,
        "minorityinterest": 553302000,
        "otherassets": 987879000,
        "othercurrentassets": 585381000,
        "othercurrentliabilities": null,
        "otherequity": 921586000,
        "otherliabilities": 1609137000,
        "preferredstock": null,
        "propertyplantequipmentnet": 793444000,
        "retainedearnings": 11758131000,
        "totalassets": 17930452000,
        "totalcurrentassets": 11904442000,
        "totalcurrentliabilities": 8158079000,
        "totalliabilities": 12198417000,
        "totallongtermdebt": 26403000,
        "totalreceivablesnet": 5663334000,
        "totalshorttermdebt": 330000,
        "totalstockholdersequity": 5732035000,
        "treasurystock": "-9423202000",
        "created_at": "2015-04-24T01:43:40.134Z",
        "updated_at": "2015-04-24T01:43:40.134Z"
    },
    {
        "ros": 12.687704863913218,
        "roe": 58.71889075164909,
        "roa": 14.478438497003784,
        "roc": 44.351335943199935,
        "symbol": "ACN",
        "cik": "0001467373",
        "name": "10-K",
        "period": "ann",
        "year": 2011,
        "quarter": 4,
        "usdconversionrate": "1.00",
        "restated": false,
        "receiveddate": "2013-10-28T23:00:00.000Z",
        "preliminary": false,
        "periodlengthcode": "m",
        "periodlength": 12,
        "periodenddate": "2011-08-30T22:00:00.000Z",
        "original": false,
        "dcn": "0001467373-13-000482",
        "currencycode": "USD",
        "crosscalculated": false,
        "audited": true,
        "amended": false,
        "changeincurrentassets": -620481000,
        "changeincurrentliabilities": 986561000,
        "changeininventories": null,
        "dividendspaid": -643642000,
        "effectofexchangerateoncash": "245938000",
        "capitalexpenditures": -403714000,
        "cashfromfinancingactivities": -2121504000,
        "cashfrominvestingactivities": -703387000,
        "cashfromoperatingactivities": 3441739000,
        "cfdepreciationamortization": 513256000,
        "changeinaccountsreceivable": null,
        "investmentchangesnet": -241000,
        "netchangeincash": 862786000,
        "totaladjustments": 888499000,
        "ebit": 3470457000,
        "costofrevenue": 18966195000,
        "discontinuedoperations": null,
        "equityearnings": null,
        "accountingchange": null,
        "extraordinaryitems": null,
        "grossprofit": 8386719000,
        "incomebeforetaxes": 3512022000,
        "interestexpense": -15000000,
        "netincome": 2277677000,
        "netincomeapplicabletocommon": 2277677000,
        "researchdevelopmentexpense": null,
        "totalrevenue": 27352914000,
        "sellinggeneraladministrativeexpenses": 4914742000,
        "commonstock": 73000,
        "deferredcharges": 559794000,
        "cashandcashequivalents": 5701078000,
        "cashcashequivalentsandshortterminvestments": 5706007000,
        "goodwill": 1131991000,
        "intangibleassets": null,
        "inventoriesnet": null,
        "minorityinterest": 471921000,
        "otherassets": 986867000,
        "othercurrentassets": 587224000,
        "othercurrentliabilities": null,
        "otherequity": 784278000,
        "otherliabilities": 1852657000,
        "preferredstock": null,
        "propertyplantequipmentnet": 785231000,
        "retainedearnings": 6281517000,
        "totalassets": 15731510000,
        "totalcurrentassets": 11471183000,
        "totalcurrentliabilities": 7906589000,
        "totalliabilities": 11852559000,
        "totallongtermdebt": 0,
        "totalreceivablesnet": 4621792000,
        "totalshorttermdebt": 4419000,
        "totalstockholdersequity": 3878951000,
        "treasurystock": "-3577574000",
        "created_at": "2015-04-24T01:00:10.346Z",
        "updated_at": "2015-04-24T01:00:10.346Z"
    }
];

var median = new marketModel(market[0]);
median.save();

for(var i in companies) {

    var newCompany = new companiesModel(companies[i]);

    // add form10k to company
    if( companies[i]['cik'] == '0001467373') {
        // ADD FORM 10K
        for(var y in form10k) {
            var _form10k = new form10kModel( form10k[y] );
            _form10k.company = newCompany._id;
            _form10k.save();
            newCompany.formtenk.push(_form10k._id);
        }
    }
    newCompany.market = median;
    newCompany.save();
}

companiesModel.find({})
    .populate(['formtenk','market'])
    .exec(function(error, items) {
        console.log(items, null, "\t");
    });
