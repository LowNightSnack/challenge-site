let targets = document.querySelectorAll(
  ".post-wrapper h1, .post-wrapper h2, .post-wrapper h3, .post-wrapper h4, .post-wrapper h5, .post-wrapper h6"
);
Splitting({
  target: targets,
});
ScrollOut({
  targets: [
    ".post-wrapper h1",
    ".post-wrapper h2",
    ".post-wrapper h3",
    ".post-wrapper h4",
    ".post-wrapper h5",
    ".post-wrapper h6",
  ],
});
