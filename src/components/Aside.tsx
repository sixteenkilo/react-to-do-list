import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
} from "@mui/material";
import { ChecklistRounded } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const DRAWER_WIDTH = 240;

interface Props {
    open: boolean;
}

export const Aside = ({ open }: Props) => {
    const navigate = useNavigate();

    return (
        <Drawer
            variant="persistent"
            open={open}
            sx={{
                width: DRAWER_WIDTH,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: DRAWER_WIDTH,
                    boxSizing: "border-box",
                },
            }}
        >
            <Toolbar />
            <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => navigate("/")}>
                        <ListItemIcon>
                            <ChecklistRounded />
                        </ListItemIcon>
                        <ListItemText primary="Задачи" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
    );
};
