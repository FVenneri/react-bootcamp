import {useState} from "react";

export default initialVal => {
  const [value, setValue] = useState(initialVal);

  const toggle = (millis) => {
    const toggleValue = value;
    setValue(!value);
    setTimeout(() => {
      setValue(toggleValue);
    }, millis);
  };

  return [value, toggle];
};
