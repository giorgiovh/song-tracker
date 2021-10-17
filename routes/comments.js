import { Router } from 'express'
import * as commentsCtrl from './../controllers/comments.js'

const router = Router()

router.post('/:id', isLoggedIn, commentsCtrl.create)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/")
}

export {
    router
}