const app = require ('./app');

const port = 8800;
app.listen(port,()=>{
    console.log(`App running on ${port}.`);
});