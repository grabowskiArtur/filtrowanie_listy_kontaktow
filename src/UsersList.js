import React from 'react';
//3002

const UsersList = ({users, userSelected, userToDelete}) => {
	if (users.length > 0) {
		return (
			<ul>
				{users.map(user => <li
					onClick={userToDelete.bind(null, user)}
					onMouseOver={userSelected.bind(null, user)}
					key={user}>{user}</li>)}

			</ul>
		);
	} else {
		return (
			<p>No results!</p>
		);
	}
};

export default UsersList;