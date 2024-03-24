import { useState } from "react";


const StatefulForm = () => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [error, setError] = useState('')

    const handleSubmit = e =>{
        e.preventDefault()
        if(password.length < 6){
            setError('Password mustt be 6 characters or longer')
        }
       else{
        setError('')
        console.log(email, password);
       }
    }

    const handleEmailChange = e =>{
        // console.log(e.target.value);
        setEmail(e.target.value)
    }

    const handlePassChange = e =>{
        // console.log(e.target.value);
        setPassword(e.target.value)
    }

    return (
        <div>
            <h2>Stateful Form</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name"  />
                <br />
                <input
                    onChange={handleEmailChange}
                type="email" name="email" id="" />
                <br />
                <input required onChange={handlePassChange} type="password" name="password" />
                {
                  error && <p>{error}</p>
                }
                <br />
                {/* <button type="submit" value="Submit">Submit</button> */}
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default StatefulForm;