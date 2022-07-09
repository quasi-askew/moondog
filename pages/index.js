import Head from "next/head";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sam Fortin</title>
        <meta name="description" content="A spot for Sam\'s content" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        {/* <Projects /> */}
      </main>
        <Footer />
    </>
  );
}
