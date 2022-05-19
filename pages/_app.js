import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

function SamFortin({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="lofi">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default SamFortin;
