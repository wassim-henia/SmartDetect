import numpy as np
from flask import Flask, request, jsonify, render_template
import pickle
import os
from sklearn.feature_extraction.text import TfidfVectorizer


app = Flask(__name__)
model = pickle.load(open('model.pkl', 'rb'))
tfidf_vectorizer = pickle.load(open('tfidf.pkl', 'rb'))

@app.route('/')
def home():
    return("hello world")
    # return render_template('index.html')

@app.route('/predict',methods=['POST'])
def predict():
    data = request.get_json(force=True)
    print([data["text"]])
    tfidf_train = tfidf_vectorizer.transform([data["text"]])
    prediction = model.predict(tfidf_train) 
    if(prediction[0]==0):
        pred="Fake"
    else:
        pred="Real"
    return jsonify(pred)

if __name__ == "__main__":
    port = int(os.environ.get('PORT', 8000))
    app.run(host='0.0.0.0', port=port, debug=True)