import { Box, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";

const DRAWER_WIDTH = 240;

interface Props {
    open: boolean;
}

export const Content = ({ open }: Props) => (
    <Box
        component="main"
        sx={{
            flexGrow: 1,
            p: 3,
            marginLeft: open ? 0 : `-${DRAWER_WIDTH}px`,
            transition: "margin 0.2s",
        }}
    >
        <Toolbar />
        <Outlet />
    </Box>
);
