/*
 * @Todo: 请补充模块描述
 *
 * @Author: weijianghong
 * @Date: 2023-02-27 23:24:11
 *
 * Copyright © 2014-2023 Rabbitpre.com. All Rights Reserved.
 */

import React from "react";
import useSWR from "swr";
import fetcher from "./fetcher";

export default function SWR() {
  const { data } = useSWR("/mongo/get", fetcher);

  return (
    <fieldset name="child3">
      <legend>child3</legend>
      <h2>response data: {data && data[0].timestame!}</h2>
    </fieldset>
  );
}
