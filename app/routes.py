from flask import Blueprint, render_template

bp = Blueprint('main', __name__)

@bp.route('/')
def index():
    return render_template('index.html', active_page="index")

@bp.route('/value-chain')
def value_chain():
    return render_template('value_chain.html', active_page="value_chain")

@bp.route('/technologies')
def technologies():
    return render_template('technologies.html', active_page="technologies")

@bp.route('/use-cases')
def use_cases():
    return render_template('use_cases.html', active_page="use_cases")

@bp.route('/chatbot')
def chatbot():
    return render_template('chatbot.html', active_page="chatbot")

@bp.route('/contact')
def contact():
    return render_template('contact.html', active_page="contact")

