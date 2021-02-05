import React from 'react';
import moment from 'moment';
import Avatar from '@material-ui/core/Avatar';
import CardLayout from 'components/CardLayout';
import DateDiff from '../../util/DateDiff'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCode, faCodeBranch, faCommentAlt, faStar } from '@fortawesome/free-solid-svg-icons'

const PostCard = ({ data }) => {
  let description;
  if (data.description) {
      description = data.description.length > 80 ? data.description.substring(0, 80) + "..." : data.description;
  } else {
      description = "No description is availabe for this gist!"; 
  }

  return (
    // <a target="_blank" href={data.html_url}>
    <aside class="profile-card">
      <header>

        <a target="_blank" href={data.owner.html_url} className="avatar">
          <img src={data.owner.avatar_url} class="hoverZoomLink" />
        </a>

        <h1 className="username">
          <a target="_blank" href={data.owner.html_url}>{data.owner.login}</a>
        </h1>

        <DateDiff recentDate={moment()} olderDate={moment(data.created_at)} prefexText="Created"/>
      </header>
      <div class="profile-bio">

        <p>
          {description}
        </p>

      </div>

      <ul class="profile-social-links">
        <li>
          <a target="_blank" href="https://www.facebook.com/creativedonut">
            {/* <i class="fa fa-facebook"></i> */}
            <li><a href="https://www.behance.net/daliannyvieira">
              <FontAwesomeIcon icon={faCommentAlt} />
            </a>

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
    // </a>
  );
};

export default PostCard;