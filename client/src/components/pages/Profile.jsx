import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../../utils/queries';
import Auth from '../../utils/auth';
import Watchlist from '../../components/Watchlist'; // Import the Watchlist component

const Profile = () => {
  const { username: userParam } = useParams();

  // Fetch user data (either specific user or the logged-in user)
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  // Get user data from the query response
  const user = data?.me || data?.user || {};

  // Redirect to personal profile page if user is viewing their own profile
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />;
  }

  // Show loading message while data is being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  // If no user is found, display a message
  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to sign up or log in!
      </h4>
    );
  }

  // Render the watchlist component (if the user has a watchlist)
  return (
    <div className="flex-row justify-center mb-3">
      <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
        Viewing {userParam ? `${user.username}'s` : 'your'} profile.
      </h2>

      {/* Display Watchlist */}
      <div className="col-12 col-md-10 mb-5">
        {user.watchedList && user.watchedList.length > 0 ? (
          <Watchlist watchedList={user.watchedList} />
        ) : (
          <p>No movies in your Watched List yet.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
