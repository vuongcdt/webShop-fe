import React, { useEffect, useRef } from 'react';

export default function ChatSupportItem({ data, meConverstation }) {
    const { user_name, user_avatar, user_id, user_email } = data;

    return (
        <div
            className="chat-item btn-go-chat"
            onClick={() => {
                $('#pills-chat-tab').tab('show');
                let other = new Talk.User({
                    id: user_id,
                    name: user_name,
                    email: user_email,
                    photoUrl: user_avatar,
                    welcomeMessage: 'Hey, how can I help?',
                    role: 'sale',
                });

                let conversation = window.talkSession.getOrCreateConversation(
                    Talk.oneOnOneId(meConverstation, other)
                );

                window.chatbox = window.talkSession.createChatbox();

                conversation.setParticipant(meConverstation);
                conversation.setParticipant(other);

                window.chatbox.select(conversation);
                window.chatbox.mount($('.current-converstation'));
            }}
        >
            <div className="chat-ava">
                <img src={user_avatar} alt={user_name} />
            </div>
            <div className="chat-meta">
                <div className="chat-item-name">{user_name}</div>
                <div className="chat-meta-desc">
                    <div className="status-icon bg-success me-2"></div> Active
                </div>
            </div>
        </div>
    );
}
