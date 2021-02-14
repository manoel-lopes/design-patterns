# from db.my_database import MyDatabase
from db.my_database_decorator import MyDatabaseDecorator as MyDatabase
# from db.my_database_metaclass import MyDatabaseMetaclass as MyDatabase

myDatabase = MyDatabase()

myDatabase.store({
    'name': 'Manoel',
    'email': 'manoafonso.lopes@hotmail.com'
})

myDatabase.store({
    'name': 'Athur Oliveira',
    'email': 'aoliveira@hotmail.com'
})

myDatabase.store({
    'name': 'Maju Coutinho',
    'email': 'mjcoutinho@hotmail.com'
})