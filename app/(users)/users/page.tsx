"use client";
import React from "react";

function Users() {
  return (
    <div>
      <button
        onClick={() => {
          fetch("https://jsonplaceholder.typicode.com/todos/1", {
            headers: {
              Authorization: `Bearer ${document.cookie}`,
            },
          })
            .then((response) => response.json())
            .then((json) => console.log(json));
        }}
      >
        fetch
      </button>
    </div>
  );
}

export default Users;
