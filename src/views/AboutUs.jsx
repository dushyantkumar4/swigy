import React from "react";
import User from "../components/user";
import ClassUser from "../components/ClassUser";
import useAllRestaurant from "../hooks/useAllRestaurant";

// class AboutUs extends React.Component {
//   constructor(prop){
//     super(prop);
//   }

//   componentDidMount(){
//     // console.log("parent mount ")
//   }
//   render() {
//     // console.log("parent render");
//     return (
//       <div className="p-2">
//         <h1>About Us</h1>
//         <div>this is a food delivery webapp</div>
//         {/* <User name={"dushyant"} location={"mainpuri"} contact={"dushyantkumar4"}/> */}
//         <ClassUser
//           name={"class"}
//           location={"classLocation"}
//           contact={"developerclass"}
//         />
//       </div>
//     );
//   }
// }

const AboutUs = () => {

  const allres = useAllRestaurant();
  console.log(allres);
  return (
    <div className='p-2'>
        <h1>About Us</h1>
        <div>this is a food delivery webapp</div>
        {/* <User name={"dushyant"} location={"mainpuri"} contact={"dushyantkumar4"}/> */}

        <ClassUser name={"class"} location={"classLocation"} contact={"developerclass"}/>
    </div>
  )
}

export default AboutUs;
