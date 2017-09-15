module.exports = {
    'extends': 'standard',
    'env': {
        'es6': true,
        'commonjs': true
    },
    'rules': {
        // https://github.com/standard/standard/blob/master/docs/RULES-zhcn.md
        'semi': ['error', 'always'],
        'indent': ['error', 2],
        'quotes': ['error', 'single'],
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    }
};