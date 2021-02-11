import { MyDatabase } from './db/implementation/my-database'

const myDatabase = new MyDatabase()

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
