import * as React from "react";
import { styled } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";


export const StyledSelect = styled(Select)({

    "&label.Mui-focused": {
        color: "#276678"
    },
    "&.MuiInputBase-root": {
        "& fieldset": {
            borderColor: "",
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