import React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
const Toast = (props) => {
  return (
    <div className="d-flex justify-content-end">
      <Stack sx={{ width: "50%", color: "white" }} spacing={2}>
        <Alert variant="filled" severity={props.color}>
          {props.message}!
        </Alert>
      </Stack>
    </div>
  );
};

export default Toast;
