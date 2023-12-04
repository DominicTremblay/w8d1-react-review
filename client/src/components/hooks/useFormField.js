import { useState } from 'react';

const useFormField = (initialValue) => {
  const [field, setField] = useState(initialValue);

  const handleChange = (event) => setField(event.target.value);

  return [field, setField, handleChange];
};

export default useFormField;
