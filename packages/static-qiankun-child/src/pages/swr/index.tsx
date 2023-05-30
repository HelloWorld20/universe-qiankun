import React from "react";
import useSWR from "swr";
import fetcher from "./fetcher";


export default function SWR() {
  const { data } = useSWR("/mongo/get", fetcher);

  return (
    <div>
      <h1>useSWR demo</h1>
      <h2>response data: {data && data[0].timestame!}</h2>
    </div>
  );
}
