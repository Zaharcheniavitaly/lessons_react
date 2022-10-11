
const initialState = {
chats: [
	{
		id: 1,
		name: 'Андрей'
	},
	{
		id: 2,
		name: 'Виктория'
	}
]
}

export const chatsReducer = (state = initialState, action) => {

	switch (action.type) {


		default:
			return state
	}

}