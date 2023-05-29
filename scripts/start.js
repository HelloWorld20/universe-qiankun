const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const shelljs = require("shelljs");
const chalk = require("chalk");
const scripts = require("./scripts");

async function getScript() {
  const keys = Object.keys(scripts)
  const choices = keys.map((key, i) => {
    const value = scripts[key];
    return {
      name: `${value.name}: ${value.desc}`,
      value: value,
      checked: i === 0
    }
  })
  return inquirer.prompt([
    {
      name: "project",
      message: "您要运行哪个项目",
      type: "list",
      choices,
    },
  ])
}

async function getShellstr() {
  const script = await getScript();
  // 接入concurrent之前，只读第一条命令
  const command = script.project.component

  const answer = await command.getAnswer();

  return command.getShellStr(answer);
}

async function init() {
  const isLatest = process.argv[2] === 'latest';

  const cachePath = path.resolve(__dirname, './latest_shell.sh');

  let shellStr = '';

  if (isLatest) {
    try {
      fs.accessSync(cachePath, fs.constants.F_OK);

      shellStr = fs.readFileSync(cachePath, 'utf-8');
    } catch {
      console.log(chalk.redBright("没有找到本地缓存，重新选择项目"));
      shellStr = await getShellstr();
      console.log('shellStr', shellStr);
      fs.writeFileSync(cachePath, shellStr);
    }

  } else {
    shellStr = await getShellstr();
    fs.writeFileSync(cachePath, shellStr);
  }


  console.log(chalk.redBright("最终运行脚本："));
  console.log(chalk.greenBright(shellStr));

  shelljs.exec(shellStr);
}

init();
