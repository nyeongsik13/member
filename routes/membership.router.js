import express from 'express';
import Member from '../schemas/membership.schemas.js'

const router = express.Router()

router.get('/user', async(req,res,next)=>{
    const Users = await Member.find().exec()
    return res.status(200).json( [Users] )
})

router.get('/user/:userId', async(req,res,next)=>{
    const { userId } = req.params

    const User = await Member.findById(userId).exec()
    return res.status(200).json({ User })
})

export default router