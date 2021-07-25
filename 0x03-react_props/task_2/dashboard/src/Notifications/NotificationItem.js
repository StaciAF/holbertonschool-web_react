import React from 'react'

const NotificationItem = ({ type, html, val }) => {
    return (
        <li data-notification-type={type} dangerouslySetInnerHTML={html}>{value}</li>
    )
}
export default NotificationItem;
