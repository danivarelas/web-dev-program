import jwt from 'jsonwebtoken';

const validate = (token) => {
    try {
        var decoded = jwt.verify(token, 'secret', { algorithms: ['HS256'] });
        console.log(decoded);
        return { 
            loggedUser: decoded.username,
            isAdmin: decoded.role === "admin" ? true : false
        };
    } catch (err) {
        return null;
    }
}

export default validate;