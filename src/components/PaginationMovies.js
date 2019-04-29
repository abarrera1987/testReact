import React, { Component } from 'react';
import Pagination from 'react-bootstrap/Pagination';
export default class PaginationMovies extends Component {

	render() {
		
		let active = 1;
		let items = [];
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
			</div>
		);
		return (
			paginationBasic
		)
	};
}