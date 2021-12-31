const express= require('express')
const router= express.Router();
const {User}= require('../models/user');
const bcrypt= require('bcrypt')


// register user
router.post('/register',async (req,res)=>{

    let user=new User({
        email:req.body.email,
        passwordHash: bcrypt.hashSync(req.body.password,10),
    })

    user= await user.save();
    
    if(!user)
    return res.status(404).send(' user not saved')

    res.send(200)

})

// autheticate user

router.post('/login', async(req,res)=>{
    const user= await User.findOne({email:req.body.email})
    if(!user){
        return res.status(400).send('invalid email')
    }
    if(user && bcrypt.compareSync(req.body.password,user.passwordHash)){
        console.log("matched")
        return res.send(200)
    }
    else{
        return res.status(400).send('wrong password')
     }
    
})

// reset password

router.put('/reset', async(req,res)=>{
    const user= await User.findOne({email:req.body.email})
    if(!user){
        return res.status(400).send('invalid email')
    }
    if(user && bcrypt.compareSync(req.body.password,user.passwordHash)){
        await User.findByIdAndUpdate(
            user.id,{
                passwordHash: bcrypt.hashSync(req.body.updatePassword,10),
            }
        )
        return res.send(200)
    }
    else{
        return res.status(400).send('wrong password')
     }
    
})



module.exports=router