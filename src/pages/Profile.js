import React, { useEffect } from "react";

const Profile = () => {
  useEffect(() => {
    console.log("Profile component mounted");
    return () => {
      console.log("profile component unmounted");
    };
  }, []);
  return <div>Profile</div>;
};

export default Profile;
