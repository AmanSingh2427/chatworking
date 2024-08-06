import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Chat from './Chat';

const Seachbar = () => {
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleSelectUser = (userId) => {
    setSelectedUserId(userId);
  };

  return (
    <div className="flex">
      <Sidebar onSelectUser={handleSelectUser} />
      {selectedUserId ? (
        <Chat selectedUserId={selectedUserId} />
      ) : (
        <div className="flex-grow flex items-center justify-center">
          <p className="text-gray-500">Select a user to start chatting</p>
        </div>
      )}
    </div>
  );
};

export default Seachbar;
