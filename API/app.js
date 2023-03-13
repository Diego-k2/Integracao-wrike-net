import  express  from "express";
import fetch from "node_fetch";
import bodyParser from "body-parser";

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

    let resposta = await fetch("https://tstdrv1800003.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=372&deploy=1&compid=TSTDRV1800003&h=89a41f9eb33df9cd6594", options);

    console.log(resposta.body);

    response.end();
});


