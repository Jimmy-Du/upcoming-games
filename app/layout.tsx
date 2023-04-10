import './globals.css'
import Navbar from '@/componets/navbar'
import Footer from '@/componets/footer'

export const metadata = {
  title: 'Upcoming Media',
  description: 'A calendar displaying upcoming noteworthy games',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
