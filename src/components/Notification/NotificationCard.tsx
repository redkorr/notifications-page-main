import ImageComponent from './components/ImageComponent/ImageComponent';

import { Notification } from '../../types';

interface Props {
  notification: Notification;
}
//todo destrukturyzacja

const getContentByNotificationType = (notification: Notification) => {
  switch (notification.type) {
    case 'reaction':
      return (
        <div>
          <span>reacted to your recent post</span>
          <span>{notification.postTitle}</span>
        </div>
      );

    case 'join-group':
      return (
        <div>
          <span>has joined your group</span>
          <span>{notification.groupName}</span>
        </div>
      );

    case 'left-group':
      return (
        <div>
          <span>left the group</span>
          <span>{notification.groupName}</span>
        </div>
      );

    case 'follow':
      return (
        <div>
          <span>followed you</span>
        </div>
      );

    case 'message':
      return (
        <div>
          <span>sent you a private message</span>
        </div>
      );

    case 'comment':
      return (
        <div>
          <span>sent you a private message</span>
          <img src={notification.pictureSrc} />
        </div>
      );
  }
};

const NotificationCard = ({ notification }: Props) => {
  return (
    <div className={notification.isRead ? 'flex p-5 my-2' : 'flex p-5 my-2 bg-lightGrayishBlue1 rounded-lg'}>
      <div>
        <ImageComponent src={notification.avatar} />
      </div>
      <div>
        <div className="flex items-center gap-2">
          <strong>{notification.userName}</strong>
          {getContentByNotificationType(notification)}
          {!notification.isRead && <div className="rounded bg-red w-2 h-2"></div>}
        </div>
        <div className="mb-2 text-grayishBlue">
          <span>1min ago</span>
        </div>
        {notification.message && (
          <div className="border-solid border rounded p-4 border-lightGrayishBlue2 text-darkGrayishBlue">
            <span>{notification.message}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationCard;
