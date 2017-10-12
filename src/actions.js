export const addNewMessage = message => async dispatch => {
  dispatch({ type: 'SERVER_SYNCING', })

  await fetch('/api/add_message?message=' + message)

  dispatch({ type: 'ADD_NEW_MESSAGE', message })
  dispatch({ type: 'SERVER_SYNCED' })
}
