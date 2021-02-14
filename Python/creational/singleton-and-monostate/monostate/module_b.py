from db.my_database import MyDatabase
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

    # myDatabase.delete(1)
    myDatabaseModuleA.index()
    print()
    myDatabase.index()
    
    print(myDatabaseModuleA == myDatabase)
