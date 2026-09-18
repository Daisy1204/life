# life — Hero prototype

First-screen prototype for ON Original Nutrition. Open `index.html` directly or run a local static server:

```bash
python3 -m http.server 4173
```

## Pull request previews

Every pull request update runs the **Pull request preview** workflow. When it succeeds, open the pull request's **Conversation** tab and use the **Open the website preview for this revision** link in the bot comment. The commit-pinned preview is served by RawGitHack and does not deploy to the production GitHub Pages environment.

The workflow also attaches a 14-day downloadable artifact as a fallback. Because RawGitHack can only fetch publicly accessible files, private repositories must use the artifact and a local static server instead.
