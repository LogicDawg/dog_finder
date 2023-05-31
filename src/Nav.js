import React from "react";
import { Link } from "react-router-dom";


function Nav({dogs}) {
    
  return (
    <ul>
      {dogs.map(dog => (
        <li key={dog}>
          <Link to={`/dogs/${dog.name}`}>Show me the {dog.name}!</Link>
        </li>
      ))}
    </ul>
  );
}



export default Nav;