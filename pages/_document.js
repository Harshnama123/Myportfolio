import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Harsh Namdev - Full-Stack Software Engineer specializing in AI-integrated web applications" />
        <meta name="keywords" content="React, Node.js, Python, AI, Machine Learning, Full Stack Developer" />
        <meta name="author" content="Harsh Namdev" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Harsh Namdev - Full-Stack Software Engineer" />
        <meta property="og:description" content="Building intelligent web solutions with React.js, Node.js, and AI integration" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://harsh-portfolio-pearl.vercel.app/" />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Harsh Namdev - Full-Stack Software Engineer" />
        <meta name="twitter:description" content="Building intelligent web solutions with React.js, Node.js, and AI integration" />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}