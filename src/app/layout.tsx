import type { Metadata } from "next";
import { Golos_Text } from "next/font/google";
import "./globals.css";

const golosText = Golos_Text({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DEL Energy | Reliable Energy, Delivered Close to Demand",
  description:
    "We design, build, finance, and operate decentralised power and gas infrastructure to deliver reliable and affordable energy across West Africa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${golosText.className} antialiased`}>{children}</body>
    </html>
  );
}
