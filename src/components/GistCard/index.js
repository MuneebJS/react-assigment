import React from 'react';
import moment from 'moment';
import DateDiff from '../../util/DateDiff'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCode, faCodeBranch, faCommentAlt, faStar } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

function getFile(files) {
  // return new Promise((resolve, reject) => {
    let url = "";
    console.log("files ======- ", files);
    Object.keys(files).map(fileKey => {
      console.log("item from files map ========= ", files[fileKey]);
      url = files[fileKey].raw_url;
    });
  
  
    axios(`${url}`, {
      method: 'GET',
      // responseType: 'blob' //Force to receive data in a Blob Format
  })
  .then(response => {
    console.log("respose ======= ", response);
    return response.data;
    // resolve(response.data);
  });
  // });
}

class GistCard extends React.Component {
  constructor() {
    super();
    this.state = {
      fileData: ""
    }
  }

  componentDidMount() {
    this.getFile();
  }

  getFile = async () => {
    let url = "";
    // console.log("files ======- ", files);
    Object.keys(this.props.data.files).map(fileKey => {
      console.log("item from files map ========= ", this.props.data.files[fileKey]);
      url = this.props.data.files[fileKey].raw_url;
    });


const response = await    axios(`${url}`, {method: 'GET'})
this.setState({fileData: response.data});
// .then(response => {
        console.log("respose ======= ", response);
        // return response.data;
        // resolve(response.data);
      // });
  }

  render() {
    return (
          // <a target="_blank" href={this.props.data.html_url}>
          <div class="profile-card">
            <header>
      
              <a target="_blank" href={this.props.data.owner.html_url} className="avatar">
                <img src={this.props.data.owner.avatar_url} class="hoverZoomLink" />
              </a>
      
              <h1 className="username">
                <a target="_blank" href={this.props.data.owner.html_url}>{this.props.data.owner.login}</a>
              </h1>
      
              <DateDiff recentDate={moment()} olderDate={moment(this.props.data.created_at)} prefexText="Created"/>
            </header>
            <div class="profile-bio">
      
              <p>
                {/* {this.state.fileData} */}
                <div dangerouslySetInnerHTML={{__html: this.state.fileData}} />
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
          </div>
          // </a>
        );
  }
}



// const GistCard = ({ data }) => {
//   let description;
//   if (data.description) {
//       description = data.description.length > 80 ? data.description.substring(0, 80) + "..." : data.description;
//   } else {
//       description = "No description is availabe for this gist!"; 
//   }

//   return (
//     // <a target="_blank" href={data.html_url}>
//     <aside class="profile-card">
//       <header>

//         <a target="_blank" href={data.owner.html_url} className="avatar">
//           <img src={data.owner.avatar_url} class="hoverZoomLink" />
//         </a>

//         <h1 className="username">
//           <a target="_blank" href={data.owner.html_url}>{data.owner.login}</a>
//         </h1>

//         <DateDiff recentDate={moment()} olderDate={moment(data.created_at)} prefexText="Created"/>
//       </header>
//       <div class="profile-bio">

//         <p>
//           {getFile(data.files)}
//         </p>

//       </div>

//       <ul class="profile-social-links">
//         <li>
//           <a target="_blank" href="https://www.facebook.com/creativedonut">
//             {/* <i class="fa fa-facebook"></i> */}
//             <li><a href="https://www.behance.net/daliannyvieira">
//               <FontAwesomeIcon icon={faCommentAlt} />
//             </a>

//             </li>
//           </a>
//         </li>
//         <li>
//           <a target="_blank" href="https://twitter.com/dropyourbass">
//             <FontAwesomeIcon icon={faFileCode} />
//           </a>
//         </li>
//         <li>
//           <a target="_blank" href="https://github.com/vipulsaxena">
//             <FontAwesomeIcon icon={faCodeBranch} />
//           </a>
//         </li>
//         <li>
//           <a target="_blank" href="https://www.behance.net/vipulsaxena">

//             <FontAwesomeIcon icon={faStar} />
//           </a>
//         </li>
//       </ul>
//     </aside>
//     // </a>
//   );
// };

export default GistCard;