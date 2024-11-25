// const Budget = require('../Models/Budget');

// // Create or update budget
// const createOrUpdateBudget = async (req, res) => {
//     const { email, totalBudget } = req.body;

//     try {
//         const budget = await Budget.findOneAndUpdate(
//             { email },
//             { totalBudget },
//             { new: true, upsert: true } // Create new if not found
//         );
//         res.status(200).json(budget);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// // Get budget for a user
// const getBudget = async (req, res) => {
//     const { email } = req.params;

//     try {
//         const budget = await Budget.findOne({ email });
//         if (!budget) return res.status(404).json({ message: 'Budget not found' });
//         res.status(200).json(budget);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// module.exports = { createOrUpdateBudget, getBudget };



// /api/budget.js
const { createOrUpdateBudget, getBudget } = require('../../controllers/budgetController');
const { connectToDatabase } = require('../../db');  // MongoDB connection helper

module.exports = async (req, res) => {
  // Ensure that the database is connected before performing any operation
  await connectToDatabase();

  if (req.method === 'POST') {
    // Handle POST request to create or update the budget
    return createOrUpdateBudget(req, res);
  }

  if (req.method === 'GET') {
    // Handle GET request to fetch the budget by email
    return getBudget(req, res);
  }

  // If the method is not POST or GET, return Method Not Allowed
  res.status(405).json({ message: 'Method Not Allowed' });
};

