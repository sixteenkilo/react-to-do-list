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

export const CreateProject = ({
    open,
    close,
}: {
    open: boolean;
    close: () => void;
}) => {
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
                    />
                    <TextField
                        label="Описание"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={3}
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
                    onClick={close}
                >
                    Создать
                </Button>
            </DialogActions>
        </Dialog>
    );
};
