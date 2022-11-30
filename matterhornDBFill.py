#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
Created on Mon Mai 23 14:11:03 2016

@author: T. Wissenklaus (Francisco Lucas da Silva)

"""

import hashlib
import requests
from flask import Flask,request
from flask_cors import CORS, cross_origin
from pymongo import MongoClient
from datetime import date

#===============================================================

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

#===============================================================

mongo = MongoClient("mongodb://127.0.0.1:27017")
banco = mongo["matterhorn"]

#===============================================================

@app.route("/mhc", methods=["POST"])
@cross_origin()
def mhc():
    data_atual = str(date.today())
    data_atual = data_atual.replace("-", "")
    c_date = banco[data_atual]

    evento = request.get_json()
    userIP = request.headers.get('X-Forwarded-For', request.remote_addr)
    local = requests.get("http://ip-api.com/json/" + userIP, timeout=5).json()
    
    objEvent = {}

    objEvent["timestamp"] = evento["ts"]
    objEvent["tab_id"] =  evento["tab"]
    objEvent["matterhorn_id"] =  hashlib.sha256(evento["mid"].encode()).hexdigest()
    objEvent["visitor_id"] = evento["vid"]
    objEvent["user_id"] = evento["uid"]
    objEvent["first_visit"] = evento["fv"]
    
    objEvent["url"] = evento["url"]
    objEvent["hostname"] = evento["hn"]
    objEvent["title"] = evento["t"]
    objEvent["pagename"] = evento["pn"]

    if evento["sr"]:
        objEvent["source"] = evento["sr"]
    elif len(evento["o"]) > 2:
        objEvent["source"] = evento["o"]
    else:
        objEvent["source"] = None
    
    objEvent["medium"] = evento["md"]
    objEvent["campaign"] = evento["ca"]

    objEvent["device"] = evento["dv"]
    objEvent["os"] = evento["os"]
    objEvent["browser"] = evento["br"]
    objEvent["language"] = evento["l"]
    objEvent["platform"] = evento["pla"]
    objEvent["application_type"] = evento["at"]
    objEvent["userAgent"] = evento["ua"]

    objEvent["country"] = local["country"]
    objEvent["region"] = local['regionName']
    objEvent["city"] = local['city']
    #objEvent["continent"] = ???

    objEvent["event_name"] = evento["e"]
    objEvent["event_extra"] = evento["ee"]

    objEvent["year"] = evento["y"]
    objEvent["month"] = evento["m"]
    objEvent["day"] = evento["d"]
    objEvent["hour"] = evento["h"]
    objEvent["minute"] = evento["mi"]
    objEvent["date"] = evento["dt"]
    objEvent["tag_id"] = evento["ti"]

    objEvent_ID = c_date.insert_one(objEvent).inserted_id
    print(objEvent_ID)

    return "ok"

#===============================================================

app.run(host="0.0.0.0", debug=True)
