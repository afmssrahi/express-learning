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

        ul {
            list-style: none;
        }

        a {
            text-decoration: none;
        }

        .container {
            width: 50%;
            margin: 0 auto;
            padding: 2rem;
            background: #dddeee;
        }

        header {
            width: 100%;
            background: #a1b1bd;
            text-align: center;
        }

        nav ul {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 19px 0;
        }

        nav ul li a {
            padding: 20px 25px;
        }

        nav ul li a:hover {
            background: #ddd;
        }
    </style>

</head>
<body>
<header>
        <nav>
            <ul>
                <li><a href="http://localhost:5000/">Home</a></li>
                <li><a href="http://localhost:5000/about">About</a></li>
                <li><a href="http://localhost:5000/products">Products</a></li>
            </ul>
        </nav>
    </header>
    <div class="container">
    
        <h1>Hello Express</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, accusamus similique. Ut fugit veniam fuga neque! Facilis quae amet dolor quo voluptate non corrupti assumenda, alias sequi repellat quod quas!</p>
    </div>
</body>
</html>
    `);
});

app.get('/about', (req, res) => {
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

        ul {
            list-style: none;
        }

        a {
            text-decoration: none;
        }

        .container {
            width: 50%;
            margin: 0 auto;
            padding: 2rem;
            background: #dddeee;
        }

        header {
            width: 100%;
            background: #a1b1bd;
            text-align: center;
        }

        nav ul {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 19px 0;
        }

        nav ul li a {
            padding: 20px 25px;
        }

        nav ul li a:hover {
            background: #ddd;
        }
    </style>

</head>
<body>
<header>
        <nav>
            <ul>
                <li><a href="http://localhost:5000/">Home</a></li>
                <li><a href="http://localhost:5000/about">About</a></li>
                <li><a href="http://localhost:5000/products">Products</a></li>
            </ul>
        </nav>
    </header>
    <div class="container">
        <h1>This About Page</h1>

        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, accusamus similique.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, accusamus similique. Ut fugit veniam fuga neque! Facilis quae amet dolor quo voluptate non corrupti assumenda, alias sequi repellat quod quas!
        </p>
    </div>
</body>
</html>
    `);
});

app.get('/products', (req, res) => {
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

        ul {
            list-style: none;
        }

        a {
            text-decoration: none;
        }

        .container {
            width: 50%;
            margin: 0 auto;
            padding: 2rem;
            background: #dddeee;
        }

        header {
            width: 100%;
            background: #a1b1bd;
            text-align: center;
        }

        nav ul {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 19px 0;
        }

        nav ul li a {
            padding: 20px 25px;
        }

        nav ul li a:hover {
            background: #ddd;
        }
    </style>

</head>
<body>
<header>
        <nav>
            <ul>
                <li><a href="http://localhost:5000/">Home</a></li>
                <li><a href="http://localhost:5000/about">About</a></li>
                <li><a href="http://localhost:5000/products">Products</a></li>
            </ul>
        </nav>
    </header>
    <div class="container">
        <h1>This is Product Page</h1>

        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, accusamus similique.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, accusamus similique.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, accusamus similique.
        </p>
    </div>
</body>
</html>
    `);
});

app.listen(port, () => {
	console.log(`Server is listening on PORT ${port}`);
});
