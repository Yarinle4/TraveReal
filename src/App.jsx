// App.js

import { BrowserRouter } from "react-router-dom";

import "./App.css";
import styled from "styled-components";
import Routess from "./pages/RoutesPage";

import { createTheme, colors, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#679E84",
    },
  },
});

const FirstScreen = styled.div`
  background: #f3fbf4;
  min-height: max-content;
`;

const SecondScreen = styled.div`
  min-height: 100vh;
  font-size: 3vw;
  font-family: "Montserrat";
`;

export default function App() {
  return (
    <BrowserRouter>
      <style>@import url('https://fonts.cdnfonts.com/css/montserrat');</style>
      <ThemeProvider theme={theme}>
        <FirstScreen>
          <SecondScreen>
            <Routess />
          </SecondScreen>
        </FirstScreen>
      </ThemeProvider>
    </BrowserRouter>
  );
}
