from flask import Flask

def create_app():
    app = Flask(__name__, instance_relative_config=True)
    
    # Chargement de la config
    app.config.from_object('config')
    app.config.from_pyfile('config.py', silent=True)

    # Importation des routes
    from . import routes
    app.register_blueprint(routes.bp)

    return app
