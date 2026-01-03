// pages/_app.js
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Dynamically load Bootstrap JS (includes Popper) on client only
    // Using require so bundler includes it but only runs in browser
    try {
      require("bootstrap/dist/js/bootstrap.bundle.min.js");
    } catch (err) {
      // If require fails in your environment, you can ignore (dev only)
      // console.warn('Bootstrap JS not loaded', err);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Ryan Organic Farms</title>
        <meta
          name="description"
          content="Ryan Organic Farms - Fresh organic produce"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* 👇 THIS WRAPPER IS THE FIX */}
      <div className="app-root">
        <Navbar />

        <main className="app-content">
          <Component {...pageProps} />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default MyApp;
