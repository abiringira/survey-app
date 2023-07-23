
const app = express();

app.post('/information', [
	InformationController.insert
           ]);


