import React,{useState} from 'react'
import axios from 'axios'

export default function AddPerson(props) {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const[location, setLocation] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        axios.post('http://localhost:8080/persons',{
            name: name,
            age: age,
            location: location
        })
        .then(res => {
            console.log("Data added")
            props.history.push("/")
        })
        .catch(err => console.log(err))
    }


    return (
        <div>
            <form>
                <div>
                    <label>Name: </label>
                    <input type="text" name="name" value={name} onChange={e => setName(e.target.value)}/>
                </div>
                <div>
                    <label>Age</label>
                    <input type="text" name="age" value={age} onChange={e => setAge(e.target.value)}/>
                </div>
                <div>
                    <label>Location</label>
                    <input type="text" name="location" value={location} onChange={e => setLocation(e.target.value)}/>
                </div>
                <button onClick={handleSubmit}>Add Person</button>
            </form>
        </div>
    )
}
