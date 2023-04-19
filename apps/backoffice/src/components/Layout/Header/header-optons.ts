import { PrivateRoutes } from '@/constant-definitions/Routes';

type Item = {
    path: string;
    label: string;
};

interface Option {
    title: string;
    items?: Item[];
}

export const headerOptions: Option[] = [
    // {
    //     title: 'Main',
    // },
    // {
    //     title: 'Enterprise',
    //     items: [
    //         {
    //             path: '',
    //             label: 'Kanban',
    //         },
    //     ],
    // },
    {
        title: 'Realty',
        items: [
            {
                path: PrivateRoutes.PROPERTIES,
                label: 'Properties',
            },
        ],
    },
    // {
    //     title: 'Invertment',
    //     items: [
    //         {
    //             path: 'Projects',
    //             label: 'Projects',
    //         },
    //     ],
    // },
    // {
    //     title: 'Marketing',
    //     items: [
    //         {
    //             path: 'Leads',
    //             label: 'Leads',
    //         },
    //     ],
    // },
    // {
    //     title: 'Management',
    //     items: [
    //         {
    //             path: 'Collaborators',
    //             label: 'Collaborators',
    //         },
    //     ],
    // },
];
