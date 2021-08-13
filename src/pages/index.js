import Head from "next/head"

import App from "./../components/App"

const HomePage = () => {
   return (
      <>
         <Head>
            <meta charSet="UTF-8" />
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1.0"
            />
            <meta
               name="description"
               content="Shrey Sharma. A front-end web developer specializing in responsive web apps using React.js"
            />
            <meta name="robots" content="index, follow" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
               href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap"
               rel="stylesheet"
            />
            <link rel="icon" type="image/png" href="/img/favicon.png" />
            <title>Shrey Sharma | Front-End Web Developer</title>
         </Head>
         <App />
      </>
   )
}

export default HomePage
