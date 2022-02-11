# Staring a new blog

TODO: Update and explain this starter.  
TODO: See if zsh scripts can be done in nodejs

1. Shallow clone `main` branch of this repo.

```
git clone -b main --single-branch --depth=1 git@github.com:ibnishak/digital-garden.git
```

2. Change address of origin remote.

```
git remote set-url "my-new-url"
```

3. Create a file with the name `.env` and add the following content

```
SRC="/absolute/path/to/markdown/files"
```

5. Open `gatsby-config.js` and update the options like path-prefix, site title, description.

6. Run `npm install`

7. Run `npm run deploy`

# Updating existing blog

1. Clone the repo.
2. Create a file with the name `.env` and add the following content.

```
SRC="/absolute/path/to/markdown/files"
```

3. Run `npm install`

4. Run `npm run deploy`
