import { Profile } from "./../models/profile.js";

function index(req, res) {
    Profile.find({})
    .then(profiles => {
        res.render('profiles/index', {
            profiles
        })
    })
}

function show(req, res) {
    Profile.findById(req.params.id) // finds the profile
    .then((profile) => {
        Profile.findById(req.user.profile) // finds the user
        .then(userProfile => {
            res.render('profiles/show', {
                profile,
                userProfile
            })
        })
    })
    .catch(err => {
        console.log(err);
        res.redirect('/')
    })
}

export {
    index,
    show
}