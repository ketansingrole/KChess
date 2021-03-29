module.exports = {
    pluginOptions: {
        electronBuilder: {
            builderOptions: {
                extraResources: [
                    {
                        "from": "./public/stockfish",
                        "to": "extraResources",
                        "filter": [
                            "**/*"
                        ]
                    }
                ],
                // extraResourses: ['/public/stockfish/**']
            },
            nodeIntegration: true,
        }
    }
}