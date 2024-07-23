import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/globals.css';;
import MyNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import LetsWork from "@/components/LetsWork";
import { useRouter } from "next/router";



function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const noLetsWorkRoutes = ["/contact"];

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <MyNavbar />
      <Component {...pageProps} />
      {!noLetsWorkRoutes.includes(router.pathname) && <LetsWork />}
      <Footer />
    </>
  );
}

export default MyApp;
