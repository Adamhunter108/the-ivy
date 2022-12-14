import '../styles/globals.css'
import Script from 'next/script';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script 
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script
        id="my-script"
        strategy='lazyOnload'
      >
        {
          `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');`
        }
      </Script>
      <Script
        strategy='lazyOnload' 
        data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE} 
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        crossorigin="anonymous"
      />

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
