const express = require("express")
const cors = require("cors")
const app = express()

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
        return res.status(error.response.status).json(error.response.data)   
    }

})
app.listen(3001)