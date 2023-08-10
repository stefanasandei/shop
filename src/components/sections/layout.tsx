import Head from "next/head";
import NavigationBar from "./navbar";

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <>
      <Head>
        <title>Shop</title>
        <meta
          name="description"
          content="An online shop template built with modern web technologies."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavigationBar />
        {children}
      </main>
    </>
  );
}
