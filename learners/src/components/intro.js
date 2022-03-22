import { useState } from "react";

const Intro = (props) => {
  const [value, setValue] = useState(null);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    props.handleChange(value);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={handleInputChange}
      />
      <input type="button" value="Submit" onClick={handleSubmitClick} />
    </form>
  );
};

export default Intro;
