var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Hello world, I am a chat bot');
});

app.get('/webhook/', function (req, res) {
    if (req.query['hub.verify_token'] === 'my_voice_is_my_password_verify_me') {
        res.send(req.query['hub.challenge']);
    }
    res.send('Error, wrong token');
});

app.listen(app.get('port'), function () {
    console.log('running on port', app.get('port'));
});

app.post('/webhook/', function (req, res) {
    var messaging_events = req.body.entry[0].messaging;
    for (i = 0; i < messaging_events.length; i++) {
        var event = req.body.entry[0].messaging[i];
        var sender = event.sender.id;
        if (event.message && event.message.text) {
            var text = event.message.text;
            if (/TRA SACH/.test(text.toUpperCase())) {
                console.log('tra sach la ', text);
                var msgMSV = "Xin mời bạn nhập mã sinh viên để tra cứu";
                sendTextMessage(sender, msgMSV);
            }
            else if (/[0-9]/.test(text.toUpperCase())) {
                console.log('ma sinh vien la ', text);
                var waiting = "Bạn chờ mình chút nhé =)";
                sendTextMessage(sender, waiting);
            }
            else {
                console.log('chao mung');
                var welcome = "Xin chào bạn đến với CLB Thư viện HSV-UET";
                sendTextMessage(sender, welcome);
            }

        }

    }
    res.sendStatus(200);
});

var token = "EAAD9KkhySm4BAOptQ79YfyJgZBjfgQH5ZCXG" +
    "3X8IdVJkbuUrZBhnBiV15QtQBGHIEQ618TD8hFUwS1K0Lk63" +
    "rkADHgRQ8hDp828b7GYCnKbmcZAJ2AvB5awbJJaPkFZAnzh0E" +
    "rxKZASAh8CJEUXYbTOjlxZCsS5zz3EtMFWISh1Y2QfWDmieN7x";

function sendTextMessage(sender, text) {
    request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: {access_token: token},
        method: 'POST',
        json: {
            recipient: {id: sender},
            message: {
                attachment: {
                    type: "template",
                    payload: {
                        template_type: "generic",
                        elements: [
                            {
                                title: text,
                                subtitle: "Welcome"
                            },
                            {
                                type: "postback",
                                title: "Call Postback",
                                payload: "Payload for second bubble"
                            }
                        ]
                    }

                }
            }
        }
    }, function (error, response, body) {
        if (error) {
            console.log('Error sending messages: ', error)
        } else if (response.body.error) {
            console.log('Error: ', response.body.error)
        }
    });
}

function receivedPostback(event) {
    var senderID = event.sender.id;
    var recipientID = event.recipient.id;
    var timeOfPostback = event.timestamp;

    // The 'payload' param is a developer-defined field which is set in a postback
    // button for Structured Messages.
    var payload = event.postback.payload;

    console.log("Received postback for user %d and page %d with payload '%s' " +
        "at %d", senderID, recipientID, payload, timeOfPostback);

    // When a postback is called, we'll send a message back to the sender to
    // let them know it was successful
    sendTextMessage(senderID, "Postback called");
}
