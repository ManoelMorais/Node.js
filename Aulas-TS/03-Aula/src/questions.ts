/* eslint-disable prettier/prettier */

import path from "path";
import fs from "node:fs";
import { EchoicesBoilerPlate } from "./enum/choices-boilerplate.enum";
import { EErros } from "./enum/errors.enum";
import { EGitName } from "./enum/git-name.enum";

export const questions = [
  {
    type: "list",
    name: "tech",
    message: "Qual Boilerplate devo criar?",
    choices: [
      EchoicesBoilerPlate.NODEJS_TS,
      EchoicesBoilerPlate.SCSS,
    ],
  },
  {
    type: "input",
    name: "folderName",
    message: "Qual o nome do projeto?",
    validate(folderName: string) {
      console.log(folderName);
      // folderName não pode ser null [ possuir um nome]
      if (!folderName) return EErros.ERROR_NULL;
      // não pode ter caracteres especiais, exeto - '' _
      if (/[^\w\s-]/.test(folderName)) return EErros.ERROR_CARACTERES;
      //não pode repetir o mesmo nome [ caso já exista o nome não pode repetilo ]
      try {
        const dir = path.resolve(folderName);
        fs.accessSync(dir, fs.constants.R_OK);
        console.log(dir);
        return EErros.ERROR_NAME;
      } catch (error) {
        /* empty */
      }

      // não pode deixar com o mesmo nome da repositorio do github
      if (
        folderName === EGitName.NODEJS_TS ||
        folderName === EGitName.SCSS
      )
        return EErros.ERROR_PASTA;
      // - não é possivel criar a pasta com este nome!
      // - httpp://github.com/estudos/aulas/Aula-JS-udemy
      // - httpp://github.com/estudos/aulas/Aula-TS-udemy
      return true;
    },
  },
];
