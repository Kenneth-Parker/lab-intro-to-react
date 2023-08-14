import React from "react";
import "./index.css";
import Contacts from "./Components/Contacts";
import ContactUserCard from "./Components/ContactUserCard";
import NavBar from "./Components/NavBar";
import Post from "./Components/Post";
import Posts from "./Components/Posts";
import UserProfile from "./Components/UserProfile";

function App() {
  return <>
  <p>Yes Hello, world!</p>

  <Contacts/>
  <ContactUserCard/>
  <NavBar/>
  <Post/>
  <Posts/>
  <UserProfile/>

  </>
}

export default App;
