let faker = require('faker');
let generateData = () => {
    let data = []
    for (let id = 0; id < 1000; id++) {
        data.push({
            "id": id,
            "address": faker.address.streetAddress(),
            "latitude": faker.address.latitude(),
            "longitude": faker.address.longitude(),
            "first_name": faker.name.firstName()
        });
    }
    return { "data": data }
}
module.exports = generateData
