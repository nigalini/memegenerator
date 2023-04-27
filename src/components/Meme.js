import React, { Fragment, useState } from "react";
import {  Avatar,  Box,  Button,  Grid,  Paper,  TextField,  Typography,} from "@mui/material";
import { toPng } from "html-to-image";
import download from "downloadjs";
const Meme = () => {
  const [waterMark, setWaterMark] = useState("Sample Text");

  const down = () => {
    toPng(document.getElementById("meme")).then((dataUrl) => {
      download(dataUrl, "mymeme.png");
    });
  };

  return (
    <Fragment>
      <Grid container justifyContent="center">
        <Grid xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <TextField
              fullWidth
              sx={{ mb: 2 }}
              value={waterMark}
              onChange={(e) => setWaterMark(e.target.value)}
            />
            <Button
              fullWidth
              style={{ marginBottom: 2 }}
              variant="contained"
              color="secondary"
            >
              Next Image
            </Button>
            <Box>
              <Avatar
                id="meme"
                //src="./logo192.png"
                src={`https://unsplash.com/oauth/applications/440206/ofwo2xugUgjnZWvBVyC2zu7NaFQB4NKH2eGGnxynmmc`}
                style={{ width: 300, height: 300 }}
              />
              <Typography
                variant="h5"
                style={{
                  marginTop: -200,
                  marginLeft: 100,
                  position: "absolute",
                  color: "#ffffff",
                }}
              >
                {waterMark}
              </Typography>
            </Box>
            <Button
              onClick={down}
              fullWidth
              style={{ marginBottom: 2 }}
              variant="contained"
            >
              Generate
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default Meme;