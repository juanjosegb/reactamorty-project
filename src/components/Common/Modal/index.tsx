import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import {CustomFade, CustomModal, TitleModal} from "@ComponentsCustom/Modal";
import {ComplexButton} from "@ComponentsCustom/Button/ComplexButton";

export type Props = { button: string, title: string, content: any };

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
            <ComplexButton variant="contained" color="primary" onClick={handleOpen}>
                {button}
            </ComplexButton>
            <CustomModal
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
                <CustomFade in={open}>
                    <div>
                        <TitleModal id="transition-modal-title">{title}</TitleModal>
                        <p id="transition-modal-description">{content}</p>
                    </div>
                </CustomFade>
            </CustomModal>
        </div>
    );
};
