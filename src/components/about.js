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
                <div className="card m-2">
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
                <div className="card m-2">
                    <div className="card-header">Skills</div>
                    <div className="card-body">
                        <form onSubmit={this.addSkill}>
                            <div className="row mb-2">
                                <div className="col">
                                    <input type="text" name="skill" placeholder="New skill" className="p-1"/>
                                </div>
                                <div className="col col-auto">
                                    <button className="btn btn-primary">Add</button>
                                </div>
                            </div>
                        </form>
                        <table className="table">
                            <tr>
                                <th>ID</th> <th>Skill</th>
                            </tr>
                            {
                                this.state.skills.map((value, index) =>
                                <tr>
                                    <td>{value.id}</td> <td>{value.skill}</td>
                                </tr>
                                )
                            }
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default About