import {mkdir, copyFile} from 'node:fs/promises'
import {fileURLToPath} from 'node:url'
import path from 'node:path'

const root = path.dirname(fileURLToPath(import.meta.url))
const out = path.join(root, 'dist')
await mkdir(path.join(out, 'assets'), {recursive:true})
for (const file of ['index.html','style.css','site.js']) {
  await copyFile(path.join(root,file),path.join(out,file))
}
for (const name of ['empty-1440.png','conversation-1440.png','dashboard-1440.png']) {
  await copyFile(path.join(root,'assets',name),path.join(out,'assets',name))
}
for (const name of ['mark.svg','wordmark.svg']) {
  await copyFile(path.join(root,'assets',name),path.join(out,'assets',name))
}
