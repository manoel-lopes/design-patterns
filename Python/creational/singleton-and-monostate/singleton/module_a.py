from db.my_database import MyDatabase
from db.my_database_decorator import MyDatabaseDecorator
from db.my_database_metaclass import MyDatabaseMetaclass

# myDatabase = MyDatabase()
# myDatabase = MyDatabaseMetaclass()
myDatabase = MyDatabaseDecorator()

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