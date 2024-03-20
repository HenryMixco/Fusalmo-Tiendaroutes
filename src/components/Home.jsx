import React from "react";
import { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
import { Button, CenterInfo } from "../estilos-componentes/styles-comp";
import { theme } from "../estilos-componentes/theme";

const Home = () => {
    return (
      <ThemeProvider theme={theme}>
        <CenterInfo className='features'>
        <h1>Bienvenido</h1>
        <p>Somos una pagina de celulares online.</p>
        <Link to="/search-page"> <Button>Ver más</Button> </Link>

        </CenterInfo>
      </ThemeProvider>
    )
};

export default Home;