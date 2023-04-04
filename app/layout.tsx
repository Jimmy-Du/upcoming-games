import './globals.css'
import Navbar from '@/componets/navbar'

export const metadata = {
  title: 'Upcoming Media',
  description: 'A calendar displaying upcoming noteworthy games and movies.',
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
      </body>
    </html>
  )
}
