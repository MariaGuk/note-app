import React from 'react';
import PropTypes from 'prop-types';
import ShareIcon from '@mui/icons-material/Share';
import Button from '@mui/material/Button';

import { Share, StyledMenu, StyledMenuItem } from './styled';

const ShareButton = ({
  handleShare,
  handleClick,
  handleClose,
  open,
  anchorEl,
  options,
}) => (
  <>
    <Button>
      <div data-testid="share_button">
        <ShareIcon
          aria-label="more"
          id="long-button"
          aria-controls={open ? 'long-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        />
        <StyledMenu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          {options.map(option => (
            <StyledMenuItem key={option} onClick={handleShare}>
              {option}
            </StyledMenuItem>
          ))}
        </StyledMenu>
      </div>
    </Button>
    {open && <Share>Share with:</Share>}
  </>
);

ShareButton.defaultPropTypes = {
  handleShare: PropTypes.func,
  handleClick: PropTypes.func,
  handleClose: PropTypes.func,
  open: PropTypes.string,
  anchorEl: PropTypes.bool,
  options: PropTypes.array,
};
export default ShareButton;
