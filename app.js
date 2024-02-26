import  express  from "express";
import connect from "./schemas/index.js";
import memberRouter from './routes/membership.router.js'


const app = express()
const PORT = 3000

connect()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log('Request URL:', req.originalUrl, ' - ', new Date());
    next();
});

const router = express.Router();

router.get('/', (req, res) => {
    return res.json({ message: 'Hi!' });
});

app.use('/', [router, memberRouter]);


app.listen(PORT, () => {
    console.log(`${PORT} 포트로 서버가 열렸어요!`);
});
