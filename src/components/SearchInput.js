import React, { Component } from 'react';
import ModalInfo from './ModalInfo';

export default class SearchInput extends Component {

	listMovies = React.createRef();
	listSeries = React.createRef();
	searchInput = React.createRef();

	state = {

		valida: ''
	}
	formSub = (e) => {
		e.preventDefault();
	}
	handleLoginKeyUp(e) {

		if (!this.listMovies.current.checked && !this.listSeries.current.checked) {

			this.setState({
				valida: "Seleccione un metodo de busqueda"
			})

		} else {

			this.setState({
				valida: ""
			})

			if (e.target.value.length > 3) {
				console.log(e.target.value.length);
				this.listMultimedia(e.target.value);
				this.addClass();
				
			}else {

				this.removeClass();
				
			}

		}

	}

	titleSite = (e) => {

		const type = this.listMovies.current.checked ? 'Peliculas' : 'Series';
		this.setState({
			valida: "",
			addClass: false
		})
		if (this.searchInput.current.value.length >= 3) {

			
			this.searchInput.current.value = "";
			// this.listMultimedia(this.searchInput.current.value);

		}
		this.props.titleSite(type);

	}

	listMultimedia(multi) {

		const type = this.listMovies.current.checked ? 'movie' : 'series';

		let url = `http://www.omdbapi.com/?s=${multi}&page=1&apikey=fd465dc8&type=${type}`;

		fetch(url).then(respuesta => {
			return respuesta.json();
		}).then(multimedia => {

			if (multimedia.Search != undefined) {

				this.props.multimedia(multimedia.Search);
				this.props.totalMultimedia(multimedia.totalResults);

			}else {

				this.props.multimedia(multimedia.Search = []);
				this.props.totalMultimedia(multimedia.totalResults = 0);
			}

		})
	}

	addClass() {
		this.setState({ addClass: true });
	}
	removeClass(){
		this.setState({ addClass: false });
	}
	render() {
		let boxClass = ["col-12 col-md-6 col-lg-4 m-auto mediaTop"];
		let classContent = [""];
		if (this.state.addClass) {
			boxClass.push('searchContent topSearch position-fixed text-white');
			classContent.push('contSearch');
		}
		return (
			<div className="row text-center align-items-center h-75" id={classContent.join('')} >
				<div className={boxClass.join(' ')} >
					<form className="row align-items-center" onSubmit={this.formSub}>
						<div className="col-4 col-sm-5 col-md-5 offset-3 offset-sm-0 offset-lg-0 col-lg-6 py-3">
							<input type="text" placeholder="Buscar..." className="form-control w-100" onChange={this.handleLoginKeyUp.bind(this)} ref={this.searchInput} />
						</div>
						<div className="col-2 col-sm-4 col-md-4 col-lg-3 text-right text-lg-right">
							<input type="radio" name="type" ref={this.listMovies} value="peliculas" onChange={this.titleSite} /> Peliculas
						</div>
						<div className="col-2 col-sm-3 col-md-3 col-lg-3 text-left text-lg-left">
							<input type="radio" name="type" ref={this.listSeries} value="series" onChange={this.titleSite} /> Series
						</div>
						<div className="col-12 col-lg-12 text-danger text-left">
							{this.state.valida}
						</div>
					</form>
				</div>
			</div>
		);
	}
}