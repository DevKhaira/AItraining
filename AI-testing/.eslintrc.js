module.exports = {
    env: {
        node: true,
        es6: true,
        mocha: true
    },
    globals: {
        axe: true,
        browser: true,
        $: true,
        $$: true,
        document: true,
        expect: true,
        player: true,
        apstag: true,
        googletag: true,
        thesun_googletag: true,
        utag_data: true,
        videojs: true,
        window: true
    },
    parserOptions: {
        "ecmaVersion": 8,
        sourceType: "module"
    },
    extends: "eslint:recommended",
    rules: {
        indent: ['error', 4, { SwitchCase: 1 }],
        quotes: ['error', 'single', { allowTemplateLiterals: true }],
        semi: ['error', 'always'],
        strict: ['error', 'global'],
        curly: ['error'],
        eqeqeq: ['error'],
        'keyword-spacing': ['error', { 'before': true}],
        'space-before-blocks': 'error',
        'space-before-function-paren': ['error', 'always'],
        'no-console': 'warn',
        'no-eval': 'error',
        'block-scoped-var': 'error',
        'no-use-before-define': ['error', { "functions": false }],
        'max-params': ['error', 5],
        'max-statements': ['error', 25, { ignoreTopLevelFunctions: true }],
        'no-var': 'error'
    }
};
