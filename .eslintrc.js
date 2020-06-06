module.exports = {
    settings: {
        react: {
            version: '16.12'
        }
    },

    parser: 'babel-eslint',

    parserOptions: {
        ecmaVersion: 8,
        ecmaFeatures: {
            jsx: true
        },
        sourceType: 'module'
    },

    env: {
        browser: true,
        node: true,
        es6: true
    },

    globals: {
        __DEV__: true,
        __PRODUCTION__: true
    },

    plugins: ['react', 'react-hooks'],

    rules: {
        // Possible Errors
        'comma-dangle': [1, 'never'],
        'no-cond-assign': [1, 'always'],
        'no-console': 0,
        'no-constant-condition': 1,
        'no-control-regex': 0,
        'no-debugger': 1,
        'no-dupe-args': 1,
        'no-dupe-keys': 1,
        'no-duplicate-case': 0,
        'no-empty-character-class': 1,
        'no-empty': 1,
        'no-ex-assign': 1,
        'no-extra-boolean-cast': 1,
        'no-extra-parens': 0,
        'no-extra-semi': 1,
        'no-func-assign': 1,
        'no-inner-declarations': 0,
        'no-invalid-regexp': 1,
        'no-irregular-whitespace': 1,
        'no-negated-in-lhs': 1,
        'no-obj-calls': 0,
        'no-regex-spaces': 1,
        'no-sparse-arrays': 1,
        'no-unexpected-multiline': 1,
        'no-unreachable': 1,
        'use-isnan': 1,
        'valid-jsdoc': 0,
        'valid-typeof': 1,

        // Best Practices
        'accessor-pairs': 0,
        'block-scoped-var': 1,
        complexity: 0,
        'consistent-return': 0,
        curly: ['warn'],
        'default-case': 0,
        'dot-location': [1, 'property'],
        'dot-notation': 1,
        eqeqeq: [1, 'smart'],
        'guard-for-in': 1,
        'no-alert': 1,
        'no-caller': 0,
        'no-case-declarations ': 0,
        'no-div-regex': 1,
        'no-else-return': 0,
        'no-empty-label': 0,
        'no-empty-pattern': 0,
        'no-eq-null': 1,
        'no-eval': 1,
        'no-extend-native': 0,
        'no-extra-bind': 1,
        'no-fallthrough': 0,
        'no-floating-decimal': 1,
        'no-implicit-coercion': 1,
        'no-implied-eval': 1,
        'no-invalid-this': 0,
        'no-iterator': 0,
        'no-labels': 0,
        'no-lone-blocks': 1,
        'no-loop-func': 1,
        'no-magic-numbers': 0,
        'no-multi-spaces': 1,
        'no-multi-str': 1,
        'no-native-reassign': 1,
        'no-new-func': 0,
        'no-new-wrappers': 1,
        'no-new': 1,
        'no-octal-escape': 0,
        'no-octal': 0,
        'no-param-reassign': 0,
        'no-process-env': 0,
        'no-proto': 0,
        'no-redeclare': 1,
        'no-return-assign': 0,
        'no-script-url': 0,
        'no-self-compare': 1,
        'no-sequences': 1,
        'no-throw-literal': 0,
        'no-unused-expressions': 1,
        'no-useless-call': 0,
        'no-useless-concat': 1,
        'no-void': 0,
        'no-warning-comments': 0,
        'no-with': 0,
        radix: 0,
        'vars-on-top': 0,
        'wrap-iife': 0,
        yoda: 0,

        // Strict Mode
        strict: 0,

        // Variables
        'init-declarations': 0,
        'no-catch-shadow': 0,
        'no-delete-var': 0,
        'no-label-var': 1,
        'no-shadow-restricted-names': 0,
        'no-shadow': 1,
        'no-undef-init': 0,
        'no-undef': 'error',
        'no-undefined': 1,
        'no-unused-vars': [
            1,
            {
                varsIgnorePattern: 'StyleSheet'
            }
        ],
        'no-use-before-define': 1,

        // Node.js and CommonJS
        'callback-return': 0,
        'global-require': 0,
        'handle-callback-err': 0,
        'no-mixed-requires': [0],
        'no-new-require': 1,
        'no-path-concat': 0,
        'no-process-exit': 0,
        'no-restricted-modules': 0,
        'no-sync': 0,

        // Stlistic Issues
        'array-bracket-spacing': [1, 'never', { objectsInArrays: false }],
        'block-spacing': [1, 'always'],
        'brace-style': 1,
        camelcase: [
            1,
            {
                properties: 'always'
            }
        ],
        'comma-spacing': [
            1,
            {
                before: false,
                after: true
            }
        ],
        'comma-style': [1, 'last'],
        'computed-property-spacing': [1, 'never'],
        'consistent-this': [1, 'self'],
        'eol-last': 0,
        'func-names': 0,
        'func-style': [0, 'expression'],
        'id-length': 0,
        'id-match': 0,
        indent: 0,
        'jsx-quotes': [1, 'prefer-double'],
        'key-spacing': [
            1,
            {
                beforeColon: false,
                afterColon: true
            }
        ],
        'linebreak-style': 0,
        'lines-around-comment': 0,
        'max-depth': 0,
        'max-len': 0,
        'max-nested-callbacks': 0,
        'max-params': 0,
        'max-statements': 0,
        'new-cap': 0,
        'new-parens': 1,
        'newline-after-var': 0,
        'no-array-constructor': 0,
        'no-bitwise': 0,
        'no-continue': 0,
        'no-inline-comments': 0,
        'no-lonely-if': 0,
        'no-mixed-spaces-and-tabs': 1,
        'no-multiple-empty-lines': 0,
        'no-nested-ternary': 1,
        'no-new-object': 1,
        'no-plusplus': 0,
        'no-restricted-syntax': 0,
        'no-spaced-func': 1,
        'no-ternary': 0,
        'no-trailing-spaces': 1,
        'no-underscore-dangle': 0,
        'no-unneeded-ternary': 1,
        'object-curly-spacing': ['warn', 'always'],
        'one-var': 0,
        'operator-assignment': 0,
        'operator-linebreak': 0,
        'padded-blocks': 0,
        'quote-props': 0,
        quotes: [0, 'single', { allowTemplateLiterals: true }],
        'require-jsdoc': 0,
        'semi-spacing': [
            1,
            {
                before: false,
                after: true
            }
        ],
        semi: [1, 'always'],
        'sort-vars': 0,
        'space-before-blocks': 1,
        'space-before-function-paren': [1, 'never'],
        'keyword-spacing': [1, { before: true }],
        'space-in-parens': [1, 'never'],
        'space-infix-ops': 0,
        'space-unary-ops': 0,
        'spaced-comment': 0,
        'wrap-regex': 0,

        //  ECMAScript 6
        'no-confusing-arrow': 'error',
        'arrow-body-style': 0,
        'arrow-parens': 0,
        'arrow-spacing': 0,
        'constructor-super': 0,
        'generator-star-spacing': 0,
        'no-arrow-condition': 0,
        'no-class-assign': 0,
        'no-const-assign': 0,
        'no-dupe-class-members': 0,
        'no-this-before-super': 0,
        'no-var': 0,
        'object-shorthand': 'warn',
        'prefer-arrow-callback': 'warn',
        'prefer-const': 0,
        'prefer-reflect': 0,
        'prefer-spread': 0,
        'prefer-template': 0,
        'require-yield': 0,

        // React
        // See https://github.com/yannickcr/eslint-plugin-react
        'react/display-name': 0,
        'react/forbid-prop-types': 0,
        'react/jsx-boolean-value': 'warn',
        'react/jsx-closing-bracket-location': ['warn', 'line-aligned'],
        'react/jsx-curly-spacing': [1, 'never'],
        'react/jsx-closing-tag-location': 'warn',
        'react/destructuring-assignment': 0,
        'react/default-props-match-prop-types': 'warn',
        'react/jsx-handler-names': 'warn',
        'react/jsx-indent-props': 'warn',
        'react/jsx-indent': 'warn',
        'react/jsx-key': 'error',
        'react/jsx-max-props-per-line': 0,
        'react/jsx-no-bind': 0,
        'react/jsx-no-duplicate-props': 'warn',
        'react/jsx-no-literals': 0,
        'react/jsx-no-undef': 'error',
        'react/jsx-pascal-case': 'warn',
        'react/jsx-quotes': 0,
        'react/jsx-sort-prop-types': 0,
        'react/jsx-sort-props': 0,
        'react/jsx-uses-react': 'warn',
        'react/jsx-uses-vars': 'warn',
        'react/jsx-equals-spacing': ['warn', 'never'],
        'react/jsx-first-prop-new-line': ['warn', 'multiline'],
        'react/jsx-wrap-multilines': [
            'warn',
            {
                declaration: 'parens-new-line',
                assignment: 'parens-new-line',
                return: 'parens-new-line',
                arrow: 'parens-new-line',
                condition: 'parens-new-line',
                logical: 'parens-new-line',
                prop: 'parens-new-line'
            }
        ],
        'react/jsx-tag-spacing': [
            'warn',
            {
                closingSlash: 'never',
                beforeSelfClosing: 'always',
                afterOpening: 'never',
                beforeClosing: 'never'
            }
        ],
        'react/jsx-one-expression-per-line': 0,
        'react/no-danger': 0,
        'react/no-deprecated': 'warn',
        'react/no-did-mount-set-state': 0,
        'react/no-did-update-set-state': 'warn',
        'react/no-direct-mutation-state': 'warn',
        'react/no-is-mounted': 'warn',
        'react/no-multi-comp': 'warn',
        'react/no-set-state': 0,
        'react/no-typos': 'warn',
        'react/no-array-index-key': 0,
        'react/no-string-refs': 'warn',
        'react/no-this-in-sfc': 0,
        'react/no-unknown-property': 'warn',
        'react/no-unused-prop-types': 'warn',
        'react/no-unused-state': 'warn',
        'react/prefer-es6-class': 1,
        'react/prefer-stateless-function': 0,
        'react/no-unescaped-entities': 0,
        'react/prop-types': 0,
        'react/react-in-jsx-scope': 'error',
        'react/require-default-props': 0,
        'react/self-closing-comp': 'warn',
        'react/require-render-return': 'error',
        'react/sort-comp': 'warn',
        'react/style-prop-object': 'warn',
        // react hooks
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 0 // Checks effect dependencies
    }
};
