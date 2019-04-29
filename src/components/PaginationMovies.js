import React, { Component } from 'react';
import Pagination from 'react-bootstrap/Pagination';
export default class Header extends Component {



	render() {
		
		const {active, items} = this.props.datos;
		for (let number = 1; number <= 5; number++) {
			items.push(
				<Pagination.Item key={number} active={number === active}>
					{number}
				</Pagination.Item>,
			);
		}

		const paginationBasic = (
			<div>
				<Pagination>{items}</Pagination>
				<br />

				<Pagination size="lg">{items}</Pagination>
				<br />

				<Pagination size="sm">{items}</Pagination>
			</div>
		);
		return (
			paginationBasic
		)
	};
}