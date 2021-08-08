import { axios } from "axios";

const { addDevice } = require('../controllers/device')

const BASE_URL = process.env.DEV_URL;

test('adding new device', () => {
    const name = "Test Name",
        field = "Test Field",
        desc = "Test Description",
        availability = true
    const newDevice = {
        name: name,
        field: field,
        description: description,
        availability: availability
    }

    expect(addDevice(req, res))
})