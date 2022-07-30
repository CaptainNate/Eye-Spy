const express = require('express');
// import ApolloServer
const { ApolloServer } = require('apollo-server-express');
const { authMiddleware } = require('./utils/auth');
const path = require('path');
const fs = require('fs');
const multer = require("multer")
const File = require("./models/File")


// import our typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
// create a new Apollo server and pass in our schema data
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware

});

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  // integrate our Apollo server with the Express application as middleware
  server.applyMiddleware({ app });

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      // log where we can go to test our GQL API
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
};


const upload = multer({ dest: "uploads" })

app.post("/", upload.single("file"), async (req, res, next) => {
  console.log("CHUPA MUNDO: ", req.body)
  const fileData = {
    post_title: req.body.post_title,
    post_text: req.body.post_text,
    img: {
      data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
      contentType: 'image/png'
    }
    // path: req.file.path,
    // originalName: req.file.originalname,
  }

  File.create(fileData, (err, item) => {
    if (err) {
      console.log(err);
    }
    else {
      // item.save();
      res.redirect('/');
    }
    // const file = await File.create(fileData)

    // res.render("index")
  });
});

app.get('/image/:id', ({ params }, res) => {
  console.log(res.params)
  File.findOne({ _id: params.id })
    .select('-__v')
    .then(dbImage => {
      console.log(dbImage)
      if (!dbImage) {
        res.status(404).json({ message: 'No image found with this id!' });
        return;
      }
      var encodedBuffer = dbImage.img.data.toString('base64');
      // console.log(dbImage)
      const mimeType = 'image/png'; // e.g., image/png
      res.send(`
                <div class="container">
                    <h1>${dbImage.title}</h1><br>
                    <h3>${dbImage.description}</h3><br>
                    <img src="data:${mimeType};base64,${encodedBuffer}" style="width:400px;height:auto;" />
                </div>
                `)

    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
})

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);