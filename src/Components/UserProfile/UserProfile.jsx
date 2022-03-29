// Import Dependencies
import React, { useState, useEffect } from "react";

// Import Styles
import "./UserProfile.scss";

// Import React Icons
import { AiOutlineCloseCircle } from "react-icons/ai";
import { UiContext } from "../Ui/UiContext";
import { useContext } from "react";
import axios from "axios";

function UserProfile({ setOpenModal }) {
  const [userdata, setuserdata] = useState();
  const { user_id } = useContext(UiContext);

  const token = localStorage.getItem("token");

  const userurl =
    `http://intervc-api.shivila.tech/api/v1/users/` + user_id + "/";

  useEffect(() => {
    axios
      .get(userurl, {
        headers: {
          Authorization: "token " + token,
        },
      })
      .then((res) => setuserdata(res.data))
      .catch((err) => {
        console.log(err.response);
      });
  }, [userurl, token]);

  return (
    <>
      {userdata && (
        <div className="wrapper">
          <div className="left">
            <img
              src="https://www.kindpng.com/picc/m/24-248729_stockvader-predicted-adig-user-profile-image-png-transparent.png"
              alt="user"
              width="100"
            />
            <h2>{userdata.full_name}</h2>

            {/* <button className="btn">Edit</button> */}
          </div>
          <div className="right">
            <div className="info">
              <div>
                <div className="btn-close">
                  <AiOutlineCloseCircle
                    style={{ fontSize: "1rem" }}
                    onClick={() => {
                      setOpenModal(false);
                    }}
                  />
                </div>

                <h3>Profile</h3>
              </div>
              <div className="info_data">
                <div className="data">
                  <h4>Name</h4>
                  <p>{userdata.full_name}</p>
                </div>
              </div>
            </div>

            {userdata.email ? (
              <div className="projects">
                <div className="projects_data">
                  <div className="data">
                    <h4>Email</h4>
                    <p>{userdata.email}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="projects">
                <div className="projects_data">
                  <div className="data">
                    <h4>Email</h4>
                    <p>Email not linked</p>
                  </div>
                </div>
              </div>
            )}
            {userdata.phone_number ? (
              <div className="projects">
                <div className="projects_data">
                  <div className="data">
                    <h4>Phone number</h4>
                    <p>{userdata.phone_number}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="projects">
                <div className="projects_data">
                  <div className="data">
                    <h4>Phone number</h4>
                    <p>Phone Number Not Linked!</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default UserProfile;
