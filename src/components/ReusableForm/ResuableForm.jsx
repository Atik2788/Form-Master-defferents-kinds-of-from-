

const ResuableForm = ({ formTitle, handleSubmit, btnText = 'Submit', children }) => {

    const handleLocalSubmit = e => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value
        }
        handleSubmit(data)
    }

    return (
        <div>
            <h2>Reusable Form</h2>
            <h1>{formTitle}</h1>
            {children}
            <form onSubmit={handleLocalSubmit}>
                <input type="text" name="name" />
                <br />
                <input type="email" name="email" />
                <br />
                <input type="text" name="phone" />
                <br />
                {/* <button type="submit" value="Submit">Submit</button> */}
                <input type="submit" value={btnText} />
            </form>
        </div>
    );
};

export default ResuableForm;