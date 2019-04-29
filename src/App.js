import React, { Component } from 'react';
import Header from './components/Header';
import SearchInput from './components/SearchInput';
import Multimedia from './components/Multimedia';

class App extends Component {

  state = {

    title: "Bienvenido",
    multimedia: []

  }

  multimedia = (multimediaResult) => {

    this.setState({
      multimedia: multimediaResult
    })

  }
  totalMultimedia = (totalMultimedia) => {

    this.setState({
      totalMultimedia: totalMultimedia
    })

  }
  titleSite = (titleSite) => {

    let title = titleSite;

    this.setState({

      title: title

    })

  }

  render() {

    const title = "Movies";
    const data = [];
    return (
      <div className="container-fluid App pl-0" id="backPage">
        <Header
          title={this.state.title}

        />
        <SearchInput

          titleSite={this.titleSite}
          multimedia={this.multimedia}
          totalMultimedia={this.totalMultimedia} />

        <div className="container">
          <div className="row multi">
            <Multimedia
              multimedia={this.state.multimedia}
              totalMultimedia={this.state.totalMultimedia}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

