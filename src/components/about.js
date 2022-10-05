import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Mon CV",
            contact: {
                name: "Toto Titi", 
                email: "tototiti@gmail.com",
                profile: "images/toto.png"
            },
            skills: [
                {id:1, skill: 'Software engeneering'},
                {id:2, skill: 'UI Design'},
                {id:3, skill: 'Machine Learning'},
            ]
        }
    }

    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header">
                        <strong>
                            <label>{this.state.title}</label>
                        </strong>
                    </div>
                    <div className="row p-2">
                        <div className="col col-auto">
                            <img width={100} src={this.state.contact.profile}/>
                        </div>
                        <div className="col">
                            <ul className="list-group">
                                <li className="list-group-item">{this.state.contact.name}</li>
                                <li className="list-group-item">{this.state.contact.email}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default About