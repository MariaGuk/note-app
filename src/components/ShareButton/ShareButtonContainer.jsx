import React from 'react';
import PropTypes from 'prop-types';
import ShareButton from './ShareButton';

const ShareButtonContainer = ({
  getUsersEmail,
  usersEmail,
  handleShare,
  setChosenEmail,
  setUserIdShared,
  anchorEl,
  setAnchorEl,
}) => {
  const open = Boolean(anchorEl);

  const options = usersEmail;

  const handleClick = event => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
    getUsersEmail();
  };

  const handleClose = () => {
    setAnchorEl(null);
    setChosenEmail(null);
    setUserIdShared(null);
  };

  return (
    <ShareButton
      options={options}
      open={open}
      handleClick={handleClick}
      anchorEl={anchorEl}
      handleShare={handleShare}
      handleClose={handleClose}
    />
  );
};
ShareButtonContainer.defaultPropTypes = {
  getUsersEmail: PropTypes.func,
  usersEmail: PropTypes.array,
  handleShare: PropTypes.func,
  setChosenEmail: PropTypes.func,
  setUserIdShared: PropTypes.func,
  anchorEl: PropTypes.bool,
  setAnchorEl: PropTypes.func,
};
export default ShareButtonContainer;
