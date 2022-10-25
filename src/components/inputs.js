import { useState } from "react";

const Inputs = () => {
  const [values, setValues] = useState({
    name: "",
    surname: "",
    anreise: "",
    abreise: "",
  });
  const handlerInput = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(values);
    event.target.name.value = "";
    event.target.surname.value = "";
    event.target.anreise.value = "";
    event.target.abreise.value = "";
    localStorage.setItem("name", values.name);
    localStorage.setItem("surname", values.surname);
    localStorage.setItem("anreise", values.anreise);
    localStorage.setItem("surname", values.abreise);
  };

  const resetForm = () => {
    setValues({
      name: "",
      surname: "",
      anreise: "",
      abreise: "",
    });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <h2 className="formname">Hotel Form</h2>
      <input
        type="text"
        placeholder="vorname"
        name="name"
        onChange={handlerInput}
        value={values.name}
      />
      <br></br>

      <input
        type="text"
        placeholder="nachname"
        name="surname"
        onChange={handlerInput}
        value={values.surname}
      />
      <br></br>

      <label>
        Anreise:
        <input
          type="date"
          name="anreise"
          onChange={handlerInput}
          value={values.anreise}
        />
      </label>
      <br></br>
      <label>
        Abreise:
        <input
          type="date"
          name="abreise"
          onChange={handlerInput}
          value={values.abreise}
        />
      </label>
      <h2>
        Name: {values.name} {values.surname}
      </h2>
      <h2>Anreise: {values.anreise}</h2>
      <h2> Abreise:{values.abreise}</h2>
      {/* <button>Submit</button> */}
      <input type="submit" value="Submit" onSubmit={onSubmitHandler} />
      <input type="button" value="Reset Form" onClick={resetForm} />
    </form>
  );
};

export default Inputs;
