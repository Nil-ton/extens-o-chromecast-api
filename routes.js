const {Router} = require('express')
const { ListDeviceCast } = require('./controllers/ListDeviceCast')


const router = Router()

router
    .get('/', ListDeviceCast)

    module.exports = router