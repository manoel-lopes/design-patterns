import { User } from '../User'

class MyDatabaseClass {
  private static _instance: MyDatabaseClass = null

  private users: User[] = []

  private constructor() {}

  static get instance() {
    if (!MyDatabaseClass._instance) {
      MyDatabaseClass._instance = new MyDatabaseClass()
    }

    return MyDatabaseClass._instance
  }

  store(user: User) {
    if (!user.id) {
      user.id = this.users.length + 1
    }

    this.users.push(user)
  }

  delete = (index: number) => this.users.splice(index - 1, 1)

  index = () => console.log(this.users)
}

export default MyDatabaseClass