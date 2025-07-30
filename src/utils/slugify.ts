export function slugify(text: string): string {
    return text
        .toLowerCase()
        .replace(/ç/g, 'c')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}
