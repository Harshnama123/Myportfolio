import '../styles/globals.css'
import { Inter, JetBrains_Mono } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' })

export default function App({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} ${jetBrainsMono.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}