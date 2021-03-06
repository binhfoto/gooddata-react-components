// (C) 2020 GoodData Corporation
module.exports = projectId => {
    return {
        execution: {
            afm: {
                measures: [
                    {
                        localIdentifier: "c2fa878519934f39aefe9325638f2beb",
                        definition: {
                            measure: {
                                item: {
                                    uri: "/gdc/md/" + projectId + "/obj/9211",
                                },
                            },
                        },
                        alias: "_Close [BOP]",
                    },
                    {
                        localIdentifier: "8a1a34106a8a41c8b0a8da816600802e",
                        definition: {
                            measure: {
                                item: {
                                    uri: "/gdc/md/" + projectId + "/obj/9203",
                                },
                            },
                        },
                        alias: "_Close [EOP]",
                    },
                    {
                        localIdentifier: "3b4fc6113ff9452da677ef7842e2302c",
                        definition: {
                            measure: {
                                item: {
                                    uri: "/gdc/md/" + projectId + "/obj/1277",
                                },
                            },
                        },
                        alias: "_Timeline [BOP]",
                    },
                    {
                        localIdentifier: "26843260d95c4c9fa0aecc996ffd7829",
                        definition: {
                            measure: {
                                item: {
                                    uri: "/gdc/md/" + projectId + "/obj/1276",
                                },
                            },
                        },
                        alias: "_Timeline [EOP]",
                    },
                ],
                attributes: [
                    {
                        displayForm: {
                            uri: "/gdc/md/" + projectId + "/obj/1027",
                        },
                        localIdentifier: "0e3388d37e444c369731afe398740572",
                    },
                    {
                        displayForm: {
                            uri: "/gdc/md/" + projectId + "/obj/1024",
                        },
                        localIdentifier: "6af145960f4145efbe4ace7504b0f1de",
                    },
                ],
            },
            resultSpec: {
                dimensions: [
                    {
                        itemIdentifiers: ["measureGroup"],
                    },
                    {
                        itemIdentifiers: [
                            "0e3388d37e444c369731afe398740572",
                            "6af145960f4145efbe4ace7504b0f1de",
                        ],
                    },
                ],
                sorts: [],
            },
        },
    };
};
