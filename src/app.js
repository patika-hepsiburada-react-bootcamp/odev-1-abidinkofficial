// Importing services
import getData from "./lib/service.js"

// Calling the services and logging retrieved data
const data = await getData(1)
console.log(data)
