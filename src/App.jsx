
import Searchbar from "./components/Searchbar";
import React from "react";
import  './App.css'
  import { motion } from "framer-motion";

  function App() {
    

    return (
      <motion.div
        className="background"
        style={{ 
          backgroundColor: '#333', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          height: '100vh' 
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
      whileHover={{ scale: 1.2, rotate: 10 }}
      whileTap={{ scale: 0.9 }}
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: "grey",
        borderRadius: "10px"
      }}
    >{

    } </motion.div>
        <div className="title" style={{ fontSize: '3rem', color: '#fff', marginBottom: '20px' }}>Weather</div>
        <Searchbar />
       
      </motion.div>
        );
  }

  export default App;

