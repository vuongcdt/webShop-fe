const { withSentryConfig } = require('@sentry/nextjs');

const nextConfig = {
    reactStrictMode: false,
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
    env: {
        TALKJS_APP_ID: 'tym5Seze',
        NOVU_APP_ID: 'LAjhJY6W0z_k',
        NOVU_API_KEY: '099a1f8ef1ecfcb8321347f3c77920e1',
        BUILDER_IO_API_KEY: 'f1481eecce4b4ccab80524725f33f236',
    },
};

const moduleExports = nextConfig;

const sentryWebpackPluginOptions = {
    // Additional config options for the Sentry Webpack plugin. Keep in mind that
    // the following options are set automatically, and overriding them is not
    // recommended:
    //   release, url, org, project, authToken, configFile, stripPrefix,
    //   urlPrefix, include, ignore

    silent: true, // Suppresses all logs
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options.
};

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions);
