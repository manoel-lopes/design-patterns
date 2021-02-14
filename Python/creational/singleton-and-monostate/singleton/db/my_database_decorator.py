from typing import Dict


def singleton(the_class):
    instances: Dict = {}


    def get_class(*args, **kwargs):
        if the_class not in instances:
            instances[the_class] = the_class(*args, **kwargs)
        return instances[the_class]
    return get_class

@singleton
class MyDatabaseDecorator:
    __users = []

    def store(self, user):
        user['id'] = len(self.__users) + 1
        self.__users.append(user)

    def delete(self, index):
        self.__users.remove(self.__users[index-1])

    def index(self):
        for user in self.__users:
            print(user)