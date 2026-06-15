import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";

export const metadata = {
  title: "Madesh — Software Developer",
  description:
    "Software developer exploring tech. Building meaningful products for the past 3 years.",
  metadataBase: new URL("https://madesh.me"),
  openGraph: {
    title: "Madesh — Software Developer",
    description:
      "Software developer exploring tech. Building meaningful products for the past 3 years.",
    url: "https://madesh.me",
    siteName: "Madesh",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Madesh — Software Developer",
    description:
      "Software developer exploring tech. Building meaningful products for the past 3 years.",
    creator: "@madesh02104",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="theme-dark" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
