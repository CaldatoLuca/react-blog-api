import { useState } from "react";

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      if (name === "published") {
        setValues({
          ...values,
          [name]: checked,
        });
      } else {
        setValues({
          ...values,
          [name]: checked
            ? [...values[name], value]
            : values[name].filter((v) => v !== value),
        });
      }
    } else if (type === "file") {
      setValues({
        ...values,
        [name]: files[0], // Assuming you want to handle a single file
      });
    } else {
      setValues({
        ...values,
        [name]: value,
      });
    }
  };

  return [values, handleChange];
};

export default useForm;
