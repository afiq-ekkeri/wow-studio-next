import Footer from '../components/Footer/Footer';
import Navbar from '../components/navbar/Navbar'
import { LineAnimation } from '../providers/LineAnimation';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
  return (
    <div className="wow-studio ws">
        <LineAnimation>
            <Navbar/>
            {children}
            <Footer whiteFooter />
        </LineAnimation>
    </div>
  )
}
