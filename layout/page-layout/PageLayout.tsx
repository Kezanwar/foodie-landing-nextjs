import React, { FC, ReactNode } from 'react';

import { Header } from '../header';
import { Meta } from '../meta';
import Footer from 'components/footer';

type Props = { children: ReactNode };

const PageLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Meta />
      <Header />
      <div className="min-h-screen">
        {/* <Alert preview={preview} /> */}
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default PageLayout;
