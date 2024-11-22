import axios from "axios";

const CApi = axios.create({
    baseURL: 'https://portofolio-five-mocha.vercel.app/api',
});

export default CApi;