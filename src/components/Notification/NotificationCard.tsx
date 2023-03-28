import ImageComponent from './components/ImageComponent/ImageComponent';

import { Notification } from '../../types';

import TimeComponent from '../../utils/getTimeFromTimestamp';

interface Props {
  notification: Notification;
}
//todo destrukturyzacja

const getContentByNotificationType = (notification: Notification) => {
  switch (notification.type) {
    case 'reaction':
      return (
        <span>
          reacted to your recent post
          <strong className="cursor-pointer hover:text-blue"> {notification.postTitle}</strong>
        </span>
      );

    case 'join-group':
      return (
        <span>
          has joined your group
          <strong className="cursor-pointer hover:text-blue"> {notification.groupName}</strong>
        </span>
      );

    case 'left-group':
      return (
        <span>
          left the group
          <strong className="cursor-pointer hover:text-blue"> {notification.groupName}</strong>
        </span>
      );

    case 'follow':
      return <span>followed you</span>;

    case 'message':
      return <span>sent you a private message</span>;

    case 'comment':
      return <span>commented on your picture</span>;
  }
};

const NotificationCard = ({ notification }: Props) => {
  return (
    <div
      className={
        notification.isRead
          ? 'flex p-5 my-2 w-full relative text-darkGrayishBlue '
          : 'flex p-5 my-2 bg-veryLightGrayishBlue rounded-lg w-full relative text-darkGrayishBlue shadow-sm'
      }
    >
      <div>
        <ImageComponent src={notification.avatar} />
      </div>
      <div className="w-full">
        <div className="flex justify-between">
          <div>
            <span>
              <strong className="cursor-pointer text-black hover:text-blue">{notification.userName} </strong>
              {getContentByNotificationType(notification)}
              {!notification.isRead && <strong className="text-red"> •</strong>}
            </span>
            <div className="text-grayishBlue">
              <TimeComponent time={notification.time} />
            </div>
          </div>
          {notification.pictureSrc && (
            <div className="w-11 min-w-[44px] min-h-[44px] p-[1px] hover:border-solid hover:border hover:rounded-lg hover:border-lightGrayishBlue2 hover:w-[46px] hover:cursor-pointer">
              <img src={notification.pictureSrc} />
            </div>
          )}
        </div>
        {notification.message && (
          <div className="mt-2 border-solid border rounded p-4 border-lightGrayishBlue1 cursor-pointer shadow-sm hover:bg-lightGrayishBlue1 hover:shadow-sm">
            <span>{notification.message}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationCard;
