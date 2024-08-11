 import { footerLogo } from "../assets/images"
import { socialMedia } from "../constants"
import { footerLinks } from "../constants"
import { copyrightSign } from "../assets/icons"
export default function Footer() {
  return (
  <footer className="max-container" >
    <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col" >
     <div className="flex flex-col items-start" >
            <a href="/" >
              <img
                src={footerLogo}
                width={150}
                height={46}
              />
            </a>
            <p className="mt-6 leading-7 text-base font-montserrat text-white-400 sm:max-w-sm" >Nike's ability to blend these elements has solidified 
            its position as a global leader in the sports apparel industry.   
            Sources and related content
           </p>
           <div className="flex items-center gap-5 mt-8 " >
          {socialMedia.map((icon)=>(
            <div className="flex justify-center items-center w-12
             h-12 rounded-full bg-white" >
            <img 
              src={icon.src}
              alt={icon.alt}
              width={24}
              height={24}
            />
            </div>
          ))}
           </div>
     </div>
     <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap" >
     {footerLinks.map((section)=>(
      <div key={section} >
        <h4 className="text-white font-montserrat text-2xl leading-normal mb-6 font-medium" >{section.title}</h4>
        <ul>
          {section.links.map((link)=>(
            <li key={link.name} className="mt-3 text-white-400 font-montserrat text-base leading-normal cursor-pointer hover:text-slate-gray" >
              <a>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
     ))}
     </div>
    </div>
    <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center" >
      <div className="flex flex-1 justify-start items-center gap-2 cursor-pointer font-montserrat " >
        <img
          src={copyrightSign}
          alt="copy right sign"
          width={20}
          height={20}
          className="rounded-full m-0"
        />
        <p>Copyright. All rights reserved.</p>
    </div>
    <p className="font-montserrat cursor-pointer" >Terms & Conditions</p>
    </div>
  </footer>
     
  )
}











