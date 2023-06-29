import { Fragment } from "react";
import Home from "src/components/page-list/home/Home";
import Head from "src/app/head";
export default function Page() {
  return (
    <Fragment>
      <Head
        title="Webtoon Run"
        description="대학생 인재 발굴 및 육성을 위한 웹툰 크리에이티브 마라톤 대회"
        icon="favicon-webtoonrun.png"
        image="img-og-webtoonrun.png"
      />
      <Home />
    </Fragment>
  );
}
