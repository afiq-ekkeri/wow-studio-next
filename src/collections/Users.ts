import { CollectionConfig } from "payload/types";

export const Users: CollectionConfig = {
    slug: 'users',
    access: {
        read: () => true,
        create: () => true,
    },
    fields: [
        {
            name: 'role',
            required: true,
            defaultValue: 'user',
            type: 'select',
            options: [
                {label: 'Admin', value: 'admin'},
                {label: 'User', value: 'user'}
            ]
        }
    ]
}