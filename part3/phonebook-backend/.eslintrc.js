module.exports = {
    'env': {
        'node': true,
        'commonjs': true,
        'es6': true
    },
    'extends': 'eslint:recommended',
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaVersion': 2018
    },
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'windows'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'no-trailing-spaces': 'error',
        'arrow-spacing':[
            'error', {'before': true, 'after': true}
        ],
        'object-curly-spacing':[
            'error', 'always'
        ],
        'no-console':0
    }
};
