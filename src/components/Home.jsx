import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://jsonplaceholder.typicode.com/users",
    })
      .then(function (response) {
        const userData = response.data;
        setUsers(userData);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="container p-5">
        <div className="row">
          {users.map((user, index) => (
            <div className="col-md-12" key={index}>
              <div className="card1">
                <div className="row">
                  <div className="col-lg-6">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td>ID:</td>
                          <td>{user.id}</td>
                        </tr>
                        <tr>
                          <td>Name:</td>
                          <td>{user.name}</td>
                        </tr>
                        <tr>
                          <td>Username:</td>
                          <td>{user.username}</td>
                        </tr>
                        <tr>
                          <td>Email:</td>
                          <td>{user.email}</td>
                        </tr>
                        <tr>
                          <td>Address:</td>
                          <td>{user.address.street}</td>
                        </tr>
                        <tr>
                          <td>suite:</td>
                          <td>{user.address.suite}</td>
                        </tr>

                        <tr>
                          <td>city:</td>
                          <td>{user.address.city}</td>
                        </tr>
                        <tr>
                          <td>BS:</td>
                          <td>{user.company.bs}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-lg-6">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td>zipcode:</td>
                          <td>{user.address.zipcode}</td>
                        </tr>

                        <tr>
                          <td>Geo:lat</td>
                          <td>{user.address.geo.lat}</td>
                        </tr>
                        <tr>
                          <td>Geo:lng</td>
                          <td>{user.address.geo.lng}</td>
                        </tr>
                        <tr>
                          <td>Phone:</td>
                          <td>{user.phone}</td>
                        </tr>
                        <tr>
                          <td>Website:</td>
                          <td>{user.website}</td>
                        </tr>
                        <tr>
                          <td>Company:</td>
                          <td>{user.company.name}</td>
                        </tr>
                        <tr>
                          <td>Catchphrase:</td>
                          <td>{user.company.catchPhrase}</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="update-card ">
                      
                        <button className="btn btn-primary btn-md"> Edit</button>
                        <button className="btn btn-secondary btn-md">Delete</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
