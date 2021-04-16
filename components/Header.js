import Head from 'next/head'
import {buildImagePath} from "../lib/utils";

function Headers({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link rel="shortcut icon" href={buildImagePath('/favicon.ico')} type="image/x-icon" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta charSet="utf-8" />
    </Head>
  )
}

export default Headers
