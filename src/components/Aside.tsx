import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Button,
    Box,
} from "@mui/material";
import { ChecklistRounded, AddCircleOutlined } from "@mui/icons-material";
import { useState } from "react";
import { CreateProject } from "./CreateProejct";

const DRAWER_WIDTH = 240;

interface Props {
    open: boolean;
}

export const Aside = ({ open }: Props) => {
    const [openDialog, setOpenDialog] = useState(false);

    const show = () => setOpenDialog(true);
    const hide = () => setOpenDialog(false);

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
                    display: "flex",
                    flexDirection: "column",
                },
            }}
        >
            <Toolbar />

            <List sx={{ flexGrow: 1 }}>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <ChecklistRounded />
                        </ListItemIcon>
                        <ListItemText primary="Задачи" />
                    </ListItemButton>
                </ListItem>
            </List>

            <Box sx={{ p: 2 }}>
                <Button
                    variant="contained"
                    fullWidth
                    size="large"
                    startIcon={<AddCircleOutlined />}
                    onClick={show}
                >
                    Создать проект
                </Button>
            </Box>

            <CreateProject
                open={openDialog}
                close={hide}
            />
        </Drawer>
    );
};
