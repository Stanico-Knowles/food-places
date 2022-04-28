# What's For Lunch? :yum:

<p>
My co-workers and I can never decide what we're going to eat for lunch. So one day, we created a google spreadsheet with a list of places in the area that we can grab a bite. We gave each food place a rating between 1 and 5; 1 being just awful and 5 being excellent. In addition, we gave distance ratings (how far from the office), and price ratings, all between 1 and 5 (1 being cheap and 5 being maybe we should take a checkbook).
</p>

<p>
To help with our indecisiveness, we decided to find a randomizer that picks a place to eat for us. My coworker in SecOps bugged the developers for a few weeks to build an app for this because the randomizer we were using, couldn't take certain things into account. For example, what we feel like spending that particular day, how far we want to drive, and whether we could settle for anything or need something that's bussing (Notice I mentioned health ratings earlier but they didn't want it added in the criteria LOL). So after being bugged, I finally created a simple backend for this randomizer that connected to our Google Sheet via Sheets API and generates a list of food places that matches the criteria and picks a random place from that list.
</p>

## Getting Started

#### Requirements

<ul>
    <li>Node installed</li>
    <li>API Key (Google Cloud Platform)</li>
    <li>Google Sheets ID (The url is probably going to look like this: https://docs.google.com/spreadsheets/someText/:sheetID/moreText)</li>
</ul>

#### Run The App

```
npm install
```

```
npm run dev
```

#### Feel Free To Addon :sunglasses:

