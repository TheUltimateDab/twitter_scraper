const Header = () => {

    var navLinks= document.getElementById("navLinks");
    function showMenu() {
        navLinks.style.right = "0";
    }
    function hideMenu() {
        navLinks.style.right = "-200px";
    }

    return (
        <header>
			<nav>
            <a href="index.html"><img src="images/keeper-logo.png" width="100" height="70"/></a> {/*img in jsx must be <img /> */}
                <div className="nav-links" id="navLinks">
					<i className="fa fa-window-close" onClick={hideMenu}></i>
					<ul>
						<li><a href="index.html#features">Features</a></li>
						<li><a href="index.html#about-us">About Us</a></li>
						<li><a href="index.html#contacts">Contact Us</a></li>
						<li><a href="opinions.html">Get public opinions</a></li>
					</ul>
				</div>
				<i className="fa fa-bars" onClick={showMenu}></i>
			</nav>
		  </header>
    )
}

export default Header