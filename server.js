const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const path = require('path');

const app = express();
const db = new sqlite3.Database('./car.db');

app.use(cors({
    origin: 'http://localhost:8080',  // Убедись, что это правильный адрес твоего фронта
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'public', 'images')));

app.get('/', (req, res) => {
    res.send('Сервер работает!');
});

app.post('/users/login', async (req, res) => {
    const { login, password } = req.body;

    db.get(`SELECT id, username, password FROM users WHERE username = ?`, [login], async (err, user) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!user) {
            return res.status(401).json({ error: "Неверный логин или пароль" });
        }

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            return res.status(401).json({ error: "Неверный логин или пароль" });
        }

        db.run(`UPDATE users SET online_status = 1 WHERE id = ?`, [user.id], (err) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json({ message: "Успешный вход", userId: user.id, username: user.username });
        });
    });
});

app.get('/users/:userId', (req, res) => {
    const { userId } = req.params;

    db.get(
        `SELECT id, username, email FROM users WHERE id = ?`, 
        [userId], 
        (err, user) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            if (!user) {
                return res.status(404).json({ error: "Пользователь не найден" });
            }

            db.get(
                `SELECT * FROM achievements WHERE user_id = ?`, 
                [userId], 
                (err, achievements) => {
                    if (err) {
                        return res.status(500).json({ error: err.message });
                    }

                    if (!achievements) {
                        return res.status(404).json({ error: "Достижения не найдены" });
                    }

                    res.json({
                        user,
                        achievements,
                    });
                }
            );
        }
    );
});

app.get('/achievements/:userId', (req, res) => {
    const { userId } = req.params;

    db.get(
        `SELECT * FROM achievements WHERE user_id = ?`, 
        [userId], 
        (err, row) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            if (!row) {
                return res.status(404).json({ message: "Ачивки для данного пользователя не найдены" });
            }
            res.json(row); 
        }
    );
});

app.get('/users/online', (req, res) => {
    db.all(`SELECT id, username FROM users WHERE online_status = 1`, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

app.get('/players', (req, res) => {
    const { sortBy, order = 'desc' } = req.query;

    let query = ` 
        SELECT 
            users.id,
            users.username,
            achievements.total_survival,
            achievements.current_survival,
            achievements.walked_distance,
            achievements.transport_distance,
            achievements.players_killed,
            achievements.headshots,
            achievements.total_hits
        FROM users
        JOIN achievements ON users.id = achievements.user_id
    `;

    if (sortBy) {
        query += ` ORDER BY achievements.${sortBy} ${order}`;
    }

    db.all(query, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Сервер запущен на http://localhost:${PORT}`));
