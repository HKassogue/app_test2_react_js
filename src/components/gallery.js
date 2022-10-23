import React, {Component} from "react";
import axios from "axios";

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hits: [],
            currentPage: 1,
            pageSize: 10,
            currentKeyword: '',
            totalPages: 1,
            pages: []
        }
    }

    // componentDidMount() {
    //     this.getHits();
    // }

    getHits() {
        let url = "https://pixabay.com/api/?key=5832566-81dc7429a63c86e3b707d0429&q=" + this.state.currentKeyword
        + "&page=" + this.state.currentPage
        + "&per_page=" + this.state.pageSize;
        axios.get(url).then((resp) => {
            //console.log(resp);
            let totalPages = (resp.data.totalHits % this.state.pageSize === 0) ?
                resp.data.totalHits / this.state.pageSize : resp.data.totalHits / this.state.pageSize + 1;
            this.setState({
                hits: resp.data.hits,
                totalPages: totalPages,
                pages: new Array(totalPages).fill(0)
            });
            console.log(this.state.hits);
        }).catch((err => {
            console.log(err);
        }))
    }

    setKeyword = (event) => {
        this.setState({
            currentKeyword: event.target.value
        });
    }

    search = (event) => {
        event.preventDefault();
        this.getHits();
    } 

    gotoPage = (page) => {
        this.setState({
            currentPage: page
        }, () => {
            this.getHits();
        });
        //console.log(this.state.currentPage);
        //console.log(page);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.search}>
                    <div className="row m-1 p-1">
                        {//<div>{this.state.currentKeyword}</div>
                        }
                        <div className="col">
                            <input type="text" 
                                placeholder="keyword"
                                value={this.state.currentKeyword}
                                onChange={this.setKeyword}
                                className="form-control" />
                        </div>
                        <div className="col-auto">
                            <button className="btn btn-success" type="submit">Chercher</button>
                        </div>
                    </div>
                </form>
                <div className="row">
                    {
                        this.state.hits.map(hit =>
                            <div className="col-md-4" key={hit.id}>
                                <div className="card">
                                    <div className="card-header">
                                        {hit.tags} | {hit.webformatWidth} x {hit.webformatHeight}
                                    </div>
                                    <div className="card-body">
                                        <img className="card-img"  height={200} src={hit.webformatURL} alt={hit.tags} />
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div>
                    <ul className="nav nav-pills">
                        {
                            this.state.pages.map((value, index) =>
                                <li key={index}>
                                    <button className={this.state.currentPage===index+1 ? 'btn btn-primary' : "btn btn-link"} onClick={()=>this.gotoPage(index+1)}>{index+1}</button>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default Gallery;