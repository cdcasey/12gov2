import { AppProps } from 'next/app'
import '@fontsource/cabin'
import '@fontsource/lilita-one'

import 'styles/index.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
