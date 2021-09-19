
from flask import Flask, jsonify, request
import json
import pandas
import numpy
import snscrape.modules.twitter as twitter_scraper # using the dev version since the official does not support python 3.9 yet
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
analyzer = SentimentIntensityAnalyzer()

maxTweets = 10

app = Flask(__name__) 

@app.route("/getOpinion")
def getOpinion():
    topic = request.args.get('topic') # topic = request.form.get("topic")
    start_date = request.args.get("start_date")
    end_date = request.args.get("end_date")

    sentimentScores = []
    tweets = []

    for i,tweet in enumerate(twitter_scraper.TwitterSearchScraper(topic + ' lang:en since:2020-01-01 until:2020-10-30 -filter:links -filter:replies').get_items()):
        if i == maxTweets :
            break
        score = analyzer.polarity_scores(tweet.content)
        sentimentScores.append(score['compound'])
        tweets.append(tweet.content)
        # print(i)
        # print(score['compound'])
    
    avg_sentiment = numpy.mean(sentimentScores)
    print(avg_sentiment)

    avg_sentiment_words = "no related tweets found"

    if (avg_sentiment > 0.75):
        avg_sentiment_words = "absolutely loved"
    elif (avg_sentiment > 0.5):
        avg_sentiment_words = "loved"
    elif (avg_sentiment > 0.25):
        avg_sentiment_words = "liked"
    elif (avg_sentiment > -0.25):
        avg_sentiment_words = "neutral"
    elif (avg_sentiment > -0.5):
        avg_sentiment_words = "disliked"
    elif (avg_sentiment > -0.75):
        avg_sentiment_words = "very disliked"
    else:
        avg_sentiment_words = "despicable"



    return jsonify(opinion=avg_sentiment_words,examples=tweets[0:3])

@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', '*')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization,Accept,Access-Control-Allow-Origin')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  return response
