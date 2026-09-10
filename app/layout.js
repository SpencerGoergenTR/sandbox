export const metadata = {
  title: 'Next.js Starter',
  description: 'A barebones Next.js app deployed to GitHub Pages.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
