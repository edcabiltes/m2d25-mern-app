import { useState } from "react"
import { createUser } from "../api"

export default function CreateUser() {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    })

    function handleChange(e) {
        setUser({
            ...user,
            [e.target.name]: e.target.value})
    }

    async function handleSubmit(e) {
        e.preventDefault()
        let response = await createUser(user)
        console.log(response)
        if (response.status !== 200) {
            alert('Error creating user')
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        <input placeholder={"Name"} onChange={handleChange} name="name" required maxLength={20}/>
        <input placeholder={"Email"} onChange={handleChange} name="email" required maxLength={40}/>
        <input placeholder={"Password"} onChange={handleChange} name="password" required maxLength={20}/>
        <button>Create User</button>
    </form>
  )
}
