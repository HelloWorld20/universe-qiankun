import React from "react";
import useSWR from "swr";
import fetcher from "./fetcher";

export default function SWR() {
  const { data } = useSWR("/mongo/get", fetcher);

  return (
    <fieldset name="child2">
      <legend>child2</legend>
      <h2>response data: {data && data[0].timestame!}</h2>
    </fieldset>
  );
}
