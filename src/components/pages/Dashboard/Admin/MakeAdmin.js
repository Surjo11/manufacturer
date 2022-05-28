import React from "react";
import { useQuery } from "react-query";
import Loading from "../../../shared/Loading";
import MakeAdminRow from "./MakeAdminRow";

const MakeAdmin = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://guarded-bastion-46799.herokuapp.com/users").then(
      (response) => response.json()
    )
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table table-normal w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Admin</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <MakeAdminRow
                key={user._id}
                user={user}
                index={index}
                refetch={refetch}
              ></MakeAdminRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;
