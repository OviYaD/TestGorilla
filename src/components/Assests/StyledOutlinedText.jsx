import * as React from "react";
import { styled } from "@mui/material/styles";
import OutlinedInput from '@mui/material/OutlinedInput';

export const StyledOutlinedText = styled(OutlinedInput)({
    "& label.Mui-focused": {
        color: "#276678"
    },
    "&.MuiOutlinedInput-root": {
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