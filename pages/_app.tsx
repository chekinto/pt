import type { AppProps } from "next/app";
<<<<<<< HEAD
import { Layout } from "../ui/layout";
=======
import { Layout } from "ui/layout";
>>>>>>> 77c05ba (set up config, routes, folder-structure and some ui)
import "../styles/globals.css";
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
