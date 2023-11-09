const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth'); 
const bookController = require('../controllers/bookController');

router.get('/', authMiddleware, bookController.listBooks);
router.post('/', authMiddleware, bookController.createBook);
router.put('/:id', authMiddleware, bookController.editBook);
router.delete('/:id', authMiddleware, bookController.deleteBook);
router.get('/search', authMiddleware, bookController.searchBooks);

module.exports = router;
