import React from "react";
class MyComponent extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  };

  handleChangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };
  handleChangeLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    alert("hieu");
  };
  render() {
    console.log(this.state);
    return (
      <>
        <form>
          <label htmlFor="fname">First name</label>
          <br></br>
          <input
            type="text"
            value={this.state.firstName}
            onChange={(event) => this.handleChangeFirstName(event)}
          ></input>
          <br></br>
          <label htmlFor="lname">Last name</label>
          <br></br>
          <input
            type="text"
            value={this.state.lastName}
            onChange={(event) => this.handleChangeLastName(event)}
          ></input>
          <br></br>
          <input
            type="submit"
            value="Submit"
            onClick={(event) => this.handleSubmit(event)}
          ></input>
        </form>
      </>
    );
  }
}
export default MyComponent;
