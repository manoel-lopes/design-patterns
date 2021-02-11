import { User } from '../User'

export class MyDatabase {
  private static users: User[] = []

  store(user: User) {
    if (!user.id) {
      user.id = MyDatabase.users.length + 1
    }

    MyDatabase.users.push(user)
  }

  delete = (index: number) => MyDatabase.users.splice(index, 1)

  index = () => console.log(MyDatabase.users)
}
