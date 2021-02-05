/**
 * @param {moment Object} date1 The bigger date or most recent one
 * @param {moment Object} date2 The smaller date or least recent one
 * @returns {Object} It will return an object containing the difference in years, months, days, hours, minutes and seconds
 */
export function diffYMDHMS(date1, date2) {
    let years = date1.diff(date2, 'year');
    date2.add(years, 'years');

    let months = date1.diff(date2, 'months');
    date2.add(months, 'months');

    let days = date1.diff(date2, 'days');
    date2.add(days, 'days');

    let hours = date1.diff(date2, 'hours');
    date2.add(hours, 'hours');

    let minutes = date1.diff(date2, 'minutes');
    date2.add(minutes, 'minutes');

    let seconds = date1.diff(date2, 'seconds');

    return { years, months, days, hours, minutes, seconds };
}