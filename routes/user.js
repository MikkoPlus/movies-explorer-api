const router = require('express').Router();

const { getUserInfo, updateUserProfile } = require('../controllers/users');
const {
  updateUserDataValidation,
} = require('../middlewares/celebrateValidation');

router.get('/me', getUserInfo);
router.patch('/me', updateUserDataValidation, updateUserProfile);

module.exports = router;
