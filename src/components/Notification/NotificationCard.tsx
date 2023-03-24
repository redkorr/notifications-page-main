import ImageComponent from './components/ImageComponent/ImageComponent';

import { Notification } from '../../types';

interface Props {
  notification: Notification;
}

const NotificationCard = ({ notification }: Props) => {
  return (
    <div>
      <div>
        <ImageComponent src={notification.avatar} />
      </div>
      <div>
        <p></p>
      </div>
      <div>
        <p></p>
      </div>
    </div>
  );
};

export default NotificationCard;
