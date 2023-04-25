import moment from "moment";

// Unix number to DateTime
// April 20th 2023, 8:25:27 pm
export const dateTimeFormat1 = (date: any) => {
    return moment(date).format("MMMM Do YYYY, h:mm:ss a");
}

// UTC to Date
// April 20, 2023
export const dateFormat = (date: any) => {
    return moment(date).format("MMMM D, YYYY");
}

//Number formatted with commas separated
//500000 to 5,00,000
export const formatNumbers = (number?: number) => {
    return number?.toLocaleString("en-US");
}