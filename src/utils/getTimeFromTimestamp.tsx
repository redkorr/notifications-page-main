import moment from 'moment';

interface Props {
  time: number;
}

const getTimeFromTimestamp = ({ time }: Props) => {
  return <div>{moment(time).fromNow()}</div>;
};

export default getTimeFromTimestamp;
