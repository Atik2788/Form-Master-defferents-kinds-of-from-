import useInputState from "../../fooks/useInputState";


const HookForm = () => {

    // const [name, handleNameChange]  = useInputState('aaa')
     const emailState = useInputState('aaa@gmail.com')

    const handleSubmit = e =>{
        e.preventDefault();
        console.log('from data:', emailState.value);

    }

    return (
        <div>
            <h2>Hook Form</h2>
            
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name="name" /> */}
                <br />                
                <input {...emailState} type="email" name="email" />
                <br />
                <input type="password" name="password" />
                <br />
                {/* <button type="submit" value="Submit">Submit</button> */}
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;