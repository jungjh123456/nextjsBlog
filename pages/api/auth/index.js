import dbConnect from '../../../utils/dbConnect';
import Auth from '../../../models/Auth';
const jwt = require('jsonwebtoken');
dbConnect();

export default async (req, res) => {
	const { method } = req;

	switch (method) {
		case 'GET': // 확인 용도
			try {
				const user = await Auth.find({});
				res.status(200).json({ success: true, data: user });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		case 'POST':
			try {
				// const newid = req.body;
				const newid = await Auth.create(req.body);

				jwt.sign({ newid }, 'secretkey', (err, token) => {
					if (err) {
						res.status(400).json({ success: false, error: err });
					}
					res.status(201).json({ success: true, token });
				});
			} catch (error) {
				res.status(400).json({ success: false, error });
			}
			break;
		default:
			res.status(400).json({ success: false });
			break;
	}
};
