const config = {};

config.SECRET = process.env.SECRET;
config.MAX_RECORDS = 20;
config.LOGINURL = `${process.env.URL}/login`;
config.PROJECTNAME = 'Madisons';
config.SIGNEDURLEXPIRES = 604800; // seconds 7 days
config.NO_REPLY = process.env.NO_REPLY;
module.exports = config;
