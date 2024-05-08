export interface Project {
    id: 2,
    title: string,
    slug: string,
    project_url: string,
    image: string,
    image_dark: string,
    description: string,
    geo: {
        lat: null,
        lng: null
    },
    categories: [
        {
            id: number,
            name: string
        }
    ]
}