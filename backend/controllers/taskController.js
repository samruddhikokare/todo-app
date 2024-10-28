const pool = require('../config/db');

const TaskController = {
  createTask: async (req, res) => {
    const { title, description, startDate, endDate, recurrenceType, recurrenceInterval, recurrenceWeekdays, recurrenceMonthday } = req.body;
    const newTask = await pool.query(
      `INSERT INTO tasks (title, description, start_date, end_date, recurrence_type, recurrence_interval, recurrence_weekdays, recurrence_monthday)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
      [title, description, startDate, endDate, recurrenceType, recurrenceInterval, recurrenceWeekdays, recurrenceMonthday]
    );
    res.json(newTask.rows[0]);
  },

  // Other methods for reading, updating, and deleting tasks...
};

module.exports = TaskController;
