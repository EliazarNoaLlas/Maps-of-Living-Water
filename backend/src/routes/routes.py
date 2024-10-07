# File: routes.py
# Author: victo
# Copyright: 2024, Smart Cities Peru.
# License: MIT
#
# Purpose:
# Este archivo se encarga de inicializar la aplicación Flask, configurarla
# para usar una base de datos y migraciones, y registrar los blueprints que
# contienen las rutas (endpoints) de la aplicación.
#
# Last Modified: 2024-09-17

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from ..controllers.controller import controller_bp  # Importa el blueprint de las rutas

# Inicializa la base de datos y las migraciones
db = SQLAlchemy()
migrate = Migrate()


def create_app():
    app = Flask(__name__)

    # Carga la configuración de la base de datos desde config.py
    app.config.from_pyfile('../config.py')

    # Inicializa las extensiones de la base de datos y migraciones
    db.init_app(app)
    migrate.init_app(app, db)

    # Registra el blueprint para las rutas del controlador
    app.register_blueprint(controller_bp)

    return app
