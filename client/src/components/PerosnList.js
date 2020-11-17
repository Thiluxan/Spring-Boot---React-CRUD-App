import React,{useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default function PerosnList(props) {
    const [personList, setPersonList] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/persons')
         .then(response => {
             setPersonList(response.data)
         })
    },[])

    const deletePerson = (id) => {
        axios.delete(`http://localhost:8080/persons/${id}`)
        .then(res => {
            console.log("Data Deleted")
            window.location.reload(false)
        })
        .catch(err => console.log(err))
    }


    return (
        <div>
            <table style={{marginLeft:"600px",marginTop:"50px", padding:"20px"}}>
                <thead>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Location</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </thead>
                <tbody>
                    {personList.map(person => (
                        <tr key={person.id}>
                            <td>{person.name}</td>
                            <td>{person.age}</td>
                            <td>{person.location}</td>
                            <td>
                                <Link to={"/person/"+person.id}>
                                    <button>View</button>
                                </Link>
                            </td>
                            <td>
                                <button onClick={() => deletePerson(person.id)}>Delete</button>
                            </td>
                            <td>
                                <Link to={"/updatePerson/"+person.id}>
                                    <button>Edit</button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br/>
            <Link to="addPerson">
                <button>Add New Person</button>
            </Link>
        </div>
    )
}
