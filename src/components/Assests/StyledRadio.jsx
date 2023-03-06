import * as React from "react";
import { styled } from "@mui/material/styles";
import Radio from '@mui/material/Radio';

export const StyledRadio = styled(Radio)({
    "&.Mui-checked": {
        color: "#46a997",
    }
});