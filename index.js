// const express = require("express");
// const stud_route = require("./Routes/stud_route");
// const app = express();
// const PORT = 80;
// app.use(express.json());

// app.use("/stud",stud_route);

// app.listen(PORT, () => {
//     console.log(`Server is running at http://localhost:${PORT}/`);
// });

//song
const express = require("express");
const song_route = require("./Routes/song_route");
const app = express();
const PORT = 80;
app.use(express.json());

app.use("/song",song_route);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});