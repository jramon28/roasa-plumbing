import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sanity Studio | Roasa Plumbing Inc.",
  robots: { index: false, follow: false },
};

export default function StudioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full antialiased">{children}</body>
    </html>
  );
}
