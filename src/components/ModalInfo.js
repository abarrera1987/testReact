import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class ModalInfo extends Component {
	handleShow = this.handleShow.bind(this);
	handleClose = this.handleClose.bind(this);
	state = {
		show: false,
		multimedia: {}
	}
	handleClose() {

		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
		this.detailMultimedia();
	}

	detailMultimedia() {

		let url = `http://www.omdbapi.com/?i=${this.props.idMultimedia}&apikey=fd465dc8&plot=short`;

		fetch(url).then(respuesta => {
			return respuesta.json();
		}).then(multimedia => {
			console.log(multimedia)
			this.setState({
				multimedia: multimedia
			})

		})

	}
	// Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes"
	// Awards: "Nominated for 1 Oscar. Another 14 wins & 72 nominations."
	// BoxOffice: "$204,100,000"
	// Country: "USA, UK"
	// DVD: "18 Oct 2005"
	// Director: "Christopher Nolan"
	// Genre: "Action, Adventure"
	// Language: "English, Urdu, Mandarin"
	// Metascore: "70"
	// Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption."
	// Poster: "https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
	// Production: "Warner Bros. Pictures"
	// Rated: "PG-13"
	// Ratings: (3)[{ … }, { … }, { … }]
	// Released: "15 Jun 2005"
	// Response: "True"
	// Runtime: "140 min"
	// Title: "Batman Begins"
	// Type: "movie"
	// Website: "https://www.warnerbros.com/batman-begins"
	// Writer: "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)"
	// Year: "2005"
	// imdbID: "tt0372784"
	// imdbRating: "8.2"
	// imdbVotes: "1,179,207"
	render() {
		const genreSplit = this.state.multimedia.Genre;
		const genre = typeof genreSplit === "string" ? genreSplit.split(',') : ""
		
		return (
			<div className="content">
				<Button variant="primary" onClick={this.handleShow}>
					Detalle
        		</Button>
				<Modal size="lg" show={this.state.show} onHide={this.handleClose}>
					<Modal.Body>
						<div className="row">
							<div className="col-6">
								<img src={this.state.multimedia.Poster} />
							</div>
							<div className="col-6">
								<div className="row">
									<div className="col-12">
										<h1>
											{this.state.multimedia.Title}
										</h1>
									</div>
									<div className="col-12 my-2">
										{this.state.multimedia.Year}
									</div>
									<div className="col-12 my-2">
										<span>Calificacion:</span> {this.state.multimedia.imdbRating}
									</div>
									<div className="col-12 my-2">
										<span>Generos:</span> {genre}
									</div>

									<div className="col-12 my-2">
										<span>Actores:</span> {this.state.multimedia.Actors}
									</div>
									<div className="col-12 my-2">
										<span>Descripción:</span> {this.state.multimedia.Plot}
									</div>
								</div>
							</div>
						</div>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={this.handleClose}>
							Cerrar
           			</Button>

					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}


export default ModalInfo;