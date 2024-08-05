import inquirer from "inquirer";
import qr from "qr-image";
import fs from "node:fs";
import { Readable } from "node:stream";

const question = [
  {
    type: "input",
    name: "URL",
    message: "Type in your URL to generate the QR-Image : ",
    validate(value) {
      const pass = value.match(
        /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\/[^\s]*)?$/
      );

      if (!pass) {
        throw "Please enter a valid URL";
      }
      return true;
    },
  },
];

(async () => {
  try {
    const answer = await inquirer.prompt(question);

    const URL = answer.URL;

    const qr_PNG = qr.image(URL, { type: "png" });

    qr_PNG.pipe(fs.createWriteStream("qr_img.png"));

    const urlStream = new Readable();
    urlStream.push(URL);
    urlStream.push(null); // Indicates the end of the stream
    urlStream.pipe(fs.createWriteStream("URL_input.txt"));

    console.log("QR image and URL text file generated successfully!");
  } catch (error) {
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in the current environment");
    } else {
      console.log("Something else went wrong", error);
    }
  }
})();
