const http = require('http');
const port = 3021;
const server = http.createServer((req,res) => {
    if (req.url == '/'){
        res.statusCode = 200;
        res.setHeader('content-Type','plain/text')
        res.end("We:come to Men & Women Dummy Data")
    } else if(req.url == 'men') {
        res.statusCode = 200;
        res.setHeader('content-Type','application/json')
        res.end(JSON.stringify(
            [{
                "id": 1,
                "name": "Men's T-shirt",
                "color": "blue",
                "price": 2993
            },
            {
                "id": 2,
                "name": "Men's T-shirt",
                "color": "green",
                "price": 2993
            },
            {
                "id": 3,
                "name": "Men's T-shirt",
                "color": "yellow",
                "price": 2993
            },
            {
                "id": 4,
                "name": "Men's T-shirt",
                "color": "red",
                "price": 2993
            },
            {
                "id": 5,
                "name": "Men's T-shirt",
                "color": "orange",
                "price": 2993
            },
            {
                "id": 6,
                "name": "Men's T-shirt",
                "color": "white",
                "price": 2993
            },
            {
                "id": 7,
                "name": "Men's Shirt",
                "color": "maroon",
                "price": 2993
            },
            {
                "id": 8,
                "name": "Men's Shirt",
                "color": "sky",
                "price": 2993
            },
            {
                "id": 9,
                "name": "Men's Shirt",
                "color": "white",
                "price": 2993
            },
            {
                "id": 10,
                "name": "Men's Shirt",
                "color": "pink",
                "price": 2993
            }
        ]
        ))
    }else if(req.url == '/women'){
        res.statusCode = 200;
        res.setHeader('content-Type','application/json')
        res.end(JSON.stringify([
            {
                "id": 1,
                "name": "Women's T-shirt",
                "color": "blue",
                "price": 2993
            },
            {
                "id": 2,
                "name": "Women's T-shirt",
                "color": "green",
                "price": 2993
            },
            {
                "id": 3,
                "name": "Women's T-shirt",
                "color": "yellow",
                "price": 2993
            },
            {
                "id": 4,
                "name": "Women's T-shirt",
                "color": "red",
                "price": 2993
            },
            {
                "id": 5,
                "name": "Women's T-shirt",
                "color": "orange",
                "price": 2993
            },
            {
                "id": 6,
                "name": "Women's T-shirt",
                "color": "white",
                "price": 2993
            },
            {
                "id": 7,
                "name": "Women's Shirt",
                "color": "maroon",
                "price": 2993
            },
            {
                "id": 8,
                "name": "Women's Shirt",
                "color": "sky",
                "price": 2993
            },
            {
                "id": 9,
                "name": "Women's Shirt",
                "color": "white",
                "price": 2993
            },
            {
                "id": 10,
                "name": "Women's Shirt",
                "color": "pink",
                "price": 2993
            }])
        )
    }else if(req.url=='/other'){
        res.statusCode = 400;
        res.setHeader('content-Type','plain/text')
        res.end("Page not found")
    }
} 
);
server.listen(port);