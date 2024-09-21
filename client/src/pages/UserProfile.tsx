import { useUpdateUser } from "@/api/UserApi";
import UserProfileForm from "@/forms/user-profile/UserProfileForm";

const UserProfile = () => {
  const { updateUser, isLoading: isLoading } = useUpdateUser();

  return <UserProfileForm onSave={updateUser} isLoading={isLoading} />;
};

export default UserProfile;
