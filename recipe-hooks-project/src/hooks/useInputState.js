import {useState} from "react";

export default initialVal => {
  const [value, setValue] = useState(initialVal);

  const handleChange = e => {
    e.preventDefault();
    setValue(e.target.value);
  };
  const reset = () => {
    setValue("");
  };
  const setStateValue = v => {
    setValue(v);
  };

  return [value, handleChange, setStateValue, reset];
};
