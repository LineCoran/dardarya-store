export const changePage = (pageName: string) => {
    const allPages = document.querySelectorAll('.main-page');
    const allLinks = document.querySelectorAll('.nav-list-link');

    allLinks.forEach((link) => {
        const currentPage = link;
        if (currentPage.classList.contains('nav-list-link-active')) {
            currentPage.classList.remove('nav-list-link-active');
        }
    })
    allPages.forEach((page) => {
        const currentPage = page;
        if (currentPage.classList.contains('visible')) {
            currentPage.classList.remove('visible');
        }
    })
    const newVisblePage = document.getElementById(`${pageName}`);
    const newActiveLink = document.getElementById(`link-${pageName}`);
    newVisblePage?.classList.add('visible');
    newActiveLink?.classList.add('nav-list-link-active');
}