import { User } from '../user'

const users: User[] = []

export const MyDatabaseModule = {
  store(user: User) {
    if (!user.id) {
      user.id = users.length + 1
    }

    users.push(user)
  },

  delete: (index: number) => users.splice(index, 1),

  index: () => console.log(users)
}
