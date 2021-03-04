import React, { Component } from 'react';
import './footer.css';

class Footer extends React.Component {
	
	render(){
		return(
			<div className = "footer">
                <div className = "footer-label">
                    <div><a href="https://github.com/marinatwice82">Github</a></div>
                    <div>2021 Marina</div>
                    <div className = "img-youtube">
                    	<div><a href="https://youtu.be/3gX4VHTy0yM"><div className ="youtube"></div></a></div>
                    	<div><a href="https://rs.school/js/"><div className ="img"></div></a></div>
                    	
                    </div>
                </div>
			</div>
		);
	}
}
export default Footer;