const db = require(`./db`)
const { Flight, Airport } = require(`./models`)


// Read flights
const findFlights = async () => {
    const flights = await Flight.find()
        // .populate('departingAirport', 'airport_name location')
        // .populate('arrivalAirport', 'airport_name location')
    flights.forEach(flight => {
        console.log({
            airline: flight.airline,
            flightNumber: flight.flightNumber,
            departureDate: flight.departureTime.date,
            departureTime: flight.departureTime.time,
            departingAirport: {
                name: flight.departingAirport.airport_name,
                location: flight.departingAirport.location
            },
            arrivalAirport: {
                name: flight.arrivalAirport.airport_name,
                location: flight.arrivalAirport.location
            }
        })
    })
}

const deleteFlights = async () => {
    let deleted = await Flight.deleteOne(
            { 'departureTime.time': '11.05' },
    )
    console.log(deleted)
}

const checkFlightTimes = async () => {
    const flights = await Flight.find({}, 'departureTime')
    flights.forEach(flight => {
        console.log(flight.departureTime)
    })
}

async function main() {
    try {
    //   await findFlights()
      await deleteFlights()
    //   await checkFlightTimes()
    } catch (error) {
        console.log(error)
    } finally {
        await db.close()
    }
}

main()