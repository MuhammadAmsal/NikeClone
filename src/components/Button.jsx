  

export default function Button({label,iconUrl,textColor,backgroundColor,borderColor,fullWidth}) {
  return (
     <button className={`flex justify-center items-center gap-2 px-7 
     py-4 border font-montserrat text-lg  ${
     backgroundColor?`${backgroundColor} ${textColor} ${borderColor}`:"bg-coral-red border-coral-red text-white"} 
      rounded-full ${fullWidth && 'w-full'}`} >
      {label}
     { iconUrl && <img src={iconUrl} alt="arrow right icon" className="ml-2 rounded-full w-5 h-5" />}
      </button>
  )
}
