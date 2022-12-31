import Head from "next/head";

const SEO = ({
  title,
  description,
  keywords,
  currentURL,
  previewImage,
  type,
}) => {
  return (
    <Head>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:site_name" content={title} key="ogsitename" />
      <meta property="og:description" content={description} key="ogdesc" />
      <meta property="og:url" content={currentURL} key="ogurl" />
      <meta property="og:image" content={previewImage} key="ogimage" />
      <meta property="og:type" content={type} key="ogtype" />

      <title>{title}</title>
    </Head>
  );
};

export default SEO;
