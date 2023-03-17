const express = require("express");
const fetch = require("fetch");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;


app.listen(port, () => { console.log(`SERVER IS RUNNING IN PORT ${port}`) });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/wrikeInte", async (request, response) => {

    let corpo = request.body;

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "User-Agent" : "Mozilla/5.0"
        },
        body: JSON.stringify(corpo)
    }

    let resposta = await fetch("https://tstdrv2613820.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=756&deploy=1&compid=TSTDRV2613820&h=b452d86ddc0b42c97dce", options);

    console.log(resposta.body);

    response.end();
});


