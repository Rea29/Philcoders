import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { useLocation } from "react-router-dom";
import Swal from 'sweetalert2'


const PopupNav = () => {
    const [inputValue, setInputValue] = useState("")

    const showSwal = () => {
        // Swal.fire({
        //     title: "The Internet?",
        //     text: "That thing is still around?",
        //     icon: "question"
        //   });
        Swal.fire({
            title: "Custom width, padding, color, background.",
            // width: "100%",
            padding: "3em",
            color: "#716add",
            background: "url(https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGwwemVta2FpOGx0MGhyZHppNng0bTJocXQ2MjR6bWduZnpqYTMxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PI3QGKFN6XZUCMMqJm/giphy.gif) no-repeat",
            backdrop: `
              rgba(0,0,123,0.4)
              
            `
          });

       
    }
  
    return (
      <>
        <button onClick={showSwal}>Show SweetAlert2 modal</button>
        <div>Your input: {inputValue}</div>
        
      </>
    )
  
}

export default PopupNav;
