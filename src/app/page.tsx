import Navbar from '@/components/common/Navbar'
import Footer from '@/components/layout/Footer'

export default function Home() {
  // Redirect to dashboard by default
  // redirect("/");
  return (
    <>
      <Navbar />
      <h1 className="my-72 text-display-large text-center">Chainlib Platform</h1>
      <Footer />
    </>
  )
}
