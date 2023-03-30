import useApiGET from '../../hooks/useApiGET';

import NotificationCard from '../Notification/NotificationCard';

import useApiPATCH from '../../hooks/useApiPATCH';

import { useEffect, useState } from 'react';

import { Notification } from '../../types';

const NotificationsDisplay: React.FC = () => {
  const notifications = useApiGET('/notifications');

  const [data, setData] = useState<Array<Notification> | undefined>(undefined);

  const { fetchData } = useApiPATCH();

  const unreadNotfications = data?.filter((notifiacation) => !notifiacation.isRead);

  const unreadLength = (unreadNotfications && unreadNotfications.length) || 0;

  useEffect(() => {
    setData(notifications);
  }, [notifications]);

  const handleClick = () => {
    if (!unreadNotfications || !data) {
      return;
    }

    unreadNotfications.forEach((notification) => fetchData(`/notifications/${notification.id}`, { isRead: true }));

    const updatedNotifications = data.map((notification) => {
      const isUndread = unreadNotfications.find((unreadNotification) => unreadNotification.id === notification.id);

      if (isUndread) {
        return { ...notification, isRead: true };
      }

      return notification;
    });

    setData(updatedNotifications);
  };

  return (
    <div className="p-8">
      <div className="flex pb-6 items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold">Notifications</span>
          <div className="bg-blue font-bold text-white px-3 h-6 rounded-md">{unreadLength}</div>
        </div>
        <div>
          <button
            className="text-darkGrayishBlue hover:text-blue hover:cursor-pointer"
            onClick={handleClick}
          >
            Mark all as read
          </button>
        </div>
      </div>
      <div>
        {data?.map((notification) => (
          <NotificationCard
            key={notification.id}
            notification={notification}
          />
        ))}
      </div>
    </div>
  );
};

export default NotificationsDisplay;
