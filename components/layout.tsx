import { FC, ReactNode } from 'react';
import Alert from './alert';

import Meta from './meta';
import Footer from 'layout/footer';

type Props = {
  preview?: boolean;
  children: ReactNode;
};

const Layout: FC<Props> = ({ preview, children }) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen overflow-hidden">
        {/* <Alert preview={preview} /> */}
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
