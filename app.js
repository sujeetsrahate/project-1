const express = require('express');

const app = express();

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send('DevOps Assignment Application Running Successfully');
});

app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'UP'
    });
});

app.get('/version', (req, res) => {
    res.status(200).json({
        version: process.env.APP_VERSION || 'v1'
    });
});

app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
});