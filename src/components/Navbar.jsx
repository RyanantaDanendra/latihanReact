const Navbar = () => {
    return (
        <>
            <div className="navbar w-full fixed top-0 flex justify-between bg-white">
                <h2 className="p-5 font-bold text-xl">React</h2>
                <ul className="flex">
                    <a href="" className="hover:bg-slate-500 hover:text-white ease-out duration-500 p-4">Home</a>
                    <a href="" className="hover:bg-slate-500 hover:text-white ease-out duration-500 p-4">About</a>
                    <a href="" className="hover:bg-slate-500 hover:text-white ease-out duration-500 p-4">Packages</a>
               </ul>
            </div>
        </>
    )
}

export default Navbar;