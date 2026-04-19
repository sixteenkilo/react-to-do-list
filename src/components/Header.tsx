import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import {
    Menu as MenuIcon,
    Brightness4,
    Brightness7,
} from "@mui/icons-material";

interface Props {
    onToggle: () => void;
    onToggleTheme: () => void;
    mode: "light" | "dark";
}

export const Header = ({ onToggle, onToggleTheme, mode }: Props) => (
    <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
        <Toolbar>
            <IconButton
                color="inherit"
                onClick={onToggle}
                edge="start"
                sx={{ mr: 2 }}
            >
                <MenuIcon />
            </IconButton>
            <Typography
                variant="h6"
                sx={{ flexGrow: 1 }}
            >
                Todo App
            </Typography>
            <IconButton
                color="inherit"
                onClick={onToggleTheme}
            >
                {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
        </Toolbar>
    </AppBar>
);
