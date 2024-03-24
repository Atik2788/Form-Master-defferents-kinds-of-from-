

const SimpleForm = () => {

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);

        // const inputValue = e.target.querySelector('input[type="text"]').value;
        // console.log(inputValue);
        // console.log('form submitted');
    }

    return (
        <div>
            <h2>Simple Form</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" />
                <br />
                <input type="email" name="email" />
                <br />
                <input type="text" name="phone" />
                <br />
                {/* <button type="submit" value="Submit">Submit</button> */}
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;