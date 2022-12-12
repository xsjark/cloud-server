const express = require("express");
const sequelize = require("./database");
const License = require("./Models/License");

sequelize.sync().then(() => console.log("Database connected"))

const PORT = 3000;
const app = express();

app.use(express.json())

app.post("/license", async (req, res) => {
    await License.create(req.body);
    res.send("license inserted")
})

app.get("/license", async (req, res) => {
    const license = await License.findAll();
    res.send(license)
})

app.get("/license/:id", async (req, res) => {
    const requestedId = req.params.id;
    const license = await License.findOne({ where: { id: requestedId}})
    res.send(license);
})

app.put("/license/:id", async (req, res) => {
    const requestedId = req.params.id;
    const license = await License.findOne({ where: { id: requestedId}});
    license.username = req.body.username;
    await license.save();
    res.send(license);
})

app.delete("/license/:id", async (req, res) => {
    const requestedId = req.params.id;
    const license = await License.findOne({ where: { id: requestedId}});
    res.send("license deleted")

})
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

