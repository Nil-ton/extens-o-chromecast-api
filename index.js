const { WebSocketServer } = require('ws');
const ChromecastAPI = require('chromecast-api')
const http = require('http')

const wss = new WebSocketServer({ port: process.env.PORT || 8080 });
const server = http.createServer(wss);

wss.on('connection', ws => {
    console.log('connected')
    const client = new ChromecastAPI()

    client.on('device', device => {
        device.on('connected', () => {
            console.log('device connected')
        })
        ws.on('message', data => {
            const mediaURL = JSON.parse(data)
            device.play(mediaURL, function (err) {
                if (!err) console.log('Playing in your chromecast')
                else device.close(() => console.log('device disconnected'))
            })
        })
    })

    ws.on("close", () => {
        console.log('disconnected')
    })
});



server.listen(process.env.PORT || 8000, "localhost", () => console.log(`http://localhost:${process.env.PORT || 8000}`));