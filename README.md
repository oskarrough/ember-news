# Ember News

This is a Hacker/Designer News clone made with Ember.js and Firebase. I'd love it to be a community project for people to learn Ember. We'll see.

## Roadmap

Authenticated users can create posts (title, url or comment).

Authenticated users can upvote and comment posts. Upvoting gives one point. Comments give two.

top: ordered by points and time
recent: latest posts
discussions: posts without links
user profile:

Posts can be marked 'sunk' by admins. This means they'll never appear in top.

Posts can be labeled. For example, a post title containing 'typography' will be labeled as such. Ask/Show?

Things we'll learn:

- Persisting data with Ember Data, Emberfire and Firebase
- Authentication
- Routing and components
- Handling relationships (post + comments or user + post)

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember s` (for server)
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

todo
