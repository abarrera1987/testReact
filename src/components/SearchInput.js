import React, { Component } from 'react';

export default class SearchInput extends Component {

	listMovies = React.createRef();
	listSeries = React.createRef();
	searchInput = React.createRef();

	state = {

		valida: '',
		page: 1, 
		scrolling: false,
		totalPages: null
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
				
				this.listMultimedia(e.target.value);
				this.addClass();

			} else {
				this.listMultimedia(e.target.value);
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
			this.listMultimedia("");
			// this.listMultimedia(this.searchInput.current.value);

		}
		this.props.titleSite(type);

	}

	// componentWillMount(){

	// 	this.scrollListener = window.addEventListener('scroll', (e) => {
	// 		this.handleScroll(e);
	// 	})
	// }

	// handleScroll = (e) => {
		
	// 	const {scrolling, totalPages, page} = this.state;
	// 	let element = document.querySelectorAll('.multi .cardShadow').length - 1;
	// 	if(scrolling) return
	// 	if(totalPages <= page) return
	// 	const lastCard = document.querySelectorAll('.multi .cardShadow')[element]
	// 	const lastCardOffeset = lastCard.offsetTop + lastCard.clientHeight
	// 	const pageOffset = window.pageYOffset + window.innerHeight
	// 	var bootomOffset = 200
	// 	if(pageOffset > lastCardOffeset - bootomOffset){
	// 		this.loadMore();
	// 	}
	// }

	// loadMore = () => {

	// 	this.setState(prevState => ({
	// 		scrolling: true,
	// 		page: prevState.page + 1,
			
	// 	}), this.listMultimedia(this.searchInput.current.value))
	// }

	listMultimedia(multi) {

		const type = this.listMovies.current.checked ? 'movie' : 'series';
		let url = `http://www.omdbapi.com/?s=${multi}&page=${this.state.page}&apikey=fd465dc8&type=${type}`;
		fetch(url).then(respuesta => {
			return respuesta.json();
		}).then(multimedia => {
			
			if (multi.length > 3) {

				if (multimedia.Search != undefined) {

					this.props.multimedia(multimedia.Search);
					this.props.totalMultimedia(multimedia.totalResults);
					this.setState({

						totalPages: Math.round(multimedia.totalResults/10),
						scrolling: false

					})

				} else {

					this.props.multimedia(multimedia.Search = []);
					this.props.totalMultimedia(multimedia.totalResults = 0);
					this.setState({

						totalPages: 0,
						scrolling: false

					})
				}

			} else {
				
				this.props.multimedia(multimedia.Search = []);
				this.props.totalMultimedia(multimedia.totalResults = "");
				
			}

		})

	}

	addClass() {
		this.setState({ addClass: true });
	}

	removeClass() {
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