import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mobile Dev Hub - モバイル開発ニュースまとめ',
  description: 'iOS、Android、React Native、Flutterなどモバイルアプリ開発の最新ニュースを毎日自動更新',
  keywords: ["iOS","Android","Swift","Kotlin","React Native","Flutter","モバイル開発"],
  openGraph: {
    title: 'Mobile Dev Hub - モバイル開発ニュースまとめ',
    description: 'iOS、Android、React Native、Flutterなどモバイルアプリ開発の最新ニュースを毎日自動更新',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  )
}
