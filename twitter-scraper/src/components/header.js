const Header = () => {
    return (
        <header>
			<nav>
            <a href="index.html"><img src="images/keeper-logo.png" width="100" height="70"/></a> {/*img in jsx must be <img /> */}
                <div class="nav-links" id="navLinks">
					<i class="fa fa-window-close" onclick="hideMenu()"></i>
					<ul>
						<li><a href="index.html#features">Features</a></li>
						<li><a href="index.html#about-us">About Us</a></li>
						<li><a href="index.html#contacts">Contact Us</a></li>
						<li><a href="receipts.html">Get public opinions</a></li>
					</ul>
				</div>
				<i class="fa fa-bars" onclick="showMenu()"></i>
			</nav>
		  </header>
    )
}

export default Header