/*
 * @Todo: 请补充模块描述
 *
 * @Author: weijianghong
 * @Date: 2023-05-23 18:45:20
 *
 * Copyright © 2014-2023 Rabbitpre.com. All Rights Reserved.
 */

// 在此引入所有的询问试配置

const SQC = require("../packages/static-qiankun-child/scripts/start");
const SQC2 = require("../packages/static-qiankun-child2/scripts/start");
const SQM = require("../packages/static-qiankun-main/scripts/start");

module.exports = {
  "static-qiankun-main": {
    desc: "qiankun主应用",
    name: "static-qiankun-main",
    component: SQM,
  },
  "static-qiankun-child": {
    desc: "qiankun子应用",
    name: "static-qiankun-child",
    component: SQC,
  },
  "static-qiankun-child2": {
    desc: "另一个qiankun子应用",
    name: "static-qiankun-child2",
    component: SQC2,
  },
};
