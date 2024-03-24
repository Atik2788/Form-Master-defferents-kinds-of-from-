import { useEffect, useRef, useState } from "react";


const RefForm = () => {
    const nameRef = useRef(null)
    const emailRef = useRef(null);
    const passRef = useRef(null);

    const [error, setError] = useState('')

    const handleSubmit = e =>{
        e.preventDefault()
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);

        if(passRef.current.value.length < 6){
            setError('Password character must be 6 or longer then 6!!')
        }
        else{
            console.log(passRef.current.value);
        }
            
    }

    useEffect(() =>{
        nameRef.current.focus();
    } ,[])

    return (
        <div>
            <h2>Ref Form</h2>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" name="name" />
                <br />
                <input ref={emailRef} defaultValue={'aaa@gmail.com'} type="email" name="email" />
                <br />
                <input ref={passRef} type="password" name="password" />
                <br />
                {
                    error && <p>{error}</p>
                }
                {/* <button type="submit" value="Submit">Submit</button> */}
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm;