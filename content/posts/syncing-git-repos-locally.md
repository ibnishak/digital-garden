---
title: Syncing Git repos locally
---

Create a bare git repo

```bash
mkdir ~/my-bare-repo && cd ~/my-bare-repo
git init --bare
```

Now you can use this bare repo as the target for pushing and pulling from your local copy.

```bash
git push ~/my-bare-repo main
```