let faker = require('faker');
let data = { data: [] };
for (let id = 0; id < 1000; id++) {
    data.data.push({
        "id": id,
        "address": faker.address.streetAddress(),
        "latitude": faker.address.latitude(),
        "longitude": faker.address.longitude(),
        "first_name": faker.name.firstName()
    });
}

console.log(JSON.stringify(data)); 