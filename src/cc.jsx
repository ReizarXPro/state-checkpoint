import React from "react";

export default class Welcome extends React.Component {
  state = {
    name: "mounir",
    bio: "cio-maneger-nasa",
    imgSrc: (
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5fkdaVSsJLWgtdnxacfAW4bZbPL1KGGXRzw&s" />
    ),
    profession: "nasa",
    showState: true,
    mountedTime: 0,
    uppdateCount: 0,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ mountedTime: this.state.mountedTime + 1 });
    }, 1000);
  }
  componentWillUpdate(nestProps, nextState) {
    console.log("component will upp :", nextState);
  }
  componentWillUnmount() {
    clearInterval(this.state);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component did update:", prevState);
    if (prevState.shows !== this.state.shows) {
      this.setState((prevState) => ({
        updateCount: prevState.updateCount + 1,
      }));
    }
  }

  handleClick = () => {
    this.setState({ showState: !this.state.showState });
  };

  render() {
    return (
      <>
        <h1>
          {this.state.showState ? (
            Object.values(this.state).map((value, index) => (
              <p key={index}>{value}</p>
            ))
          ) : (
            <h1>{this.state.name}</h1>
          )}
        </h1>
        <button onClick={this.handleClick}>Click Me</button>
      </>
    );
  }
}
