import React from "react";

const MakeAdminRow = (props) => {
  const { email } = props.user;
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`);
  };
  return (
    <tr>
      <th>{props.index + 1}</th>
      <td>{email}</td>
      <td>
        <button onClick={makeAdmin} class="btn btn-sm">
          Make Admin
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default MakeAdminRow;
