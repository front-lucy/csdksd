import ServiceIntroduce from "src/components/page-list/service-introduce/ServiceIntroduce";
import Head from "src/app/head";

export default function Page() {
  return (
    <>
      <Head
        title="shortz"
        icon="favicon-shortz.ico"
        image="img-og-introduce.png"
        description="흥미와 의미를 찾아 완결까지 월구독 요금제로 한번에 즐길 수 있는 High Webtoon Service"
      />
      <ServiceIntroduce />
    </>
  );
}
