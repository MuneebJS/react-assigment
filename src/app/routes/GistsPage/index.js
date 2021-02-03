import React from 'react';
import { connect } from 'react-redux';
import { getGists, getUserGists, searchUsers } from '../../../actions/Gists';
import { bindActionCreators } from 'redux'
import GistsLists from '../../../components/GistsList';
import SearchBox from '../../../components/SearchBox';
import SearchList from '../../../components/SearchList';
// import Header from '../../../components/Header';
import CustomScrollbars from '../../../util/CustomScrollbars';
const { createTokenAuth } = require("@octokit/auth-token");
const token = "7bf4d49f403d52dcb5bffbd3d50cab83efc91ae5";

class GistsPage extends React.Component {
	constructor() {
		super();
		this.state = {
			userSearchValue: "",
			usernameGist: "",
			isShowUsersSearchList: false
		}
	}

	async componentDidMount() {
		this.props.getGists();
		const tokenOath = await new createTokenAuth(token);
		console.log("tokenOath ======== ", tokenOath);
	}

	handleSearchEnter = (event) => {
		if (event.key === 'Enter') {
			this.props.getUserGists(event.target.value);
			// this.setState({ isShowUsersSearchList: false });
		}
	}

	// searchUsers = (event) => {
	// 	const { value } = event.target;
	// 	this.setState({ userSearchValue: value, isShowUsersSearchList: true });

	// 	if (value.length > 2) {
	// 		this.props.searchUsers(value);
	// 	}
	// }

	// handleSelectUser = (item) => {
	// 	this.props.getUserGists(item.login);
	// 	this.setState({ isShowUsersSearchList: false });
	// }

	handleInputChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	}

	userSearchOnFocus = () => {
		this.setState({isShowUsersSearchList: true});
	}

	render() {
		const { isShowUsersSearchList } = this.state;
		return (
			// <Container>
			<div className="container">
			<div className="app-wrapper">
				{/* <CustomScrollbars> */}
					<div className="row">
						<div className="col-md-6">
							<SearchBox onChange={this.handleInputChange} name="usernameGist" value={this.state.usernameGist} onKeyDown={this.handleSearchEnter} placeholder="Enter username to get gists" />
						</div>
						<div className="col-md-6">
							{/* <SearchBox onChange={this.searchUsers} name="userSearchValue" value={this.state.userSearchValue} onKeyDown={this.handleSearchEnter} placeholder="Search For a User" onFocus={this.userSearchOnFocus} /> */}
							{/* {isShowUsersSearchList && <SearchList data={this.props.searchedUsers} onClick={this.handleSelectUser} />} */}
						</div>
						<div className="col-md-12">
							<GistsLists data={this.props.gists} loading={this.props.isGetGistsInProgress}/>
						</div>
					</div>
				{/* </CustomScrollbars> */}
			</div>
			</div>
			// </Container>
		);
	}
}


const mapStateToProps = (state) => ({
	gists: state.gistsReducer.gists,
	isGetGistsInProgress: state.gistsReducer.isEetGistsInProgress,
	searchedUsers: state.gistsReducer.searchedUsers
});

const mapDispatchToProps = (dispatch) => {
	return {
		getGists: bindActionCreators(getGists, dispatch),
		getUserGists: bindActionCreators(getUserGists, dispatch),
		searchUsers: bindActionCreators(searchUsers, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(GistsPage);