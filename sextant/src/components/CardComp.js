import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {useEffect, useState} from 'react';


function CardComp() {
  const [ip,setIp ] = useState();
  useEffect(() => {
   
    fetch('https://api.ipify.org?format=json')         
    .then(response => response.json())
    .then(data => setIp(data.ip));
     
  }, [])

  return (
   
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
    
            <p>{ip}</p>
          
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComp;