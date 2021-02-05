import React from 'react';
import { connect } from 'react-redux';
import { getGists, getUserGists, hideMessage } from '../../../actions/Gists';
import { bindActionCreators } from 'redux';
import GistsLists from '../../../components/GistsList';
import InputField from '../../../components/InputField';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { GISTS_LIMIT_PER_PAGE } from '../../../constants/Global';

import 'react-notifications/lib/notifications.css';

// import Header from '../../../components/Header';
import CustomScrollbars from '../../../util/CustomScrollbars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

let isMessageShow = false;

class GistsPage extends React.Component {
	constructor() {
		super();
		this.state = {
			userSearchValue: '',
			isPublicGists: false,
			page: 1,
		};
	}

	componentDidMount() {
		this.fetchPublicGists();
	}

	componentWillReceiveProps(nextProps) {
		// Show error messages for 5 secs and then fade it out
		if (nextProps.alertMessageResponse !== this.props.alertMessageResponse && !isMessageShow) {
			isMessageShow = true;
			NotificationManager.error(nextProps.alertMessageResponse);
			setTimeout(() => {
				this.props.hideMessage();
				isMessageShow = false;
			}, 5000);
		}
	}

	handleSearchEnter = (event) => {
		if (event.key === 'Enter') {
			this.fetchUserGists();
		}
	};

	fetchPublicGists = () => {
		this.props.getGists({ page: this.state.page, per_page: GISTS_LIMIT_PER_PAGE });
		this.setState({ isPublicGists: true });
	}

	fetchUserGists = () => {
		const { userSearchValue } = this.state;

		if (userSearchValue) {
			this.props.getUserGists({ username: userSearchValue });
			this.setState({ isPublicGists: false });
		} else {
			// When user search box is empty, fetch public gists
			this.fetchPublicGists();
		}
	}

	handleInputChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handlePagination = (page) => {
		this.setState({ page });
		this.props.getGists({ page: page, per_page: GISTS_LIMIT_PER_PAGE });
	}

	render() {
		return (
			<div className="container">
				<div className="app-wrapper">
					<div className="row search-wrapper">
						<div className="col-11 input-wrapper">
							<InputField
								onChange={this.handleInputChange}
								name="userSearchValue"
								value={this.state.userSearchValue}
								onKeyDown={this.handleSearchEnter}
								placeholder="Enter username to get gists"
							/>
						</div>
						<div className="col-1 find-btn-wrapper">
							<button className="btn btn-primary find-btn" onClick={this.fetchUserGists}><FontAwesomeIcon icon={faSearch} /></button>
						</div>
					</div>

					<hr />

					<div className="row">
						<div className="col-12">
							<GistsLists
								data={this.props.gists}
								loading={this.props.isGetGistsInProgress}
								page={this.state.page}
								handlePagination={this.handlePagination}
							/>
						</div>
					</div>
				</div>
				<NotificationContainer />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	gists: state.gistsReducer.gists,
	isGetGistsInProgress: state.gistsReducer.isEetGistsInProgress,
	searchedUsers: state.gistsReducer.searchedUsers,
	alertMessageResponse: state.gistsReducer.alertMessage,
});

const mapDispatchToProps = (dispatch) => {
	return {
		getGists: bindActionCreators(getGists, dispatch),
		getUserGists: bindActionCreators(getUserGists, dispatch),
		hideMessage: bindActionCreators(hideMessage, dispatch),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(GistsPage);
