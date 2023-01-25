# Week 2. Bootcamp

Ejercicios semana 2. Bootcamp MAdrid

## Configuracion

- .editorconfig
- .gitignore
- package.json (Add Prettier)
- Instalar dependencias desde package.jscon `npm i`
- Crear repo: `git init`
- Crear repo github
- Instalar ESLint: `npm i eslint -D`
- Instalar archivo ESLint: `npx eslint --init`
- Añadir `npm i -D eslint-config-prettier`
- Incluir en eslint.json "prettier" como ultima extension.
- Añadir carpeta con husky
- Instalar husky: `npx husky install`

...

## Jest install / setup

- Instalar jest `npm i -D jest @types/jest @babel/plugin-transform-modules-commonjs`
- Cambiar linea de test de package.json por jest
- eslint.json

```json
  "env": {

    "jest": true
  },
```

- Para ver si esta intalado bien `npm test`
  -jsconfig.json

```json
{
  "typeAcquisition": {
    "include": ["jest"]
  }
}
```

- Insetar esto en el final del package.json:
  ```json
  "babel": {
  "env": {
  "test": {
  "plugins": [
  "@babel/plugin-transform-modules-commonjs"
  ]
  }
  }
  }
  ```
