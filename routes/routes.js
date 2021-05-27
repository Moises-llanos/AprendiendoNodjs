const { Router } = require('express');
const { controllGet, controllPost, controllPut, controllPatch, controllDelete } = require('../controllers/controllers');
require('../controllers/controllers')

const router = Router();

router.get('/', controllGet)
router.post('/', controllPost)
router.put('/', controllPut)
router.patch('/', controllPatch)
router.delete('/', controllDelete)


module.exports = router;