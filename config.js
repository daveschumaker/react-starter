const isDev = process.env.NODE_ENV === 'development';
let test;

module.exports = {
    APP_TITLE: 'React Starter Project',

    /**
     * Set this if deploying to a sub-directory on your production server.
     * e.g., https://example.com/test
     * BASE_NAME: isDev ? '/' : '/test/'
     *
     * IMPORTANT: Add trailing slash to end of BASE_NAME
     */
    BASE_NAME: '/'
};
