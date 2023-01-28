export const changePage = (pageName: string) => {
    const allPages = document.querySelectorAll('.main-page');
    const newVisblePage = document.getElementById(`${pageName}`);
    allPages.forEach((page) => {
        const currentPage = page;
        if (currentPage.classList.contains('visible')) {
            currentPage.classList.remove('visible');
        }
    })
    newVisblePage?.classList.add('visible');
}