import type { AppProps } from "next/app";
import "../styles/globals.scss";
import "../styles/layout.scss";
import "../styles/home.scss";
import Layout from "../components/layout";

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
