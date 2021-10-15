import { Router } from 'express'
import * as songsCtrl from './../controllers/songs.js'
const router = Router()


router.get('/new', isLoggedIn, songsCtrl.new);
router.get('/', isLoggedIn, songsCtrl.index);
router.post('/', isLoggedIn, songsCtrl.create);
router.get('/learned', isLoggedIn, songsCtrl.indexLearned);
router.get('/to-learn', isLoggedIn, songsCtrl.indexToLearn);
router.get('/:id', isLoggedIn, songsCtrl.show);

function isLoggedIn(req, res, next) {
  console.log('check if user is authenticated', req.user);
  if (req.isAuthenticated()) {
    next()    
  } else {
    res.redirect('/')
  }
  // if (req.isAuthenticated()) next()
  //   console.log('check complete. user authenticated');
  //   return next();
  // };
  // res.redirect('/auth/google')
}

export {
  router
}
