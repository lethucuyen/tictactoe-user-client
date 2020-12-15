import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import VideogameAsset from "@material-ui/icons/VideogameAsset";
import Rating from '@material-ui/lab/Rating';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Typography,
} from "@material-ui/core";

// import useStateWithLocalStorage from '../../hooks/LocalStorageHook.jsx'

import "./css/styles.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    backgroundColor: "#004c9e",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
  },
  inputField: {
    marginTop: theme.spacing(3),
  },
  submit: {
    marginTop: theme.spacing(3),
    background: "#004c9e",
    color: "#fff",
    "&:hover": {
      background: "#004c9edd",
    },
  },
}));

const RoomCreateModal = ({ close }) => {
  const classes = useStyles();

  const [formData, setFormData] = useState({ room: "", level: 0 });

  // const [name, setName] = useStateWithLocalStorage("currentName");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCreateRoom = async (e) => {
    e.preventDefault();
  }

  return <div className="tictactoe-modal">
    <a className="close" href="/#" onClick={close}>
      &times;
    </a>
    <div className="content">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <VideogameAsset />
        </Avatar>
        <Typography component="h1" variant="h5" className={classes.inputField}>
          Create Room
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            className={classes.inputField}
            required
            fullWidth
            id="room"
            label={formData.room === "" ? "Room" : ""}
            value={formData.room}
            onChange={handleInputChange}
            name="room"
            autoComplete="room"
            autoFocus
          />
          <Grid container xs={3} sm item className={classes.inputField}>
            <Grid item style={{ marginRight: ".75rem" }}>
              <Typography component="legend">Difficulty level </Typography>
            </Grid>
            <Grid item>
              <Rating
                value={formData.level}
                name="level"
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleCreateRoom}
          >
            Create
          </Button>
          {/* TODO */}
          {/* <Link onClick={e => (!name || !formData.room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${formData.room}`}>
            
          </Link> */}
        </form>
      </div>
    </div>
  </div>;
}

export default RoomCreateModal;