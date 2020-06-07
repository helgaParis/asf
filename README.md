## What's the use of this repository?

Mostly documentation, as the project is too specific as a whole, but feel free to take an idea or adapt a bit of code for your purpose. Comments, suggestions, contributions welcome.


# asf - Project of website  migration

AsF stands for Artistes sans Frontières, a non profit international artists' association, founded in the South of France nearly 20 years ago.

This project grew nearly over night from a wishful thought during my own training, "We should rewrite the association's website from scratch", to a full blown dev JS project with several contributors.
Saloum took part on the planning and first set-up as an intern and offered to continue working for the association from afar. He creates single artist's websites, when he has a moment to spare.
Zubeir, an intern from the next promotion joined the team for a few months. He contributed to the planning of the archive part.
Babacar joined us in April, for the most challenging internship so far: under covid lockdown, 100 % remote. He migrated six years of archive files, created 2/3 of the xmls sitemap, defined keywords and starts on a blog now.
Billel starts on the blog with Babacar.
I sign for the project management, most of the backend and db.
The layout is adapted on the go. Helga

You may follow the progress on <https://artistessansfrontieres.fr>

## The challenges

- "Whatever you do, the website needs to be fast, as our visitors may have a very poor mobile connection!" Otherwise, it should be trilingual, mobile friendly, desktop first, keep the look and modernise it completely, get global styles but allow for 50 or more individual designs in the dependant sites, be easy to work on for an intern without prior knowledge and all the other usual requests.
- The Linux /Apache server of the existing website was going to expire definitely soon, which made it preferable to start on a new server. We therefore did the server migration first, choosing Nginx and Certbot for https, which led to some surprises later.
- The existing site had grown over many years, been written in different code languages and had heavily interconneted ressources on different domains and subdomains. The plan was to keep everything going and replace parts in steps, but store all ressources together and get rid of unused files. Many external links were no longer valid.
- The migration to https of over a dozen domains plus their subdomains rendered part of the existing websites unavailable, as browsers do not open unmitigated CORS links in https websites. The visitor gets a dire warning page instead. There were hundreds of them ... This led to a frantic reorganisation, integrating legacy html parts in chunks into the Node project, with links or temporary pages giving access to them. At that point, I became quite good at writing middleware for routes and variables to be used on the front end.
- The next surprise was a real world one : the office floor dropped under us, splitting up the team for months.
- In a micro-service approach, we split the site into 3 mostly independent chapters to allow independent work on local computers. After that came the Paris transport strikes and now lockdown. In March, the 3 seperated chapters and their css were unified and reassembled into one project.
- Consolidating the three chapters into one website, I worked with browser audits, to define the best approach of the three, to get rid of security breaches, hunt down performance percentages and missing points for accessibility or SEO ranking. The Nginx server went http2 during this phase. (No discernible speed gain on this fast website, but 7% more in Best Practice).
- Unifying the css files took a lot of time for nearly no visible result, as the three chapters already looked pretty much alike. The one exception was, that flipping very fast through pages with different CSS, the browser may flicker. That would not be a problem normally, but we provided flick through arrows for archive pages or dependant sites. This allows calls to the server at gaming speed. Having all pages on the same main CSS files removed the flicker.
- For SEO optimisation, we added a sitemap and more meta information to the heads, often created by the routers or an extra module.
- During lockdown, with interns on their first dev job and with limited Internet via their mobile phones, we had to change our work procedure. This repository is now for documentation only, new files updated here once in a while.

## Next steps

- Some animation for two landing pages
- Fine tuning of a few styles
- Forms and payment options
- A few larger dependant websites and a blog