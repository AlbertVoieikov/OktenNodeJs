const fs = require('fs/promises');
const path = require('path');

const sortFolder = async(readFolder, gender, writeFolder) =>{
    try {
        const pathFolder = path.join(__dirname, readFolder);
        const people = await fs.readdir(pathFolder);

        for (const person of people) {
            const pathToPerson = path.join(pathFolder, person);

            const data = await fs.readFile(pathToPerson);

            const user = JSON.parse(data.toString());

            if (user.gender !== gender) {
               await fs.rename(pathToPerson, path.join(__dirname, writeFolder, person));
            }
        }
    } catch (e) {
        console.error(e);
    }

}

sortFolder('boys', 'male', 'girls');
sortFolder('girls', 'female', 'boys');