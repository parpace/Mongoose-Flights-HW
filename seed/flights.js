const db = require(`../db`)
const { Airport, Flight } = require(`../models`)

db.on(`error`, console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const bna = await Airport.find({ airport_name: 'BNA' })
    const den = await Airport.find({ airport_name: 'DEN' })
    const las = await Airport.find({ airport_name: `LAS`})
    const atl = await Airport.find({ airport_name: `ATL`})

    const flights = [
        {
            airline: `Southwest Airlines`,
            flightNumber: 1212,
            price: 1200,
            numberOfSeats: 200,
            departingAirport: bna[0]._id,
            arrivalAirport: den[0]._id,
            departureTime: {
                date: `11/20/2024`,
                time: `11:05`
            }
        },
        {
            airline: `Southwest Airlines`,
            flightNumber: 2424,
            price: 1200,
            numberOfSeats: 200,
            departingAirport: den[0]._id,
            arrivalAirport: atl[0]._id,
            departureTime: {
                date: `11/20/2024`,
                time: `14:05`
            }
        },
        {
            airline: `Delta Airlines`,
            flightNumber: 5353,
            price: 1400,
            numberOfSeats: 225,
            departingAirport: atl[0]._id,
            arrivalAirport: las[0]._id,
            departureTime: {
                date: `11/20/2024`,
                time: `9:50`
            }
        },
        {
            airline: `Delta Airlines`,
            flightNumber: 7070,
            price: 1400,
            numberOfSeats: 225,
            departingAirport: las[0]._id,
            arrivalAirport: bna[0]._id,
            departureTime: {
                date: `11/20/2024`,
                time: `11:20`
            }
        },
        {
            airline: `American Airlines`,
            flightNumber: 1234,
            price: 1300,
            numberOfSeats: 250,
            departingAirport: bna[0]._id,
            arrivalAirport: las[0]._id,
            departureTime: {
                date: `11/20/2024`,
                time: `7:35`
            }
        },
        {
            airline: `American Airlines`,
            flightNumber: 9876,
            price: 1300,
            numberOfSeats: 250,
            departingAirport: atl[0]._id,
            arrivalAirport: den[0]._id,
            departureTime: {
                date: `11/20/2024`,
                time: `16:30`
            }
        },
        {
            airline: `Frontier Airlines`,
            flightNumber: 4747,
            price: 400,
            numberOfSeats: 150,
            departingAirport: den[0]._id,
            arrivalAirport: las[0]._id,
            departureTime: {
                date: `11/20/2024`,
                time: `10:50`
            }
        },
    ]
    await Flight.insertMany(flights)
    console.log(`created flights to and from airports`)
}

const run = async () => {
    await main()
    db.close()
}

run()