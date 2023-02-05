const { i18n } = require("./next-i18next.config");
const { version } = require("./package.json");

/** @type {import('next').NextConfig} */
module.exports = { i18n, publicRuntimeConfig: { version } };
