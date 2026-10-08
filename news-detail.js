(() => {
  const root = document.querySelector('#article-root');
  const slug = new URLSearchParams(window.location.search).get('story');
  const item = window.NEWS_ITEMS?.find(entry => entry.slug === slug);

  if (!root) return;

  const back = root.querySelector('.article-back');
  root.replaceChildren(back);

  if (!item) {
    document.title = 'Новину не знайдено — 534 дивізіон';
    const message = document.createElement('section');
    message.className = 'article-not-found';
    const title = document.createElement('h1');
    title.textContent = 'Новину не знайдено';
    const text = document.createElement('p');
    text.textContent = 'Можливо, посилання застаріло або сторінку ще не опубліковано.';
    message.append(title, text);
    root.append(message);
    return;
  }

  document.title = `${item.title} — 534 дивізіон`;
  const article = document.createElement('article');
  article.className = 'article-content';
  const meta = document.createElement('div');
  meta.className = 'article-meta';
  meta.textContent = `ДЕМО-МАКЕТ · ${item.category.toUpperCase()} · УМОВНА ДАТА`;
  const title = document.createElement('h1');
  title.textContent = item.title;
  const excerpt = document.createElement('p');
  excerpt.className = 'article-excerpt';
  excerpt.textContent = item.excerpt;
  const image = document.createElement('img');
  image.className = 'article-image';
  image.src = item.image;
  image.alt = item.imageAlt;
  for (const paragraphText of item.paragraphs) {
    const paragraph = document.createElement('p');
    paragraph.textContent = paragraphText;
    article.append(paragraph);
  }
  const demoNotice = document.createElement('p');
  demoNotice.className = 'article-demo-notice';
  demoNotice.textContent = 'Це умовний демонстраційний матеріал, а не реальна новина дивізіону.';
  article.prepend(meta, title, excerpt, image);
  article.append(demoNotice);
  root.append(article);
})();
