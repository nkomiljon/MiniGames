import './footer-sitemap.scss';

export function FooterSitemap(): HTMLElement {
  const footerSitemap = document.createElement('nav');
  footerSitemap.className = 'footer-sitemap';
  footerSitemap.appendChild(Menu(['Home', 'Library', 'Categories', 'Tournaments'], 'Explore'));
  footerSitemap.appendChild(
    Menu(['About Us', 'Contact', 'Privacy Police', 'Trems of Service'], 'Company'),
  );
  return footerSitemap;
}

function Menu(links: string[], title: string): HTMLElement {
  const wrapper = document.createElement('div');
  wrapper.className = 'footer-sitemap__column';
  const titleElement = document.createElement('span');
  titleElement.className = 'footer-sitemap__title';
  titleElement.textContent = title;

  const menu = document.createElement('ul');
  menu.className = 'footer-sitemap__column';

  const items = links.map((link) => {
    const menuItem = document.createElement('li');
    const menuItemLink = document.createElement('a');
    menuItemLink.href = link;
    menuItemLink.textContent = link;
    menuItem.appendChild(menuItemLink);
    return menuItem;
  });

  items.map((item) => menu.appendChild(item));

  wrapper.appendChild(titleElement);
  wrapper.appendChild(menu);
  return wrapper;
}
