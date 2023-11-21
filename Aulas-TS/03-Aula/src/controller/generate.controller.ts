/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
/* eslint-disable prettier/prettier */
import { IAnswers } from "interface/answers.interface";
import { EchoicesBoilerPlate } from "enum/choices-boilerplate.enum";
import { EGitName } from "enum/git-name.enum";
import shelljs from "shelljs";
import path from "node:path";
import fs from "node:fs";

class GenerateController {
  public gen(answers: IAnswers) {
    try {
      switch (answers.tech) {
        case EchoicesBoilerPlate.NODEJS_TS:
          this._execPath(EGitName.NODEJS_TS, answers.folderName);
          break;

        case EchoicesBoilerPlate.SCSS:
          this._execPath(EGitName.SCSS, answers.folderName);
          break;
      }
    } catch (e) {
      console.log(e);
    }
  }
  private _execPath(gitName: string, folderName: string) {
    try {
      shelljs.cd(path.resolve());
      shelljs.exec(`git clone git@github.com:troquatte/${gitName}.git`);

      fs.renameSync(
        `${path.join(path.resolve(), gitName)}`,
        `${path.join(path.resolve(), folderName)}`
      );

      console.log("Arquivo criado com sucesso!");
      return shelljs.exit();
    } catch (e) {
      console.log(e);
    }
  }
}

export const GenFile = new GenerateController();
