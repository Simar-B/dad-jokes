import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';

class GenJoke extends React.Component {
  state={
    joke:'',
    displayJoke:false
  }

  getJoke = () => {
  return (fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json"
    }
  }).then((resp) => resp.json())
    .then((value) => value.joke)
  )};

  onClick = (e) =>{
  e.preventDefault();

  if(this.state.displayJoke === false){
    this.setState({displayJoke:true})
  }
  else{
    this.getJoke().then(joke => {
      this.setState({joke})
    })
  }
};

  componentDidMount() {
        this.getJoke().then(joke => {
            this.setState({joke});
})};

  render() {
    return (
      <div>
      <Container>

      <Row className="justify-content-center">
      <Button variant="dark"  onClick={this.onClick}>So you wanna hear a joke?</Button>
      </Row>

      <Row className="justify-content-center">
      {this.state.displayJoke && <h1 className="text-center">{this.state.joke}</h1>}
      </Row>

      </Container>
      </div>
    );
  }
}





export default GenJoke;
