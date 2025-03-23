import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useUserProfile } from "../../hooks/useUserProfile";
import ProfileView from "../../components/ProfileView";
import EditProfile from "../../components/EditProfile";
import AddDog from "../../components/AddDog";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const { user, token, logout } = useAuth();
  const navigate = useNavigate();
  const {
    user: userProfile,
    updateProfile,
    deleteProfile,
    fetchUser,
    handleAddDog,
  } = useUserProfile(user?._id || "");

  const [isEditProfileOpen, setEditProfileOpen] = useState(false);
  const [isAddDogOpen, setAddDogOpen] = useState(false);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      fetchUser();
    }
  }, [token, fetchUser, navigate]);

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  if (!userProfile) return <div>Loading...</div>;

  return (
    <>
      <ProfileView
        user={userProfile}
        onUpdateProfile={() => setEditProfileOpen(true)}
        onDeleteProfile={deleteProfile}
        onLogout={handleLogout}
        onAddDog={() => setAddDogOpen(true)}
      />

      <EditProfile
        isOpen={isEditProfileOpen}
        onClose={() => setEditProfileOpen(false)}
        onSave={(formData) => {
          updateProfile(formData);
          setEditProfileOpen(false);
        }}
        user={userProfile}
      />

      <AddDog
        isOpen={isAddDogOpen}
        onClose={() => setAddDogOpen(false)}
        onDogAdd={(dogData) => {
          handleAddDog(dogData);
          setAddDogOpen(false);
        }}
      />
    </>
  );
}
