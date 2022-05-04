import thenFs from 'then-fs'

async function getFile(){
  const r1= await thenFs.readFile('./files/1.txt')
  console.log(r1);
}

getFile()