import React from "react";
import User from "../components/user";
import ClassUser from "../components/ClassUser";

class AboutUs extends React.Component {
  constructor(prop){
    super(prop);

    // console.log("parent constroctor");
  }

  componentDidMount(){
    // console.log("parent mount ")
  }
  render() {
    // console.log("parent render");
    return (
      <div className="p-2">
        <h1>About Us</h1>
        <div>this is a food delivery webapp</div>
        {/* <User name={"dushyant"} location={"mainpuri"} contact={"dushyantkumar4"}/> */}

        <ClassUser
          name={"class"}
          location={"classLocation"}
          contact={"developerclass"}
        />
      </div>
    );
  }
}

// const AboutUs = () => {
//   return (
//     <div className='p-2'>
//         <h1>About Us</h1>
//         <div>this is a food delivery webapp</div>
//         {/* <User name={"dushyant"} location={"mainpuri"} contact={"dushyantkumar4"}/> */}

//         <ClassUser name={"class"} location={"classLocation"} contact={"developerclass"}/>
//     </div>
//   )
// }

export default AboutUs;
