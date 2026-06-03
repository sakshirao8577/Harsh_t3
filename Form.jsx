import { useState } from 'react';

function Form() {
    const [formdata, setformdata] = useState({});

    function handlechange(e) {
        const { name, value } = e.target;
        setformdata({ ...formdata, [name]: value });
    }

    function handlesubmit(e) {
        e.preventDefault();
        alert(`Form submitted!
               Name: ${formdata.un || ''}
               Email: ${formdata.eid || ''}`);
    }

    return (
        <>
            {/* Fixed: Moved all inputs inside this form element */}
            <form onSubmit={handlesubmit}>
                <label>Username:</label>
                <input type='text' name='un' onChange={handlechange} /><br />

                <label>Email:</label>
                <input type='email' name='eid' onChange={handlechange} /><br />

                <label>Password:</label>
                <input type='password' name='pass' onChange={handlechange} /><br />

                <label>Confirm Password:</label>
                <input type='text' name='cpass' onChange={handlechange} /><br />

                <label>Message:</label><br />
                {/* Fixed: Changed hardcoded value="A" to use dynamic state */}
                <textarea name="msg" onChange={handlechange} value={formdata.msg || ""}></textarea><br />

                <label>Gender:</label>
                <input type='radio' name="gender" value='male' onChange={handlechange} />Male
                <input type='radio' name="gender" value='female' onChange={handlechange} />Female<br />

                <label>City:</label>
                <select name='city' onChange={handlechange} defaultValue="">
                    <option value="" disabled>Select City</option>
                    <option value="Ahe">Ahm</option>
                    <option value="Rajkot">Rajkot</option>
                </select><br /><br />

                <input type="submit" value="Submit Form" />
            </form>
        </>
    );
}

// Fixed: Corrected export name from "From" to "Form"
export default Form;
