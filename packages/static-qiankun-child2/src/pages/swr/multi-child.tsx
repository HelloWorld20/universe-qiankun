import React from "react";
import useSWR from "swr";
import fetcher from "./fetcher";
import Child1 from './child1'
import Child2 from './child2'
import Child3 from './child3'

export default function SWR() {
  const { data } = useSWR("/mongo/get", fetcher);

  return (
    <div>
      <h1>useSWR demo</h1>
      <h2>response data: {data && data[0].timestame!}</h2>
      <Child1 />
      <Child2 />
      <Child3 />
    </div>
  );
}
