import { MyDatabaseClassic } from './db/implementations/my-database-classic'
import { MyDatabaseModule } from './db/implementations/my-database-module'
import { MyDatabaseFunction } from './db/implementations/my-database-function'
import { myDatabase as myDatabaseModuleA } from './module-a'

// const myDatabase = MyDatabaseClassic.instance
// const myDatabase = MyDatabaseModule
const myDatabase = MyDatabaseFunction

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
