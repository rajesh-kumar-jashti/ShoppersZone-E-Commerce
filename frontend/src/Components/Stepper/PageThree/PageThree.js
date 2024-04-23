import React, {useState} from "react";
// import user from "./user.png";
// import users from "./users.png";
import "./PageThree.css";

const PageThree = ({onButtonClick}) => {

    return (
      <main>
        <div className="but">
          <h1>Page Three</h1>
          <div className="pagethree-button">
            <button onClick={() => onButtonClick("pagetwo")}>Previous</button>
            <button onClick={() => onButtonClick("pagefour")}>Next</button>
          </div>
        </div>
      </main>
    );
}

export default PageThree;