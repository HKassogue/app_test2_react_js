import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skillValue: "",
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

    addSkill = (event) => {
        event.preventDefault();
        let skill
        if(this.state.skills.length>0) {
            skill = {
                id: [...this.state.skills].pop().id + 1,
                skill: this.state.skillValue
            }
        } else {
            skill = {
                id: 1,
                skill: this.state.skillValue
            }
        }
        this.setState({
            skills: [...this.state.skills, skill]
        })
    };

    setSkill = (event) => {
        this.setState({
            skillValue: event.target.value
        })
    };

    onDelete = (skill) => {
        let index = this.state.skills.indexOf(skill);
        let listSkills = [...this.state.skills];
        listSkills.splice(index, 1);
        this.setState({
            skills: listSkills
        });
    };

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
                                    <input type="text" 
                                    name="skill" 
                                    value={this.state.skillValue}
                                    onChange={this.setSkill}
                                    placeholder="New skill" 
                                    className="p-1"/>
                                </div>
                                <div className="col col-auto">
                                    <button className="btn btn-primary" type="submit">Add</button>
                                </div>
                            </div>
                        </form>
                        <table className="table">
                            <tr>
                                <th>ID</th> <th>Skill</th>
                            </tr>
                            {
                                this.state.skills.map((value, index) =>
                                <tr key={value.id}>
                                    <td>{value.id}</td> <td>{value.skill}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => this.onDelete(value)}>X</button>
                                    </td>
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