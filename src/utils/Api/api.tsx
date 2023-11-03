import axios from 'axios';
import axiosurl from '../config/config.json';
const Urlformiddleware = axiosurl.Mode[axiosurl.ModeType].Middleware_API_URL;

const invokeApi = async (url: string, method: string, { body }, header: any) => {
    let config;
     if (Object.keys(header).length > 0) {
        config = {
            headers: header,
            url: `${Urlformiddleware}/${url}`,
            method: method
        }
    } else {
        config = {
            url: `${Urlformiddleware}/${url}`,
            method: method
        }
    }

    if (Object.keys(body).length > 0) {
        config.data = body;
    }
    config.method = method;

    return await new Promise((resolve, reject) => {
        axios(config)
            .then(response => { resolve(response.data) })
            .catch(err => {
                reject(err);
            });
    });
}

export { };