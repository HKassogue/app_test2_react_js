import React, {Component} from "react";
import { Link } from "react-router-dom";

class HitItem extends Component {
    
    render() {
        if(this.props.details===false) {
            return (
                <div className="col-md-4 mt-2" key={this.props.hit.id}>
                    <div className="card">
                        <div className="card-header">
                            {this.props.hit.tags} | {this.props.hit.webformatWidth} x {this.props.hit.webformatHeight}
                        </div>
                        <div className="card-body">
                            <img className="card-img"  height={200} src={this.props.hit.webformatURL} alt={this.props.hit.tags} />
                        </div>
                        <div className="m-2">
                            <Link to={'/hitDetails/' + this.props.hit.id} className="btn btn-success">Details</Link>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="m-2" key={this.props.hit.id}>
                    <div className="card">
                        <div className="card-header">
                            {this.props.hit.tags} | {this.props.hit.imageWidth} x {this.props.hit.imageHeight}
                        </div>
                        <div className="card-body">
                            <img className="card-img"  src={this.props.hit.largeImageURL} alt={this.props.hit.tags} />
                        </div>
                        <div className="m-2">
                            <div className="row p-2">
                                <div className="col-auto">
                                    <img className="img-thumbnail" height={50} src={this.props.hit.userImageURL} alt="Hit author profil"/>
                                </div>
                                <div className="col">
                                    <ul className="nav nav-pills">
                                        <li className="list-group-item">Views: <strong>{this.props.hit.views}</strong></li>
                                        <li className="list-group-item">Likes: <strong>{this.props.hit.likes}</strong></li>
                                        <li className="list-group-item">Comments: <strong>{this.props.hit.comments}</strong></li>
                                        <li className="list-group-item">Downloads: <strong>{this.props.hit.downloads}</strong></li>
                                        <li className="list-group-item">Favorites: <strong>{this.props.hit.favorites}</strong></li>
                                    </ul>

                                    <Link to="/Gallery" className="btn btn-primary">Back</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default HitItem;