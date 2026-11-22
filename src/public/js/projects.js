const projectFilters = document.querySelector('.project-filters');

if (projectFilters) {
    const buttons = [...projectFilters.querySelectorAll('button[data-filter]')];
    const cards = [...document.querySelectorAll('.project-card')];
    const status = document.querySelector('.project-filter-status');
    const emptyState = document.querySelector('.project-empty');
    projectFilters.hidden = false;

    projectFilters.addEventListener('click', (event) => {
        const button = event.target.closest('button[data-filter]');
        if (!button) return;

        const filter = button.dataset.filter;
        for (const candidate of buttons) {
            candidate.setAttribute('aria-pressed', String(candidate === button));
        }
        for (const card of cards) {
            card.hidden = filter !== 'all' && !card.dataset.categories.split(' ').includes(filter);
        }
        const visibleCount = cards.filter((card) => !card.hidden).length;
        emptyState.hidden = visibleCount !== 0;
        status.textContent = `${visibleCount} ${visibleCount === 1 ? 'project' : 'projects'} shown.`;
    });
}
