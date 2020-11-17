import React,{useState, useEffect} from 'react'
import axios from 'axios'

export default function AddPerson(props) {
    const [personId, setPersonId] = useState('')
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const[location, setLocation] = useState('')

    useEffect(() => {
        const id = props.match.params.id
        axios.get(`http://localhost:8080/persons/${id}`)
         .then(response => {
             console.log(response.data)
             setPersonId(response.data.id)
             setName(response.data.name)
             setAge(response.data.age)
             setLocation(response.data.location)
         })
    },[])

    const handleSubmit = e => {
        e.preventDefault()
        axios.put(`http://localhost:8080/persons/${personId}`,{
            name: name,
            age: age,
            location: location
        })
        .then(res => {
            console.log("Data updated")
            props.history.push('/')
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
                <button onClick={handleSubmit}>Update Person</button>
            </form>
        </div>
    )
}
