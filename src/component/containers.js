import './containers.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col,Button} from 'react-bootstrap';
import { useState } from 'react';
const Containers =()=> {
    const [toggleColumn1,setToggleColumn1]=useState(true)
    const [toggleColumn2,setToggleColumn2]=useState(false)
    const column2 =()=>{
        setToggleColumn1(false)
        setToggleColumn2(true)
    }
    const column1 =()=>{
        setToggleColumn1(true)
        setToggleColumn2(false)
    }
  return (
    <div className="main-container">
        <Container fluid>
  <Row>
    <Col className={` ${toggleColumn1 ? "column-1" :"column-1-hidden"}`}>Column 1</Col>
    <Col className={` ${toggleColumn2 ? "column-2" :"column-2-hidden"}`}>Column 2</Col>
  </Row>
<Container className="btn-container">
    <Button onClick={()=>column1()} >Column 1</Button>
    <Button onClick={()=>column2()}>Column 2</Button>
</Container>
</Container>
    </div>
  );
}

export default Containers;
