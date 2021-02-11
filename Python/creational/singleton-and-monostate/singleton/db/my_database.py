class MyDatabase:

    __instance = None
    __users = []

    def __new__(cls, *args, **kwargs):
        if cls.__instance is None:
            cls.__instance = super().__new__(cls, *args, **kwargs)
        return cls.__instance

    def store(self, user):
        user['id'] = len(self.__users) + 1
        self.__users.append(user)

    def delete(self, index):
        self.__users.remove(self.__users[index-1])

    def index(self):
        for user in self.__users:
            print(user)
