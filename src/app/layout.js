import localFont from "next/font/local";

import App from "../components/App";

import { StoreProvider } from "@/redux/StoreProvider";

import "./globals.css";

export const metadata = {
  title: "Shopping Cart",
  description: "Next.js 13 Shopping Cart",
};

const vazirFont = localFont({
  src: "../../public/fonts/Vazir-Regular.woff2",
});

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body className={`${vazirFont.className} bg-slate-950 text-slate-100`}>
        <StoreProvider>
          <App>{children}</App>
        </StoreProvider>
      </body>
    </html>
  );
}
