import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CardLayout from 'components/CardLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCode, faCodeBranch, faCommentAlt, faStar } from '@fortawesome/free-solid-svg-icons'

const PostCard = ({data}) => {
  return (
    <CardLayout>
      <div className="card-header">
        <div className="user-profile flex-row align-items-center col-6" >
          <Avatar
            alt="..."
            src={data.owner.avatar_url}
            className="user-avatar"
          />
          <div className="user-detail">
            <h5 className="user-name"><a href={data.owner.html_url}>{data.owner.login}</a></h5>
            <p>{new Date(data.created_at).toLocaleDateString()}</p>
            <p className="user-description">{data.description}</p>
          </div>
        </div>
        <div className="col-6">
        <span>
            <FontAwesomeIcon icon={faFileCode} />
          2 files
          </span>
          <span>
            <FontAwesomeIcon icon={faCodeBranch} />
          3 forks
          </span>
          <span>
            <FontAwesomeIcon icon={faCommentAlt} />
          2 files
          </span>
          <span>
            <FontAwesomeIcon icon={faStar} />
          {data.comments} start
          </span>
        </div>
      </div>
      {/* <img className="img-fluid" src="https://via.placeholder.com/500x330" alt="Card image cap"/> */}
      <div className="card-body">
        <p className="card-text text-muted">
          Some quick example text to build on the card title and make up the bulk of the card's content. Lorem
          ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
        </p>
        <span className="jr-link card-link text-uppercase"><i className="zmdi zmdi-image-o zmdi-hc-fw"/>latest
          pictures</span>
      </div>
    </CardLayout>
  );
};

export default PostCard;