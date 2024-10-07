# File: controller.py
# Author: eliazar
# Copyright: 2024, Hackathon Peru.
# License: MIT
#
# Purpose:
# Este archivo define los endpoints para realizar operaciones CRUD de los incendios y
# la obtención de datos sobre incendios forestales. En este caso, se centra en la
# recuperación de datos de incendios para Bolivia y Perú.
#
# Last Modified: 2024-09-17

import requests
from flask import Blueprint, jsonify
from ..config import API_BASE_URL

controller_bp = Blueprint('controller', __name__)


# FIRE DATA FUNCTIONS
def fetch_fire_data(bounds, days):
    url = f"{API_BASE_URL}/{bounds}/{days}"
    response = requests.get(url)
    if response.status_code == 200:
        return response.text
    else:
        response.raise_for_status()


@controller_bp.route('/fires/bolivia', methods=['GET'])
def get_fires_bolivia():
    bounds = "-70.0,-15.0,-60.0,-10.0"
    days = 1
    try:
        data = fetch_fire_data(bounds, days)
        return jsonify({"data": data})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@controller_bp.route('/fires/peru', methods=['GET'])
def get_fires_peru():
    bounds = "-80.0,-15.0,-70.0,-5.0"
    days = 1
    try:
        data = fetch_fire_data(bounds, days)
        return jsonify({"data": data})
    except Exception as e:
        return jsonify({"error": str(e)}), 500
