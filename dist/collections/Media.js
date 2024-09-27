"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Media = void 0;
exports.Media = {
    slug: 'media',
    access: {
        read: function () { return true; },
    },
    upload: {
        staticDir: 'media',
        staticURL: '/media',
        imageSizes: [
            {
                name: 'thumbnail',
                width: 400,
                height: 300,
                position: 'centre',
            },
            {
                name: 'card',
                width: 768,
                height: 1024,
                position: 'centre',
            },
            {
                name: 'tablet',
                width: 1024,
                height: undefined,
                position: 'centre',
            },
        ],
        adminThumbnail: 'thumbnail',
        mimeTypes: ['image/*'],
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
            required: true,
        },
    ],
    hooks: {
        beforeChange: [
            function (_a) {
                var data = _a.data;
                if (data.filename) {
                    return "".concat(process.env.NEXT_PUBLIC_SERVER_URL, "/media/").concat(data.filename);
                }
                return undefined;
            },
        ],
    },
};
