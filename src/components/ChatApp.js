import React from 'react'

const Wrapper = 'div'
const ChatWindow = 'div'
const Entry = 'div'
const Avatar = 'div'
const Lines = 'div'
const InputArea = 'div'
const InputField = 'div'
const SubmitButton = 'div'

const ChatApp = () => (
  <Wrapper>
    <ChatWindow>
      <Entry>
        <Avatar/>
        <Lines>
          <div>Line one</div>
          <div>Line two</div>
          <div>Line three</div>
        </Lines>
      </Entry>
    </ChatWindow>
    <InputArea>
      <InputField/>
      <SubmitButton/>
    </InputArea>
  </Wrapper>
)

export default ChatApp
