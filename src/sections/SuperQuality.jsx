import Button from "../components/Button"  
import { shoe8 } from "../assets/images"
export default function SuperQuality() {
  return (
     <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"  >
     <div className="flex flex-1 flex-col" >   
      
<h2 className="font-palanquin
 text-4xl capatalize font-bold lg:max-w-lg" >


<span className="text-coral-red " >Super</span>  
<span className="text-coral-red " > Quality</span> Shoes 
</h2>
<p className="mt-4 lg:max-w-lg info-text" >
Nike isn't merely selling footwear and 
apparel; it's crafting experiences.
The brand masterfully weaves together 
innovation, performance, and style to 
create products that resonate deeply with consumers.</p>
<p className="mt-6 lg:max-w-lg info-text" >Our dedication to detail and excellance ensures 
your satisfaction</p>
<div className="mt-11 " >
<Button label="View Details"/>

</div>
     </div>
         
      <div className="flex-1 flex justify-center items-center" >
        <img 
        src={shoe8}
        alt="shoe8"
        width={570}
        height={522}
        className="object-contain"
         />
      </div>
     </section>
  )
}
