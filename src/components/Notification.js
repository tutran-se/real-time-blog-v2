import React from "react";
import { Link } from "react-router-dom";
import { GetNotifications } from "../hooks/notification";
import { formatDistance } from "date-fns";
import { updateNotification } from "../libs/notification";
const Notification = () => {
  const [notifications] = GetNotifications();
  const handleOnClick = (notificationId) => {
    updateNotification(notificationId);
  };
  return (
    <div className="notification-container">
      <div className="notification-icon">
        <i className="fas fa-bell"></i>
        {notifications.filter((e) => e.isRead === false).length > 0 && (
          <span className="notification-number">
            {notifications.filter((e) => e.isRead === false).length}
          </span>
        )}
      </div>
      {notifications.length > 0 && (
        <ul
          className={
            notifications.length > 4
              ? `notification-list scroll`
              : `notification-list`
          }
        >
          {notifications.map((notification) => (
            <li key={notification.id}>
              {/* Link to particular post, comment */}
              <Link
                to={`/dashboard/posts/${notification.postId}/${notification.postSlugify}`}
                onClick={() => handleOnClick(notification.id)}
              >
                <div className="avatar-wrapper">
                  {/* Avatar */}
                  <img
                    src={notification.senderPhotoURL}
                    alt="avatar"
                    className="avatar"
                  />
                </div>
                <div className="notification-content">
                  {/* Tu Tran loves your post */}
                  {notification.senderName} {notification.type} on your post
                  <br />
                  <span>
                    {/* 10 minutes ago */}
                    {formatDistance(
                      notification.createdAt.toDate(),
                      new Date(),
                      {
                        addSuffix: true,
                      }
                    )}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notification;
