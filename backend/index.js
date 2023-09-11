const express = require("express")
const cors = require("cors")
const app = express()
const dotenv = require("dotenv")

app.use(express.json())
app.use(cors({origin:true}))

app.post("/auth", async (req,res) => {

    const {username} = req.body
    try {
        const r = await axios.put(
            "https://api.chatengine.io/users",
            {
                username: username, 
                secret: username, 
                first_name:username
            },
            {headers:{"private-key" : process.env.secret}}
        )
        return res.status(r.status).json(r.data)
    } catch (error) {
        return res.status(404).json({message: "Something went wrong"})   
    }

})
app.listen(3001)