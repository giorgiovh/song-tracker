import { Router } from 'express'
import * as songsCtrl from './../controllers/songs.js'
const router = Router()


router.get('/new', songsCtrl.new);
router.get('/', songsCtrl.index);
router.post('/', songsCtrl.create);
router.get('/learned', songsCtrl.indexLearned);
router.get('/to-learn', songsCtrl.indexToLearn);
router.get('/:id', songsCtrl.show);

export {
  router
}
