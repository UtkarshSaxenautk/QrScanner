import React, { useState } from 'react';
import QrReader from 'modern-react-qr-reader'

const Qr = () => {
  const [data, setData] = useState('Fetching data....');
  const handlescan = (result) => {
       setData(result);
       console.log("Data recieved " +JSON.stringify(data));
  }
  const handlerror = (error) => {
      
      console.log(error);
  }

  return (
    <>
      <QrReader
        scanDelay={500} 
        facingMode={"environment"}
        style={{width:'100%'}}
        onScan = {handlescan}
        onError = {handlerror}
        
        
      />
     
     
    </>
  );
};

export default Qr