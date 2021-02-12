import MyDatabase from './db/implementations/my-database-class'
// import MyDatabase from './db/implementations/my-database-object'
// import MyDatabase from './db/implementations/my-database-function'

const myDatabase = MyDatabase.instance
// const myDatabase = MyDatabase

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

export default myDatabase
