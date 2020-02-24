// (C) 2020 GoodData Corporation
module.exports = projectId => {
    return {
        executionResponse: {
            dimensions: [
                {
                    headers: [
                        {
                            attributeHeader: {
                                name: "Location State",
                                localIdentifier: "state",
                                uri: "/gdc/md/" + projectId + "/obj/2211",
                                identifier: "label.restaurantlocation.locationstate",
                                formOf: {
                                    name: "Location State",
                                    uri: "/gdc/md/" + projectId + "/obj/2210",
                                    identifier: "attr.restaurantlocation.locationstate",
                                },
                            },
                        },
                        {
                            attributeHeader: {
                                name: "Location Name",
                                localIdentifier: "location",
                                uri: "/gdc/md/" + projectId + "/obj/2205",
                                identifier: "label.restaurantlocation.locationname",
                                formOf: {
                                    name: "Location Name",
                                    uri: "/gdc/md/" + projectId + "/obj/2204",
                                    identifier: "attr.restaurantlocation.locationname",
                                },
                            },
                        },
                    ],
                },
                {
                    headers: [
                        {
                            attributeHeader: {
                                name: "default (Date)",
                                localIdentifier: "year",
                                uri: "/gdc/md/" + projectId + "/obj/2011",
                                identifier: "date.aam81lMifn6q",
                                formOf: {
                                    name: "Quarter (Date)",
                                    uri: "/gdc/md/" + projectId + "/obj/2009",
                                    identifier: "date.quarter.in.year",
                                },
                            },
                        },
                        {
                            attributeHeader: {
                                name: "Short (Jan) (Date)",
                                localIdentifier: "month",
                                uri: "/gdc/md/" + projectId + "/obj/2073",
                                identifier: "date.abm81lMifn6q",
                                formOf: {
                                    name: "Month (Date)",
                                    uri: "/gdc/md/" + projectId + "/obj/2071",
                                    identifier: "date.month.in.year",
                                },
                            },
                        },
                        {
                            measureGroupHeader: {
                                items: [
                                    {
                                        measureHeaderItem: {
                                            name: "$ Franchise Fees",
                                            format: "[>=0]$#,##0;[<0]-$#,##0",
                                            localIdentifier: "franchiseFeesIdentifier",
                                            uri: "/gdc/md/" + projectId + "/obj/6685",
                                            identifier: "aaEGaXAEgB7U",
                                        },
                                    },
                                    {
                                        measureHeaderItem: {
                                            name: "$ Franchise Fees (Ad Royalty)",
                                            format: "[>=0]$#,##0;[<0]-$#,##0",
                                            localIdentifier: "franchiseFeesAdRoyaltyIdentifier",
                                            uri: "/gdc/md/" + projectId + "/obj/6694",
                                            identifier: "aabHeqImaK0d",
                                        },
                                    },
                                    {
                                        measureHeaderItem: {
                                            name: "$ Franchise Fees (Initial Franchise Fee)",
                                            format: "[>=0]$#,##0;[<0]-$#,##0",
                                            localIdentifier: "franchiseFeesInitialFranchiseFeeIdentifier",
                                            uri: "/gdc/md/" + projectId + "/obj/6695",
                                            identifier: "aaDHcv6wevkl",
                                        },
                                    },
                                    {
                                        measureHeaderItem: {
                                            name: "$ Franchise Fees (Ongoing Royalty)",
                                            format: "[>=0]$#,##0;[<0]-$#,##0",
                                            localIdentifier: "franchiseFeesIdentifierOngoingRoyalty",
                                            uri: "/gdc/md/" + projectId + "/obj/6693",
                                            identifier: "aaWGcgnsfxIg",
                                        },
                                    },
                                ],
                            },
                        },
                    ],
                },
            ],
            links: {
                executionResult:
                    "/gdc/app/projects/xms7ga4tf3g3nzucd8380o2bev8oeknp/executionResults/1660563287243456256?q=eAGtVl1vmzAU%2FSvI6UMmUWE%2B2pBu3RQpSxVpW5V2fYp4cMClXoyNjFmXVfnvuw6FrSSalIDEgz%2Bu%0Ar8%2B959xrXpCiuVT6G8koukIPQjPNaYJsFEteZqJAV8sXlLAi52QzkyqbJ2DmpEnsZInzKytGKQn0%0Ao5%2F64ncZJ6EfYumt6M9Q0rXIHbn64XjYdcHfihT0M6cZFfrhbn68Ezx2aHW8%2BMSSa%2FBItFZsVWp6%0ACiY8Bg%2BJYpxP5bO41zSf1O6ms6PRub4JsYBEwtF8bcZllhG1gekNFVSx2FqURGmqrOHCPV8E7%2F4N%0A4LtJOpg2JlOiqbHYsXFwQ2rCDTnLyK6%2FaGt3pmrkw61dqRq5vVI1Mrntj6rAA3f%2Fp%2BqrFPoJrBqF%0A1QTtNqxhm5728mFyUEZBsPGNkmWOIvt1WlXYI5QWMeJZfrzG0dnAHgzw%2B%2BUHHJ1XYwO5URRMamGc%0AWTNFRPzECmrNKC1gq7rl%2BJq4vAwvkJFQX1is4SSx7uSGcL0xYj4d2DjoGdhcMM0If5u8jhj7Tt6t%0ASCUTaU8Z9NEWJKfkc6W3PWV%2FkTHRTArrXkPvacut2wPg9fEAeC5ud5W6CPawN9EdXwUe3GPq63AJ%0Ad%2B2vHr4A5x37q4eDdiY6BYwDwMSZWE9OfwH90DNe3vSoBlTdPRuedn8bf5vY3vrB5EfbPzPo0cE%3D%0A&c=1009ad312f27e9b84f47021765ccbdba&offset=0%2C0&limit=1000%2C1000&dimensions=2&totals=0%2C0",
            },
        },
    };
};
