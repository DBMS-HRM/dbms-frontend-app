function getToday() {
    const fullDate = new Date()
    const month = fullDate.getMonth() + 1
    const date = fullDate.getDate()
    return `${fullDate.getFullYear()}-${month.toString().length === 1 ? "0" + month : month}-${date.toString().length === 1 ? "0" + date : date}`
}

function getDate(date) {
    const newDate = new Date(date)
    const month = newDate.getMonth() + 1
    const customDate = newDate.getDate() - 1
    return `${newDate.getFullYear()}-${month.toString().length === 1 ? "0" + month : month}-${customDate.toString().length === 1 ? "0" + customDate : customDate}`
}

export {
    getDate,
    getToday
}