const express = require("express");
const stud_route = require("./Routes/stud_route");
const app = express();
const PORT = 80;
app.use(express.json());

app.use("/stud",stud_route);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});