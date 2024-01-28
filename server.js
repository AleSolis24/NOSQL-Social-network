const express = require('express');
const userRoutes = require('./routes/api/userRoutes');
const thoughtsRoutes = require('./routes/api/thoughtsRoutes');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', userRoutes);
app.use('/api',thoughtsRoutes);


app.listen(PORT, () => {
console.log(`API server running on http://localhost:${PORT}`);
});