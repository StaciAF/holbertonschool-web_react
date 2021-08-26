import React from 'react'
import PropTypes from 'prop-types'

const NotificationItem = ({ type = 'default', html, value }) => {
    return (
        <li data-notification-type={type} dangerouslySetInnerHTML={html}>{value}</li>
    )
}
NotificationItem.propTypes = {
    type: PropTypes.string.isRequired,
    __html: PropTypes.shape({
        html: PropTypes.string
    }),
    value: PropTypes.string
};

export default NotificationItem;
