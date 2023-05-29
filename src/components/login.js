import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from "react-intl";

const { useEffect, useState } = require("react");

function Login(props) {    
      const [showDetail, setShowDetail] = useState(false);
      const navigate = useNavigate();
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

        let request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ login: values.email, password: values.password })
        };
        const URL = "http://localhost:3001/login";
        fetch(URL,request)
            .then(data => data.json())
            .then(data => {
            
            if(data.status === "success"){
              navigate('/cafes');
              setInfo({status: "Success"});
            }
            else{ 
              let language = props.lang
              setShowDetail(true);
                if(language.includes("en") || language.includes("EN") || language.includes("en-EN")){
                  setInfo({status: "Authentication Error. Check your credentials"});
                }
                else if(language.includes("es") || language.includes("ES") || language.includes("es-ES")){
                  setInfo({status: "Error de autenticación. Revise sus credenciales"});
                }
              
            }
        })

        
      }

      return (
        <div>
          <h6 style={{width: '850px', marginLeft: "auto", marginRight: "auto"}}>
            <b>
            <FormattedMessage id="SignIn"/>
              </b>
              </h6>
            <Row>
            <div style={{ width: '850px', height: '300px', border: '1px solid black', marginLeft: "auto", marginRight: "auto", paddingTop: "10px", paddingBottom: "10px", backgroundColor: "#FBF1F0"}}>
              <form onSubmit={handleSubmit}>
                
                <h6 style = {{width: '450px', height: '0px', marginLeft: "auto", marginRight: "auto" }} htmlFor="email">
                  <b>
                  <FormattedMessage id="Username"/>
                  </b>
                </h6>
                
                <br></br>
                <div style = {{textAlign: "center"}} >
                  <input style = {{width: '450px', height: '40px', backgroundColor: "#D9D9D9" }} id="email" name="email" type="text" value={values.email} onChange={handleChange}
                  />
                </div>
                <br></br>
                <h6 style = {{width: '450px', height: '0px', marginLeft: "auto", marginRight: "auto" }} htmlFor="email">
                  <b>
                  <FormattedMessage id="Password"/>
                  </b>
                </h6>
                <br></br>
                <div style = {{textAlign: "center"}} >
                  <input style = {{width: '450px', height: '40px', backgroundColor: "#D9D9D9" }} id="password" name="password" type="text" value={values.password} onChange={handleChange}
                  />
                </div>
                <br></br>
                <div style={{ display: 'flex', width: '450px', marginLeft: "auto", marginRight: "auto"}}>
                  <Button style={{ width: '210px', marginRight: "30px", backgroundColor: "#008000"}} variant="primary" type="submit" className="rounded-0">
                    <FormattedMessage id="LogIn"/>
                  </Button>
                  <Button style={{ width: '210px', backgroundColor: "#f00"}} variant="primary" className="rounded-0">
                    <FormattedMessage id="Cancel"/>
                  </Button>
                </div>
                <div>
                {showDetail && 
                <h6 style = {{width: '450px', height: '0px', marginLeft: "auto", marginRight: "auto", marginTop: "15px", color: "red" }} htmlFor="email">
                  <b>
                  {info.status}
                  </b>
                </h6>
                }
                </div>
              </form>
            </div>          
          </Row>   
    </div>
      );
}

export default Login;