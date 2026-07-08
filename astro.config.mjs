// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// TODO: 커스텀 도메인 확정 시 site 값 교체
const site = 'https://awesome-care-giving.pages.dev';

export default defineConfig({
  site,
  integrations: [
    starlight({
      title: {
        ko: '간병 노하우',
        en: 'Care-Giving Notes',
      },
      description:
        '거동이 불편한 환자를 돌보며 직접 겪고 배운 간병 노하우 모음',
      defaultLocale: 'root',
      locales: {
        root: { label: '한국어', lang: 'ko' },
        en: { label: 'English', lang: 'en' },
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/gwongibeom/awesome-care-giving',
        },
      ],
      editLink: {
        baseUrl:
          'https://github.com/gwongibeom/awesome-care-giving/edit/main/',
      },
      sidebar: [
        {
          label: '문서',
          translations: { en: 'Documents' },
          items: [
            { slug: 'bed-setting' },
            { slug: 'helpful-links' },
          ],
        },
      ],
      head: [
        {
          tag: 'meta',
          attrs: {
            property: 'og:image',
            content: `${site}/images/bed-sheet-steps.png`,
          },
        },
      ],
    }),
  ],
});
