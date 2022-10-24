import React, {Component} from "react";

class SearcHitForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentKeyword: ''
        }
    }

    setKeyword = (event) => {
        this.setState({
            currentKeyword: event.target.value
        });
    }

    doSearch = (event) => {
        event.preventDefault();
        this.props.onSearch(this.state.currentKeyword);
    }

    render() {
        return (
            <form onSubmit={this.doSearch}>
                    <div className="row m-1 p-1">
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
        );
    }
}

export default SearcHitForm;