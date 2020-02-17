const appRoot = require('app-root-path');
const { deploy } = require('sftp-sync-deploy');
const auth = require(appRoot + '/auth.js');

let config = {
    host: auth.SFTP_HOST, // Required.
    port: 22, // Optional, Default to 22.
    username: auth.SFTP_USER, // Required.
    password: auth.SFTP_PW, // Optional.
    localDir: `${appRoot}/dist`, // Required, Absolute or relative to cwd.
    remoteDir: auth.SFTP_REMOTE_PATH // Required, Absolute path only.
};

let options = {
    dryRun: false, // Enable dry-run mode. Default to false
    exclude: [
        // exclude patterns (glob)
        'node_modules'
    ],
    excludeMode: 'remove', // Behavior for excluded files ('remove' or 'ignore'), Default to 'remove'.
    forceUpload: false // Force uploading all files, Default to false(upload only newer files).
};

// deploy(config, { dryRun: true });
deploy(config);
