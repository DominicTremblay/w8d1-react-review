import { useState } from 'react';

const useFormField = (initialState) => {
  const [field, setField] = useState(initialState);

  const handleChange = (e) => setField(e.target.value);

  return [field, setField, handleChange];
};

export default useFormField;
