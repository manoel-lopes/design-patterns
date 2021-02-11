import { MyDatabaseClass } from './db/implementations/my-database-class'
import { MyDatabaseObject } from './db/implementations/my-database-object'
import { MyDatabaseFunction } from './db/implementations/my-database-function'
import { myDatabase as myDatabaseModuleA } from './module-a'

const myDatabase = MyDatabaseClass.instance
// const myDatabase = MyDatabaseObject
// const myDatabase = MyDatabaseFunction

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

myDatabase.delete(1)

myDatabase.index()

console.log(myDatabaseModuleA === myDatabase)
