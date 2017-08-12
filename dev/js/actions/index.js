//action creater

export const selectUser = (user) => {
	// return action
	return {
		type: 'USER_NAME_CLICKED',
		payload: user
	}
};