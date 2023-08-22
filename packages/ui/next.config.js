const { withSentryConfig } = require("@sentry/nextjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  sentry: {}
}

const sentryWebpackPluginOptions = {}

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions);
