import React from "react";
// import { Link } from 'react-router-dom'
import Navbar from "../Components/Navbar";
import SearchForm from "../Components/searchForm";
import { Outlet, useNavigation } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";

export default function HomeLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div>
      <Navbar />
      {isLoading ? (
        <div className="w-full h-lvh flex justify-center items-center">
          <TailSpin
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
}
