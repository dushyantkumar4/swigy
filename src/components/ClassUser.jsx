import React from "react";
import axios from "axios";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "userName",
        location: "default",
        avt_url:
          "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    };
    // console.log("chield constructor");
  }
  async componentDidMount() {
    // console.log("chield mount")
    const data = await axios.get("https://api.github.com/users/dushyantkumar4");
    console.log(data);

    this.setState({
      userInfo: data.data,
    });
  }
componentDidUpdate() {
  console.log("component did update");
}
componentWillUnmount(){
  console.log("component will unmout")
}
  render() {
    const { name, location,avatar_url } = this.state.userInfo;

    return (
      <div className="border border-black p-10">
        <img src={avatar_url} alt=""  className="size-40 rounded-full object-cover"/>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>contact:dushyantkumar4</h4>
      </div>
    );
  }
}

export default UserClass;
