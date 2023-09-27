import { FC, ReactNode } from 'react';
import Alert from './alert';
import Footer from './footer';
import Meta from './meta';

type Props = {
  preview?: boolean;
  children: ReactNode;
};

const Layout: FC<Props> = ({ preview, children }) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen overflow-x-hidden">
        {/* <Alert preview={preview} /> */}
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
