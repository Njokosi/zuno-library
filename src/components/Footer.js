import React from 'react'

const Footer = () => {
    return (
        <div className="relative z-30 bg-charcoal">
         <div className="relative px-4 mx-auto mt-48 md:px-28 max-w-8xl bg-charcoal">

    <div className="flex justify-center">
        <div className="flex mb-2">
            <div className="mr-4"><img src="images/invoker_logo.svg"/></div>
            <div className="font-bold leading-7 text-white text-1xl">Invoker</div>
        </div>

    </div>

    <div className="grid w-11/12 grid-cols-2 mx-auto mt-8 mb-12 text-base font-bold leading-4 text-white justify-stretch sm:flex sm:justify-between xl:w-1/2 2xl:w-5/12 sm:gap-0 gap-y-8 gap-x-24">

        <a href="https://beyondco.de/docs/invoker/welcome" target="_blank" className="col-start-1 row-start-1">Documentation</a>
        <a href="https://beyondco.de/invoker-eula" target="_blank" className="col-start-1 row-start-2">EULA</a>
        <a href="https://beyondco.de/terms-and-conditions" target="_blank" className="col-start-1 row-start-3">Terms</a>
        <a href="https://beyondco.de/privacy-policy" target="_blank" className="col-start-2 row-start-1">Privacy Policy</a>
        <a href="https://beyondco.de/disclaimer" target="_blank" className="col-start-2 row-start-2">Disclaimer</a>
        <a href="mailto:support@beyondco.de" className="col-start-2 row-start-3">Support</a>

    </div>

    
    <div>
        <img className="mx-auto" src="images/running_dots/footer_dot_path.svg"/>
        <img className="mx-auto" src="images/running_dots/footer_dot.svg"/>
    </div>

</div>


<div className="relative flex flex-col items-center w-11/12 mx-auto mt-12 mb-32 md:w-5/6 lg:w-2/3 max-w-8xl">
    <div className="flex items-center w-full mb-8 text-sm sm:text-base sm:justify-center lg:w-1/2">
    <div className="w-2/3 sm:mr-4 ">
        <input className="w-full px-4 py-2 text-white text-opacity-75 placeholder-white bg-gray-900 border-2 border-transparent placeholder-opacity-30 hover:placeholder-cerulean-dark focus:placeholder-cerulean-dark rounded-3xl focus:outline-none focus:bg-white focus:border-denim-dark focus:text-charcoal-dark" type="email" name="email" placeholder="Sign up to our newsletter"/>
    </div>
    <div>
         <button type="button" className="flex items-center justify-between px-4 py-2 font-bold leading-6 tracking-wide text-white focus:outline-none rounded-3xl bg-invokerPurple hover:bg-gradient-to-r from-invokerPurple to-invokerPurple-lighter group active:opacity-75">

    <span className="active:opacity-6">Sign up</span>

     <span className="z-10 block ml-2 group-active:block group-hover:hidden">
    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg" style={{visibility: "visible"}}>
        <path d="M1 1L5 5L1 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
</span>
 
     <span className="hidden ml-2 group-active:hidden group-hover:block">
    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg" style={{visibility: "visible"}}>
        <path d="M1 1L5 5L1 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
</span>
 
</button>
 
    </div>
</div>

    <div className="mt-2 mb-8 text-xs leading-5 text-center text-ocean-dark">
        Beyond Code GmbH, An der Lingenmühle 10, 41061 Mönchengladbach, Germany<br/>
        Commercial Register: Amtsgericht Krefeld, HRB 16540 <br/>
        VAT ID: DE315110518 / Managing Partners: Marcel Pociot, Sebastian Schlein
    </div>

    <div className="flex items-center justify-center text-white">
        <a href="https://twitter.com/invokerdev" target="_blank" className="mr-3"><img src="images/twitter.svg"/></a>
        <a href="https://twitter.com/invokerdev" target="_blank" className="mr-6 font-bold">@invokerdev</a>
        <a href="https://beyondco.de" target="_blank"><img src="images/beyond_code_logo.svg"/></a>
    </div>
</div>
 
    </div>
    )
}

export default Footer
