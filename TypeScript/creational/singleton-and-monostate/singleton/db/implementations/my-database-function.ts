import { User } from '../User'

const MyDatabaseFunction = (() => {
  const users: User[] = []

  return {
    store(user: User) {
      if (!user.id) {
        user.id = users.length + 1
      }

      users.push(user)
    },

    delete: (index: number) => users.splice(index - 1, 1),

    index: () => console.log(users)
  }
})()

export default MyDatabaseFunction