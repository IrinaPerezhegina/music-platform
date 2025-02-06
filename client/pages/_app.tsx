import { AppProps } from 'next/app';
import { FC } from 'react';
import { wrapper } from '../store';

const WrapperApp: FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default wrapper.withRedux(WrapperApp);
