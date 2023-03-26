import { SVGProps } from 'react';

interface Props extends SVGProps<SVGImageElement> {
  src: string;
}

const ImageComponent = ({ src }: Props) => {
  return (
    <img
      className="w-12 mr-5"
      src={src}
    />
  );
};

export default ImageComponent;
