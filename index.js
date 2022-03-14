const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
	res.send(`
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Express Js</title>

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 16px;
        }

        .container {
            width: 50%;
            margin: 2rem auto;
            padding: 2rem;
            background: #dddeee;
        }
    </style>

</head>
<body>
    <div class="container">
        <h1>Hello Express</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, accusamus similique. Ut fugit veniam fuga neque! Facilis quae amet dolor quo voluptate non corrupti assumenda, alias sequi repellat quod quas!</p>
    </div>
</body>
</html>
    `);
});

app.listen(port, () => {
	console.log(`Server is listening on PORT ${port}`);
});
