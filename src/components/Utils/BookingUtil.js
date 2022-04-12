import axios from "axios";
import {GET_PARK_SPOTS_ENDPOINT} from "../constants/Endpoints";

export const getParkSpots = async ({checkInTime, checkOutTime}) => {
    const request = new Promise((resolve, reject) => {
        axios.post(GET_PARK_SPOTS_ENDPOINT, {check_in: checkInTime, check_out: checkOutTime})
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                reject(error.response?.data)
            })
    })

    const responses = await Promise.allSettled([request])
    const response = responses[0];
    if (response.status !== "fulfilled" || response.status === null) {
        console.error("Failed to get parks spots")
        return [];
    } else {
        return response.value
    }
}

export const transformParkSpots = (allSpots) => {

    const availableSpots = allSpots.available
    const unavailableSpots = allSpots.unavailable
    const availableSpaces = transformParkSpotsForStatus({parkSpots: availableSpots, isOccupied: false})
    const unavailableSpaces = transformParkSpotsForStatus({parkSpots: unavailableSpots, isOccupied: true})

    return [...availableSpaces, ...unavailableSpaces]
}


const transformParkSpotsForStatus = ({parkSpots, isOccupied}) => {
    return parkSpots.reduce((accum, spot) => {
        let trackSpot = {}
        trackSpot.space_name = spot.space_name
        trackSpot.id = spot._id
        trackSpot.isOccupied = isOccupied
        trackSpot.isSelected = false
        return [...accum, trackSpot]

    }, [])
}

export const calculatePrice = (dateTime1, dateTime2) => {
    const flatPrice = 0.005
    const diff = (Math.abs(dateTime2 - dateTime1)) / (1000 * 60);
    return Math.round(diff * flatPrice)
}