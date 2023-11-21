/* eslint-disable import/no-unresolved */
/* eslint-disable prettier/prettier */
import inquirer from "inquirer";
import { IAnswers } from "interface/answers.interface";
import { questions } from "questions";
import { GenFile } from "controller/generate.controller";

class Init {
  constructor() {
    inquirer.prompt(questions).then((onswers: IAnswers) => {
      GenFile.gen(onswers);
    });
  }
}

new Init();
