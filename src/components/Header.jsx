const Header = (props) => {
    return(
        <header>
            <img className="chef-logo" src={props.img.src} alt={props.img.alt} />
            <h1>Chef Claude</h1>
        </header> 
    )
}

export default Header;