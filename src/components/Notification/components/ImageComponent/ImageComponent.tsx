import { SVGProps } from 'react';

interface Props extends SVGProps<SVGImageElement> {
  src: string;
}

const ImageComponent = ({ src }: Props) => {
  return <img src={src} />;
};

export default ImageComponent;
