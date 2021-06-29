import Button from "../button";
import { useState } from "react";

const Input = () => {
  const [list, setList] = useState([]);
  const [value, setValue] = useState();

  const handleChange = () => {
    const contain = list.find((item) => item === value);
    if (!contain) setList([...list, value]);
  };
  return (
    <>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <Button handleClick={handleChange} disabled={!value}>
        Adicionar
      </Button>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default Input;
