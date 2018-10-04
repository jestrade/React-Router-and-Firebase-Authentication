import React, { Component } from 'react';
import MessagesForm from './MessagesForm'
import MessagesList from './MessagesList'

class Messages extends Component {

  render() {
    return (

			<div className="container">
			  <div className="row">
			    <div className="col-sm">
						<MessagesForm />
					</div>
					<div className="col-sm">
						<MessagesList />
					</div>
			</div>
		</div>

    );
  }
}

export default Messages;
