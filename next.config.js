const { version } = require("./package.json");

/** @type {import('next').NextConfig} */
module.exports = { publicRuntimeConfig: { version } };
