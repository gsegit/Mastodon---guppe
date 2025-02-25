# Gup.pe

Social groups for the fediverse - making it easy to connect and meet new people based on shared interests without the manipulation of your attention to maximize ad revenue nor the walled garden lock-in of capitalist social media.

This server-2-server ActivityPub implementation adds decentralized, federaded "groups" support across all ActivityPub compliant social media networks. Users join groups by following group-type actors on Guppe servers and contribute to groups by mentioning those same actors in a post. Guppe group actors will automatically forward posts they receive to all group members so that everyone in the group sees any post made to the group. Guppe group actors' profiles (e.g. outboxes) also serve as a group discussion history.
Creation of new groups is automatic, users simply search for or mention a new group and it will be created.


## Tech stack

Mostly powered by [activitypub-express](https://github.com/immers-space/activitypub-express)
from [Immers Space](https://web.immers.space).
The gup.pe server app, `index.js` is  200 lines of code,
just adding the auto-create actor, auto-accept follow, and auto-boost from inbox behaviors
to the base apex setup.

There's also an HTML front-end using Vue (`/web`) to display popular groups and provide
fallback user profile discovery.

## Installation

`Dockerfile` and `docker-compose.yml` are provided for easy install

```
git clone https://github.com/wmurphyrd/guppe.git
cd guppe
cp .env.defaults .env
echo DOMAIN=yourdomain.com >> .env
docker-compose up --build -d
```

## Updating

Backup database:

```
docker-compose exec -T mongodb sh -c 'mongodump --archive' > guppe.dump
```

Fetch latest code & restart server:

```
git pull
docker-compose up --build -d
```

## Optional configuration

Additional values can be set in `.env` file

| Setting | Description |
| --- | --- |
| PROXY_MODE | Enable use behind an SSL-terminating proxy or load balancer, serves over http instead of https and sets Express `trust proxy` setting to the value of `PROXY_MODE` (e.g. `1`, [other options](https://expressjs.com/en/guide/behind-proxies.html)) See note. |

**Notes on use with a reverse proxy**: When setting proxyMode, you must ensure your reverse proxy sets the following headers: X-Forwarded-For, X-Forwarded-Host, and X-Forwarded-Proto (example for nginx below).

```
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header X-Forwarded-Host $host;
proxy_set_header X-Forwarded-Proto $scheme;
```

## License

Copyright (c) 2021 William Murphy. Licensed under the AGPL-3
