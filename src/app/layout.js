import "./globals.css";
import { Poppins } from "next/font/google";

import Main from "@/components/Container/Main";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Pokedex",
  description: "Find the pokemon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Main>{children}</Main>
      </body>
    </html>
  );
}
