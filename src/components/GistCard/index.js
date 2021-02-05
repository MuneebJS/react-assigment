import React from 'react';
import moment from 'moment';
import DateDiff from '../../util/DateDiff'
import axios from 'axios';

class GistCard extends React.Component {
  constructor() {
    super();
    this.state = {
      fileData: "",
      fileName: "",
      fileRawURL: "",
      filesCount: 0
    }
  }

  componentDidMount() {
    this.getFile();
  }

  /**
   * Get the details of the most recent file
   */
  getFile = async () => {
    const fileKeysArr = Object.keys(this.props.data.files);

    if (fileKeysArr && fileKeysArr.length > 0) {
      const fileObj   = this.props.data.files[fileKeysArr[0]];

      try {
      const response  = await axios(`${fileObj.raw_url}`, { method: 'GET' });
      this.setState({ fileData: response.data, fileName: fileObj.filename, fileRawURL: fileObj.raw_url, filesCount: fileKeysArr.length});
      } catch (error) {
        console.log("File fetch error: ", error)
      }
    }
  }

  render() {
    return (
      <div className="card_wrapper">
        <div className="card_meta_wrapper">
          <div className="card_meta_left_wrapper">
            <div>
              <a target="_blank" href={this.props.data.owner.html_url}>
                <img className="user_img" src={this.props.data.owner.avatar_url}
                  width="30" height="30" />
              </a>
            </div>
            <div>
              <span>
                <a target="_blank" href={this.props.data.owner.html_url} className="f6 undr_link">{this.props.data.owner.login}</a>
                      / <a target="_blank" href={this.state.fileRawURL} className="f6 undr_link"><strong>{this.state.fileName}</strong></a>
              </span>
              <div className="txt-gray f6">
                <DateDiff recentDate={moment()} olderDate={moment(this.props.data.created_at)} prefexText="Created" />
              </div>
              <span className="f6 txt-gray">
                {this.props.data.description}
              </span>
            </div>
          </div>
          <div className="card_meta_right_wrapper">
            <ul>
              <li>
                <a className="muted-link f6 txt-gray" href="#">
                  <svg viewBox="0 0 16 16" version="1.1" width="16"
                    height="16" aria-hidden="true">
                    <path fillRule="evenodd"
                      d="M1.75 1.5a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25H1.75zM0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0114.25 16H1.75A1.75 1.75 0 010 14.25V1.75zm9.22 3.72a.75.75 0 000 1.06L10.69 8 9.22 9.47a.75.75 0 101.06 1.06l2-2a.75.75 0 000-1.06l-2-2a.75.75 0 00-1.06 0zM6.78 6.53a.75.75 0 00-1.06-1.06l-2 2a.75.75 0 000 1.06l2 2a.75.75 0 101.06-1.06L5.31 8l1.47-1.47z">
                    </path>
                  </svg>
                          {this.state.filesCount} file
                      </a>
              </li>
              <li>
                <a className="muted-link f6 txt-gray" href="#">
                  <svg viewBox="0 0 16 16" version="1.1" width="16"
                    height="16" aria-hidden="true">
                    <path fillRule="evenodd"
                      d="M2.75 2.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h4.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25H2.75zM1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0113.25 12H9.06l-2.573 2.573A1.457 1.457 0 014 13.543V12H2.75A1.75 1.75 0 011 10.25v-7.5z">
                    </path>
                  </svg>
                  {this.props.data.comments} comments
                      </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="card-file-wrapper">
          <a target="_blank" href={this.state.fileRawURL}>
            <span className="file-link">View <strong>{this.state.fileName}</strong></span>
            <div className="file-wrapper">
              <div className="file-table-wrapper">

                {typeof this.state.fileData === "string"
                 ? <pre><code><div className="code_con" dangerouslySetInnerHTML={{ __html: this.state.fileData }} /></code></pre> 
                 : <div className="no-data-found">The file has no content :(</div>
                 }
              </div>

            </div>
          </a>

        </div>
      </div>
    );
  }
}


export default GistCard;