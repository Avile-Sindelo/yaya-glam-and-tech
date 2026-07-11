import 'dotenv/config';

import express from 'express';
import { engine } from 'express-handlebars';

import homeRoutes from './routes/home.routes.js';
import bookingRoutes from './routes/booking.routes.js';
import adminRoutes from './routes/admin.routes.js';
import galleryRoutes from "./routes/gallery.routes.js";
import aboutRoutes from "./routes/about.route.js";
import contactRoutes from "./routes/contact.routes.js";

const app = express();

app.engine('handlebars', engine());

app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.use('/', homeRoutes);
app.use('/bookings', bookingRoutes);
app.use('/admin', adminRoutes);
app.use('/gallery', galleryRoutes);
app.use('/about', aboutRoutes);
app.use('/contact', contactRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(
        `Yaya's Glam and Tech running on port ${PORT}`
    );
});