const ChromecastAPI = require('chromecast-api')
const client = new ChromecastAPI()

const ListDeviceCast = (req, res) => {
    client.on('device', function (device) {
        const { name, friendlyName, host } = device
        console.log({
            name: name,
            friendlyName: friendlyName,
            host: host
        })
        return res.json({
            name: name,
            friendlyName: friendlyName,
            host: host
        })
    })
}

module.exports = {
    ListDeviceCast
}