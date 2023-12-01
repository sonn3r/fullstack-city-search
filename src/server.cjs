const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const db = require('./db.cjs');

const app = new Koa();
const PORT = 3000;

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser());

// Routes
app.use(async (ctx) => {
    if (ctx.request.path === '/api/cities') {
        try {
            const result = await db.query('SELECT id, name FROM cities');
            const cities = result.rows;
            ctx.body = cities;
        } catch (error) {
            console.error('Error fetching cities:', error);
            ctx.status = 500;
            ctx.body = 'Internal Server Error';
        }
    } else {
        ctx.status = 404;
        ctx.body = 'Not Found';
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
