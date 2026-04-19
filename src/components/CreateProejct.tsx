import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Close } from "@mui/icons-material";
import { useState } from "react";
import { useProjectStore } from "../store/project";

export const CreateProject = ({
    open,
    close,
}: {
    open: boolean;
    close: () => void;
}) => {
    const { addProject } = useProjectStore();
    const [form, setForm] = useState<{ title: string; description: string }>({
        title: "",
        description: "",
    });
    const [errorTitle, setErrorTitle] = useState<boolean>(false);

    const createProject = () => {
        console.log("create");
        if (form.title.trim().length <= 0) {
            setErrorTitle(true);
            return;
        }

        addProject(form.title, form.description);
        close();
    };
    return (
        <Dialog
            open={open}
            onClose={close}
            fullWidth
            maxWidth="sm"
        >
            <DialogTitle>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{ fontWeight: 500 }}
                    >
                        Новый проект
                    </Typography>
                    <IconButton
                        onClick={close}
                        size="small"
                    >
                        <Close fontSize="small" />
                    </IconButton>
                </Box>
            </DialogTitle>

            <DialogContent dividers>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 3,
                        pt: 1,
                    }}
                >
                    <TextField
                        label="Название проекта"
                        variant="outlined"
                        fullWidth
                        autoFocus
                        value={form.title}
                        onChange={(e) => {
                            setErrorTitle(false);
                            setForm({ ...form, title: e.currentTarget.value });
                        }}
                        required
                        error={errorTitle}
                        helperText={
                            errorTitle ? "Название не может быть пустым" : ""
                        }
                    />
                    <TextField
                        label="Описание"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={3}
                        value={form.description}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                description: e.currentTarget.value,
                            })
                        }
                    />
                </Box>
            </DialogContent>

            <DialogActions sx={{ px: 3, py: 2 }}>
                <Button
                    onClick={close}
                    color="inherit"
                >
                    Отмена
                </Button>
                <Button
                    variant="contained"
                    onClick={createProject}
                >
                    Создать
                </Button>
            </DialogActions>
        </Dialog>
    );
};
