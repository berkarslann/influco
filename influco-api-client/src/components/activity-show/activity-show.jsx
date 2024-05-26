import { ActivityCard, MainContainer } from "./styles";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";



const ActivityShow = () => {
  const auth = useSelector((state) => state.auth);

  return (
    <MainContainer>
    
      {auth.currentUser.subactivities.map((activity, index) => (
        <ActivityCard key={index}>
          <Link
            to={`/serie/${activity._id}`}
            style={{ textDecorationLine: "none", color: "#c4beb4" }}
          >
            <img
              src={`http://localhost:3000/${activity.imageUrl}`}
              alt="Logo"
              style={{
                width: "30vw",
                height: "20vh",
              }}
            />
            <h4 style={{ textAlign: "left" }}>{activity.name}</h4>
          </Link>
        </ActivityCard>
      ))}
    </MainContainer>
  );
};

export default ActivityShow;
