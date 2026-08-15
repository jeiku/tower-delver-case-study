# Tower Delver case study

Source for a single-page case study about Tower Delver, an independent party-based JRPG
roguelite, and the human-directed AI-assisted workflow used to build it.

It is a static page: one HTML file, one stylesheet, one small script, and a folder of
optimized images. **There is no build step and there are no dependencies**: the source in this
repository is exactly what gets served.

```text
index.html      the whole page
styles.css      all styling
main.js         click-to-load handler for the demo video (the page works without it)
assets/         optimized WebP images
.nojekyll       tells GitHub Pages to serve files as-is
```

## Preview it locally

Any static file server works. From the repository root:

```bash
npx serve .
# or, with no Node installed:
python3 -m http.server 8000
```

Then open the address the server prints.

### Preview it the way GitHub Pages will serve it

A GitHub **project site** is served from a subpath (`https://<user>.github.io/<repo>/`), not
from the domain root. Every path in this page is relative, so it works either way. Still, check
it under a subpath before publishing anything:

```bash
mkdir -p preview/tower-delver-case-study
cp index.html styles.css main.js .nojekyll preview/tower-delver-case-study/
cp -r assets preview/tower-delver-case-study/
npx serve preview
# then open the /tower-delver-case-study/ path on the address it prints
```

`preview/` is ignored by Git.

## Edit it

The copy lives directly in `index.html` as ordinary prose. Each page section sits under a
banner comment naming it (Hero, Product demonstration, Executive summary, and so on), so a
sentence can be found by searching for nearby words or by jumping to its section. Styling is
entirely in `styles.css`, so prose edits cannot break the layout.

## Deploy it

Not deployed yet. When it is time:

1. Repository **Settings → Pages**.
2. Source: **Deploy from a branch** → branch `main`, folder `/ (root)`.

There is no build, so there is no Actions workflow and nothing for CI to do. `.nojekyll` must
stay at the root; without it, Pages runs Jekyll and silently skips files beginning with an
underscore.

## Notes

- **Video.** The demo is hosted on YouTube and embedded through a click-to-load poster, using
  the privacy-enhanced embed domain. Nothing third-party is requested until a visitor clicks
  play, and nothing plays on load. The video file is not stored in this repository.
- **Search indexing.** The page asks search engines not to index it
  (`<meta name="robots" content="noindex, nofollow, noarchive">`). That is a request to
  crawlers, not access control: anyone with the URL can open the page, and this repository's
  contents are readable by anyone who can see the repository. Nothing here is treated as
  confidential.
- **Accessibility.** The page is built to be readable without JavaScript, navigable by keyboard
  with visible focus, and to honor a reduced-motion preference. The demo video has a written
  scene-by-scene description on the page.

## License

No license is set. Copyright is retained by the author; the game screenshots and the case-study
text are not offered for reuse.
