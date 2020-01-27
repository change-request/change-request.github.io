export default {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  siteTitle: 'Change Request Blog', // Navigation and Site Title
  siteTitleAlt: 'Change Request Blog - Change your Software Engineering', // Alternative Site title for SEO
  siteUrl: 'https://change-request.github.io', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteBanner: '/assets/banner.jpg', // Your image for og:image tag. You can find it in the /static folder
  defaultBg: '/assets/bg/lightbulb.jpg', // default post background header
  favicon: 'src/favicon.png', // Your image for favicons. You can find it in the /src folder
  siteDescription: 'Blog on Software Engineering', // Your site description
  author: 'Christian Fuss and Ruben Zimmermann', // Author for schemaORGJSONLD
  siteLogo: '/assets/logo.png', // Image for schemaORGJSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@chngrqst', // Twitter Username - Optional
  ogSiteName: 'ChngRqst', // Facebook Site Name - Optional
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  // See: https://developers.google.com/web/fundamentals/web-app-manifest/
  themeColor: '#1263a6',
  backgroundColor: '#2b2e3c',

  // Settings for typography.ts
  headerFontFamily: 'Bitter',
  bodyFontFamily: 'Open Sans',
  baseFontSize: '18px',

  // Social media
  siteFBAppID: '',

  //
  Google_Tag_Manager_ID: 'GTM-XXXXXXX',
  POST_PER_PAGE: 4,
};
