import { Box } from "@mui/material";

function FaceRecognition({ searchTerm, faceBox }) {
  return (
    <Box
      sx={{
        position: "absolute",
        mt: 20,
      }}
    >
      <Box
        id="inputimage"
        component="img"
        sx={{
          width: 350,
          height: "auto",
        }}
        alt={searchTerm ? searchTerm : ""}
        src={searchTerm ? searchTerm : ""}
      />
      <div
        className="bounding-box"
        style={{
          top: faceBox.topRow,
          right: faceBox.rightCol,
          bottom: faceBox.bottomRow,
          left: faceBox.leftCol,
        }}
      ></div>
    </Box>
  );
}

export default FaceRecognition;

// top: 490,
// right: 650,
// bottom: 120,
// left: 650,
