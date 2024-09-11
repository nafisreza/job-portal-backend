import jwt from 'jsonwebtoken';

export default function isAuthenticated(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: 'Token is required' });
    }
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.id = decoded.userId;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Token is invalid' });
    }
}