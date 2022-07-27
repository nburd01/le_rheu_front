import React from "react";
import { Admin, Resource, ListGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";


const Dashboard = () => (
  <Admin
    dataProvider={jsonServerProvider("http://localhost:3000")}
  >
    <Resource name="posts" list={ListGuesser} />
  </Admin>
);



export default Dashboard;