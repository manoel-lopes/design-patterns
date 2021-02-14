
class MyDatabase:

    __users = []

    def __new__(cls, *args, **kwargs):
        obj = super().__new__(cls, *args, **kwargs)
        
        i = 1
        users_dict = {}
        for user in cls.__users:
            users_dict[i] = user
            i += 1
        obj.__dict__ = users_dict
        return obj

    def store(self, user):
        user['id'] = len(self.__users) + 1
        self.__users.append(user)

    def delete(self, index):
        self.__users.remove(self.__users[index-1])

    def index(self):
        for user in self.__users:
            print(user)
