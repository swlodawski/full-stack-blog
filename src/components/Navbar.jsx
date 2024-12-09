import { useState } from "react"

const Navbar = () => {
    const [open, setOpen ] = useState(false)
    return (
        <div className="w-full h-16 md:h-20 flex items-center justify-between">
        {/*LOGO*/}
        <div className='flex items-center gap-4 text-2xl font-bold'>
            <img src="/logo.png" className="w-8 h-8" alt="" />
            <span>lamalog</span>
        </div>
        {/*MOBILE MENY*/}
        <div className="md:hidden">
            <div className="cursor-pointervtext-4xl"
            onAuxClick={() => setOpen((prev) => !prev)}>
                {open ? "X" : "|"}
            </div>
        </div>
        {/*DESKTOP MENU*/}
        <div className="hidden md:flex">D</div>
        {/*FEATURED POSTS*/}
        {/*POST LIST*/}
        </div>
    );
};

export default Navbar;