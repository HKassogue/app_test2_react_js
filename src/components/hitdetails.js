import React, { Component } from 'react';
import axios from "axios";
import { useParams } from 'react-router';
import HitItem from './hititem';

class HitDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hit: null,
        }
    }

    getHit(id) {
        let url = "https://pixabay.com/api/?key=5832566-81dc7429a63c86e3b707d0429&id=" + id;
        axios.get(url).then((resp) => {
            this.setState({
                hit: resp.data.hits[0],
            });
        }).catch((err => {
            console.log(err);
        }))
    }

    componentDidMount() {
        const { id } = useParams();
        this.getHit(id);
    }

    render() {
        if(this.state.hit != null) 
            return (
                <HitItem hit={this.state.hit} />             
            );
        else
            return (
                <div>
                    
                </div>
            ); 
    }
}

export default HitDetails;