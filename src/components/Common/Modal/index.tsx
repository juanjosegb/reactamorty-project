import React, {useState} from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import {CustomFade, CustomModal, TitleModal} from "@Components/Custom/Modal";
import {ComplexButton} from "@Components/Custom/Button/ComplexButton";
import {CloseIcon} from "@Components/Custom/CloseIcon";
import {ICriteria} from "@Types/filter";
import {ComplexFilter} from "@Components/Common/ComplexFilter";

export type Props = { topicCriteria: ICriteria[], initialValues: any, button: string, title: string, setFilteredValues: any };

export const TransitionsModal = (props: Props) => {

    const {topicCriteria, initialValues, button, title, setFilteredValues} = props;
    const [open, setOpen] = useState(false);

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
                        <div id="transition-modal-description">
                            <ComplexFilter topicCriteria={topicCriteria} initialValues={initialValues}
                                           setModalOpen={setOpen} setFilteredValues={setFilteredValues}/>
                        </div>
                    </div>
                </CustomFade>
            </CustomModal>
        </div>
    );
};
