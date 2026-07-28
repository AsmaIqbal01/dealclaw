// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "DealClaw — AI Deal Detection",
  description: "AI-powered deal scout watching your Gmail 24/7",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}