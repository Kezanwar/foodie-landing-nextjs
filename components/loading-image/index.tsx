import Image, { ImageProps } from 'next/image';
import React, { FC, ReactNode, useState } from 'react';

type Props = ImageProps & {
  loadingFallback: ReactNode;
};

const LoadingNextImage: FC<Props> = (props) => {
  const { loadingFallback = '...loading', alt, className, ...rest } = props;
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={className}>
      {!loaded && loadingFallback}
      <Image onLoad={() => setLoaded(true)} alt={alt} {...rest} />
    </div>
  );
};

export default LoadingNextImage;
