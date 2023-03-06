import * as React from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

export const StyledTextField = styled(TextField)({
    "& label.Mui-focused": {
        color: "#276678"
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "",
            // height: "3.5rem"
        },
        "&:hover fieldset": {
            borderColor: "#276678",
            borderWidth: "0.13rem"
        },
        "&.Mui-focused fieldset": {
            borderColor: "#276678"
        }
    }
});