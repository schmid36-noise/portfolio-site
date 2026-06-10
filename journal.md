# Development Journal

This document will cover my process of building the website over the days I was working on it. Depending on my focus, these blurbs may be sporadic, short, or however indepth I feel like writing.

I wanted to touch on specific features first, then start through all the individual pages until I made something I was proud of.

## Initial Commit

Not much needs to be said about this point in the project.
I needed to make sure I could build a page and have it render correctly, so I took one of the exercises and copied that into this repository to ensure I had _something_. Having a working base that I can build off of later is great for avoiding having to sanity check later.

## Navbar

The first thing I wanted out of the way first is the navbar. Since this was a hard requirement and was part of how I wanted to structure the site, I made sure to design it early. I used Javascript to implement it in order to not take up too much space on the html files. Since this bar will be on several pages, I don't want to have up to 6 implementations of the same bar to get confused between. Initially I tried a few methods, but figured I should be smarter about it and implemented a map method. After I got it working, I was pretty elated because it seemed like a pretty big deal to me.

## Index/Landing page

I had an idea what I wanted the landing page to look like, and thankfully there was a Bootstrap example for me to work off of. I wanted to initially have a transparent background image to work with, but I figured I should just start small and use a flat color. Eventually I might revisit it after I've finished all of the other pages, but it's currently in a pretty standard state. I don't think there needs to be much else on the landing page since I want the rest of the content to be on their own individual pages. I also went and redid a bit of the navbar to make it more visually distinct and add a bit of personal flair. The icon used is a character skin from one of the games that I enjoy, Realm of the Mad God.

## Stretching concerns

While I was working on the landing page I remembered that I might need to adjust the viewing experience for mobile. I know that I would probably lose a bit of points on the formatting but I just want a standard desktop experience first, and then I can convert that to mobile later. I know that typically sites are built mobile first, but desktop is what I'm most likely to use. I plan to put this off until the rest of the site content is complete.

## About Me page

This one took a while because I was helping my roommate move out, but I also really like how this page turned out. Once again, I had a vision for what the page would be like and Bootstrap had a template that I could take inspiration from. The carousel page had sections with images and text on opposite sides of the main content page, and other sections I could take inspiration from later for other sections. All of what I wrote on this page are my honest thoughts and although I didn't really put an emphasis on professional work, I'll still put my work on the corresponding page. Speaking of which...

## Projects

I want to get this one done while the carousel is still fresh in my mind. If I don't implement it tonight I'll lose my steam and might not get the final in on time. I don't really _have_ any previous work yet, but definitely do have some public facing repositories from another class I can put in here.

After trying to grapple with the carousel for a few minutes I decided it was way too dense of an element for me to want to append to the site. I ended up pivoting to a similar way I displayed the About page instead since it was simple and clean. I just didn't think it would have been worth my time to implement, especially when it would also rely on images that the projects simply are not interesting enough to have. The smaller images and blurbs honestly work more in my favor for how I want the site to be presented.

## Form

The form took inspiration from the many forms we already did in class, but a lot more time was spent determining how it should look. I didn't want the fields to just be floating in the center like the home page had it, so I put them in a container. It was actually a bit annoying trying to get the specific fields and text labels in a layout that I felt was satisfying, since I was trying my best to minimize my usage of Bootstrap class styling. Eventually I had to readjust the container and it ended up looking acceptable, and it doesn't look out of place.

## Previous Work

This page won't be as dense as the Projects page because I don't have much (if any) work experience to put on this page. I've always sort of disliked the concept of putting my work experience public specifically _because_ I don't have any previous experience. It seems sort of childish for me to just list my school experience and have nothing else to show. That being said, I might try some of the flexbox formatting and put my skills in one column, with my school experience in two smaller asides. I wish I had something more solid to put here, but I guess this is all I've got.

## Touch ups

Because I'm intentionally leaving out what I feel is a lot of functionality, I want some of the minor interactions on the site to be a bit more fun. I cut a more interactive form submission, mobile view support, and potentially some sort of API implementation could have been implemented, but I didn't feel as though I had time. That being said, I think what I did add are sort of neat, even if they might be a bit simple in practice. I'll need to do more with this if I want to make this a real portfolio site of my own, and I _do_ want to expand on this. Working on this over the last few days have felt oddly satisfying and directly useful in getting myself out there and saying that I have a website. It would be more impressive if I owned an actual URL, but those are future steps to consider.
