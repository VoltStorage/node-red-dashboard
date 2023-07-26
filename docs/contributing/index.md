# Contributing

Contributions are always welcome for Dashboard 2.0. We have a lot of great ideas we want to get built, and we'd love to have your help!
## Installing Locally

You can `git clone` this repository, and then `npm install` this from within the `./node-red` directory on your machine

The Dashboard nodes requires a static build/output from the collection of Vue components. as such,
when making local changes there is currently a manual step required to get your latest changes into the UI deployed by Node-RED:

```bash
npm run build
```

After doing so, a refresh of the UI generated by Node-RED will include any new changes.