import { MyDatabase } from './db/implementation/my-database'
import { myDatabase as myDatabaseModuleA } from './module-a'

const myDatabase = new MyDatabase()

myDatabase.store({
  name: 'Julliete',
  email: 'jull.lopes@hotmail.com'
})
myDatabase.store({
  name: 'Gilmar',
  email: 'gilgil@hotmail.com'
})
myDatabase.store({
  name: 'Bianca',
  email: 'bianquinha@hotmail.com'
})

myDatabase.index()

console.log(myDatabaseModuleA === myDatabase)
