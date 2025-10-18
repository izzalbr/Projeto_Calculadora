import logo from './logo.svg';
import './App.css';
import { Container, Content, Row, Column } from './styles';
import Input from './components/Input';
import Button from './components/Button';
 
const App = () => {
  return (
    <Container>
        <Content>
          <Input />
          <Row>
            <Button label={"AC"} />
            <Button label={"⌫"} />
            <Button label={""} />
            <Button label={"/"} />
          </Row>
          <Row>
            <Button label={7} />
            <Button label={8} />
            <Button label={9} />
            <Button label={"X"} />
          </Row>
          <Row>
            <Button label={6} />
            <Button label={5} />
            <Button label={4} />
            <Button label={"-"} />
          </Row>
          <Row>
            <Button label={3} />
            <Button label={2} />
            <Button label={1} />
            <Button label={"+"} />
          </Row>
          <Row>
            <Button label={","} />
            <Button label={0} />
            <Button label={""} />
            <Button label={"="} />
          </Row>

          
        </Content>
    </Container>
  )
}

export default App;
