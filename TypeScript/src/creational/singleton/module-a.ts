import { MyDatabaseClassic } from './db/implementations/my-database-classic'
import { MyDatabaseModule } from './db/implementations/my-database-module'
import { MyDatabaseFunction } from './db/implementations/my-database-function'

// const myDatabase = MyDatabaseClassic.instance
// const myDatabase = MyDatabaseModule
const myDatabase = MyDatabaseFunction

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
