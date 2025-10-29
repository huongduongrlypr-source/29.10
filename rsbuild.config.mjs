import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import tailwindcss from '@tailwindcss/postcss';

export default defineConfig({
    plugins: [pluginReact()],
    tools: {
        postcss: {
            postcssOptions: {
                plugins: [tailwindcss]
            }
        }
    },
    resolve: {
        alias: {
            '@': './src'
        }
    },
    html: {
        title: '',
        favicon: './src/assets/images/icon.webp',
        meta: {
            'og:title': 'Business Team Chat',
            'og:image': '/image.jpg'
        }
    },
    source: {
        tsconfigPath: './jsconfig.json'
    },
    output: {
        distPath: {
            root: 'dist'
        },
        dataUriLimit: {
            image: Number.MAX_SAFE_INTEGER,
            svg: Number.MAX_SAFE_INTEGER,
            font: Number.MAX_SAFE_INTEGER,
            media: Number.MAX_SAFE_INTEGER,
            assets: Number.MAX_SAFE_INTEGER
        }
    }
});
