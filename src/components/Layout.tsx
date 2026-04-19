import { useState } from "react";
import { Box, CssBaseline } from "@mui/material";
import { Header } from "./Header";
import { Aside } from "./Aside";
import { Content } from "./Content";

interface Props {
    onToggleTheme: () => void;
    mode: "light" | "dark";
}

export const MainLayout = ({ onToggleTheme, mode }: Props) => {
    const [open, setOpen] = useState(true);

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <Header
                onToggle={() => setOpen(!open)}
                onToggleTheme={onToggleTheme}
                mode={mode}
            />
            <Aside open={open} />
            <Content open={open} />
        </Box>
    );
};
