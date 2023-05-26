import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const { useEffect, useState } = require("react");

function Formulario() {    
    const [values, setValues] = useState({
        email: "",
        password: "",
      });

    const [info, setInfo] = useState([]);

      function handleChange(e) {
        const newValues = {...values,[e.target.name]: e.target.value,};
    
        setValues(newValues);
      }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(values.email)
        console.log(values.password)

        let request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ login: values.email, password: values.password })
        };
        const URL = "http://localhost:3001/login";
        fetch(URL,request)
            .then(data => data.json())
            .then(data => {
            setInfo(data);
            })
      }

      return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <br></br>
          <input id="email" name="email" type="text" value={values.email} onChange={handleChange}
          />
          <br></br>
          <label htmlFor="password">Password</label>
          <br></br>
          <input id="password" name="password" type="text" value={values.password} onChange={handleChange}
          />
          <br></br>
            <Button variant="primary" type="submit">
            Submit
            </Button>
            <Button variant="primary">
            Submit
            </Button>
        </form>
      );
}

export default Formulario;