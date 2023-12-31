// Edit This File with Updated Website Details

/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: 'yehez-nextchakra-starter',
  titleTemplate: '%s | yehez-nextchakra-starter',
  defaultTitle: 'yehez-nextchakra-starter',
  description:
    ' Add your description here. It will be used by search engines to display the page title. ',
  canonical: 'https:/yoursite.com',
  openGraph: {
    url: 'https:/yoursite.com',
    title: 'brunomatosdev-starter-kit',
    description: 'Next.js + chakra-ui + TypeScript template',
    type: 'website',
    images: [
      {
        url: 'https://yehez-og-image.yehezgun.com/**yehez-nextchakra-starter**.yehezgun.com.png?theme=dark&md=1&fontSize=50px&images=https%3A%2F%2Fres.cloudinary.com%2Fyehez%2Fimage%2Fupload%2Fv1631970666%2Fyehez_avatar_vkv7pc.png&widths=200&heights=200',
        alt: 'yehez-nextchakra-starter.yehezgun.com og-image',
        width: 800,
        height: 600,
      },
    ],
    site_name: 'site-name',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      href: 'https://res.cloudinary.com/yehez/image/upload/v1630902976/Assassination_Classroom_-_Koro-sensei_smiling_head_fwpndi.svg',
    },
  ],
}

export default defaultSEOConfig
