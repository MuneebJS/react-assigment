import React from 'react';
import { connect } from 'react-redux';
import { getGists, getUserGists, searchUsers, hideMessage } from '../../../actions/Gists';
import { bindActionCreators } from 'redux';
import GistsLists from '../../../components/GistsList';
import SearchBox from '../../../components/SearchBox';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import EmptyTablePlaceholder from 'components/EmptyTablePlaceholder/index';
import { ButtonGroup } from 'reactstrap';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Tooltip from '@material-ui/core/Tooltip';
import {GISTS_LIMIT_PER_PAGE} from '../../../constants/Global';

import 'react-notifications/lib/notifications.css';

// import Header from '../../../components/Header';
import CustomScrollbars from '../../../util/CustomScrollbars';

let isMessageShow = false;

class GistsPage extends React.Component {
	constructor() {
		super();
		this.state = {
			userSearchValue: '',
			isShowUsersSearchList: false,
			page: 1,
		};
	}

	async componentDidMount() {
		this.props.getGists({ page: this.state.page, per_page: GISTS_LIMIT_PER_PAGE });
	}

	componentWillReceiveProps(nextProps) {
		// Show error messages for 5 secs and then fade them awas
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

	fetchUserGists = () => {
		const { userSearchValue } = this.state;

		if (userSearchValue) {
			this.props.getUserGists(userSearchValue);
		} else {
			// When user search box is empty, fetch public gists
			this.props.getGists({ page: 1, per_page: GISTS_LIMIT_PER_PAGE });
		}
	}

	handleInputChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });

		// When user search box is empty, fetch public gists 
		if (!event.target.value) {
			this.props.getGists({ page: 1, per_page: GISTS_LIMIT_PER_PAGE });
		}
	};

	render() {
		return (
			<div className="container">
				<div className="app-wrapper">
					<div className="row search-wrapper">
						<div className="col-11">
							<SearchBox
								onChange={this.handleInputChange}
								name="userSearchValue"
								value={this.state.userSearchValue}
								onKeyDown={this.handleSearchEnter}
								placeholder="Enter username to get gists"
							/>
						</div>
						<div className="col-1 find-btn-wrapper">
							<button className="btn btn-success find-btn" onClick={this.fetchUserGists}>Find</button>
						</div>
					</div>
				
					<hr />

					<div className="row">
						<div className="col-12">
							{this.props?.gists.length ? (
								<>
									<GistsLists data={this.props.gists} loading={this.props.isGetGistsInProgress} />
									<div className="col-12 text-center">
										<ButtonGroup vertical={false}>
											<Tooltip title="Previous Page">
												<Button
													disabled={this.state.page === 1}
													onClick={() => {
														this.setState({ page: this.state.page - 1 }, () => {
															this.props.getGists({
																page: this.state.page,
																per_page: GISTS_LIMIT_PER_PAGE,
															});
														});
													}}
													className="jr-btn"
												>
													<ArrowBackIosIcon />
												</Button>
											</Tooltip>
											<Tooltip title="Next Page">
												<Button
													onClick={() => {
														this.setState({ page: this.state.page + 1 }, () => {
															this.props.getGists({
																page: this.state.page,
																per_page: GISTS_LIMIT_PER_PAGE,
															});
														});
													}}
													className="jr-btn"
												>
													<ArrowForwardIosIcon />
												</Button>
											</Tooltip>
										</ButtonGroup>
									</div>
								</>
							) : (
									<EmptyTablePlaceholder />
								)}
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
	showMessageResponse: state.gistsReducer.showMessage,
	alertMessageResponse: state.gistsReducer.alertMessage,
});

const mapDispatchToProps = (dispatch) => {
	return {
		getGists: bindActionCreators(getGists, dispatch),
		getUserGists: bindActionCreators(getUserGists, dispatch),
		searchUsers: bindActionCreators(searchUsers, dispatch),
		hideMessage: bindActionCreators(hideMessage, dispatch),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(GistsPage);
