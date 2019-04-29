import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import SearchInput from './SearchInput';
export default class Header extends Component {

	render() {


		return (


			<React.Fragment>
				<Navbar bg="dark" expand="lg" fixed="top">
					<Navbar.Brand href="#home" className="text-white">
						<h1>
							{this.props.title}
						</h1>
					</Navbar.Brand>
				</Navbar>

			</React.Fragment>


			// <div className="row text-center text-white align-items-center h-100">
			// 	<div className="col-12">
			// 		content
			// 	</div>
			// </div>
		);
	}
}