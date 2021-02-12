import MyDatabase from './db/implementations/my-database-class'
// import MyDatabase from './db/implementations/my-database-object'
// import MyDatabase from './db/implementations/my-database-function'
import myDatabaseModuleA from './module-a'

const myDatabase = MyDatabase.instance
// const myDatabase = MyDatabase

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
