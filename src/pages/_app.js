// src/pages/_app.js
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* X (Twitter) Pixel base — loads once app-wide */}
      <Script id="x-pixel" strategy="afterInteractive">
        {`
          !(function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe(...arguments):s.queue.push(arguments);
          },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
          a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))})(window,document,'script');
          twq('config','odv3r'); // your pixel ID
        `}
      </Script>

      <Header />
      <main className="overflow-hidden">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
