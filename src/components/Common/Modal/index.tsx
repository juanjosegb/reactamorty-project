import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import {CustomFade, CustomModal, TitleModal} from "@Components/Custom/Modal";
import {ComplexButton} from "@Components/Custom/Button/ComplexButton";
import {CloseIcon} from "@Components/Custom/CloseIcon";

export type Props = { children: any, button: string, title: string };

export const TransitionsModal = (props: Props) => {

    const {button} = props;
    const {title} = props;
    const {children} = props;
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
                        <TitleModal id="transition-modal-title">
                            {title}
                            <CloseIcon onClick={handleClose}/>
                        </TitleModal>
                        <div id="transition-modal-description">{children}</div>
                    </div>
                </CustomFade>
            </CustomModal>
        </div>
    );
};
