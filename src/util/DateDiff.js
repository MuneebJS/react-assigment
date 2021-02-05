import React from 'react';
import PropTypes from 'prop-types';
import {diffYMDHMS} from '../lib/helpers';

const DateDiff = ({recentDate, olderDate, prefexText}) => {
    const timeDiff = diffYMDHMS(recentDate, olderDate);
    const { years, months, days, hours, minutes, seconds } = timeDiff;

    let yearsText = null;
    let monthsText;
    let daysText;
    let hoursText;
    let minutesText;
    let seconsText;

    if (years) {
        if (years > 1) {
            yearsText = `${years} years`
        } else {
            yearsText = `${years} year`
        }
    }

    if (months) {
        if (months > 1) {
            monthsText = `${months} months`
        } else {
            monthsText = `${months} month`
        }
    }

    if (days) {
        if (days > 1) {
            daysText = `${days} days`
        } else {
            daysText = `${days} day`
        }
    }

    if (hours && !months && !years) {
        if (hours > 1) {
            hoursText = `${hours} hours`
        } else {
            hoursText = `${hours} hour`
        }
    }

    if (minutes && !days && !months && !years) {
        if (minutes > 1) {
            minutesText = `${minutes} minutes`
        } else {
            minutesText = `${minutes} minute`
        }
    }

    if (seconds && !hours && !days && !months && !years) {
        if (seconds > 1) {
            seconsText = `${seconds} seconds`
        } else {
            seconsText = `${seconds} second`
        }
    }

    return <p className="diffDate">{prefexText} {yearsText} {monthsText} {daysText} {hoursText} {minutesText} {seconsText} ago </p>
}

DateDiff.prototype = {
    recentDate: PropTypes.string,
    olderDate: PropTypes.string,
    prefexText: PropTypes.string
};


export default DateDiff;