
const Footer = () => {
    return (
        <footer class="footer" style={{position: 'relative'}}>
			<div class="footer-element">
				<h4 id="about-us">About Us</h4>
				<p>We are just a group of students who just want to chill and learn something in Hack the North</p>
			</div>
			<div class="footer-element">
				<h4 id="contacts">Find and Contact Us</h4>
				<div class="text-box" style= {{ paddingTop: 0}}>
                    <div class="message-box">
                        <h3>Message Us</h3>
                        <form>
                            <input type="text" placeholder="Enter Name" />
                            <input type="email" placeholder="Enter Email" />
                            <textarea rows="5" placeholder="your message"></textarea>
                            <button type="submit" class="button" style={{color: "#000", border: "1px solid #000"}}>Send message</button>
                        </form>
					</div>
					<br />
					<a href="https://github.com/dynamicduho/keeper_app" target="_blank" rel="noopener noreferrer"><i class="fa fa-github"></i></a>
				</div>
			</div>
		</footer>
    )
}

export default Footer