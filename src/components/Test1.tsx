import React from "react";
import { blue, red } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: blue,
    secondary: red,
  },
});

const Test1 = () => {
  const [color, setColor] = React.useState("primary");
  const [color2, setColor2] = React.useState("primary");
  const [color3, setColor3] = React.useState("primary");
  const [color4, setColor4] = React.useState("primary");
  const [color5, setColor5] = React.useState("primary");
  const [counter, setCounter] = React.useState(0);

  const handleClick = () => {
    setColor(color === "primary" ? "secondary" : "primary");
  };
  const handleClick2 = () => {
    setColor2(color2 === "primary" ? "error" : "primary");
  };
  const handleClick3 = () => {
    setColor3(color3 === "primary" ? "success" : "primary");
  };
  const handleDecrement = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  const handleIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };
  const handleClick4 = () => {
    // Изменение цвета
    setColor4(color4 === "primary" ? "error" : "primary");
    // Уменьшение счетчика
    handleDecrement();
  };
  const handleClick5 = () => {
    // Изменение цвета
    setColor5(color5 === "primary" ? "success" : "primary");
    // Увеличение счетчика
    handleIncrement();
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          style={{ minHeight: "50vh" }} // Устанавливаем минимальную высоту, чтобы контейнер занимал всю высоту видимой области
        >
          <Grid item>
            <Typography variant="h4" display="block" gutterBottom>
              {" Ура! Эти кнопки меняют цвет"}
            </Typography>
          </Grid>
          <Grid item container justifyContent="center" spacing={6}>
            <Grid item>
              <Button
                size="large"
                variant="contained"
                color={color}
                onClick={handleClick}
              >
                ТЫК
              </Button>
            </Grid>
            <Grid item>
              <Button
                size="large"
                variant="contained"
                color={color2}
                onClick={handleClick2}
              >
                ТЫК
              </Button>
            </Grid>
            <Grid item>
              <Button
                size="large"
                variant="contained"
                color={color3}
                onClick={handleClick3}
              >
                ТЫК
              </Button>
            </Grid>
          </Grid>
          <Grid
            item
            container
            justifyContent="center"
            spacing={2}
            alignItems="center"
          >
            <Grid item>
              <Button variant="contained" color={color4} onClick={handleClick4}>
                Уменьшить
              </Button>
            </Grid>
            <Grid item>
              <Typography variant="h5">{counter}</Typography>
            </Grid>
            <Grid item>
              <Button variant="contained" color={color5} onClick={handleClick5}>
                Увеличить
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export default Test1;
