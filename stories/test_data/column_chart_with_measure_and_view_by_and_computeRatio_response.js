// (C) 2020 GoodData Corporation
module.exports = projectId => {
    return {
        executionResponse: {
            dimensions: [
                {
                    headers: [
                        {
                            measureGroupHeader: {
                                items: [
                                    {
                                        measureHeaderItem: {
                                            name: "% Amount",
                                            format: "#,##0.00%",
                                            localIdentifier: "350381637b674c2eaa18d29ebf22c043",
                                        },
                                    },
                                ],
                            },
                        },
                    ],
                },
                {
                    headers: [
                        {
                            attributeHeader: {
                                name: "Product Name",
                                localIdentifier: "f4213833c9244f63858b52686044f7aa",
                                uri: "/gdc/md/" + projectId + "/obj/952",
                                identifier: "label.product.id.name",
                                formOf: {
                                    name: "Product",
                                    uri: "/gdc/md/" + projectId + "/obj/949",
                                    identifier: "attr.product.id",
                                },
                            },
                        },
                    ],
                },
            ],
            links: {
                executionResult:
                    "/gdc/app/projects/dfnkvzqa683mz1c29ijdkydrsodm8wjw/executionResults/5368679334618725376?q=eAGdUMFKAzEQ%2FRUZ8FYI1irdgogHlV5ExJ7KHrI7UbLNZNZk4rIt%2FXcT2woe9Thv3rx57%2B0gmJ6D%0APGkysICVFyvOIEygZZfIR1isd6BFgm2SmNeyzbznwJhaybSYiHQYM5YHtLF3enzgQEvMkHrHVhEq%0AfPObz%2B2Hvp5f0vainVa2w82IITLSfOgGxU2nqqtplmh0NPfOkPGyeln%2BWWNWKXO4jrcWb7Lgd6Bf%0Aln%2FS%2FMPjrCqSLNqVZtZ1va8nQCbX0x6qOr07P7sjTl6gEAIPZXskPgZOPdT7L979guo%3D%0A&c=430fd7d8cb51bc0a1223bc16d682f18a&offset=0%2C0&limit=1000%2C1000&dimensions=2&totals=0%2C0",
            },
        },
    };
};
