// const express = require('express');
// const { createOrUpdateBudget, getBudget } = require('../controllers/budgetController');

// const router = express.Router();

// router.post('/', createOrUpdateBudget);
// router.get('/:email', getBudget);

// module.exports = router;

// /api/budget.js
const { createOrUpdateBudget, getBudget } = require('../../controllers/budgetController');

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    // Handle POST request to create or update budget
    await createOrUpdateBudget(req, res);
  } else if (req.method === 'GET') {
    // Handle GET request to get budget by email
    await getBudget(req, res);
  } else {
    // Handle unsupported methods (404 error)
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};
