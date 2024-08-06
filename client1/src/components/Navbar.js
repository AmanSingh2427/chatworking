import React from 'react';
import { FaBell, FaSignOutAlt, FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ user }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove token from local storage
    localStorage.removeItem('token');

    // Redirect to the login page
    navigate('/login');
  };

  const navigateToCreateGroup = () => {
    navigate('/create-group');
  };

  return (
    <nav className="bg-gray-800 p-4 flex items-center justify-between">
      <div className="text-white text-xl">MyChatApp</div>
      <div className="flex items-center space-x-4">
        {user && (
          <div className="flex items-center space-x-4">
            {user.image ? (
              <img src={`http://localhost:5000/uploads/${user.image}`} alt="Profile" className="w-10 h-10 object-cover rounded-full" />
            ) : (
              <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center text-white">U</div>
            )}
            <span className="text-white">{user.username}</span>
          </div>
        )}
        <button 
          onClick={navigateToCreateGroup} 
          className="ml-4 text-white flex items-center space-x-2 hover:text-gray-400">
          <FaPlus />
          <span>Create Group</span>
        </button>
        <div className="ml-4">
          {/* <FaBell className="text-white text-2xl" /> */}
        </div>
        <button 
          onClick={handleLogout} 
          className="ml-4 text-white flex items-center space-x-2 hover:text-gray-400">
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
