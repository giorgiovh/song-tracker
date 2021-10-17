import { Router } from 'express'
import * as indexCtrl from './../controllers/index.js'

const router = Router()

// router.get('/', function (req, res) {
//   res.render('index', { title: 'Home Page', user: req.user ? req.user : null })
// })

router.get('/', indexCtrl.index)

export {
  router
}

