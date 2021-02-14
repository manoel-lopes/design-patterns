from typing import Dict


class Singleton(type):
    __instances: Dict = {}

    def __call__(cls, *args, **kwargs):
        if cls not in cls.__instances:
            cls.__instances[cls] = super().__call__(*args, **kwargs)
        return cls.__instances[cls]


class MyDatabaseMetaclass(metaclass=Singleton):
    __users = []

    def store(self, user):
        user['id'] = len(self.__users) + 1
        self.__users.append(user)

    def delete(self, index):
        self.__users.remove(self.__users[index-1])

    def index(self):
        for user in self.__users:
            print(user)
