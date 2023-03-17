import * as React from "react";
import { styled } from "@mui/material/styles";
import Checkbox from '@mui/material/Checkbox';


export const StyledCheckbox = styled(Checkbox)({
    "&.MuiCheckbox-root": {
        padding: "0px"
    },
    "&.Mui-checked": {
        color: "#46a997",
    }
});