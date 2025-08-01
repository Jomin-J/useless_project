import "./globals.css";

export const metadata = {
  title: "No Purpose Search",
  description: "Finding nothing, perfectly. A completely useless search engine that serves no real purpose.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
