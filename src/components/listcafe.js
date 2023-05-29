import Table from 'react-bootstrap/Table';
import DetailCafe from './detailcafe';
import { FormattedMessage } from "react-intl";

const { useEffect, useState } = require("react");

function ListCafe(props) {


const [cafes, setCafes] = useState([]);
const [idCafe, setIdCafe] = useState([]);
const [showDetail, setShowDetail] = useState(false);
const [details, setDetails] = useState([]);

   useEffect(()=>{
       const URL = "http://localhost:3001/cafes";
       fetch(URL).then(data => data.json()).then(data => {
           setCafes(data);
           
       })
   }, []);

   const handleClick = (id) => {
    setIdCafe(id)

    const URL = "http://localhost:3001/cafes/"+id;
        fetch(URL)
            .then(data => data.json())
            .then(data => {
            setDetails(data);
            })

    setShowDetail(true);
    
   };

  return (
    <div style={{ display: 'flex' }}>
    <div style={{ width: '850px', height: '100px', marginRight: '70px'}}>
    <table className="table">
      <thead className='table-dark'>
        <tr>
          <th>#</th>
          <th>
            <FormattedMessage id="Name"/>
          </th>
          <th>
            <FormattedMessage id="Type"/>
          </th>
          <th>
            <FormattedMessage id="Region"/>
          </th>
        </tr>
      </thead>
      <tbody>
      {cafes.map((dato, index) => (
            <tr key={index}>
              <td> <b>{dato.id}</b></td>
              <td>  
                <p className="button" name="id" value={dato.id} onClick={() => handleClick(dato.id)}>
                {dato.nombre}
                </p>
              </td>
              <td>{dato.tipo}</td>
              <td>{dato.region}</td>
            </tr>
          ))}
      </tbody>
    </table>
    </div>
    <div>
    {showDetail && <DetailCafe data={details} />}
    </div>
    </div>
  )

};

export default ListCafe;