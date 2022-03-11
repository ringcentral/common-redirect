# RingCentral common redirect app

A webapp to redirect any page, after track with segment.

## Use

Just use `https://ringcentral.github.io/common-redirect?redirect=https://your-redirect-url.com&appName=your-app-name` to visit `https://your-redirect-url.com`

Check event: `app redirect:your-app-name` from segment

## Dev

```sh
# install deps
npm i

# create env file and edit .env
cp sample.env .env

# start server
npm start

# Then visit http://127.0.0.1:4110?appName=xxxx&redirect=/ by default
```

## Build for github pages

```sh
npm run gh
```

## License

MIT

## RingCentral Labs

RingCentral Labs is a program that lets RingCentral engineers, platform product managers and other employees share RingCentral apps they've created with the customer community. RingCentral Labs apps are free to use, but are not official products, and should be considered community projects - these apps are not officially tested or documented. For help on any RingCentral Labs app please consult each project's GitHub Issues message boards - RingCentral support is not available for these applications.
