import Header from "components/Header";
import Footer from "components/Footer";
import "@/styles/globals.css"; // Import Tailwind or other global styles

export const metadata = {
  title: "Proto Energy",
  description: "Your trusted partner in energy solutions",
  keywords: "energy, solutions, renewable energy, sustainability",
  authors: [{ name: "Proto Energy" }],
  creator: "Proto Energy",
  publisher: "Proto Energy",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
