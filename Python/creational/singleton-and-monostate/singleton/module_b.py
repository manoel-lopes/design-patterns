# from db.my_database import MyDatabase
from db.my_database_decorator import MyDatabaseDecorator as MyDatabase
# from db.my_database_metaclass import MyDatabaseMetaclass as MyDatabase
from module_a import myDatabase as myDatabaseModuleA

if __name__ == '__main__':
    myDatabase = MyDatabase()

    myDatabase.store({
        'name': 'Julliete',
        'email': 'jull.lopes@hotmail.com'
    })
    myDatabase.store({
        'name': 'Gilmar',
        'email': 'gilgil@hotmail.com'
    })
    myDatabase.store({
        'name': 'Bianca',
        'email': 'bianquinha@hotmail.com'
    })

    myDatabase.index()
    
    print(myDatabaseModuleA == myDatabase)
