import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fullstack Course — Posts",
  description: "Next.js + Express + MongoDB",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: "system-ui" }}>
        {children}
      </body>
    </html>
  );
}
