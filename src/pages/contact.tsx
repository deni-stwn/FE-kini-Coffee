import ContactUs from '../component/contactUs/contact'
import Footer from '../component/footer'
import Maps from '../component/map'
import Nav from '../component/nav'

export const Contact = () => {
  return (
    <div className='overflow-hidden'>
      <Nav navbarClass="text-[#222222]" / >
      <ContactUs />
      <Maps/>
      <Footer />
    </div>
  )
}
