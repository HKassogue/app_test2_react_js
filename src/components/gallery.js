import React, {Component} from "react";
import axios from "axios";
import HitItem from "./hititem";
import SearcHitForm from "./searchhitform";

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

    getHits(keyword) {
        let url = "https://pixabay.com/api/?key=5832566-81dc7429a63c86e3b707d0429&q=" + keyword
        + "&page=" + this.state.currentPage
        + "&per_page=" + this.state.pageSize;
        axios.get(url).then((resp) => {
            //console.log(resp);
            let totalPages = (resp.data.totalHits % this.state.pageSize === 0) ?
                resp.data.totalHits / this.state.pageSize : resp.data.totalHits / this.state.pageSize + 1;
            this.setState({
                hits: resp.data.hits,
                totalPages: totalPages,
                pages: new Array(totalPages).fill(0),
                currentKeyword: keyword
            });
        }).catch((err => {
            console.log(err);
        }))
    }

    search = (keyword) => {
        this.getHits(keyword);
    } 

    gotoPage = (page) => {
        this.setState({
            currentPage: page
        }, () => {
            this.getHits(this.state.currentKeyword);
        });
    }

    render() {
        return (
            <div>
                <SearcHitForm onSearch={this.search}/>
                <div className="row">
                    {
                        this.state.hits.map(hit =>
                            <HitItem hit={hit} details={false}/>
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