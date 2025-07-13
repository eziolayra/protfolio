import { useSnackbar } from 'notistack';

function NoticeBar() {
    
    const { enqueueSnackbar } = useSnackbar();

    const Notice = (message, type) => {
        enqueueSnackbar(message, {
            variant: type, 
            // type can be "success", "error", "info", etc.
            autoHideDuration: 2000,
        });
    };

    return { Notice };
}

export default NoticeBar;