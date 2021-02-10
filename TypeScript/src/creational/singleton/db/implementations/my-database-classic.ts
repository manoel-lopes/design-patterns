import { User } from '../user'

export class MyDatabaseClassic {
  private static _instance: MyDatabaseClassic = null

  private users: User[] = []

  private constructor() {}

  static get instance() {
    if (!MyDatabaseClassic._instance) {
      MyDatabaseClassic._instance = new MyDatabaseClassic()
    }

    return MyDatabaseClassic._instance
  }

  store(user: User) {
    if (!user.id) {
      user.id = this.users.length + 1
    }

    this.users.push(user)
  }

  delete = (index: number) => this.users.splice(index, 1)

  index = () => console.log(this.users)
}