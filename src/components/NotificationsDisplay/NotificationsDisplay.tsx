import React from 'react';

import useApi from '../../hooks/useApi';

import NotificationCard from '../Notification/NotificationCard';

const NotificationsDisplay = () => {
  const data = useApi('/notifications');

  return (
    <>
      {data?.map((notification) => (
        <NotificationCard
          key={notification.id}
          notification={notification}
        />
      ))}
    </>
  );
};

export default NotificationsDisplay;
