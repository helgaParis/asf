
# asf - Project of website  migration

AsF stands for Artistes sans Frontières, a no profit international artists' association founded in the South of France nearly 20 years ago.

This project grew nearly over night from a wishful thought during my own training, "We should rewrite the association's website from scratch", to a full blown dev JS project with several contributors. 
Saloum took part on the planning and first set-up as an intern and offered to continue working for the association from afar. He creates single artist's websites, when he has a moment to spare.
Zubeir, an intern from the next promotion joined the team for a few months. He contributed to the planning of the archive part and now is on a project for a dependant website.
B. is joining us in April, for the most challenging internship so far: under covid lockdown, it will be 100 % remote.
I sign for the project management, most of the backend and db. 
The layout is adapted on the go. Helga

You may follow the progress on <https://artistessansfrontieres.fr>

## The challenges

- "Whatever you do, the website needs to be fast, as our visitors may have a very poor mobile connection!" Otherwise, it should be trilingual, mobile friendly, desktop first, keep the look and modernize it completely, get global styles but allow for 50 or more individual designs in the dependant sites, be easy to work on for an intern without prior knowledge and other usual requests.
- The Linux /Apache server of the existing website was going to expire definitely soon (end of the commercial offer), which made it preferable to start on a new server. We therefore did the server migration first, choosing Nginx and Certbot for https, which led to some surprises later.
- The existing site had grown over years, written in different languages and heavily interconneting ressources on different domains and subdomains. The plan was to keep everything going and replace parts in steps, but store all ressources together and get rid of unused files. Many external links were no longer valid.
- The migration to https of over a dozen domains plus their subdomains rendered part of the existing websites unavailbale, as browsers do not open CORS links in https websites. The visitor gets a dire warning page instead. This led to a frantic reorganisation, integrating legacy html parts in chunks into the Node project, with temprary pages giving access to them. At that point, we became quite good at writing middleware for routes and variables to be used on the front end.
- The next surprise was a real world one : the office floor dropped under us, splitting up the team for months. In a microservice approach, we split the site into 3 mostly independant chapters to allow independant work on local computers. (The commit history here threfore does not reflect all the steps and all the contributions). After that came the Paris transport strikes and now lockdown.

## Consolidation

The current project step is to consolidate the 3 independant chapters and their css and to complete the documentation.
During this phase, I worked a lot with browser audits, to get rid of security breaches, hunt down performance percentages and missing points for accesibility or SEO ranking. The Nginx server went http2 during this phase. (No discernible speed gain on this fast website, but 7% in Best Practice).
Consolidating the css files took a lot of time for nearly no visible result, as the three chapters already looked pretty much alike. The one exception was, that flipping very fast through pages with different CSS, the browser may flicker. It may not be a problem normally, but we provided flick through arrows for archive pages or dependant sites. This allows callls to the server at gaming speed. Having all pages on the same main CSS files removed the flicker.
Besides, consolidating allowed to choose the best approach for the search engine ranking, the easiest to work with, remove some long work-arounds in css and in the pug/html code and may even allow an intern to contribute. Not an intern without any prior knowledge though.
