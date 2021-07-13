# **My Portfolio**

Click [**here**](https://keithcheongwaikeong.github.io/) to see the published portfolio.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), following the instructions of [react-gh-pages](https://github.com/gitname/react-gh-pages).

Most of the documentation for now is just for me to note important points of running this app.

Feel free to clone and save this onto your own repository if you want a quick setup onto your Github Pages.

## **First Time Setup**

Change the `homepage` property to your desired GitHub Pages URL.

```json
// If you are using it on a repository with GitHub Pages enabled
"homepage": "http://{username}.github.io/{repo-name}"

// If you are using it on your main GitHub Pages repository
"homepage": "http://{username}.github.io/"

// My example:
"homepage": "https://keithcheongwaikeong.github.io/"
```

Install the `node_modules` packages and deploy a build, this also creates a branch called `gh-pages` in your repository.

```sh
$ yarn
$ yarn run deploy
```

You would need to change the GitHub Pages source branch to the `gh-pages` branch at **Settings -> Pages** before you can see your deployed page.

## **Running the App Locally**

To test and run your app locally, you can run scripts like any other standard React Apps.

```sh
$ yarn start
```

Running it locally should automatically open your browser and direct you to the localhost port you have configured in the app, the default is [localhost:3000](http://localhost:3000/).

## **Deployment**

Your changes will not be seen until the build is redeployed into the `gh-pages` branch, which can be easily done with `yarn run deploy`.

```sh
$ yarn run deploy
```

### **Notes:**

1. It doesn't matter if you had committed anything onto your main branch before deploying a new build, but I feel it is good practise to commit your changes **before** performing any deployment.
2. It takes a moment after deployment for you to see your new changes published onto the page, so _don't_ panic! It will be published soon!
