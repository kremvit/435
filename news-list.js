(() => {
  const grid = document.querySelector('#news-grid');
  if (!grid || !Array.isArray(window.NEWS_ITEMS)) return;

  for (const item of window.NEWS_ITEMS) {
    const article = document.createElement('article');
    article.className = 'news-card';

    const image = document.createElement('div');
    image.className = 'news-image';
    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.imageAlt;
    img.loading = 'lazy';
    const imageTag = document.createElement('span');
    imageTag.textContent = 'ДЕМО · ПРИКЛАД';
    image.append(img, imageTag);

    const copy = document.createElement('div');
    copy.className = 'news-card-copy';
    const meta = document.createElement('div');
    meta.className = 'news-meta';
    meta.textContent = `${item.category} · УМОВНА ДАТА`;
    const title = document.createElement('h3');
    title.textContent = item.title;
    const excerpt = document.createElement('p');
    excerpt.textContent = item.excerpt;
    const link = document.createElement('a');
    link.href = `news.html?story=${encodeURIComponent(item.slug)}`;
    link.setAttribute('aria-label', `Читати новину: ${item.title}`);
    link.append(document.createTextNode('ЧИТАТИ '));
    const arrow = document.createElement('span');
    arrow.setAttribute('aria-hidden', 'true');
    arrow.textContent = '↗';
    link.append(arrow);
    copy.append(meta, title, excerpt, link);
    article.append(image, copy);
    grid.append(article);
  }
})();
