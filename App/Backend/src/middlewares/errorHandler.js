const errors = [
	{ status: 400, message: 'Invalid empty fields' },
	{ status: 400, message: 'Invalid email' },
	{ status: 400, message: 'Password must have at least 6 characters' },
	{ status: 401, message: 'Incorrect password' },
	{ status: 404, message: 'User not found' },
	{ status: 409, message: 'User already exist' },
];

const errorHandler = (error, _req, res, next) => {
	console.log(error);
	const errorCode = errors
		.find((err) => err.message === error.message).status || 500;
	res.status(errorCode).json({ message: error.message });
	next();
};

export default errorHandler;