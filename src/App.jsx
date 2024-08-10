 import React from 'react'

 import{Hero,PopularProducts,SuperQuality,Services,SpecialOffer,CustomerReviews,Subscribe,Footer} from './sections/index.js'
 import Nav from './components/Nav.jsx'

 export default function App() {
   return (
     <main className='relative' >
       <Nav/>
     <section className='xl:padding-l wide:padding-r padding-b' >
       <Hero/>
     </section>
     <section className='padding' >
       <PopularProducts/>
     </section> 
     <section className='padding' >
       <SuperQuality/>
     </section>
     <section className='padding-x py-10' >
       <Services/>
     </section>
     <section className='padding' >
       <SpecialOffer/>
     </section>
     <section className='padding bg-pale-blue' >
       <CustomerReviews/>
     </section>
     <section className='padding-x py-16 w-full sm:py-32' >
       <Subscribe/>
     </section>
     <section className='padding-x padding-t bg-black pb-8' >
       <Footer/>
     </section>
     </main>
   )
 }
 