import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import "../Assets/Home.css";
// import SocialButton from "./SocialButton";
// import TwitterLogin from "./TwitterLogin";
// import LinkedinSDK from "react-linkedin-sdk";
// import { SocialIcon } from "react-social-icons";
// import Fb from "../components/Fb";
import Getpost from "./Getpost";
import Postdata from "./Postdata";
// import Fb from "./Fb";
import Checkbox from "./Checkbox";
 
// const responseLinkedin = (response) => {
//   console.log(response);
// };

// const handleSocialLogin = (user) => {
//   //localStorage.setItem("user",user);
//   console.log(user);
// };

// const handleSocialLoginFailure = (err) => {
//   console.error(err);
// };
// const SocialLogin = (user) => {
//   //window.localStorage.setItem(user);

//   console.log(user);
// };

// const SocialLoginFailure = (err) => {
//   console.error(err);
// };

const Home = () => {
  // const [area, setName] = useState("");
  // const [facebook,setFacebook]=useState("");
  // const [Instagram,setInstagram]=useState("");
  // const [Twitter,setTwitter]=useState("");
  // const [Linkedin,setLinkedin]=useState("");

  // function saveUser() {
  //   console.log(area);
  // }

  //console.log(area,facebook,Instagram,Twitter,Linkedin);

  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

   


  return (
    <>
      <div className="main">
        <div className="box1">
          Hello Welcome <br />
          {user && user.email}
        </div>
        <div className="box2">
          <Button variant="primary" onClick={handleLogout}>
            Log out
          </Button>
        </div>
      </div>
      <div className="post">
        {/* <SocialButton
          provider="facebook"
          appId="733289641247024"
          onLoginSuccess={handleSocialLogin}
          onLoginFailure={handleSocialLoginFailure}
        >
          Login in with Facebook
        </SocialButton> */}

        <br></br>
        <br></br>

        {/* <TwitterLogin /> */}

        <br></br>
        <br></br>
        {/* <SocialButton
          provider="instagram"
          appId="419018976788406" //"419018976788406"
          onLoginSuccess={SocialLogin}
          onLoginFailure={SocialLoginFailure}
        >
          Login in with instagram
        </SocialButton> */}
        <br></br>
        <br></br>

        {/* <LinkedinSDK
          clientId="861vgle8kdy9cz"
          callBack={responseLinkedin}
          fields=":(id,num-connections,picture-url)"
          className={"className"}
          loginButtonText={"Login with Linkedin"}
          logoutButtonText={"Logout from Linkedin"}
          buttonType={"button"}
          icon={SocialIcon}
          getOAuthToken
        /> */}
        <br></br>

        <div className="post1">
          <h1> create a post</h1>
          {/* <textarea className="textarea"  id="example1"     type="text" name="area" value={area}
            onChange={(e) => {
              setName(e.target.value);
            }}
                         >
                    Hello there, this is some text in a text area
               </textarea>
 

              <Button className="btn1" type="button" onClick={saveUser}>
               {" "}
                POST{" "}
               </Button> */}

             

              
               <Postdata />
               <div className="boxes"> 
                  <Checkbox />       </div>
                
               
        </div>

          


          <Getpost />
      </div>
    </>
  );
};

export default Home;
