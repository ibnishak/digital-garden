- See the pages here: https://ibnishak.github.io/digital-garden/
- Made with [gatsby-digital-garden](https://github.com/mathieudutour/gatsby-digital-garden)

# Staring a new blog

1. Shallow clone `main` branch of this repo.

```
git clone -b main --single-branch --depth=1 git@github.com:ibnishak/digital-garden.git
```

2. Change address of origin remote.

```
git remote set-url "my-new-url"
```

3. Open `gatsby-config.js` and update the options like path-prefix, site title, description.
4. Run `npm install`
5. Add markdown/mdx files to `content` folder
6. Run `npm run deploy`

# Updating existing blog

1. Clone the repo.
2. Run `npm install`
3. Add markdown/mdx files to `content` folder
4. Run `npm run deploy`
