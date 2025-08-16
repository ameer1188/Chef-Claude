const Header = (props) => {
    return(
        <header className="flex  bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white font-mono h-20 items-center justify-center w-screen">
                <img className="w-10 h-10 rounded-full hover:scale-105" src={props.img.src} alt={props.img.alt} />
                <h1 className="ml-3 text-4xl font-bold hover:scale-105">Chef Claude</h1>
        </header> 
    )
}

export default Header;