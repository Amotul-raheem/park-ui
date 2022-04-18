import axios from "axios";
import {GET_PARK_SPOTS_ENDPOINT} from "../constants/Endpoints";
import moment from "moment";

export const getParkSpots = async ({checkInTime, checkOutTime}) => {
    const request = new Promise((resolve, reject) => {
        axios.post(GET_PARK_SPOTS_ENDPOINT, {
            check_in: checkInTime, check_out: checkOutTime
        })
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


export const mergeBookingHistory = ({bookingHistoryByStatus}) => {
    const pending = transformBookingHistory(bookingHistoryByStatus.pending);
    const cancelled = transformBookingHistory(bookingHistoryByStatus.cancelled);
    const fulfilled = transformBookingHistory(bookingHistoryByStatus.fulfilled);
    const active = transformBookingHistory(bookingHistoryByStatus.active);

    return [...pending, ...cancelled, ...fulfilled, ...active]
}

const transformBookingHistory = (bookingHistoryForStatus) => {
    return bookingHistoryForStatus.reduce((accum, history) => {
        let parkHistory = {}
        parkHistory.spaceName = history.space_name
        parkHistory.checkIn = formatDateTime(history.check_in)
        parkHistory.checkOut = formatDateTime(history.check_out)
        parkHistory.price = history.price
        parkHistory.status = history.booking_status;
        return [...accum, parkHistory]

    }, [])
}


const formatDateTime = (dateTime) => {
    return moment(dateTime).format("MMM Do YYYY, h:mma")

}