import React from "react";
import Tilt from "react-tilt";
import Image from "next/image";
import Logo from "../public/logo.svg";
import { Box } from "@mui/material";

function Tilter(props) {
  return (
    <Tilt
      className="tilt"
      options={{ max: 155 }}
      style={{ height: 200, width: 200 }}
    >
      <Box className="Tilt-inner">
        <Image src={Logo} alt="brain" width={500} height={500} />
      </Box>
    </Tilt>
  );
}

export default Tilter;
