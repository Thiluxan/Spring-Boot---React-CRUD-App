import React, { Component } from 'react'
import axios from 'axios'

export default class Person extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             person:{}
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`http://localhost:8080/persons/${id}`)
         .then(response => {
             console.log(response.data)
             this.setState({person: response.data})
         })
    }
    
    render() {
        const person = this.state.person
        return (
            <div>
                    <div>
                        Name: {person.name} <br/>
                        Age: {person.age} <br/>
                        Location: {person.location}
                    </div>
            </div>
        )
    }
}

