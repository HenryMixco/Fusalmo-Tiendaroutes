import React from "react";
import { StyledLink, BtnLink } from "../estilos-componentes/styles-comp";

const SearchPage = () => {
    const celulares = [
      'Samsung',
      'LG',
      'Xiaomi',
      'iPhone'
    ];
  
    return(
      <div className="features">
        <h2>Pagina de Busqueda</h2>
  
          <ul>
            {celulares.map(celular => (
              <li key={celular}>
                <StyledLink to={`/celulares/${celular}`}><BtnLink>{celular}</BtnLink></StyledLink>
              </li>
            ))}
          </ul>
      </div>
    )
  };

  export default SearchPage;