/*
 * @Todo: 请补充模块描述
 * 
 * @Author: weijianghong
 * @Date: 2023-05-24 15:50:01
 * 
 * Copyright © 2014-2023 Rabbitpre.com. All Rights Reserved.
 */

const inquirer = require("inquirer");

async function getAnswer() {
  let res;
  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "node_env",
      message: "运行环境（process.env.NODE_ENV）",
      choices: [
        {
          name: "development",
          value: "development",
        },
        {
          name: "production",
          value: "production",
        },
      ],
    },
  ]);
  res = { ...answer };
  if (answer.node_env === "production") {
    const answer = await inquirer.prompt([
      {
        type: "confirm",
        name: "analasy",
        message: "是否用boundleAnalasyPlugin分析代码",
        default: false,
      },
      {
        type: "confirm",
        name: "upload",
        message: "是否上传到cdn",
        default: false,
      },
    ]);
    res = { ...res, ...answer };
  }

  return res;
}

function getShellStr(conf) {
  let res = `cd packages/static-qiankun-child2 && cross-env NODE_ENV=${conf.node_env}`;

  if (conf.analasy) {
    res += ` ANALASY=1 `;
  }

  if (conf.node_env === "development") {
    res += ` pnpm dev`;
  } else if (conf.node_env === "production") {
    res += ` pnpm build`;
  }

  if (conf.upload) {
    res += " && node ./upload.js";
  }

  return res;
}

module.exports = {
  getAnswer,
  getShellStr,
};
