import React, {Component} from 'react';


import UsersList from './UsersList';

const allUsers = ['Michal', 'Kasia', 'Jacek', 'Marta', 'Tomek', 'Ania'];

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			filteredUsers: allUsers,
			selectedUser: "ŻODYN",
			userToDelete: null
		};
	}

	filterUsers(e) {
		const text = e.currentTarget.value;
		const filteredUsers = this.getFilteredUsersForText(text)
		this.setState({
			filteredUsers,
			//selectedUser: null
		});
	}


	getFilteredUsersForText(text) {
		return allUsers.filter(user => user.toLowerCase().includes(text.toLowerCase()))
	}

	onUserSelected = (selectedUser) => {

		if (allUsers.length == 0) {
			selectedUser = "ŻODYN"
		}
			this.setState({
				selectedUser
			});
	};
	deleteUser = (userToDelete) => {
		// const index = ;
		allUsers.splice(allUsers.indexOf(userToDelete), 1);
		console.log(allUsers);

	};

	/*getFilteredUsersForText(text) {
		return new Promise(resolve => {
			const time = (Math.random() + 1) * 250;
			setTimeout(() => {
				const filteredUsers = allUsers.filter(user => user.toLowerCase().includes(text.toLowerCase()));
				resolve(filteredUsers);
			}, time) ;
		});
	}*/

	render() {
		return (
			<div>
				{/*<input onInput={this.filterUsers.bind(this)} />*/}
				Wybrales : {this.state.selectedUser}
				<hr/>
				<input onInput={(e) => this.filterUsers(e)}/>
				<UsersList userToDelete={this.deleteUser} userSelected={this.onUserSelected} users={this.state.filteredUsers}/>
				<br/>
			</div>
		);
	}
};

export default App;