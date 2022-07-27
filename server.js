require("dotenv").config()
const multer = require("multer")
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const File = require("./models/File")
const exphbs = require('express-handlebars');
const fs = require('fs');
const path = require('path');


const express = require("express")
const { title } = require("process")
const app = express()
app.use(express.urlencoded({ extended: true }))

const upload = multer({ dest: "uploads" })


// let storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads')
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.originalname + '-' + Date.now())
//     }
// });

// let upload = multer({ storage: storage });


const PORT = process.env.PORT || 3010;

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/eyeSpyDB";
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true

});

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// app.use(require('./controllers'));

// app.get("/", (req, res) => {
//     res.render("index")
// })

app.get('/', (req, res) => {
    File.find({}, (err, items) => {
        if (err) {
            console.log(err);
            res.status(500).send('An error occurred', err);
        }
        else {
            res.render('index', { items: items });
        }
    });
});


app.get('/images', (req, res) => {
    File.find({}, (err, items) => {
        let images = '';
        if (err) {
            console.log(err);
            res.status(500).send('An error occurred', err);
        }
        else {
            // res.render('homepage', { items: items });
            items.forEach(item => {
                let encodedBuffer = item.img.data.toString('base64');
                // console.log('item: ', item.title)
                images+= `
                <h1>${item.title}</h1><br>
                <h3>${item.description}</h3><br>
                <img src="data:'image/png';base64,${encodedBuffer}" style="width:200px;height:auto;" />
                `;
            });
        }
        // console.log('images:', images)
        res.send(images)
    });

});

app.get('/:id', ({ params }, res) => {
    File.findOne({ _id: params.id })
        .select('-__v')
        .then(dbImage => {
            if (!dbImage) {
                res.status(404).json({ message: 'No image found with this id!' });
                return;
            }
            var encodedBuffer = dbImage.img.data.toString('base64');
            // console.log(dbImage)
            const mimeType = 'image/png'; // e.g., image/png

            res.send(`
                <h1>${dbImage.title}</h1><br>
                <h3>${dbImage.description}</h3><br>
                <img src="data:${mimeType};base64,${encodedBuffer}" style="width:400px;height:auto;" />
                `)



        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
})


// app.get('/:id', ({ params }, res) => {
//     console.log(params);

//     File.findById({ _id: params.id }, (err, items) => {
//         if (err) {
//             console.log(err);
//             res.status(500).send('An error occurred', err);
//         }
//         else {
//             res.render('index', { items: items });
//         }
//     });
// });



app.post("/upload", upload.single("file"), async (req, res, next) => {
    const fileData = {
        title: req.body.title,
        description: req.body.description,
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

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});

