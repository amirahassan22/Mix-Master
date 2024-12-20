import React from "react";
import { useRouteError } from "react-router-dom";

export default function LocalError() {
  const error = useRouteError();
  console.log(error);
  return <h4 className="pt-10 text-2xl font-medium">{error.message}</h4>;
}
