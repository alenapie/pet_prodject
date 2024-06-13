import { TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

export const Component = () => {
  const [isError, setError] = useState(false);
  const [value, setValue] = useState("");
  const [text, setText] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const handleButtonClick = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "50vh" }} // Устанавливаем минимальную высоту, чтобы контейнер занимал всю высоту видимой области
      >
        <Grid item>
          <Button
            variant="contained"
            color={isError ? "error" : "primary"}
            onClick={(e) => {
              setError(!isError);
              handleButtonClick();
            }}
            style={{ textTransform: "none" }}
          >
            {text.toLowerCase()}
          </Button>
        </Grid>
        <Grid item>
          <Typography> Введи тут текст, который будет на кнопке </Typography>
        </Grid>
        <Grid item>
          <TextField
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </Grid>
      </Grid>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Текст на кнопке, но капсом:</DialogTitle>
        <DialogContent>
          <Typography>
            {text === "хуй" ? "САМ ХУЙ" : text.toUpperCase()}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Закрыть</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

/* <Typography>{value}</Typography>
      <TextField
        id="standard-basic"
        label="Standard"
        onChange={(e) => setValue(e.target.value)}
      /> */
