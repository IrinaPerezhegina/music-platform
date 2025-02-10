import { wrapper } from '@/store';
import { AppProps } from 'next/app';
import { FC } from 'react';

const WrapperApp: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(WrapperApp);
