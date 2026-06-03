import { useState } from "react";

function Form1() {
    const [formdata, setformdata] = useState({
        num1: '',
        num2: '',
        formula: ''
    });
     function handlechange(e) {
        setformdata({ ...formdata, [e.target.name]: e.target.value });
    }

    function handlesubmit(e) {
        e.preventDefault();
        
        var n1 = parseInt(formdata.num1, 10);
        var n2 = parseInt(formdata.num2, 10);
        let result;

        if (isNaN(n1) || isNaN(n2)) {
            alert("Please enter valid numbers in both fields");
            return;
        }if (formdata.formula === "add") {
            result = n1 + n2;
        } 
        else if (formdata.formula === "sub") {
            result = n1 - n2;
        } 
        else if (formdata.formula === "mul") {
            result = n1 * n2;
        } 
        else if (formdata.formula === "div") {
            if (n2 === 0) {
                alert("Cannot divide by zero");
                return;
            }
            result = n1 / n2;
        } 
        else {
            alert("select valid formula");
            return;
        }

        alert(`Result: ${result}`);
    }

    return (
        <>
            <form onSubmit={handlesubmit}>
                <label htmlFor="num1">Number 1: </label>
                        <input 
                            type="number" 
                            id="num1"
                            name="num1" 
                            value={formdata.num1} 
                            onChange={handlechange} 
                            required 
                        />
                    
                        <label htmlFor="num2">Number 2: </label>
                        <input 
                            type="number" 
                            id="num2"
                            name="num2" 
                            value={formdata.num2} 
                            onChange={handlechange} 
                            required 
                        />
                        <label htmlFor="formula">Operation: </label>
                        <select 
                            id="formula" 
                            name="formula" 
                            value={formdata.formula} 
                            onChange={handlechange}
                            required
                        >
                            <option value="" disabled>-- Select an Operation --</option>
                            <option value="add">+</option>
                            <option value="sub">-</option>
                            <option value="mul">*</option>
                            <option value="div">/</option>
                        </select>
                    
                        <button type="submit">Calculate</button>
                    
                
            </form>
        </>
    );
}

export default Form1; 