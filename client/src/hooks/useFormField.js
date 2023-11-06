import { useState } from "react";


const useFormField = initial =>{


  const [value, setValue] = useState('');

  const handleChange = event => setValue(event.target.value);

  return [value, setValue, handleChange];

}

export default useFormField;