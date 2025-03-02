import fs from 'fs';
fs.writeFile('homework.txt', 'Homework 02 in Basic Node\n', (err) => {
  if (err) {
    console.log('Error writing file:', err);
    return;
  }
  console.log('File created and text written.');
  fs.appendFile('homework.txt', 'FINISHED!\n', (err) => {
    if (err) {
      console.log('Error appending file:', err);
      return;
    }
    console.log('Text appended.');
    fs.readFile('homework.txt', 'utf8', (err, data) => {
      if (err) {
        console.log('Error reading file:', err);
        return;
      }
      console.log('File contents:');
      console.log(data);
    });
  });
});