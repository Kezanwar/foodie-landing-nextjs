import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Container: FC<Props> = ({ children }) => {
  return <div className="container mx-auto px-5">{children}</div>;
};

export default Container;
