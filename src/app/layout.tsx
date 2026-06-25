import Footer from "../components/Footer";
import Header from "../components/Header";
import "./globals.css";

export const metadata = {
  title: "Salman Ahmed — Full Stack Web Developer",
  description:
    "Full Stack Web Developer specializing in Next.js, Tailwind CSS, and Python AI. Based in Lahore, Pakistan.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-dark text-slate-200 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
