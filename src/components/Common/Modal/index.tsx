import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

export type Props = { button: string, title: string, content: any};

export const TransitionsModal = (props: Props) => {

    const {button} = props;
    const {title} = props;
    const {content} = props;
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <button type="button" onClick={handleOpen}>
                {button}
            </button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div>
                        <h2 id="transition-modal-title">{title}</h2>
                        <p id="transition-modal-description">{content}</p>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
};
