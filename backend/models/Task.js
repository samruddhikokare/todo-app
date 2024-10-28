const pool = require('../config/db');

const Task = {
  create: async ({ title, description, startDate, endDate, recurrence }) => {
    const result = await pool.query(
      `INSERT INTO tasks (title, description, start_date, end_date, recurrence)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [title, description, startDate, endDate, recurrence]
    );
    return result.rows[0];
  },

  // Other CRUD operations can be defined similarly
};

module.exports = Task;
