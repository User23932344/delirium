const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const path = require('path');

const app = express();
const db = new sqlite3.Database('./car.db');

app.use(cors());
app.use(express.json());

app.use('/images', express.static(path.join(__dirname, 'public', 'images')));

app.get('/transport', (req, res) => {
    db.all('SELECT * FROM transport', [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

app.post('/users', (req, res) => {
    const { email, username, password } = req.body;
    if (!email || !username || !password) {
        return res.status(400).json({ error: "Все поля обязательны!" });
    }

    db.run(`INSERT INTO users (email, username, password, online_status) VALUES (?, ?, ?, 0)`, 
        [email, username, password], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        const userId = this.lastID;

        db.run(`INSERT INTO achievements (user_id) VALUES (?)`, [userId], (err) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json({ message: `Пользователь ${username} добавлен`, userId });
        });
    });
});

app.post('/users/:id/online', (req, res) => {
    const userId = req.params.id;
    const { isOnline } = req.body;

    db.run(`UPDATE users SET online_status = ? WHERE id = ?`, [isOnline, userId], (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: `Статус пользователя ${userId} обновлен` });
    });
});

app.get('/users/online', (req, res) => {
    db.all(`SELECT id, username FROM users WHERE online_status = 1`, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

app.get('/achievements/:userId', (req, res) => {
    const userId = req.params.userId;

    db.get(`SELECT * FROM achievements WHERE user_id = ?`, [userId], (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!row) {
            return res.status(404).json({ error: "Достижения не найдены" });
        }
        res.json(row);
    });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Сервер запущен на http://localhost:${PORT}`));
