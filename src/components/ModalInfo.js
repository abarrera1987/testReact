import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';

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
								<Fade big>
									<img src={this.state.multimedia.Poster} />
								</Fade>
							</div>
							<div className="col-6">
								<Bounce cascade>
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
								</Bounce>
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