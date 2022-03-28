# Rocket Starter Kit: Sanity Minimal Starter

```
npx @rocket/create@latest --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of `frontend` folder you'll find your Rocket project with the following folders and files:

```
.
├── frontend
│   ├── README.md
│   ├── _site
│   │   ├── about
│   │   ├── contact
│   │   └── index.html
│   ├── config
│   │   └── rocket.config.js
│   ├── package-lock.json
│   ├── package.json
│   ├── sandbox.config.json
│   ├── site
│   │   ├── pages
│   │   │   ├── about.rocket.js
│   │   │   ├── blog.rocket.js
│   │   │   ├── contact.rocket.js
│   │   │   ├── index.rocket.js
│   │   │   ├── pageTreeData.rocketGenerated.json
│   │   │   └── recursive.data.js
│   │   ├── public
│   │   │   ├── android-chrome-192x192.png
│   │   │   ├── android-chrome-512x512.png
│   │   │   ├── apple-touch-icon.png
│   │   │   ├── favicon.ico
│   │   │   ├── icon.svg
│   │   │   └── site.webmanifest
│   │   └── src
│   │       ├── components
│   │       │   ├── baseHead.js
│   │       │   └── defaultHeader.js
│   │       ├── icons
│   │       │   ├── rocket-logo.svg
│   │       │   └── rocketWordmark.js
│   │       ├── layouts
│   │       │   └── baseLayout.js
│   │       ├── lib
│   │       │   ├── sanityClient.js
│   │       │   └── sanityPortableText.js
│   │       ├── styles
│   │       │   └── baseStyles.js
│   │       └── utils
│   │           └── helpers.js
│   └── tsconfig.json
```

Rocket looks for `.rocket.md` or `.rocket.js` or `.rocket.html` files in the `site/pages` directory. Each page is exposed as a route based on its file name.

There's nothing special about `site/src/components/`, but that's where we like to put our web components.

Any static assets, that is not referenced via HTML but you still want to be on the web server we can place in the `site/public/` directory.

### Initial Sanity Setup

1. If you don't have the Sanity CLI already run `npm install -g @sanity/cli`
2. Open a terminal from root folder of the project
3. `cd backend`
4. `sanity install`
5. `sanity init` and follow the prompts (you will need to create a Sanity account if you haven't already)
6. Navigate to the astro folder
7. Rename `.env.template` to `.env` and 
8. Replace the SANITY_PROJECT_ID value with your token ID

**Note:** You will want to add http://localhost:3000 to your allowed CORS orgins in your Sanity project settings at [https://manage.sanity.io](https://manage.sanity.io)
 
### To run your Sanity Studio

1. Open a terminal located at the `backend` folder
2. `sanity install`
3. `sanity start`
4. Your studio should be running on [http://localhost:3333](http://localhost:3333)
5.  Open [http://localhost:3333](http://localhost:3333) and copy the project ID from the Project info section

### To run your Rcoket site

1.  Open a terminal located at the `frontend` folder
2.  `npm install`
3.  `npm start`
4.  Your Rcoket site should be running on [http://localhost:8000](http://localhost:8000)
5.  `npm run build` to build to production locally

## 👀 Want to learn more?

Feel free to check [our documentation](https://rocket.modern-web.dev) or jump into our [Discord server](https://rocket.modern-web.dev/chat).
