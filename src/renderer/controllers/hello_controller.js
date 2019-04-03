import { Controller } from "stimulus";

const fs = require('fs');

export default class extends Controller {
    static get targets() {
        return ["path", "output"];
    }

    makelist() {
        const dir = this.pathTarget.value;
        const ul = this.outputTarget;
        ul.innerHTML = '';
        console.log(`listing ${dir}`);
        const files = fs.readdir(dir, (err, files) => {
            files.forEach((file, index) => {
                let li = document.createElement('li');
                li.textContent = file;
                ul.appendChild(li);
            });
        });
    }
}