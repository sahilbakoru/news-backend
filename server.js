const express = require("express");
var request = require("request");
const fetch = require("node-fetch")
const path = require("path");
const app = express();
var cors = require('cors')
app.use(cors())

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;


// Top Art
app.get("/getTopArticles", async(req, res) => {
  try {
        const response = await fetch("https://feeds.nbcnews.com/nbcnews/public/news")
        res.json(await response.text())
} catch (error) {
	console.log(error)
}
});

// Tech Crunch Art
app.get("/getTechCrunch", (req, res) => {
    request(
        "https://newsapi.org/v2/top-headlines?sources=techcrunch&pageSize=25&apiKey=91dafe5fb4024272b417e0315d0a998c",
        function (error, response, body) {
            if (!error && response.statusCode === 200) {
                res.send(body);
            }
        }
    );
});

//Tech Art
app.get("/getTechArts", async(req, res) => {
    try {
        const response = await fetch("http://feeds.newscientist.com/tech")
        res.json(await response.text())
} catch (error) {
	console.log(error)
}
});

// Sport Art

app.get("/getSportArts", async(req, res) => {
    try {
        const response = await fetch("https://www.espn.com/espn/rss/news")
        res.json(await response.text())
} catch (error) {
	console.log(error)
}
});
app.get("/", async(req, res) => {
    try {
        res.send("hello there")
       console.log("service is running")
} catch (error) {
	console.log(error)
}
});

// Science

app.get("/getScienceArts", async(req, res) => {
    try {
        const response = await fetch(" http://feeds.nbcnews.com/feeds/science")
        res.json(await response.text())
} catch (error) {
	console.log(error)
}
});

// Health

app.get("/getHealthArts", async(req, res) => {
    try {
        const response = await fetch("https://feeds.nbcnews.com/nbcnews/public/health")
        res.json(await response.text())
} catch (error) {
	console.log(error)
}
});

// Entertainment

app.get("/getEntertainmentArts", async (req, res) => {
    try {
        const response = await fetch("https://feeds.nbcnews.com/today/public/popculture")
        res.json(await response.text())
} catch (error) {
	console.log(error)
}
});

// Business

app.get("/getBusinessArts", async (req, res) => {
    try {
        const response = await fetch("http://rss.cnn.com/rss/edition_business.rss")
        res.json(await response.text())
} catch (error) {
	console.log(error)
}
});

// Bleacher Reports
app.get("/getBRReport", (req, res) => {
    request(
        "https://newsapi.org/v2/top-headlines?sources=bleacher-report&pageSize=25&apiKey=91dafe5fb4024272b417e0315d0a998c",
        function (error, response, body) {
            if (!error && response.statusCode === 200) {
                res.send(body);
            }
        }
    );
});

//BBC
app.get("/getBBCArts", (req, res) => {
    request(
        "https://newsapi.org/v2/top-headlines?sources=bbc-news&pageSize=25&apiKey=91dafe5fb4024272b417e0315d0a998c",
        function (error, response, body) {
            if (!error && response.statusCode === 200) {
                res.send(body);
            }
        }
    );
});

// Canada Arts

app.get("/getCanadaArts", (req, res) => {
    request(
        "https://newsapi.org/v2/top-headlines?country=ca&pageSize=25&apiKey=91dafe5fb4024272b417e0315d0a998c",
        function (error, response, body) {
            if (!error && response.statusCode === 200) {
                res.send(body);
            }
        }
    );
});

// Australia Arts

app.get("/getAustraliaArts", (req, res) => {
    request(
        "https://newsapi.org/v2/top-headlines?country=au&pageSize=25&apiKey=91dafe5fb4024272b417e0315d0a998c",
        function (error, response, body) {
            if (!error && response.statusCode === 200) {
                res.send(body);
            }
        }
    );
});

// UK Arts

app.get("/getUKArts", (req, res) => {
    request(
        "https://newsapi.org/v2/top-headlines?country=gb&pageSize=25&apiKey=91dafe5fb4024272b417e0315d0a998c",
        function (error, response, body) {
            if (!error && response.statusCode === 200) {
                res.send(body);
            }
        }
    );
});

// WSJ

app.get("/getWSJArts", (req, res) => {
    request(
        "https://newsapi.org/v2/top-headlines?sources=the-wall-street-journal&pageSize=25&apiKey=91dafe5fb4024272b417e0315d0a998c",
        function (error, response, body) {
            if (!error && response.statusCode === 200) {
                res.send(body);
            }
        }
    );
});

//https://newsapi.org/v2/top-headlines?sources=${source}&pageSize=${pageSize}&apiKey=${process.env.REACT_APP_API_KEY}
//91dafe5fb4024272b417e0315d0a998c

app.listen(port, () => console.log(`Appnews app listening on port ${port}!`));
