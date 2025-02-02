const Profile = ({ email, onLogout }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg w-80">
      <p className="text-lg text-black border-gray-500">Email: {email}</p>
      <button 
        className="mt-4 px-4 py-2 bg-cyan-400 text-black rounded-lg hover:bg-gray-600"
        onClick={onLogout}
      >
        Cerrar sesión
      </button>
    </div>
  );
};

export default Profile;