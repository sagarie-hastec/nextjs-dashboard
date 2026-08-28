import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* inter.className と antialiased（文字をなめらかにするクラス）を追加 */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}