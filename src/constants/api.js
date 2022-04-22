const getApiLinkByEnv = (localUrl, deployUrl) => {
    if (process.env.NODE_ENV === 'production') {
        return localUrl;
    }
    return localUrl;
};

export const API_ENPOINT = getApiLinkByEnv('http://localhost:2412/api/');
