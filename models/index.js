const mongoose = require(`mongoose`)
const FlightSchema = require(`./flight`)
const AirportSchema = require(`./airport`)

const Flight = mongoose.model(`flight`, FlightSchema)
const Airport = mongoose.model(`airport`, AirportSchema)

module.exports = {
    Flight,
    Airport
}