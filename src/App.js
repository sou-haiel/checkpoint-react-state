import './App.css';
import React  from 'react';
import Img from './img1.jpeg';


class App extends React.Component {
  
  state = {
    Person: {
      fullName: "Souhaiel boufaied",
      bio: "Student",
      imgSrc: Img,
      profession: "Developer"
    },
    show: true
  };
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      4000 //le nombre que vous saisir c'est le time interval
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  // tick() {
  //   this.setState({
  //     date: new Date()
  //   });
  // }

  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };


  render() {
    return (
      <>
        {this.state.show && (
          <>
            <h1>{this.state.Person.fullName}</h1>
            <h1>{this.state.Person.bio}</h1>
            <img src={this.state.Person.imgSrc} alt="MyImage"></img>
            <h1>{this.state.Person.profession}</h1>
            <br></br>
          </>
        )}

        <button onClick={this.handleShowPerson}>click here</button>
      </>
);
}
}


export default App;