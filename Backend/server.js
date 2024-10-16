const express = require("express");

const app = express();

app.get("/lp-data", (req, res) => {
  res.json({
    data: {
        offers: [
            {
                name: "Pro",
                price: "$30 / Month",
                feature: [
                    {name: "Website & Mobile Optimized", unlock: true},
                    {name: "Life-time Free Usage", unlock: true},
                    {name: "Software Update", unlock: true},
                    {name: "6 Month Support", unlock: true},
                    {name: "No Installation Charges", unlock: false},
                    {name: "Inbuilt Malware Scanner", unlock: false}
                ]
            },
            {
                name: "Best",
                price: "$79.99 / Month",
                feature: [
                    {name: "Website & Mobile Optimized", unlock: true},
                    {name: "Life-time Free Usage", unlock: true},
                    {name: "Software Update", unlock: true},
                    {name: "6 Month Support", unlock: true},
                    {name: "No Installation Charges", unlock: true},
                    {name: "Inbuilt Malware Scanner", unlock: false}
                ]
            },
            {
                name: "Enterprise",
                price: "$149.99 / Month",
                feature: [
                    {name: "Website & Mobile Optimized", unlock: true},
                    {name: "Life-time Free Usage", unlock: true},
                    {name: "Software Update", unlock: true},
                    {name: "6 Month Support", unlock: true},
                    {name: "No Installation Charges", unlock: true},
                    {name: "Inbuilt Malware Scanner", unlock: true}
                ]
            },

        ]
    }
  });
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
