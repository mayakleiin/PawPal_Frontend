import { User } from "../types/User";

interface ProfileViewProps {
  user: User;
  onUpdateProfile: () => void;
  onDeleteProfile: () => void;
  onLogout: () => void;
  onAddDog: () => void;
}

export default function ProfileView({
  user,
  onUpdateProfile,
  onDeleteProfile,
  onLogout,
  onAddDog,
}: ProfileViewProps) {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <div className="mb-4">
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>City:</strong> {user.city}
        </p>
        <p>
          <strong>Gender:</strong> {user.gender}
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-semibold">Dogs</h3>
        {user.dogs.map((dog) => (
          <div key={dog._id} className="border p-2 mb-2 rounded">
            <p>
              <strong>Name:</strong> {dog.name}
            </p>
            <p>
              <strong>Breed:</strong> {dog.breed}
            </p>
            <p>
              <strong>Age:</strong> {dog.age}
            </p>
          </div>
        ))}
      </div>

      <div className="space-x-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={onUpdateProfile}
        >
          Edit Profile
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={onAddDog}
        >
          Add Dog
        </button>
        <button
          className="bg-red-600 text-white px-4 py-2 rounded"
          onClick={onDeleteProfile}
        >
          Delete Profile
        </button>
      </div>

      <button
        className="bg-gray-500 text-white px-4 py-2 rounded mt-4"
        onClick={onLogout}
      >
        Logout
      </button>
    </div>
  );
}
