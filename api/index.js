require('dotenv').config();
const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const homeRouter = require('../routes/home');

const app = express();

// middleware
app.use(express.static(path.join(process.cwd(), 'public')));
app.set('views', path.join(process.cwd(), 'views'));
app.set('view engine', 'ejs');

app.use(expressLayouts);
app.set('layout', 'layout');

// routes
app.use('/', homeRouter);

// ❌ ห้าม app.listen()
// ✅ export ให้ Vercel ใช้
module.exports = app;
