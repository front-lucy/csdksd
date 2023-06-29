import Head from "next/head";
interface HeadProps {
  title: string;
  description: string;
  icon: string;
  image: string;
}
export default function Page(props: HeadProps) {
  const { title, description, icon, image } = props;
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href={"/" + icon} />
      <meta name="description" content={description} />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta property="og:image" content={"/" + image} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={"/img/og/" + image} />
    </Head>
  );
}
