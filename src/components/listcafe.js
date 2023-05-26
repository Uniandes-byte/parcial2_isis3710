import Table from 'react-bootstrap/Table';

const { useEffect, useState } = require("react");

function ListCafe() {

const [cafes, setCafes] = useState([]);

   useEffect(()=>{
       const URL = "http://localhost:3001/cafes";
       fetch(URL).then(data => data.json()).then(data => {
           setCafes(data);
           
       })
   }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Tipo</th>
          <th>Región</th>
        </tr>
      </thead>
      <tbody>
      {cafes.map((dato, index) => (
            <tr key={index}>
                <td>{index}</td>
              <td>{dato.nombre}</td>
              <td>{dato.tipo}</td>
              <td>{dato.region}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}

export default ListCafe;