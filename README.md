
# Markdown Cheatsheet

[https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet/)

# plugins
https://planetjekyll.github.io/plugins/top

## installation
https://jekyllrb.com/docs/plugins/installation/


# Testing GitHub Pages site locally with Jekyll

## Prerequisites

Before you can use Jekyll to test a site, you must:

    Install Jekyll.
    Create a Jekyll site. For more information, see "Creating a GitHub Pages site with Jekyll."

We recommend using Bundler to install and run Jekyll. Bundler manages Ruby gem dependencies, reduces Jekyll build errors, and prevents environment-related bugs. To install Bundler:

    1- Install Ruby. For more information, see "Installing Ruby" in the Ruby documentation.
    2- Install Bundler. For more information, see "Bundler."

## Building your site locally

    Open Git Bash.
    Navigate to the publishing source for your site. For more information about publishing sources, see "About GitHub Pages."
    Run your Jekyll site locally.

    $ bundle exec jekyll serve
    > Configuration file: /Users/octocat/my-site/_config.yml
    >            Source: /Users/octocat/my-site
    >       Destination: /Users/octocat/my-site/_site
    > Incremental build: disabled. Enable with --incremental
    >      Generating...
    >                    done in 0.309 seconds.
    > Auto-regeneration: enabled for '/Users/octocat/my-site'
    > Configuration file: /Users/octocat/my-site/_config.yml
    >    Server address: http://127.0.0.1:4000/
    >  Server running... press ctrl-c to stop.

    To preview your site, in your web browser, navigate to http://localhost:4000.

## Updating the GitHub Pages gem

Jekyll is an active open source project that is updated frequently. If the github-pages gem on your computer is out of date with the github-pages gem on the GitHub Pages server, your site may look different when built locally than when published on GitHub. To avoid this, regularly update the github-pages gem on your computer.

    Open Git Bash.
    Update the github-pages gem.
        If you installed Bundler, run bundle update github-pages.
        If you don't have Bundler installed, run gem update github-pages.


# Creative Theme for Jekyll

A Jekyll implementation of the [Creative Theme](https://startbootstrap.com/themes/creative/) template by [Start Bootstrap](https://startbootstrap.com).

An attractive one page Bootstrap theme perfect for creative portfolios and businesses

Based on Creative Theme v5.1.8 and Bootstrap v4.3.1

## To use the Creative Theme template in your project

Creating a site with this particular Jekyll theme, is basically writing a markdown site.

- Start by adding your info in `_config.yml`.
- Don't forget to change `_data/footer.yml` to update the copyright.
- In `index.md` reorder or remove section as you prefer.
- You can also add other pages, like `links.md`.
- Edit `_data/menus.yml` to add links in the navigation bar.

# Credits
* This work is heavily inspired by https://github.com/volny/creative-theme-jekyll.
* Timeline template is based on https://github.com/anbasile/pickmeup.
* Timeline end image is taken from http://bsvp.in/join-us/.
* People Images computer-generated by https://www.thispersondoesnotexist.com/.
* People names generated by https://www.fakenamegenerator.com/.
* Links page background from https://www.rawpixel.com/.

# Development
If you want to use this template, or enhance it, you can use Docker.
Just run './build-in-docker.sh' and then point your browser to http://localhost:4000/.

Note: Developing for github pages is tricky. You should alway rely on
[safe plugins](https://pages.github.com/versions/) because any other, that's not
in the list will simply not run.

# Good Ideas
* Contacts submit form example
  * https://github.com/Codevelopr/codevelopr.github.io/
  * https://jekyllrb.com/resources/#forms
* Table of contents example
  * https://github.com/fedenunez/fedenunez.github.io
  
# Using Docker
https://github.com/BretFisher/jekyll-serve



## Creating a site:

cd to empty directory
docker run -v $(pwd):/site bretfisher/jekyll new .

Start a local server with sane defaults listening on port 8080:

cd dir/of/your/jekyll/site
docker run -p 8080:4000 -v $(pwd):/site bretfisher/jekyll-serve

That's it!

Details: it will mount your current path into the containers /site, bundle install before running jekyll serve to , serve it at http://<docker-host>:8080.

To make this even easier, copy [docker-compose.yml](https://github.com/BretFisher/jekyll-serve/blob/master/docker-compose.yml) from this repo to your jekyll site root. Then you'll only need to:

cd dir/of/your/jekyll/site


sudo systemctl restart docker