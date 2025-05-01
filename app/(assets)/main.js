import { app, web, pic, pic1, meta, google, youtube } from './'

const projects = [
    {
        id: 1001,
        img: app,
        title: '<Project Title>',
        link: '#',
        large: false
    },
    {
        id: 1002,
        img: web,
        title: '<Project Title>',
        link: '#',
        large: true
    },
    {
        id: 1003,
        img: web,
        title: '<Project Title>',
        link: '#',
        large: true
    },
    {
        id: 1004,
        img: app,
        title: '<Project Title>',
        link: '#',
        large: false
    },
]

const testimony = [
    {
        id: 101,
        img: pic,
        logo: meta,
        rating: 4.5,
        text: 'Lorem ipsum dolor sit amet consectetur. Neque enim sed ut felis. Sapien ac aliquam integer eget a senectus.',
        name: 'John B',
        desig: 'Software Developer'
    },
]

export {
    projects,
    testimony,
}