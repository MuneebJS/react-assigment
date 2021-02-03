import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CardLayout from 'components/CardLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCode, faCodeBranch, faCommentAlt, faStar } from '@fortawesome/free-solid-svg-icons'

const PostCard = ({ data }) => {
  return (
    <aside class="profile-card">
      <header>

        <a target="_blank" href="#">
          <img src={data.owner.avatar_url} class="hoverZoomLink" />
        </a>

        <h1 className="username">
          {data.owner.login}
        </h1>

        <p>
          {new Date(data.created_at).toLocaleDateString()}
        </p>
      </header>
      <div class="profile-bio">

        <p>
          {data.description ? data.description : "No Description"}
        </p>

      </div>

      <ul class="profile-social-links">
        <li>
          <a target="_blank" href="https://www.facebook.com/creativedonut">
            {/* <i class="fa fa-facebook"></i> */}
            <li><a href="https://www.behance.net/daliannyvieira">
              <FontAwesomeIcon icon={faCommentAlt} />
            </a>
            <span>2</span>
            </li>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://twitter.com/dropyourbass">
            <FontAwesomeIcon icon={faFileCode} />
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/vipulsaxena">
            <FontAwesomeIcon icon={faCodeBranch} />
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.behance.net/vipulsaxena">

            <FontAwesomeIcon icon={faStar} />
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default PostCard;