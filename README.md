# list-github-issues
Fetches issues from an open source GitHub project and shows details. 

This site loads the Rails repo by default, but you can examine any GitHub repo you want, as long as its open source. Enter it in the input box at the top right. (Make sure it’s in the format of `owner/repo`)

## Installation
```bash
git clone git@github.com:astrosquid/list-github-issues.git
cd list-github-issues
npm install
```

## Visit the site
There’s also a version of this site running on Heroku, which you can visit [here](https://list-github-issues.herokuapp.com/). Since other people can use it, however, its possible that it will be rate limited by GitHub, since only 60 requests are allowed per hour. 