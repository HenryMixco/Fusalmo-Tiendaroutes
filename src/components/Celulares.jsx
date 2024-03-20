import React from "react";
import { CenterInfo, Button } from "../estilos-componentes/styles-comp";
import { Link, Outlet } from "react-router-dom";

const Celulares = ({nameCelular}) => {
    return(
      <CenterInfo>
        <div className='features'>
          <h2>Informacion de Celulares</h2>
          <h3> {nameCelular} </h3>
          <Link to='details'> <Button>Ver detalles</Button> </Link>
          <Outlet />
        </div>
      </CenterInfo>
    )
};

export default Celulares;