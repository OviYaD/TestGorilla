import * as React from "react";
import { styled } from "@mui/material/styles";
import { InputLabel } from "@mui/material";

export const StyledInputLabel = styled(InputLabel)({
    "&.Mui-focused": {
        color: "#276678"
    }
});