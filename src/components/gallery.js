import React, {Component} from "react";
import axios from "axios";

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hits: [],
            currentPage: 1,
            pageSize: 10,
            currentKeyword: 'paris'
        }
    }

    componentDidMount() {
        this.getHits();
    }

    getHits() {
        let url = "https://pixabay.com/api/?key=5832566-81dc7429a63c86e3b707d0429&q=paris";
        axios.get(url).then((resp) => {
            console.log(resp);
            this.setState({
                hits: resp.data.hits
            });
        }).catch((err => {
            console.log(err);
        }))
    }

    render() {
        return (
            <div className="row">
                {
                    this.state.hits.map(hit =>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-header">
                                    {hit.tags} | {hit.webformatWidth} x {hit.webformatHeight}
                                </div>
                                <div className="card-body">
                                    <img className="card-img"  height={200} src={hit.webformatURL} />
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default Gallery;