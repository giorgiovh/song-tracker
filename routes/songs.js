import { Router } from 'express'
import * as songsCtrl from './../controllers/songs.js'
const router = Router()


router.get('/new', isLoggedIn, songsCtrl.new);
router.get('/', isLoggedIn, songsCtrl.index);
router.post('/', isLoggedIn, songsCtrl.create);
router.get('/learned', isLoggedIn, songsCtrl.indexLearned);
router.get('/to-learn', isLoggedIn, songsCtrl.indexToLearn);
router.get('/:id/edit', isLoggedIn, songsCtrl.edit);
router.put('/:id', isLoggedIn, songsCtrl.update);
router.delete('/learned/:id', isLoggedIn, songsCtrl.deleteLearned);
router.delete('/to-learn/:id', isLoggedIn, songsCtrl.deleteToLearn);
router.delete('/:id', isLoggedIn, songsCtrl.delete);
router.get('/:id', songsCtrl.show);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    next()    
  } else {
    res.redirect('/')
  }
}

export {
  router
}
