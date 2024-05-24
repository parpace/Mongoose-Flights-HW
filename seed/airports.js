const db = require(`../db`)
const { Airport } = require(`../models`)

db.on(`error`, console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const airports = [
        {
            airport_name: `BNA`,
            location: `Nashville, TN`,
            code: `1`
        },
        {
            airport_name: `DEN`,
            location: `Denver, CO`,
            code: `2`
        },
        {
            airport_name: `LAS`,
            location: `Las Vegas, NV`,
            code: `3`
        },
        {
            airport_name: `ATL`,
            location: `Atlanta, GA`,
            code: `4`
        }
    ]

    await Airport.insertMany(airports)
    console.log(`created airports`)
}

const run = async () => {
    await main()
    db.close()
}

run()