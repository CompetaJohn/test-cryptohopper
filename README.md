This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Cryptohopper Assignment Time Tracking Overview
- 2021-09-21 17:20 - 17:50 (30 minutes)
    - Spent 30 minutes doing an initial breakdown of the components required & set up Trello board to manage project
- 2021-09-23 18:40 - 20:10 (1 hour 30 minutes)
    - Did basic setup, installed node-sass (had to sort a versioning issue with this)
    - Setup scss modules
    - Build a simple version of the menu bar for mobile
- 2021-09-25 (4 hours 50 minutes total)
    - 08:40 - 9:50 (1 hour)
        - Split NavBar into smaller components
        - Added Desktop version of NavBar
        - Renamed Component directories to use PascalCase
        - Added page header component
    - 11:15 - 12:45 (1 hour 30 minutes)
        - Created PricingSwitch
        - Created PricingBlock
        - Created PricingPlan component to go inside PricingBlock
    13:20 - 15:40  (2 hour 20 minutes)
        - General tidy-up of what we have so far
        - Passing price plans via props from page level (should really come from a DB)
        - Adding various feature to the PricingPlan component
- 2021-09-26 10:30-10:35 (5 minutes)
    - Copied time tracking into readme
  
*Sum Total spent on project:* 6 hours 55 minutes
