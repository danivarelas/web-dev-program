import jwt from 'jsonwebtoken';

const validate = (token) => {
    try {
        var decoded = jwt.verify(token, 'secret', { algorithms: ['HS256'] });
        console.log(decoded);
        return decoded.name;
    } catch (err) {
        return null;
    }
}

export default validate;