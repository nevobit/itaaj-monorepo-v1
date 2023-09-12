import { Seo } from "@/types/Seo";
import { NextPage } from "next";
import Head from "next/head";

const SEO: NextPage<Seo> = ({ description, author, title, meta = [] }: Seo) => {
  const metadata = [
    {
      name: "description",
      content: description,
    },
    {
      name: "og:title",
      content: title,
    },
    {
      name: "og:description",
      content: description,
    },
    {
     name: "og:type",
      content: "Prooving",
    },
    {
      name: "og:site_name",
      content: "website",
    },
    {
      name: "author",
      content: author,
    },
  ].concat(meta);

  return (
    <Head>
      {/* <html lang='es-mx' /> */}
      <title>{title} - Itaaj</title>

      {metadata.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}

<<<<<<< HEAD
    <link rel="icon" href="/favicon.png" sizes="32x32"  type="image/x-icon" />
=======

    <link rel="icon" href="/favicon.png" />
>>>>>>> 3a2f2097101c63c4b3e12a7ddaf38509b021bf31
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com"  />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com"  />
    <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Caveat&display=swap" rel="stylesheet" />

    <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1263776837578791');
              fbq('track', 'PageView');
            `
          }}
        />

<script
            dangerouslySetInnerHTML={{
              __html: `
              function gtag_report_conversion(url) {
                var callback = function () {
                  if (typeof(url) != 'undefined') {
                    window.location = url;
                  }
                };
                gtag('event', 'conversion', {
                    'send_to': 'AW-11242537243/4DT-CP2mqMAYEJuC7vAp',
                    'event_callback': callback
                });
                return false;
              }
              `
            }}
          />
<noscript><img height="1" width="1" style={{display:"none"}}
src="https://www.facebook.com/tr?id=1263776837578791&ev=PageView&noscript=1"
/></noscript>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-4461YFKK2V">
</script>
<script  dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-4461YFKK2V');            
            ` }} />

<script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-WNSWVR2CSG"
    ></script>
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-WNSWVR2CSG');
        `,
      }}
    ></script>

<script
            dangerouslySetInnerHTML={{
              __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '178858151857801');
              fbq('track', 'PageView');
              `
            }}
          />
          <noscript>
  <img
    height="1"
    width="1"
    style={{ display: 'none' }}
    src="https://www.facebook.com/tr?id=178858151857801&ev=PageView&noscript=1"
  />
</noscript>
    </Head>
  );
};

SEO.defaultProps = {
  lang: "es-mx",
  meta: [],
};

export default SEO;
