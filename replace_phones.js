const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else {
      if (dirPath.endsWith('.ts') || dirPath.endsWith('.tsx')) {
        callback(dirPath);
      }
    }
  });
}

walkDir('./src', (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Replace plain text number
  content = content.replace(/\+7 \(960\) 955-21-00/g, '+7 (909) 097-52-09');
  content = content.replace(/8 \(960\) 955-21-00/g, '+7 (909) 097-52-09');
  
  // Replace links
  content = content.replace(/tel:\+79609552100/g, 'tel:+79090975209');
  content = content.replace(/t\.me\/\+79609552100/g, 't.me/+79090975209');

  // Fix duplicates in arrays like ["+7 (909) 097-52-09", "+7 (909) 097-52-09"]
  content = content.replace(/\[\s*['"]\+7 \(909\) 097-52-09['"]\s*,\s*['"]\+7 \(909\) 097-52-09['"]\s*\]/g, "['+7 (909) 097-52-09']");

  // Fix "через мессенджер MAX (+7 909 097-52-09) " if the first was replaced and duplicated
  content = content.replace(/\+7 \(909\) 097-52-09, через мессенджер MAX \(\+7 909 097-52-09\)/g, '+7 (909) 097-52-09');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated', filePath);
  }
});
