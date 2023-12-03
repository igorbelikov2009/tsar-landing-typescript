import React, { FC } from "react";

interface ImagesItemProps {
  image: string;
  alt: string;
}

const ImagesItem: FC<ImagesItemProps> = ({ image, alt }) => {
  return <img src={`/images/tsarLanding/${image}.jpg`} alt={alt} />;
};

export default ImagesItem;
