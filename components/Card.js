import * as React from "react";
import { Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Clarifai from "clarifai";
import FaceRecognition from "./FaceRecognition";

const app = new Clarifai.App({
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
});

function Card(props) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [faceBox, setFaceBox] = React.useState({});

  const calculateFaceLocation = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  const onChangeHandler = (e) => {
    setSearchTerm(e.target.value);
    if (searchTerm.length <= 0) {
      setFaceBox({});
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, searchTerm)
      .then((resp) => setFaceBox(calculateFaceLocation(resp)))
      .catch((err) => console.log(err));
  };

  return (
    <Box
      my={10}
      width="100%"
      component="form"
      noValidate
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <TextField
        sx={{ input: { color: "white" } }}
        margin="normal"
        required
        label="Search Faces"
        fullWidth
        autoFocus
        onChange={(e) => onChangeHandler(e)}
      />

      <Button
        sx={{ mb: 3 }}
        type="submit"
        variant="contained"
        color="secondary"
        fullWidth
      >
        Find Faces
      </Button>

      <FaceRecognition faceBox={faceBox} searchTerm={searchTerm} />
    </Box>
  );
}

export default Card;
