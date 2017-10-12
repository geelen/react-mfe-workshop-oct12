// new_state = fn(old_state, action)

export const addMessageReducer = (old_state, action) => {

  if (action.type === "ADD_MESSAGE") {
    let old_messages = old_state.messages
    const last_message = old_messages[old_messages.length - 1]

    if (last_message && last_message.username === 'Me') {

      return {
        ...old_state,
        messages: [
          ...old_messages.slice(old_messages.length - 1),
          {
            ...last_message,
            lines: [
              ...last_message.lines,
              action.message
            ]
          }
        ]
      }

    } else {

      return {
        ...old_state,
        messages: [
          ...old_messages,
          {
            avatar: 'http://fillmurray.com/88/88',
            username: 'Me',
            lines: [
              action.message
            ],
          }
        ]
      }
    }
  }

  return old_state
}
