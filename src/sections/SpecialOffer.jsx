 import Button from "../components/Button"
import { offer } from "../assets/images"
import { arrowRight } from "../assets/icons"

export default function SpecialOffer() {
  return (
   <section className="flex justify-wrap items-center max-xl:flex-col-reverse  gap-10 max-container" >
     <div className="flex-1" >
      <img
     src={offer}
       width={773}
       height={687} className="object-contain w-full"
      />
     </div>
     <div className="flex flex-1 flex-col" >   
      
      <h2 className="font-palanquin
       text-4xl capatalize font-bold lg:max-w-lg" >
      
      
      <span className="text-coral-red " >Special</span> Offer 
      </h2>
      <p className="mt-4 lg:max-w-lg info-text" >
      Nike isn't merely selling footwear and 
      apparel; it's crafting experiences.
      The brand masterfully weaves together 
      innovation, performance, and style to 
      create products that resonate deeply with consumers.</p>
      <p className="mt-6 lg:max-w-lg info-text" >Our dedication to detail and excellance ensures 
      your satisfaction</p>
      <div className="mt-11 flex flex-wrap gap-4" >
      <Button label="Shop Now" iconUrl={arrowRight} />
      <Button label="Learn More" backgroundColor="bg-white" textColor="text-slate-gray"  borderColor="border-slate-gray" iconUrl={arrowRight} />
      
      </div>
           </div>
   </section>
  )
}
