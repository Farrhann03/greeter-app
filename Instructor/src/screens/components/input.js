import {useState} from "react";

function Input(props) {

    const [value, setValue] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitNameFn(value);
    }

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <form>
            <input type='text' placeholder="Your Name" onChange={handleChange}/>
            <input type="button" value="Submit" onClick={handleSubmit}/>
        </form>
    )
}

export default Input;