import React, { Component } from 'react';
import CardMultimedia from './CardMultimedia';
import PaginationMovies from './PaginationMovies';

export default class Multimedia extends Component {


	render() {
		if (!this.props.totalMultimedia) {

			if (this.props.totalMultimedia === 0) {
				console.log("lol");
				return (
					<div className="col-12">
						<h2>No se encontraron resultados</h2>
					</div>
				);
			}
			return null;

		}

		return (
			<React.Fragment>
				<div className="col-12 my-3">
					<h2>Total resultados: {this.props.totalMultimedia}</h2>
				</div>

				{
					this.props.multimedia.map(multimedia => (

						<CardMultimedia
							key={multimedia.imdbID}
							multimediaCard={multimedia}
						/>
					))
				}

				<div className="col-12 moster">
					
				</div>
			</React.Fragment>
		);
	}
}