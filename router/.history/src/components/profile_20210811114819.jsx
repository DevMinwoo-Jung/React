const Profile = (props) => {
  let history = useHistory();

  return(
    <>
      <h1>Profile</h1>
      <button type="button" onClick={() => {
              history.push("/home");
        }}>Go to Home</button>
    </>
  )
};

export default Profile;