import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ShareButtonContainer from 'components/ShareButton/ShareButtonContainer';

import {
  StyledBox,
  StyledCloseButton,
  StyledDate,
  Description,
  HeaderContainer,
} from './styled';

const ModalInfo = ({
  isOpen,
  handleClose,
  currentNote,
  handleShare,
  usersEmail,
  getUsersEmail,
  setChosenEmail,
  setUserIdShared,
  anchorEl,
  setAnchorEl,
}) => (
  <Modal
    open={isOpen}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <div>
      <StyledBox key={currentNote.id}>
        <HeaderContainer>
          <Typography variant="h6" component="h2" align="center">
            {currentNote.title}
          </Typography>
          <ShareButtonContainer
            currentNote={currentNote}
            handleShare={handleShare}
            usersEmail={usersEmail}
            getUsersEmail={getUsersEmail}
            setChosenEmail={setChosenEmail}
            setUserIdShared={setUserIdShared}
            anchorEl={anchorEl}
            setAnchorEl={setAnchorEl}
          />
        </HeaderContainer>
        <Description id="modal-modal-description">
          {currentNote.description}
        </Description>
        <StyledDate id="modal-modal-description">{currentNote.date}</StyledDate>
        <StyledCloseButton type="button" onClick={handleClose}>
          Close
        </StyledCloseButton>
      </StyledBox>
    </div>
  </Modal>
);

ModalInfo.defaultPropTypes = {
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func,
  currentNote: PropTypes.func,
  handleShare: PropTypes.func,
  usersEmail: PropTypes.array,
  getUsersEmail: PropTypes.func,
  setChosenEmail: PropTypes.func,
  setUserIdShared: PropTypes.func,
  anchorEl: PropTypes.bool,
  setAnchorEl: PropTypes.func,
};

export default ModalInfo;
