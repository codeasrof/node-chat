/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";

const AuthPage = (props) => {
  const [username, setUsername] = useState();
  const [secret, setSecret] = useState();
  const [email, setEmail] = useState();
  const [first_name, setFirstName] = useState();
  const [last_name, setLastName] = useState();

  const onLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { username, secret })
      .then((r) => props.onAuth({ ...r.data, secret })) // NOTE: over-ride secret
      .catch((e) => console.log(JSON.stringify(e.response.data)));
  };

  const onSignup = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/signup", {
        username,
        secret,
        email,
        first_name,
        last_name,
      })
      .then((r) => props.onAuth({ ...r.data, secret })) // NOTE: over-ride secret
      .catch((e) => console.log(JSON.stringify(e.response.data)));
  };

  return (
    <div style={{
        height:"100vh"
    }}>
      <div 
        style={{
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"flex-start"
        }}>

        <form 
        onSubmit={onLogin}
        style={{
            color:"#fff",
            display:"flex",
            flexDirection:"column",
            width:"500px",
            backgroundColor:"#000",
            height:"100vh",
            padding:"50px"
        }}
        >
          <div className="title">Login</div>

          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            style={{
                height:"45px",
                paddingLeft:"10px",
                borderRadius:"5px",
                border:"none",
                marginTop:"5px",
                marginBottom:"5px"
            }}
          />

          <input
            type="password"
            name="secret"
            placeholder="Password"
            onChange={(e) => setSecret(e.target.value)}
            style={{
                height:"45px",
                paddingLeft:"10px",
                borderRadius:"5px",
                border:"none",
                marginTop:"5px",
                marginBottom:"5px",
            }}
          />

          <button 
            type="submit"
            style={{
                height:"45px",
                paddingLeft:"10px",
                borderRadius:"5px",
                border:"none",
                marginTop:"5px",
                marginBottom:"5px",
                backgroundColor:"purple",
                color:"#fff",
                cursor:"pointer"
            }}
          >LOG IN</button> 
        </form>

        <form onSubmit={onSignup}
         style={{
                color:"#fff",
                display:"flex",
                flexDirection:"column",
                width:"50%",
                margin:"0 auto",
                padding:"50px"
            }}
        >
          <div className="title" style={{color:"black"}}>or Sign Up</div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            style={{
                height:"45px",
                paddingLeft:"10px",
                borderRadius:"5px",
                border:"0.5px solid gray",
                marginTop:"5px",
                marginBottom:"5px",
            }}
          />
          <input
            type="password"
            name="secret"
            placeholder="Password"
            onChange={(e) => setSecret(e.target.value)}
            style={{
                height:"45px",
                paddingLeft:"10px",
                borderRadius:"5px",
                border:"0.5px solid gray",
                marginTop:"5px",
                marginBottom:"5px",
            }}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            style={{
                height:"45px",
                paddingLeft:"10px",
                borderRadius:"5px",
                border:"0.5px solid gray",
                marginTop:"5px",
                marginBottom:"5px",
            }}
          />
          <input
            type="text"
            name="first_name"
            placeholder="First name"
            onChange={(e) => setFirstName(e.target.value)}
            style={{
                height:"45px",
                paddingLeft:"10px",
                borderRadius:"5px",
                border:"0.5px solid gray",
                marginTop:"5px",
                marginBottom:"5px",
            }}
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last name"
            onChange={(e) => setLastName(e.target.value)}
            style={{
                height:"45px",
                paddingLeft:"10px",
                borderRadius:"5px",
                border:"0.5px solid gray",
                marginTop:"5px",
                marginBottom:"5px",
            }}
          />
          <button type="submit"
           style={{
            height:"45px",
            paddingLeft:"10px",
            borderRadius:"5px",
            border:"none",
            marginTop:"5px",
            marginBottom:"5px",
            backgroundColor:"purple",
            color:"#fff",
            cursor:"pointer"
            }}
          >SIGN UP</button>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;