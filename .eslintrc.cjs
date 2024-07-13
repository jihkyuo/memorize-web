module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    // "plugin:prettier/recommended",
    // "prettier"
  ],
  rules: {
    // 'prettier/prettier': 'warn',
    // 'react/jsx-closing-tag-location': 'error',
    'react/jsx-closing-bracket-location': [ 'error', 'after-props' ],
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'import/no-unresolved':'off',
    'react/jsx-wrap-multilines': [ 
      'error', 
      { 
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        logical: 'parens',
        prop: 'parens-new-line'
      }
    ],
    'react/jsx-curly-brace-presence': [ 
      'error', 
      { 
        props: 'always', 
        propElementValues: 'always' 
      }
    ],
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': [ 
      'warn', 
      { 
        namedComponents: "function-declaration" 
      }
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',        
    'react/jsx-indent': [ 
      'error', 
      2, 
      { 
        indentLogicalExpressions: true 
      }
    ],
    'react/jsx-indent-props': [ 'error', 'first' ],
    semi: [ 'error', 'always' ],
    indent: [ 
      'error', 
      2, 
      { 
        MemberExpression: 'off',
        ignoredNodes: [ 
          'JSXElement *', 
          'JSXElement', 
          'JSXSpreadAttribute' 
        ] 
      }
    ],
    'quote-props': [ 'error', 'as-needed' ],
    'object-curly-spacing': [ 'error', 'always' ],
    'array-bracket-spacing': [ 
      'error', 
      'always', 
      { 
        objectsInArrays: false, 
        arraysInArrays: false 
      }
    ],
    'comma-spacing': [ 'error', { before: false, after: true }],    
    '@typescript-eslint/no-empty-interface': 'warn',
    '@typescript-eslint/ban-ts-comment': 'warn',
    'import/default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/newline-after-import': [ 'error', { count: 1 }],
    'import/order': [
      'error',
      {
        groups: [ 
          [ 
            'builtin', 
            'external' 
          ],
          [ 
            'internal', 
            'sibling', 
            'parent', 
            'index', 
            'unknown'
          ]
        ],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
          },
        ],
        'newlines-between': 'always',
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
