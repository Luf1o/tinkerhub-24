import Footer from './components/Footer/page'
import Navbar from './components/Navbar/Navbar'
import './globals.css'
import { Koulen} from 'next/font/google'

const koulen = Koulen({ 
  subsets: ['latin'],
  display : 'swap',
  weight : '400' 
})

export const metadata = {
  title: 'TinkerHub MITS',
  description: 'Tinkerhub MITS Chapter',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={koulen.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
