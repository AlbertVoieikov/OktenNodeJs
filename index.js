const fs = require('fs/promises');
const path = require('path');

const reader = async (folderPath) => {
    const files = await fs.readdir(folderPath);

    for (const file of files) {
        const filePath = path.join(folderPath, file);
        const stat = await fs.stat(filePath);
        if (stat.isFile()) {
            await fs.rename(filePath, path.join(__dirname, 'f1', file));
        }
        if (stat.isDirectory()) {
            await reader(filePath);
        }
    }
}

reader(path.join(__dirname, 'f1'));
