import React, {Component} from "react";

class HitItem extends Component {
    
    render() {
        return (
            <div className="col-md-4" key={this.props.hit.id}>
                <div className="card">
                    <div className="card-header">
                        {this.props.hit.tags} | {this.props.hit.webformatWidth} x {this.props.hit.webformatHeight}
                    </div>
                    <div className="card-body">
                        <img className="card-img"  height={200} src={this.props.hit.webformatURL} alt={this.props.hit.tags} />
                    </div>
                </div>
            </div>
        );
    }
}

export default HitItem;