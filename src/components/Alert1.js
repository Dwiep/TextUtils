import React from 'react';
import Alert from 'react-bootstrap/Alert';


function Alert1(props) {
  const capitalize = (word) =>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
    return (

      <div style={{height:'50px'}}>
      {/* props.alert && --> it will convert JSX into JavaSCript Calls!navbar-${props.mode}*/}
      {props.alert && <Alert variant={`${props.alert.msgType}`}  >
        <b>{capitalize(props.alert.msgType)}: </b> {props.alert.msg}!
    
      </Alert>}
      </div>
    );
  }

export default Alert1
