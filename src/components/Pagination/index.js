
import React from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup } from 'reactstrap';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Tooltip from '@material-ui/core/Tooltip';

const Pagination = ({ page, prevClick, nextClick }) => {
  return (
    <div className="col-12 text-center">
      <ButtonGroup vertical={false}>
        <Tooltip title="Previous Page">
          <Button disabled={page === 1} onClick={prevClick} className="jr-btn">
            <ArrowBackIosIcon />
          </Button>
        </Tooltip>
        <Tooltip title="Next Page">
          <Button onClick={nextClick} className="jr-btn">
            <ArrowForwardIosIcon />
          </Button>
        </Tooltip>
      </ButtonGroup>
    </div>
  )
};

Pagination.prototype = {
  page: PropTypes.number,
  prevClick: PropTypes.func,
  nextClick: PropTypes.func
};

export default Pagination;