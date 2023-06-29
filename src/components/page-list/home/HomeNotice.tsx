import { SwrDeviceInfo } from "src/common-swr/SwrDeviceInfo";
import CustomText from "src/components/atoms/CustomText";
import { globalMaxWidth } from "src/util/code";

export default function HomeNotice() {
  const { SwrDeviceInfoValue } = SwrDeviceInfo();
  const noticeData = [
    {
      title:
        "표절/트레이싱/무단도용 등의 저작권 관련 문제가 있는 작품은 자격 취소 가능",
      description: [],
    },
    {
      title:
        "제출한 서류내용이 사실과 일치하지 않거나 참여 불가대상임이 확인되는 경우 선정 이후라도 경연참여, 선정 취소 및 특전(원고료, 상금 등) 회수",
      description: [],
    },
    {
      title:
        "상업적 목적으로 발표된 적이 없는 작품이여야하며, 작품에 사용되는 이미지는 저작권/초상권 문제가 없어야 함",
      description: [],
    },
    {
      title: "공모전 홍보 관련 안내",
      description: [
        "경연 기간 내 참가자 및 독자의 홍보 활동 가능",
        "단, 상품, 금품 등 혜택을 주는 홍보활동 및 유료 홍보 불가(ex. 투표자 커피쿠폰 이벤트, 유료 광고 등)",
        "적발 시 본 공모전 참여작가가 진행한 유료홍보의 경우 즉시 탈락(경연 지속 불가 및 특전(원고료 등) 회수)되며, 타인이 하는 유료홍보의 경우 공모전 참여작가와의 관계 여부 등 사실 관계 확인 후 해당 작품 탈락(경연 지속 불가 및 특전(원고료 등) 회수)처리 가능",
      ],
    },
    {
      title:
        "공모 신청 마감시한 경과 후의 제출서류는 접수불가(마감시한은 구굴폼 접수시간을 기준으로 함)",
      description: [],
    },
    {
      title:
        "신청서에 기재한 정보 오류 및 연락 두절로 인하여 발생하는 불이익에 대하여 책임지지 않음",
      description: [],
    },
    {
      title: "공동 작업인 경우 참여자들의 응모 동의 필수",
      description: [],
    },
    {
      title:
        "지원 작품이 제안된 제출 기준에 맞지 않는 경우 심사 대상에서 제외될 수 있음",
      description: [],
    },
    {
      title:
        "응모된 작품에 대한 저작권은 응모자에게 있으며, 재담미디어는 랭킹전 진출작(32강이상 진출작)에 대한 보상(상금 등) 지급을 통해 본 사이트(쇼츠-웹툰런)의 게재 및 홍보 목적으로 사용할 수 있음",
      description: [],
    },
    {
      title:
        "수상작은 공모전 종료 후 재담미디어와의 사후 계약 등을 통해 작품의 장편화 등에 대한 논의를 진행할 수 있음",
      description: [],
    },
    {
      title:
        "수상자는 작품의 인쇄 및 홍보 등을 위해 필요한 수상작 원본 파일 등을 담당자의 요구에 맞춰 제출해야 함",
      description: [],
    },
    {
      title: "상금의 경우 제세공과금은 본인이 부담(상금의 4.4%)",
      description: [],
    },
  ];

  return (
    <section
      style={{
        marginTop: 83,
        width: "100%",
        maxWidth: globalMaxWidth,
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        padding: `0px ${SwrDeviceInfoValue.type === "PC" ? "128" : "20"}px`,
        marginBottom: 60,
      }}
    >
      <div
        style={{
          width: "100%",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          display: "flex",
          gap: 10,
        }}
      >
        <img
          style={{
            width: SwrDeviceInfoValue.type === "PC" ? 54 : 32,
            height: SwrDeviceInfoValue.type === "PC" ? 54 : 32,
            objectFit: "contain",
          }}
          src="/img/img-police-car-light.png"
        />
        <CustomText
          type={SwrDeviceInfoValue.type === "PC" ? "H1" : "H4"}
          exceptionWeight="Regular"
        >
          유의사항
        </CustomText>
      </div>
      <section
        style={{
          marginTop: SwrDeviceInfoValue.type === "PC" ? 30 : 24,
          width: "100%",
          alignItems: "flex-start",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ul
          style={{
            marginTop: 40,
            margin: 0,
            padding: 0,
            alignItems: "flex-start",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          {noticeData.map((dataList, index) => (
            <li
              style={{
                color: "#FFFFFF",
                lineHeight: "220%",
              }}
              key={index}
            >
              <div
                style={{
                  width: "100%",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  display: "flex",
                  gap: 10,
                }}
              >
                <div
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    height: 20,
                  }}
                >
                  <div
                    style={{
                      width: 4,
                      minWidth: 4,
                      height: 4,
                      minHeight: 4,
                      borderRadius: 4,
                      backgroundColor: "#FFFFFF",
                    }}
                  >
                    &nbsp;
                  </div>
                </div>
                <CustomText
                  type={SwrDeviceInfoValue.type === "PC" ? "P5" : "P6"}
                  exceptionWeight="Light"
                  color="rgba(255,255,255,0.9)"
                >
                  {dataList.title}
                </CustomText>
              </div>
              <ul
                style={{
                  paddingLeft: 14,
                  listStyle: "none",
                  alignItems: "center",
                  lineHeight: "200%",
                }}
              >
                {dataList.description.map((dataListD, indexD) => (
                  <li
                    style={{
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      display: "flex",
                      fontWeight: 300,
                      color: "rgba(255,255,255,0.9)",
                    }}
                    key={index + "_" + indexD}
                  >
                    <div
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        height: 20,
                      }}
                    >
                      -&nbsp;
                    </div>
                    <CustomText
                      type={SwrDeviceInfoValue.type === "PC" ? "P5" : "P6"}
                      exceptionWeight="Light"
                    >
                      {dataListD}
                    </CustomText>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
