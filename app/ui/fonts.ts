import { Inter, Lusitana } from 'next/font/google';

// メインフォント
export const inter = Inter({ subsets: ['latin'] });

// サブフォント（太さ 400 と 700 を使う）
export const lusitana = Lusitana({  
  weight: ['400', '700'],   
  subsets: ['latin'],
});