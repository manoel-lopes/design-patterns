import { MyDatabaseClass } from './db/implementations/my-database-class'
import { MyDatabaseObject } from './db/implementations/my-database-object'
import { MyDatabaseFunction } from './db/implementations/my-database-function'

const myDatabase = MyDatabaseClass.instance
// const myDatabase = MyDatabaseObject
// const myDatabase = MyDatabaseFunction

myDatabase.store({
  name: 'Manoel',
  email: 'manoafonso.lopes@hotmail.com'
})
myDatabase.store({
  name: 'Athur Oliveira',
  email: 'aoliveira@hotmail.com'
})
myDatabase.store({
  name: 'Maju Coutinho',
  email: 'mjcoutinho@hotmail.com'
})

export { myDatabase }
