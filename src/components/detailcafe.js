import Card from "react-bootstrap/Card";
import { FormattedMessage, FormattedDate } from "react-intl";
import '../components.css';


function DetailCafe(props) {    

    return(
      <div>
      <div style={{textAlign: 'center', width: '18rem', border: '1px solid black'}}>
      <Card style = {{ backgroundColor: '#FBF1F0'}}>
      <Card.Body>
        <Card.Title> 
            <b>
              {String(props.data.nombre).toUpperCase()}
            </b>
        </Card.Title>
        
        <Card.Subtitle className="mb-2 text-muted">
          <FormattedDate
          value={new Date(props.data.fecha_cultivo)}
          year='numeric'
          month='long'
          day='numeric'
          weekday='long'
          />        
          </Card.Subtitle>
        <img src={props.data.imagen} alt={"img"} width="150" height="150"/>
        <Card.Text>
          <FormattedMessage id="Note"/>
          <br></br>
          {props.data.notas}
          <br></br>

          <b>
            <br></br>
            <FormattedMessage id="Grown"/>
            <br></br>
            {props.data.altura} <FormattedMessage id="Masl"/>
          </b>
          
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </div>
    )
}

export default DetailCafe