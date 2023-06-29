import { useRef, useEffect, Fragment } from "react";
import CustomText from "src/components/atoms/CustomText";
import { globalMaxWidth } from "src/util/code";
import HomeFaqItem from "../HomeFaqItem";

export default function HomeMobileFaq() {
  const faqData = [
    {
      question: "만화&웹툰 관련 학과의 범위가 어디까지인가요?",
      answer:
        "만화&웹툰을 비롯해 디자인과, 디지컬콘텐츠과, 애니메이션과 등 만화&웹툰 관련 수강과목이 있는 학과를 포함합니다.",
    },

    {
      question: "휴학생도 참여 가능한가요?",
      answer: "웹툰&만화 관련 학과의 휴학생이라면 가능합니다.",
    },

    {
      question: "해외 거주 대학생도 참여 가능한가요?",
      answer: "국내 대학에 소속된 대한민국 국적의 학생만 참여가 가능합니다.",
    },

    {
      question: "교수 추천서는 무엇인가요?",
      answer:
        "대학 내에서 만화&웹툰 관련 수업을 진행하고 있는 교수님의 추천서를 말합니다.\n본 대회는 대학 만화&웹툰 창작 교육 시스템의 고도화를 지원합니다.\n이를 위해 교수님과 학생 간의 유대 관계 설정이 우선되어야 한다고 봅니다. 추천서 양식은 상단 모집요강 및 접수 방법 > 제출서류에서 다운로드하여 작성 후 제출하면 됩니다.",
    },
    {
      question: "교수 추천서 없이도 지원 가능할까요?",
      answer:
        "웹툰런 접수 시 교수 추천서 및 추천 교수 서명이 필요합니다.\n웹툰런 대회의 규정상 4화분을 한 번에 제작하여 응모해야 하고 8km 구간 통과자(8강)부터는 PD 미션 수행이 있습니다.\n혼자서 하기에는 힘든 과정일 수 있으니 교수님의 조언과 지원을 구하길 당부합니다.\n추천서라는 명칭이지만 함께 달릴 러닝 메이트라고 생각해주세요. 러닝 메이트와 함께 42.195km를 완주해주세요.",
    },
    {
      question: "타과 교수 추천서를 받아도 되나요?",
      answer: "대학에서 만화&웹툰 관련 교과목을 강의하는 교수님이면 됩니다.",
    },

    {
      question: "구글폼 외에 다른 접수도 가능한가요?",
      answer: "구글폼 외에 이메일 등의 접수는 받지 않습니다.",
    },
    {
      question: "심사기준은 무엇인가요?",
      answer:
        "다음과 같은 항목을 기준으로 선정합니다.\n\n1) 작품의 소재 및 연출 방식이 창의적이고 독창적인가\n2) 작품에 몰입할 수 있는 재미 요소, 흥미 요소가 있는가\n3) 스토리, 캐릭터 등에 이입할 수 있을 정도의 완성도를 가지고 있는가",
    },

    {
      question: "4화 전체 분량을 업로드해야 하나요?",
      answer: "네, 4화 분량을 접수 시 전체 업로드해주세요.",
    },
    {
      question: "대회는 어떻게 진행되나요?",
      answer:
        "상단의 ‘진행일정’ 및 규정에 따라 최초 등록된 작품 중에서 구독자의 응원 횟수에 따라 상위 구간 진출 작품이 결정됩니다.\n첫째주에 1회분이 공개되고 응원 횟수가 많은 32작품이 32km 구간에 진출합니다.\n그 다음주에는 2회분이 공개되고 골인 지점으로부터 16km 구간, 8km 구간으로 진출하는 방식입니다.\n4회분이 모두 공개된 후, 해당 구간 진출자는 PD들이 제시한 미션을 수행해야 합니다.\n미션 수행 결과에 따라 다시 응원 횟수를 집계하여 골인 지점을 통과하는 최종 1인을 선발합니다",
    },
    {
      question: "각 구간 진출자 발표는 언제인가요?",
      answer:
        "구간 진출자는 각 레이스가 종료된 후 그 다음 날에 홈페이지 대진표 명단을 통해 확인할 수 있습니다.\n(예시 :  1주차, 1화 공개, 1주간 응원횟수 취합, 32km 구간 진출자 다음 날 발표)",
    },
    {
      question: "상금 지급일은 언제인가요?",
      answer: "상금 지급일은 최종 수상작이 결정되고 약 3주 후에 지급됩니다.",
    },
    {
      question: "특별상은 어떻게 결정되나요?",
      answer: "특별상은 한국만화웹툰학회 교수심사단 평가로 결정됩니다.",
    },
    {
      question: "쇼츠 게재 후 수익분배는 어떻게 되나요?",
      answer: (
        <CustomText type="P5" color="#4F4F4F">
          8km 통과한 수상작부터 별도의 계약을 체결해
          <img
            style={{
              width: 82,
              height: 14,
              objectFit: "contain",
              marginLeft: 3,
              marginRight: 2,
            }}
            src="/img/img-shortz-logo.png"
          />
          에 게재되며, 게재기간은 5년 입니다.
        </CustomText>
      ),
    },
    {
      question: "장편화 후 수익분배는 어떻게 되나요?",
      answer: (
        <CustomText type="P5" color="#4F4F4F">
          <img
            style={{
              width: 82,
              height: 14,
              objectFit: "contain",
              marginRight: 2,
            }}
            src="/img/img-shortz-logo.png"
          />
          는 웹툰 빌드업 서비스로 장편화, 영상화, 출판화 등의 사업을 별도로
          추진합니다.
          <br />
          장편화의 경우 가 아닌 타 플랫폼에 연재를 하게 되며, 별도 계약을 체결해
          MG+RS를 받게 됩니다.
        </CustomText>
      ),
    },

    {
      question: (
        <span>
          수상했는데
          <img
            style={{
              width: 82,
              height: 14,
              objectFit: "contain",
              marginLeft: 3,
              marginRight: 2,
            }}
            src="/img/img-shortz-logo.png"
          />
          에 게재를 원하지 않습니다. 거절할 수 있나요?
        </span>
      ),
      answer: (
        <CustomText type="P5" color="#4F4F4F">
          <img
            style={{
              width: 82,
              height: 14,
              objectFit: "contain",
              marginRight: 2,
            }}
            src="/img/img-shortz-logo.png"
          />
          게재를 거절할 시 상금 및 상장이 환수됩니다.
        </CustomText>
      ),
    },
    {
      question: "다른 곳에 게재한 작품으로도 참여 가능한가요?",
      answer:
        "정식 계약을 통해 연재된 작품 및 각종 인터넷 게시판을 통해 연재한 작품으로는 참여가 불가합니다.\n단, 오프라인 졸업전시회나 개인 블로그 등을 통해 공개된 경험이 있는 작품으로는 응모가 가능합니다.",
    },

    {
      question: "다른 공모전 수상작도 지원 가능한가요?",
      answer: "다른 공모전 수상작은 지원 불가능합니다.",
    },
  ];
  const faqRef = useRef<any>(null);
  const observerRef = useRef<any>(null);
  /*
    const { SwrHomeCategoryMoveValue, setSwrHomeCategoryMove } =
      SwrHomeCategoryMove();
    const { setSwrHomeCategoryObserver } = SwrHomeCategoryObserver();
    useEffect(() => {
      const observer = new IntersectionObserver((e: any) => {
        if (e[0].isIntersecting) {
          setSwrHomeCategoryObserver(4);
        }
      }, {});
      if (observerRef) {
        observer.observe(observerRef.current);
      }
      return () => {
        observer.disconnect();
      };
    }, []);
    useEffect(() => {
      if (SwrHomeCategoryMoveValue === 5) {
        window.scrollTo({
          top:
            faqRef.current.getBoundingClientRect().top + window.pageYOffset + -68,
          behavior: "smooth",
        });
      }
      setSwrHomeCategoryMove(-1);
    }, [SwrHomeCategoryMoveValue]);
    */
  return (
    <Fragment>
      <div
        ref={faqRef}
        style={{
          width: "100%",
          maxWidth: globalMaxWidth,
          padding: "40px 20px 0px",
          alignItems: "center",
          justifyContent: "flex-start",
          display: "flex",
          gap: 8,
          position: "relative",
        }}
      >
        <div
          ref={observerRef}
          style={{
            width: 5,
            height: 5,
            backgroundColor: "pink",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        />
        <img
          style={{ width: 32, height: 32, objectFit: "contain" }}
          src="/img/img-question.png"
        />
        <CustomText type="H3">FAQ</CustomText>
      </div>
      <section
        style={{
          marginTop: 20,
          width: "100%",
          maxWidth: globalMaxWidth,
          padding: "0px 20px",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        {faqData.map((dataList, index) => (
          <HomeFaqItem
            question={dataList.question}
            answer={dataList.answer}
            key={index}
          />
        ))}
      </section>
    </Fragment>
  );
}
