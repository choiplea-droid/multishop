/* 다국어 번역 (한/영/중/일) - ilter.work 스타일 참고 */
const translations = {
  ko: {
    siteTitle: "멀티샵 사용 안내",
    navHome: "HOME",
    navLaundry: "셀프빨래방",
    navPrint: "프린트샵",
    navMusic: "음악연습실",
    sectionLaundryTitle: "셀프빨래방",
    sectionLaundrySub: "SELF LAUNDRY",
    sectionPrintTitle: "프린트샵",
    sectionPrintSub: "PRINT SHOP",
    sectionMusicTitle: "음악연습실",
    sectionMusicSub: "MUSIC STUDIO",
    footerCopy: "멀티샵 사용 안내",
    subpageComingSoon: "사용 안내 내용을 입력해 주세요.",
    // 메인 빨래방 안내 페이지
    laundryMainTitle: "🧺 빨래방 사용 안내",
    laundryPayTitle: "💳 결제 방법 안내",
    laundryCashTitle: "💵 현금 결제",
    laundryCashBullet1: "500원 동전 사용",
    laundryCashBullet2: "실내 동전교환기에서 교환 후 이용",
    laundryCashLink: "동전 교환기 안내",
    laundryCardTitle: "💳 신용카드 결제",
    laundryCardBullet1: "선불카드 발급기에서 카드 발급 후 사용",
    laundryCardLink: "신용카드 결제 안내",
    laundryBonusTitle: "🎁 선불카드 충전 보너스 안내",
    laundryBonusLead: "충전 금액에 따라 추가 금액이 지급됩니다.",
    laundryBonusColAmount: "충전 금액",
    laundryBonusColBonus: "추가 지급",
    laundryMachineTitle: "🧼 세탁기 / 건조기 운영 안내",
    laundryMachineWasherCount: "세탁기 4대 운영",
    laundryMachineDryerCount: "건조기 6대 운영",
    laundryMachineDryerLarge: "대형 2대",
    laundryMachineDryerMedium: "중형 4대",
    laundryFigureCap: "빨래방 전경",
    laundryWasherLink: "세탁기 사용 안내",
    laundryDryerMediumLink: "건조기 중형 사용안내",
    laundryDryerLargeLink: "건조기 대형 사용안내",
    laundryOtherTitle: "🛍 기타 안내",
    laundryTopupLink: "선불 카드 충전 안내",
    laundryGoodsLink: "이불 봉투 판매, 건조기 유연제 무료 제공 안내",
    laundryAcTitle: "❄️ 냉난방기 사용 안내",
    laundryAcLi1: "추운 날 / 더운 날에는 작업대 위 리모컨으로 냉난방기 사용 가능",
    laundryAcLi2: "❗ 사용 후에는 반드시 전원을 꺼주세요",
    laundryAcNote: "✔ 다음 이용 고객을 위해 협조 부탁드립니다.",
    // 동전 교환기 페이지
    coinTitle: "동전 교환기 안내",
    coinMachineTitle: "💵 동전 교환기",
    coinMachineBullet1:
      "자판기의 왼쪽 하단에 위치한 지폐 투입구에 10,000원 이하의 지폐를 넣으시면 500원 동전으로 교환할 수 있습니다.",
    backToLaundry: "← 빨래방 사용 안내로 돌아가기",
    // 신규 선불카드 발급
    cardIssuePageTitle: "🆕 신규 선불카드 발급 안내",
    cardIssueHeroDesc: "처음 이용하시는 경우, 선불카드를 먼저 발급받으셔야 합니다.",
    cardIssueCashTitle: "💵 현금으로 카드 발급",
    cardIssueHowTo: "📌 발급 방법",
    cardIssueCashStep1: "[카드 발급] 버튼 선택",
    cardIssueCashStep2: "현금 선택",
    cardIssueCashStep3: "발급 금액 선택 후 결제 버튼 클릭",
    cardIssueCashStep4: "지폐 투입",
    cardIssueCashStep5: "카드 배출구에서 카드 수령",
    cardIssueCardTitle: "💳 신용카드로 카드 발급",
    cardIssueCardStep2: "신용카드 선택",
    cardIssueCardStep3: "발급 금액 선택 후 결제 버튼 클릭",
    cardIssueCardStep4: "신용카드 결제 진행",
    cardIssueWarnTitle: "⚠️ 중요 주의사항",
    cardIssueWarn1:
      "🔴 현금 투입구에 카드를 넣지 마세요! → 카드가 기기 내부로 들어가면 회수가 어렵고 기기 고장의 원인이 됩니다.",
    cardIssueWarn2: "✔ 지폐만 투입하세요.",
    cardIssueCommonWarnTitle: "🚨 자주 발생하는 실수",
    cardIssueCommonWarn1: "❌ 현금 투입구에 카드 삽입",
    cardIssueCommonWarn2: "❌ 카드 수령 없이 자리를 떠남",
    cardIssueCommonWarn3: "❌ 금액 선택 후 결제 버튼을 누르지 않음",
    cardIssueCommonWarn4: "✔ 발급 완료 후 반드시 카드 수령을 확인해주세요.",
    // 선불카드 충전 안내
    cardTopupTitle: "선불 카드 충전 안내",
    cardTopupMustReadTitle: "⚠️ 꼭 읽어주세요 (중요!)",
    cardTopupMustReadLead1: "🔴 충전 과정 중 카드를 반드시 태그해야 충전이 완료됩니다.",
    cardTopupMustReadLead2: "👉 마지막에 카드를 태그하지 않으면 결제가 되어도 충전되지 않습니다.",
    cardTopupQuickTitle: "💡 한눈에 보는 충전 순서",
    cardTopupQuickLead:
      "카드충전 버튼 → 신용카드 → 금액선택 → 카드결제 → 카드 터치 → 완료",
    cardTopupStep1: "화면에서 [카드충전] 버튼 선택",
    cardTopupStep2: "결제 방법에서 신용카드 선택 후 충전할 금액 선택",
    cardTopupStep3: "카드 결제 진행 (IC 카드 삽입 또는 터치)",
    cardTopupStep4:
      "결제 후 오른쪽 하단 카드 충전하는 곳에 선불카드를 태그 → 충전 완료 화면 확인",
    cardTopupMistakeTitle: "🚨 가장 많이 발생하는 실수",
    cardTopupMistake1:
      "❌ 마지막 카드 태그를 하지 않는 경우 → 이 경우 결제가 되어도 충전이 되지 않습니다.",
    cardTopupMistake2: "✔ 결제 후 꼭 한 번 더 카드를 태그해주세요.",
    cardTopupConfirmTitle: "④ 충전 완료 확인",
    cardTopupConfirm1: "화면에 충전 완료 메시지가 표시되는지 확인",
    cardTopupConfirm2: "충전 금액 및 잔액을 확인한 후 세탁기·건조기에서 사용",
    // 세탁기 안내
    washerTitle: "세탁기 사용 안내",
    washerBanTitle: "🚫 이용 불가 안내",
    washerBan1: "🔴 애완동물 용품 세탁·건조 불가",
    washerBan2: "위반 시 손해배상 및 기기 클리닝 비용이 청구될 수 있습니다.",
    washerBasicTitle: "📌 기본 정보",
    washerInfo1: "세탁기 종류: 중형",
    washerInfo2: "대형 이불은 세탁이 어려울 수 있습니다.",
    washerInfo3: "이용요금: 1회 4,000원",
    washerInfo4: "세탁시간: 36분",
    washerImportantTitle: "⚠️ 가장 중요한 주의사항",
    washerImportant1Title: "1️⃣ 반드시 전원이 꺼진 상태에서 결제하세요",
    washerImportant1Lead1:
      "세탁기 전원이 켜진 상태에서 4,000원을 투입하면 전원이 꺼지면서 사용이 불가할 수 있습니다.",
    washerImportant1Lead2:
      "💡 4,000원이 투입될 때마다 이전 상태에 따라 전원이 켜지거나 꺼집니다. ✔ 사용 전 반드시 전원 상태를 확인해주세요.",
    washerImportant2Title: "2️⃣ 세제는 자동 투입됩니다",
    washerImportant2Li1: "세제 및 섬유유연제는 세탁 중 여러 번 자동 투입됩니다.",
    washerImportant2Li2: "❌ 별도 세제·유연제 투입 금지",
    washerPayTitle: "💰 결제 방법",
    washerCashTitle: "💵 현금 결제",
    washerCashWarn:
      "⚠️ 사용하려는 세탁기 번호와 동일한 투입구인지 반드시 확인해주세요.",
    washerCashStep1: "동전교환기에서 500원 동전으로 교환",
    washerCashStep2: "4,000원 투입 → 세탁기 전원 켜짐",
    washerCashStep3: "세탁물 투입 후 문을 완전히 닫기",
    washerCashStep4: "‘동작’ 버튼 누르기",
    washerCashNote:
      "❗ 문이 완전히 닫히지 않으면 dc1 오류가 발생하여 작동하지 않습니다.",
    washerCardTitle: "💳 선불카드 결제",
    washerCardWarn:
      "⚠️ 사용하려는 세탁기 번호와 동일한 투입구인지 반드시 확인해주세요.",
    washerCardStep1: "카드 태그기에 선불카드 태그 (1회 태그 시 4,000원 차감)",
    washerCardStep2: "4,000원 투입 시 세탁기 전원 켜짐",
    washerCardStep3: "세탁물 투입 후 문을 완전히 닫기",
    washerCardStep4: "‘동작’ 버튼 누르기",
    washerCardNote:
      "❗ 문이 덜 닫히면 dc1 오류가 발생하여 작동하지 않습니다.",
    washerCommonMistakeTitle: "🚨 자주 발생하는 실수",
    washerCommonMistake1: "❌ 전원이 켜진 상태에서 결제",
    washerCommonMistake2: "❌ 다른 번호 투입구에 결제",
    washerCommonMistake3: "❌ 문을 덜 닫고 동작 버튼 누름",
    washerCommonMistake4: "✔ 사용 전 꼭 한 번 확인해주세요.",
    // 건조기 중형
    dryerMediumTitle: "건조기 중형 사용안내",
    dryerMediumBanTitle: "🚫 이용 불가 안내",
    dryerMediumBan1: "🔴 애완동물 용품 건조 불가",
    dryerMediumBan2: "위반 시 손해배상 및 기기 클리닝 비용이 청구될 수 있습니다.",
    dryerMediumBasicTitle: "📌 기본 정보",
    dryerMediumInfo1: "건조기 종류: 중형",
    dryerMediumInfo2: "대형 이불·큰 빨래감은 대형 건조기 이용 권장",
    dryerMediumInfo3: "이용요금: 1회 3,000원",
    dryerMediumInfo4: "건조시간: 45분",
    dryerMediumNote:
      "⏱ 더 긴 시간 이용을 원하시면 대형 건조기를 사용해주세요.",
    dryerMediumImportantTitle: "⚠️ 가장 중요한 주의사항",
    dryerMediumImportant1Title: "1️⃣ 반드시 전원이 꺼진 상태에서 결제하세요",
    dryerMediumImportant1Lead1:
      "이전 사용자가 시간을 남겨둔 상태에서 3,000원을 투입하면 전원이 꺼져 사용이 불가할 수 있습니다.",
    dryerMediumImportant1Lead2:
      "💡 3,000원이 투입될 때마다 이전 상태에 따라 전원이 켜지거나 꺼집니다. ✔ 사용 전 전원 상태를 꼭 확인해주세요.",
    dryerMediumImportant2Title: "2️⃣ 건조 코스를 적절히 선택하세요",
    dryerMediumImportant2Lead: "세탁물 종류에 따라 온도 및 코스를 맞게 선택해주세요.",
    dryerMediumPayTitle: "💰 결제 방법",
    dryerMediumCashTitle: "💵 현금 결제",
    dryerMediumCashWarn:
      "⚠️ 사용하려는 건조기 번호와 동일한 투입구인지 반드시 확인해주세요.",
    dryerMediumCashStep1: "동전교환기에서 500원 동전으로 교환",
    dryerMediumCashStep2: "3,000원 투입 → 건조기 전원 켜짐",
    dryerMediumCashStep3: "세탁물 투입 후 문을 완전히 닫기",
    dryerMediumCashStep4: "건조 코스 선택",
    dryerMediumCashStep5: "‘동작’ 버튼 누르기",
    dryerMediumCashNote:
      "❗ 문이 완전히 닫히지 않으면 dc1 오류가 발생하여 작동하지 않습니다.",
    dryerMediumCardTitle: "💳 선불카드 결제",
    dryerMediumCardWarn:
      "⚠️ 사용하려는 건조기 번호와 동일한 투입구인지 반드시 확인해주세요.",
    dryerMediumCardStep1:
      "카드 태그기에 선불카드 태그 (1회 태그 시 3,000원 차감)",
    dryerMediumCardStep2: "총 3,000원 투입 시 건조기 전원 켜짐",
    dryerMediumCardStep3: "세탁물 투입 후 문을 완전히 닫기",
    dryerMediumCardStep4: "건조 코스 선택",
    dryerMediumCardStep5: "‘동작’ 버튼 누르기",
    dryerMediumCardNote:
      "❗ 문이 덜 닫히면 dc1 오류가 발생하여 작동하지 않습니다.",
    dryerMediumCommonMistakeTitle: "🚨 자주 발생하는 실수",
    dryerMediumCommonMistake1: "❌ 전원이 켜진 상태에서 결제",
    dryerMediumCommonMistake2: "❌ 다른 번호 투입구에 결제",
    dryerMediumCommonMistake3: "❌ 문을 덜 닫고 시작",
    dryerMediumCommonMistake4: "❌ 대형 이불을 중형 건조기에 사용",
    dryerMediumCommonMistake5: "✔ 사용 전 한 번 더 확인해주세요.",
    // 건조기 대형
    dryerLargeTitle: "건조기 대형 사용안내",
    dryerLargeBanTitle: "🚫 이용 불가 안내",
    dryerLargeBan1: "🔴 애완동물 용품 건조 불가",
    dryerLargeBan2: "위반 시 손해배상 및 기기 클리닝 비용이 청구될 수 있습니다.",
    dryerLargeBasicTitle: "📌 기본 정보",
    dryerLargeInfo1: "건조기 종류: 대형",
    dryerLargeInfo2: "요금: 500원 투입 시 4분 추가",
    dryerLargeInfo3: "예시: 2,000원 → 16분 / 4,000원 → 32분",
    dryerLargeBasicNote: "✔ 원하는 시간만큼 금액을 투입하시면 됩니다.",
    dryerLargeTempTitle: "🌡 온도 선택 안내",
    dryerLargeTempLead: "옷감에 따라 온도를 선택해주세요.",
    dryerLargeTempLi1: "🔹 저온 → 섬세의류, 기능성 의류",
    dryerLargeTempLi2: "🔸 중온 → 일반 의류(티셔츠, 나일론 등)",
    dryerLargeTempLi3: "🔺 고온 → 수건, 두꺼운 의류",
    dryerLargeTempNote: "✔ 옷감에 맞게 온도와 시간을 조절해주세요.",
    dryerLargePayTitle: "💰 결제 방법",
    dryerLargeCashTitle: "💵 현금 결제",
    dryerLargeCashWarn:
      "⚠️ 사용하려는 건조기 번호/투입구가 맞는지 반드시 확인해주세요.",
    dryerLargeCashStep1: "세탁물 투입 후 문을 완전히 닫기",
    dryerLargeCashStep2:
      "500원 동전 투입 (투입 금액만큼 시간 증가)",
    dryerLargeCashStep3: "저온, 중온, 고온 중에서 온도 선택",
    dryerLargeCashStep4: "START 버튼을 눌러 건조 시작",
    dryerLargeCardTitle: "💳 선불카드 결제",
    dryerLargeCardWarn:
      "⚠️ 사용하려는 건조기 번호/투입구가 맞는지 반드시 확인해주세요.",
    dryerLargeCardStep1: "세탁물 투입 후 문을 완전히 닫기",
    dryerLargeCardStep2:
      "카드 태그기로 500원 단위 결제 (1회 태그 시 500원 차감 → 4분 추가)",
    dryerLargeCardStep3: "저온, 중온, 고온 중에서 온도 선택",
    dryerLargeCardStep4: "START 버튼을 눌러 건조 시작",
    dryerLargeCardNote: "✔ 예: 4,000원 태그 → 32분 진행",
    dryerLargeCommonMistakeTitle: "🚨 자주 발생하는 실수",
    dryerLargeCommonMistake1: "❌ 다른 기기 투입구에 결제",
    dryerLargeCommonMistake2: "❌ 고온으로 섬세 의류 건조",
    dryerLargeCommonMistake3:
      "❌ 문이 완전히 닫히지 않은 상태에서 시작",
    dryerLargeCommonMistake4: "✔ 사용 전 한 번 더 확인해주세요.",
    // 이불 봉투 / 무료 제공 안내
    goodsTitle: "이불 봉투 판매, 건조기 유연제 무료 제공 안내",
    goodsDuvetTitle: "🛍 이불 비닐봉투 판매 (장당 500원)",
    goodsDuvetLead:
      "큰 이불 전용 봉투는 장당 500원에 판매합니다.",
    goodsDuvetHowTo: "📌 구매 방법",
    goodsDuvetStep1:
      "동전교환기 겸 자판기에서 500원 결제 (선불카드 또는 동전 사용 가능)",
    goodsDuvetStep2: "자판기 최상단 ‘봉투’ 버튼 선택",
    goodsDuvetStep3: "좌측 벽에 걸린 봉투를 한 장 가져가기",
    goodsFreeTitle: "🎁 무료 제공 안내",
    goodsWasherDetergentTitle: "🧼 세탁기 세제 & 섬유유연제",
    goodsWasherDetergentLi1:
      "세탁 시 세제와 섬유유연제가 자동으로 여러 번 나누어 투입됩니다.",
    goodsWasherDetergentLi2: "별도로 세제를 넣지 않으셔도 됩니다.",
    goodsDryerSoftenerTitle: "🌸 건조기 유연제 (무료)",
    goodsDryerSoftenerLi1: "위치: 작업대 위 락앤락 박스",
    goodsDryerSoftenerLi2: "필요한 만큼만 사용해주세요.",
    goodsDryerSoftenerNote:
      "⚠️ 과다 사용 시, 무료 제공이 중단되고 유료 판매로 전환될 수 있습니다.",
    goodsStainRemoverTitle: "✨ 얼룩 제거제 (무료)",
    goodsStainRemoverLi1: "위치: 작업대 위",
    goodsStainRemoverLi2:
      "세탁 전 오염 부위에 충분히 바른 후 사용해주세요.",
    goodsTipsTitle: "💡 이용 팁",
    goodsTipsLi1: "✔ 세제는 자동 투입됩니다.",
    goodsTipsLi2: "✔ 건조기 유연제는 소량만 사용해주세요.",
    goodsTipsLi3: "✔ 봉투는 결제 후 직접 가져가시면 됩니다.",
    laundryIntro: "코인으로 간편하게 세탁·건조할 수 있는 셀프빨래방입니다. 24시간 이용 가능하며, 세제·섬유유연제가 자동 투입되는 기기도 있어 편리합니다.",
    laundryVisualCap: "셀프빨래방 안내 이미지",
    laundryHowToTitle: "이용 방법",
    laundryStep1: "옷을 색상·소재별로 구분한 뒤 세탁기에 넣습니다.",
    laundryStep2: "동전 교환기에서 500원 동전을 준비하거나, 카드·모바일 결제를 선택합니다.",
    laundryStep3: "세탁 코스(일반·울·세 delicate 등)를 선택하고 결제 후 세탁을 시작합니다.",
    laundryStep4: "세탁이 끝나면 빨래를 건조기로 옮긴 뒤, 건조 코인을 넣고 건조를 진행합니다.",
    laundryFeeTitle: "요금·소요 시간",
    laundryFeeLabel: "세탁·건조 요금",
    laundryFeeValue: "1회 약 8,000원~12,000원",
    laundryFeeNote: "(세탁 + 건조 기준, 기기·지점에 따라 상이)",
    laundryTimeLabel: "소요 시간",
    laundryTimeValue: "세탁 35~40분 / 건조 30~40분",
    laundryTimeNote: "총 60~75분 내 완료 가능",
    laundryNoticeTitle: "이용 시 유의사항",
    laundryNotice1: "세제·섬유유연제 자동 투입 여부는 기기마다 다르므로, 이용 전 확인하세요.",
    laundryNotice2: "겉옷·이불 등 큰 짐은 대형 세탁기·건조기를 이용하면 편리합니다.",
    laundryNotice3: "세탁·건조가 끝난 빨래는 반드시 수거해 주세요.",
  },
  en: {
    siteTitle: "Multi-Shop Guide",
    navHome: "HOME",
    navLaundry: "Self Laundry",
    navPrint: "Print Shop",
    navMusic: "Music Studio",
    sectionLaundryTitle: "Self Laundry",
    sectionLaundrySub: "SELF LAUNDRY",
    sectionPrintTitle: "Print Shop",
    sectionPrintSub: "PRINT SHOP",
    sectionMusicTitle: "Music Studio",
    sectionMusicSub: "MUSIC STUDIO",
    footerCopy: "Multi-Shop Guide",
    subpageComingSoon: "Add your guide content here.",
    // Main laundry guide page
    laundryMainTitle: "🧺 Laundry Room Guide",
    laundryPayTitle: "💳 Payment methods",
    laundryCashTitle: "💵 Cash payment",
    laundryCashBullet1: "Use 500 KRW coins.",
    laundryCashBullet2: "Exchange bills for coins at the changer inside.",
    laundryCashLink: "Coin changer guide",
    laundryCardTitle: "💳 Card payment",
    laundryCardBullet1: "Issue a prepaid card at the card machine before use.",
    laundryCardLink: "Card payment guide",
    laundryBonusTitle: "🎁 Prepaid card bonus",
    laundryBonusLead: "Additional credit is given depending on the top-up amount.",
    laundryBonusColAmount: "Top-up amount",
    laundryBonusColBonus: "Bonus",
    laundryMachineTitle: "🧼 Washer / dryer information",
    laundryMachineWasherCount: "4 washing machines in operation",
    laundryMachineDryerCount: "6 dryers in operation",
    laundryMachineDryerLarge: "2 large dryers",
    laundryMachineDryerMedium: "4 medium dryers",
    laundryFigureCap: "Laundry room overview",
    laundryWasherLink: "Washer guide",
    laundryDryerMediumLink: "Medium dryer guide",
    laundryDryerLargeLink: "Large dryer guide",
    laundryOtherTitle: "🛍 Other information",
    laundryTopupLink: "Prepaid card top-up guide",
    laundryGoodsLink: "Duvet bags & free softener guide",
    laundryAcTitle: "❄️ Air conditioning / heating",
    laundryAcLi1: "On hot or cold days, you can use the remote on the table to control the AC.",
    laundryAcLi2: "❗ Please turn off the power after use.",
    laundryAcNote: "✔ Thank you for your cooperation for the next customer.",
    // Coin changer page
    coinTitle: "Coin Changer Guide",
    coinMachineTitle: "💵 Coin changer",
    coinMachineBullet1:
      "Insert bills of 10,000 KRW or less into the bill slot at the lower left of the vending machine to receive 500 KRW coins.",
    backToLaundry: "← Back to laundry guide",
    // New prepaid card issue
    cardIssuePageTitle: "🆕 New Prepaid Card",
    cardIssueHeroDesc:
      "If this is your first visit, please issue a prepaid card first.",
    cardIssueCashTitle: "💵 Issue card with cash",
    cardIssueHowTo: "📌 How to issue",
    cardIssueCashStep1: "Select [Issue Card] button",
    cardIssueCashStep2: "Select cash",
    cardIssueCashStep3:
      "Choose an amount, then press the payment button",
    cardIssueCashStep4: "Insert bills",
    cardIssueCashStep5:
      "Take your card from the card outlet",
    cardIssueCardTitle: "💳 Issue card with credit card",
    cardIssueCardStep2: "Select credit card",
    cardIssueCardStep3:
      "Choose an amount, then press the payment button",
    cardIssueCardStep4: "Proceed with credit card payment",
    cardIssueWarnTitle: "⚠️ Important",
    cardIssueWarn1:
      "🔴 Do NOT insert cards into the cash/bill slot. Cards may be stuck inside and cause machine failure.",
    cardIssueWarn2: "✔ Insert bills only.",
    cardIssueCommonWarnTitle: "🚨 Common mistakes",
    cardIssueCommonWarn1: "❌ Inserting a card into the bill slot",
    cardIssueCommonWarn2: "❌ Leaving without taking the card",
    cardIssueCommonWarn3:
      "❌ Not pressing the payment button after choosing an amount",
    cardIssueCommonWarn4:
      "✔ After issuing, always check that you have received your card.",
    // Prepaid card top-up
    cardTopupTitle: "Prepaid Card Top-up",
    cardTopupMustReadTitle: "⚠️ Please read first (Important)",
    cardTopupMustReadLead1:
      "🔴 You must tap the card during the top-up process for the top-up to complete.",
    cardTopupMustReadLead2:
      "👉 If you don’t tap the card at the end, the balance will NOT be added even if payment is completed.",
    cardTopupQuickTitle: "💡 Top-up steps at a glance",
    cardTopupQuickLead:
      "Card Top-up → Credit card → Choose amount → Pay → Tap card → Done",
    cardTopupStep1: "On the screen, press [Card Top-up].",
    cardTopupStep2:
      "Select credit card as payment method and choose the amount.",
    cardTopupStep3:
      "Proceed with card payment (insert or tap your card).",
    cardTopupStep4:
      "After payment, tap your prepaid card on the top-up area on the lower right to complete.",
    cardTopupMistakeTitle: "🚨 Most common mistake",
    cardTopupMistake1:
      "❌ Not tapping the card at the end → In this case, the balance is not added even if payment is approved.",
    cardTopupMistake2:
      "✔ After payment, always tap the card once more.",
    cardTopupConfirmTitle: "④ Check that top-up is complete",
    cardTopupConfirm1:
      "Check that a “Top-up complete” message appears on the screen.",
    cardTopupConfirm2:
      "Confirm the charged amount and remaining balance before using the washer/dryer.",
    // Washer guide
    washerTitle: "Washer Guide",
    washerBanTitle: "🚫 Not allowed",
    washerBan1: "🔴 Pet items cannot be washed or dried.",
    washerBan2:
      "If violated, cleaning and damage fees may be charged.",
    washerBasicTitle: "📌 Basic information",
    washerInfo1: "Washer type: Medium",
    washerInfo2: "Large duvets may not fit.",
    washerInfo3: "Price: 4,000 KRW per cycle",
    washerInfo4: "Wash time: 36 minutes",
    washerImportantTitle: "⚠️ Most important notes",
    washerImportant1Title:
      "1️⃣ Always make sure the power is OFF before paying",
    washerImportant1Lead1:
      "If you insert 4,000 KRW while the washer is already on, it may turn off and become unusable.",
    washerImportant1Lead2:
      "💡 Every time 4,000 KRW is paid, the power may toggle on or off depending on the previous state. ✔ Always check the power status before use.",
    washerImportant2Title:
      "2️⃣ Detergent is dispensed automatically",
    washerImportant2Li1:
      "Detergent and softener are automatically dispensed multiple times during the wash.",
    washerImportant2Li2:
      "❌ Do not add extra detergent or softener.",
    washerPayTitle: "💰 Payment methods",
    washerCashTitle: "💵 Paying with cash",
    washerCashWarn:
      "⚠️ Make sure the payment slot matches your washer number.",
    washerCashStep1:
      "Use the changer to get 500 KRW coins.",
    washerCashStep2:
      "Insert 4,000 KRW → washer power turns on.",
    washerCashStep3:
      "Load laundry and close the door completely.",
    washerCashStep4: "Press the Start button.",
    washerCashNote:
      "❗ If the door is not fully closed, error “dc1” will occur and the washer will not run.",
    washerCardTitle: "💳 Paying with prepaid card",
    washerCardWarn:
      "⚠️ Make sure the payment slot matches your washer number.",
    washerCardStep1:
      "Tap your prepaid card on the reader (4,000 KRW is deducted per tap).",
    washerCardStep2:
      "When 4,000 KRW is paid, the washer power turns on.",
    washerCardStep3:
      "Load laundry and close the door completely.",
    washerCardStep4: "Press the Start button.",
    washerCardNote:
      "❗ If the door is not fully closed, error “dc1” will occur and the washer will not run.",
    washerCommonMistakeTitle: "🚨 Common mistakes",
    washerCommonMistake1:
      "❌ Paying while the power is already on.",
    washerCommonMistake2:
      "❌ Paying at the wrong machine number.",
    washerCommonMistake3:
      "❌ Pressing Start with the door not fully closed.",
    washerCommonMistake4:
      "✔ Please double-check before starting.",
    // Medium dryer
    dryerMediumTitle: "Medium Dryer Guide",
    dryerMediumBanTitle: "🚫 Not allowed",
    dryerMediumBan1: "🔴 Pet items cannot be dried.",
    dryerMediumBan2:
      "If violated, cleaning and damage fees may be charged.",
    dryerMediumBasicTitle: "📌 Basic information",
    dryerMediumInfo1: "Dryer type: Medium",
    dryerMediumInfo2:
      "Use large dryers for duvets and big items.",
    dryerMediumInfo3: "Price: 3,000 KRW per cycle",
    dryerMediumInfo4: "Dry time: 45 minutes",
    dryerMediumNote:
      "⏱ For longer drying, please use the large dryer.",
    dryerMediumImportantTitle: "⚠️ Most important notes",
    dryerMediumImportant1Title:
      "1️⃣ Always make sure the power is OFF before paying",
    dryerMediumImportant1Lead1:
      "If you insert 3,000 KRW while time remains from the previous user, the power may turn off and become unusable.",
    dryerMediumImportant1Lead2:
      "💡 Every time 3,000 KRW is paid, the power may toggle on or off depending on the previous state. ✔ Always check the power status before use.",
    dryerMediumImportant2Title:
      "2️⃣ Choose the proper drying course",
    dryerMediumImportant2Lead:
      "Select temperature and course to match the fabric.",
    dryerMediumPayTitle: "💰 Payment methods",
    dryerMediumCashTitle: "💵 Paying with cash",
    dryerMediumCashWarn:
      "⚠️ Make sure the payment slot matches your dryer number.",
    dryerMediumCashStep1:
      "Use the changer to get 500 KRW coins.",
    dryerMediumCashStep2:
      "Insert 3,000 KRW → dryer power turns on.",
    dryerMediumCashStep3:
      "Load laundry and close the door completely.",
    dryerMediumCashStep4: "Choose a drying course.",
    dryerMediumCashStep5: "Press the Start button.",
    dryerMediumCashNote:
      "❗ If the door is not fully closed, error “dc1” will occur and the dryer will not run.",
    dryerMediumCardTitle: "💳 Paying with prepaid card",
    dryerMediumCardWarn:
      "⚠️ Make sure the payment slot matches your dryer number.",
    dryerMediumCardStep1:
      "Tap your prepaid card on the reader (3,000 KRW is deducted in total).",
    dryerMediumCardStep2:
      "When 3,000 KRW is paid, the dryer power turns on.",
    dryerMediumCardStep3:
      "Load laundry and close the door completely.",
    dryerMediumCardStep4: "Choose a drying course.",
    dryerMediumCardStep5: "Press the Start button.",
    dryerMediumCardNote:
      "❗ If the door is not fully closed, error “dc1” will occur and the dryer will not run.",
    dryerMediumCommonMistakeTitle: "🚨 Common mistakes",
    dryerMediumCommonMistake1:
      "❌ Paying while the power is already on.",
    dryerMediumCommonMistake2:
      "❌ Paying at the wrong machine number.",
    dryerMediumCommonMistake3:
      "❌ Starting with the door not fully closed.",
    dryerMediumCommonMistake4:
      "❌ Using medium dryers for large duvets.",
    dryerMediumCommonMistake5:
      "✔ Please double-check before starting.",
    // Large dryer
    dryerLargeTitle: "Large Dryer Guide",
    dryerLargeBanTitle: "🚫 Not allowed",
    dryerLargeBan1: "🔴 Pet items cannot be dried.",
    dryerLargeBan2:
      "If violated, cleaning and damage fees may be charged.",
    dryerLargeBasicTitle: "📌 Basic information",
    dryerLargeInfo1: "Dryer type: Large",
    dryerLargeInfo2:
      "Fee: 500 KRW adds 4 minutes of drying time.",
    dryerLargeInfo3:
      "Examples: 2,000 KRW → 16 min / 4,000 KRW → 32 min",
    dryerLargeBasicNote:
      "✔ Simply insert the desired amount to get the time you need.",
    dryerLargeTempTitle: "🌡 Temperature selection",
    dryerLargeTempLead:
      "Choose the temperature according to the fabric.",
    dryerLargeTempLi1:
      "🔹 Low: delicate and functional fabrics",
    dryerLargeTempLi2:
      "🔸 Medium: general clothes (T-shirts, nylon, etc.)",
    dryerLargeTempLi3:
      "🔺 High: towels and thick fabrics",
    dryerLargeTempNote:
      "✔ Adjust temperature and time to match your laundry.",
    dryerLargePayTitle: "💰 Payment methods",
    dryerLargeCashTitle: "💵 Paying with cash",
    dryerLargeCashWarn:
      "⚠️ Make sure the machine number and slot match your dryer.",
    dryerLargeCashStep1:
      "Load laundry and close the door completely.",
    dryerLargeCashStep2:
      "Insert 500 KRW coins (time increases according to total amount).",
    dryerLargeCashStep3:
      "Select Low / Medium / High temperature.",
    dryerLargeCashStep4: "Press START to begin drying.",
    dryerLargeCardTitle: "💳 Paying with prepaid card",
    dryerLargeCardWarn:
      "⚠️ Make sure the machine number and slot match your dryer.",
    dryerLargeCardStep1:
      "Load laundry and close the door completely.",
    dryerLargeCardStep2:
      "Tap your prepaid card in 500 KRW units (each tap adds 4 minutes).",
    dryerLargeCardStep3:
      "Select Low / Medium / High temperature.",
    dryerLargeCardStep4: "Press START to begin drying.",
    dryerLargeCardNote:
      "✔ Example: 4,000 KRW in taps → 32 minutes.",
    dryerLargeCommonMistakeTitle: "🚨 Common mistakes",
    dryerLargeCommonMistake1:
      "❌ Paying at the wrong machine slot.",
    dryerLargeCommonMistake2:
      "❌ Using High temperature for delicate clothes.",
    dryerLargeCommonMistake3:
      "❌ Starting while the door is not fully closed.",
    dryerLargeCommonMistake4:
      "✔ Please double-check before starting.",
    // Goods & free items
    goodsTitle:
      "Duvet Bags & Free Softener Guide",
    goodsDuvetTitle:
      "🛍 Duvet plastic bags (500 KRW each)",
    goodsDuvetLead:
      "Large duvet bags are sold for 500 KRW each.",
    goodsDuvetHowTo: "📌 How to buy",
    goodsDuvetStep1:
      "Pay 500 KRW at the changer/vending machine (prepaid card or coins).",
    goodsDuvetStep2:
      "Press the top “Bag” button on the vending machine.",
    goodsDuvetStep3:
      "Take one bag from the bundle hanging on the left wall.",
    goodsFreeTitle: "🎁 Free items",
    goodsWasherDetergentTitle:
      "🧼 Washer detergent & softener",
    goodsWasherDetergentLi1:
      "Detergent and softener are automatically dispensed several times during washing.",
    goodsWasherDetergentLi2:
      "You do not need to add extra detergent.",
    goodsDryerSoftenerTitle:
      "🌸 Dryer softener (free)",
    goodsDryerSoftenerLi1:
      "Location: In the Lock&Lock box on the work table.",
    goodsDryerSoftenerLi2:
      "Please use only as much as you need.",
    goodsDryerSoftenerNote:
      "⚠️ If overused, this service may become paid instead of free.",
    goodsStainRemoverTitle:
      "✨ Stain remover (free)",
    goodsStainRemoverLi1:
      "Location: On the work table.",
    goodsStainRemoverLi2:
      "Apply generously to stained areas before washing.",
    goodsTipsTitle: "💡 Tips for use",
    goodsTipsLi1:
      "✔ Detergent is dispensed automatically.",
    goodsTipsLi2:
      "✔ Use only a small amount of dryer softener.",
    goodsTipsLi3:
      "✔ After payment, please take the bag yourself.",
    laundryIntro: "Self-service coin laundry for washing and drying. Open 24/7. Some machines automatically dispense detergent and fabric softener.",
    laundryVisualCap: "Self laundry guide image",
    laundryHowToTitle: "How to use",
    laundryStep1: "Sort clothes by color and fabric, then load them into the washing machine.",
    laundryStep2: "Get 500 KRW coins from the changer or use card/mobile payment.",
    laundryStep3: "Select a wash cycle (normal, wool, delicate, etc.) and start after payment.",
    laundryStep4: "When washing is done, move clothes to the dryer, insert coins, and run the dryer.",
    laundryFeeTitle: "Cost & duration",
    laundryFeeLabel: "Wash & dry cost",
    laundryFeeValue: "About 8,000–12,000 KRW per cycle",
    laundryFeeNote: "(Wash + dry; may vary by machine and location)",
    laundryTimeLabel: "Duration",
    laundryTimeValue: "Wash 35–40 min / Dry 30–40 min",
    laundryTimeNote: "About 60–75 minutes total",
    laundryNoticeTitle: "Please note",
    laundryNotice1: "Check whether detergent/softener is auto-dispensed; it varies by machine.",
    laundryNotice2: "Use large machines for blankets and coats.",
    laundryNotice3: "Please remove your laundry when finished.",
  },
  zh: {
    siteTitle: "多店使用指南",
    navHome: "首页",
    navLaundry: "自助洗衣",
    navPrint: "打印店",
    navMusic: "音乐练习室",
    sectionLaundryTitle: "自助洗衣",
    sectionLaundrySub: "SELF LAUNDRY",
    sectionPrintTitle: "打印店",
    sectionPrintSub: "PRINT SHOP",
    sectionMusicTitle: "音乐练习室",
    sectionMusicSub: "MUSIC STUDIO",
    footerCopy: "多店使用指南",
    subpageComingSoon: "请在此填写使用说明。",
    // 主洗衣房指南页面
    laundryMainTitle: "🧺 洗衣房使用指南",
    laundryPayTitle: "💳 结算方式说明",
    laundryCashTitle: "💵 现金结算",
    laundryCashBullet1: "使用500韩元硬币。",
    laundryCashBullet2: "请先在室内换币机将纸币换成硬币后使用。",
    laundryCashLink: "硬币兑换机指南",
    laundryCardTitle: "💳 刷卡结算",
    laundryCardBullet1: "请先在预付卡发卡机办理预付卡后使用。",
    laundryCardLink: "刷卡结算指南",
    laundryBonusTitle: "🎁 预付卡充值赠送说明",
    laundryBonusLead: "根据充值金额赠送额外金额。",
    laundryBonusColAmount: "充值金额",
    laundryBonusColBonus: "赠送金额",
    laundryMachineTitle: "🧼 洗衣机 / 烘干机运营信息",
    laundryMachineWasherCount: "洗衣机 4台运营",
    laundryMachineDryerCount: "烘干机 6台运营",
    laundryMachineDryerLarge: "大型 2台",
    laundryMachineDryerMedium: "中型 4台",
    laundryFigureCap: "洗衣房全景",
    laundryWasherLink: "洗衣机使用指南",
    laundryDryerMediumLink: "中型烘干机使用指南",
    laundryDryerLargeLink: "大型烘干机使用指南",
    laundryOtherTitle: "🛍 其他说明",
    laundryTopupLink: "预付卡充值指南",
    laundryGoodsLink: "被子专用袋销售、烘干机柔顺剂免费提供说明",
    laundryAcTitle: "❄️ 空调 / 供暖使用指南",
    laundryAcLi1: "天气炎热或寒冷时，可使用工作台上的遥控器开启空调/暖气。",
    laundryAcLi2: "❗ 使用后请务必关闭电源。",
    laundryAcNote: "✔ 为了下一位顾客，请多多配合。",
    // 硬币兑换机页面
    coinTitle: "硬币兑换机指南",
    coinMachineTitle: "💵 硬币兑换机",
    coinMachineBullet1:
      "在售货机左下方的纸币投入口投入1万韩元以下纸币，可兑换成500韩元硬币。",
    backToLaundry: "← 返回洗衣房使用指南",
    // 新预付卡办理
    cardIssuePageTitle: "🆕 新预付卡办理指南",
    cardIssueHeroDesc:
      "首次使用时，请先办理预付卡。",
    cardIssueCashTitle: "💵 现金办理预付卡",
    cardIssueHowTo: "📌 办理方法",
    cardIssueCashStep1: "选择「办卡」按钮",
    cardIssueCashStep2: "选择现金",
    cardIssueCashStep3: "选择金额后点击支付按钮",
    cardIssueCashStep4: "投入纸币",
    cardIssueCashStep5: "在卡出口取出预付卡",
    cardIssueCardTitle: "💳 信用卡办理预付卡",
    cardIssueCardStep2: "选择信用卡",
    cardIssueCardStep3: "选择金额后点击支付按钮",
    cardIssueCardStep4: "进行信用卡支付",
    cardIssueWarnTitle: "⚠️ 重要注意事项",
    cardIssueWarn1:
      "🔴 请勿将卡插入现金投入口！卡片进入设备内部后难以取出，并可能造成机器故障。",
    cardIssueWarn2: "✔ 仅投入纸币。",
    cardIssueCommonWarnTitle: "🚨 常见错误",
    cardIssueCommonWarn1: "❌ 将卡插入现金投入口",
    cardIssueCommonWarn2: "❌ 办理完成后未取走卡片",
    cardIssueCommonWarn3: "❌ 选择金额后未点击支付按钮",
    cardIssueCommonWarn4:
      "✔ 办理完成后请务必确认已拿到卡片。",
    // 预付卡充值指南
    cardTopupTitle: "预付卡充值指南",
    cardTopupMustReadTitle: "⚠️ 请务必阅读（重要）",
    cardTopupMustReadLead1:
      "🔴 充值过程中必须将预付卡贴在感应区，充值才会完成。",
    cardTopupMustReadLead2:
      "👉 最后一步如未贴卡，即使支付成功也不会充值到账。",
    cardTopupQuickTitle: "💡 一目了然的充值步骤",
    cardTopupQuickLead:
      "卡充值按钮 → 信用卡 → 选择金额 → 刷卡支付 → 预付卡贴卡 → 完成",
    cardTopupStep1: "在画面上选择「卡充值」按钮。",
    cardTopupStep2:
      "在支付方式中选择信用卡，并选择充值金额。",
    cardTopupStep3: "进行信用卡支付（插卡或感应支付）。",
    cardTopupStep4:
      "支付完成后，将预付卡贴在右下方的充值感应区，直至显示完成画面。",
    cardTopupMistakeTitle: "🚨 最常见的错误",
    cardTopupMistake1:
      "❌ 最后一步未贴卡 → 此情况下即使扣款成功，也不会充值到账。",
    cardTopupMistake2:
      "✔ 支付完成后，请务必再贴一次预付卡。",
    cardTopupConfirmTitle: "④ 确认充值是否完成",
    cardTopupConfirm1:
      "确认画面上是否显示「充值完成」信息。",
    cardTopupConfirm2:
      "确认充值金额与余额后，再在洗衣机/烘干机上使用。",
    // 洗衣机使用指南
    washerTitle: "洗衣机使用指南",
    washerBanTitle: "🚫 禁止事项",
    washerBan1: "🔴 禁止清洗、烘干宠物用品。",
    washerBan2:
      "如违规，可能会收取损坏赔偿及机器清洁费用。",
    washerBasicTitle: "📌 基本信息",
    washerInfo1: "洗衣机类型：中型",
    washerInfo2: "大型被子可能无法清洗。",
    washerInfo3: "使用费用：每次4,000韩元",
    washerInfo4: "洗涤时间：36分钟",
    washerImportantTitle: "⚠️ 最重要的注意事项",
    washerImportant1Title: "1️⃣ 请务必在电源关闭状态下付款",
    washerImportant1Lead1:
      "若在洗衣机已开启的状态下投币4,000韩元，可能会导致电源关闭而无法使用。",
    washerImportant1Lead2:
      "💡 每投入4,000韩元时，电源会根据前一次状态切换开/关。✔ 使用前请先确认电源状态。",
    washerImportant2Title: "2️⃣ 洗涤剂为自动投放",
    washerImportant2Li1:
      "洗涤过程中会自动多次投放洗涤剂与柔顺剂。",
    washerImportant2Li2: "❌ 请勿额外添加洗涤剂或柔顺剂。",
    washerPayTitle: "💰 结算方式",
    washerCashTitle: "💵 现金结算",
    washerCashWarn:
      "⚠️ 请务必确认投币口与所用洗衣机编号一致。",
    washerCashStep1: "在兑换机将纸币兑换为500韩元硬币。",
    washerCashStep2:
      "投入4,000韩元 → 洗衣机电源开启。",
    washerCashStep3: "放入衣物并将门完全关紧。",
    washerCashStep4: "按下「启动」按钮。",
    washerCashNote:
      "❗ 若门未完全关闭，将出现dc1错误，机器无法运行。",
    washerCardTitle: "💳 预付卡结算",
    washerCardWarn:
      "⚠️ 请务必确认刷卡机与所用洗衣机编号一致。",
    washerCardStep1:
      "在读卡区域刷预付卡（每次刷卡扣除4,000韩元）。",
    washerCardStep2:
      "扣除4,000韩元后，洗衣机电源开启。",
    washerCardStep3: "放入衣物并将门完全关紧。",
    washerCardStep4: "按下「启动」按钮。",
    washerCardNote:
      "❗ 若门未完全关闭，将出现dc1错误，机器无法运行。",
    washerCommonMistakeTitle: "🚨 常见错误",
    washerCommonMistake1: "❌ 在电源已开启状态下付款",
    washerCommonMistake2: "❌ 在错误编号的投币口/刷卡机付款",
    washerCommonMistake3: "❌ 门未关紧就按下启动按钮",
    washerCommonMistake4: "✔ 使用前请再确认一次。",
    // 中型烘干机
    dryerMediumTitle: "中型烘干机使用指南",
    dryerMediumBanTitle: "🚫 禁止事项",
    dryerMediumBan1: "🔴 禁止烘干宠物用品。",
    dryerMediumBan2:
      "如违规，可能会收取损坏赔偿及机器清洁费用。",
    dryerMediumBasicTitle: "📌 基本信息",
    dryerMediumInfo1: "烘干机类型：中型",
    dryerMediumInfo2:
      "大型被子、大件衣物建议使用大型烘干机。",
    dryerMediumInfo3: "使用费用：每次3,000韩元",
    dryerMediumInfo4: "烘干时间：45分钟",
    dryerMediumNote:
      "⏱ 需要更长时间时，请使用大型烘干机。",
    dryerMediumImportantTitle: "⚠️ 最重要的注意事项",
    dryerMediumImportant1Title:
      "1️⃣ 请务必在电源关闭状态下付款",
    dryerMediumImportant1Lead1:
      "若前一位顾客剩余时间未用完就再次投入3,000韩元，电源可能关闭导致无法使用。",
    dryerMediumImportant1Lead2:
      "💡 每投入3,000韩元时，电源会根据前一次状态切换开/关。✔ 使用前请先确认电源状态。",
    dryerMediumImportant2Title: "2️⃣ 请选择合适的烘干程序",
    dryerMediumImportant2Lead:
      "请根据衣物种类选择合适的温度和烘干程序。",
    dryerMediumPayTitle: "💰 结算方式",
    dryerMediumCashTitle: "💵 现金结算",
    dryerMediumCashWarn:
      "⚠️ 请务必确认投币口与所用烘干机编号一致。",
    dryerMediumCashStep1:
      "在兑换机将纸币兑换为500韩元硬币。",
    dryerMediumCashStep2:
      "投入3,000韩元 → 烘干机电源开启。",
    dryerMediumCashStep3: "放入衣物并将门完全关紧。",
    dryerMediumCashStep4: "选择烘干程序。",
    dryerMediumCashStep5: "按下「启动」按钮。",
    dryerMediumCashNote:
      "❗ 若门未完全关闭，将出现dc1错误，机器无法运行。",
    dryerMediumCardTitle: "💳 预付卡结算",
    dryerMediumCardWarn:
      "⚠️ 请务必确认刷卡机与所用烘干机编号一致。",
    dryerMediumCardStep1:
      "在读卡区域刷预付卡（总计扣除3,000韩元）。",
    dryerMediumCardStep2:
      "扣除3,000韩元后，烘干机电源开启。",
    dryerMediumCardStep3: "放入衣物并将门完全关紧。",
    dryerMediumCardStep4: "选择烘干程序。",
    dryerMediumCardStep5: "按下「启动」按钮。",
    dryerMediumCardNote:
      "❗ 若门未完全关闭，将出现dc1错误，机器无法运行。",
    dryerMediumCommonMistakeTitle: "🚨 常见错误",
    dryerMediumCommonMistake1: "❌ 在电源已开启状态下付款",
    dryerMediumCommonMistake2: "❌ 在错误编号的投币口/刷卡机付款",
    dryerMediumCommonMistake3: "❌ 门未关紧就开始烘干",
    dryerMediumCommonMistake4: "❌ 用中型烘干机烘大型被子",
    dryerMediumCommonMistake5: "✔ 使用前请再确认一次。",
    // 大型烘干机
    dryerLargeTitle: "大型烘干机使用指南",
    dryerLargeBanTitle: "🚫 禁止事项",
    dryerLargeBan1: "🔴 禁止烘干宠物用品。",
    dryerLargeBan2:
      "如违规，可能会收取损坏赔偿及机器清洁费用。",
    dryerLargeBasicTitle: "📌 基本信息",
    dryerLargeInfo1: "烘干机类型：大型",
    dryerLargeInfo2: "费用：每投入500韩元增加4分钟时间。",
    dryerLargeInfo3:
      "例：2,000韩元 → 16分钟 / 4,000韩元 → 32分钟",
    dryerLargeBasicNote:
      "✔ 只需根据需要的时间投入相应金额即可。",
    dryerLargeTempTitle: "🌡 温度选择说明",
    dryerLargeTempLead:
      "请根据衣物材质选择温度。",
    dryerLargeTempLi1:
      "🔹 低温 → 适合精致衣物、功能性衣物",
    dryerLargeTempLi2:
      "🔸 中温 → 一般衣物（T恤、尼龙等）",
    dryerLargeTempLi3:
      "🔺 高温 → 毛巾、厚重衣物",
    dryerLargeTempNote:
      "✔ 请根据布料调整温度和时间。",
    dryerLargePayTitle: "💰 结算方式",
    dryerLargeCashTitle: "💵 现金结算",
    dryerLargeCashWarn:
      "⚠️ 请务必确认机器编号与投币口位置正确。",
    dryerLargeCashStep1: "放入衣物并将门完全关紧。",
    dryerLargeCashStep2:
      "投入500韩元硬币（根据总金额增加时间）。",
    dryerLargeCashStep3:
      "在低温/中温/高温中选择温度。",
    dryerLargeCashStep4: "按下START按钮开始烘干。",
    dryerLargeCardTitle: "💳 预付卡结算",
    dryerLargeCardWarn:
      "⚠️ 请务必确认机器编号与刷卡位置正确。",
    dryerLargeCardStep1: "放入衣物并将门完全关紧。",
    dryerLargeCardStep2:
      "在读卡区域刷预付卡，每500韩元增加4分钟。",
    dryerLargeCardStep3:
      "在低温/中温/高温中选择温度。",
    dryerLargeCardStep4: "按下START按钮开始烘干。",
    dryerLargeCardNote:
      "✔ 例：刷卡共4,000韩元 → 32分钟。",
    dryerLargeCommonMistakeTitle: "🚨 常见错误",
    dryerLargeCommonMistake1: "❌ 在错误机器上投币/刷卡",
    dryerLargeCommonMistake2: "❌ 高温烘干精致衣物",
    dryerLargeCommonMistake3: "❌ 门未完全关闭就开始烘干",
    dryerLargeCommonMistake4: "✔ 使用前请再确认一次。",
    // 用品及免费提供
    goodsTitle: "被子专用袋销售、烘干机柔顺剂免费提供说明",
    goodsDuvetTitle: "🛍 被子专用塑料袋（每个500韩元）",
    goodsDuvetLead:
      "大型被子专用袋每个500韩元。",
    goodsDuvetHowTo: "📌 购买方法",
    goodsDuvetStep1:
      "在兑换机兼售货机上支付500韩元（可用预付卡或硬币）。",
    goodsDuvetStep2:
      "按下售货机最上方的「袋子」按钮。",
    goodsDuvetStep3:
      "从左侧墙上悬挂的袋子中取走一个。",
    goodsFreeTitle: "🎁 免费提供项目",
    goodsWasherDetergentTitle:
      "🧼 洗衣机洗涤剂 & 柔顺剂",
    goodsWasherDetergentLi1:
      "洗涤时会自动多次投放洗涤剂与柔顺剂。",
    goodsWasherDetergentLi2: "无需额外添加洗涤剂。",
    goodsDryerSoftenerTitle: "🌸 烘干机专用柔顺剂（免费）",
    goodsDryerSoftenerLi1:
      "位置：工作台上的密封收纳盒内。",
    goodsDryerSoftenerLi2: "请按需少量使用。",
    goodsDryerSoftenerNote:
      "⚠️ 若使用过量，免费服务可能会改为收费。",
    goodsStainRemoverTitle: "✨ 去污剂（免费）",
    goodsStainRemoverLi1: "位置：工作台上。",
    goodsStainRemoverLi2:
      "洗涤前请充分涂抹在污渍部位后再洗涤。",
    goodsTipsTitle: "💡 使用小贴士",
    goodsTipsLi1: "✔ 洗涤剂为自动投放。",
    goodsTipsLi2: "✔ 烘干机柔顺剂请少量使用。",
    goodsTipsLi3:
      "✔ 购买后请自行取走塑料袋。",
    laundryIntro: "可投币自助洗衣、烘干，24小时营业。部分机器自动投放洗涤剂和柔顺剂。",
    laundryVisualCap: "自助洗衣说明图",
    laundryHowToTitle: "使用方法",
    laundryStep1: "按颜色和材质分类衣物后放入洗衣机。",
    laundryStep2: "在换币机准备500韩元硬币，或使用卡/手机支付。",
    laundryStep3: "选择洗涤程序（普通、羊毛、轻柔等）并付款后开始洗涤。",
    laundryStep4: "洗涤结束后将衣物移入烘干机，投币后运行烘干。",
    laundryFeeTitle: "费用与时间",
    laundryFeeLabel: "洗衣·烘干费用",
    laundryFeeValue: "每次约8,000～12,000韩元",
    laundryFeeNote: "（洗衣+烘干，因机器和店铺而异）",
    laundryTimeLabel: "所需时间",
    laundryTimeValue: "洗衣35～40分钟 / 烘干30～40分钟",
    laundryTimeNote: "总计约60～75分钟",
    laundryNoticeTitle: "使用须知",
    laundryNotice1: "洗涤剂/柔顺剂是否自动投放因机器而异，使用前请确认。",
    laundryNotice2: "外套、被子等大件可使用大型洗衣机、烘干机。",
    laundryNotice3: "请在使用结束后取走衣物。",
  },
  ja: {
    siteTitle: "マルチショップご利用案内",
    navHome: "ホーム",
    navLaundry: "セルフランドリー",
    navPrint: "プリントショップ",
    navMusic: "音楽練習室",
    sectionLaundryTitle: "セルフランドリー",
    sectionLaundrySub: "SELF LAUNDRY",
    sectionPrintTitle: "プリントショップ",
    sectionPrintSub: "PRINT SHOP",
    sectionMusicTitle: "音楽練習室",
    sectionMusicSub: "MUSIC STUDIO",
    footerCopy: "マルチショップご利用案内",
    subpageComingSoon: "ご利用案内の内容をご記入ください。",
    // メイン・ランドリー案内ページ
    laundryMainTitle: "🧺 ランドリーご利用案内",
    laundryPayTitle: "💳 お支払い方法",
    laundryCashTitle: "💵 現金でのお支払い",
    laundryCashBullet1: "500ウォン硬貨をご利用ください。",
    laundryCashBullet2: "店内の両替機で紙幣を硬貨に両替してからご利用ください。",
    laundryCashLink: "両替機案内",
    laundryCardTitle: "💳 カードでのお支払い",
    laundryCardBullet1: "まずプリペイドカード発行機でカードを発行してからご利用ください。",
    laundryCardLink: "カード決済案内",
    laundryBonusTitle: "🎁 プリペイドカードチャージボーナス案内",
    laundryBonusLead: "チャージ金額に応じて追加金額が付与されます。",
    laundryBonusColAmount: "チャージ金額",
    laundryBonusColBonus: "追加付与",
    laundryMachineTitle: "🧼 洗濯機 / 乾燥機の台数",
    laundryMachineWasherCount: "洗濯機 4台稼働",
    laundryMachineDryerCount: "乾燥機 6台稼働",
    laundryMachineDryerLarge: "大型 2台",
    laundryMachineDryerMedium: "中型 4台",
    laundryFigureCap: "ランドリー全体の様子",
    laundryWasherLink: "洗濯機ご利用案内",
    laundryDryerMediumLink: "中型乾燥機ご利用案内",
    laundryDryerLargeLink: "大型乾燥機ご利用案内",
    laundryOtherTitle: "🛍 その他のご案内",
    laundryTopupLink: "プリペイドカードチャージ案内",
    laundryGoodsLink: "布団用ビニール袋販売・乾燥機用柔軟剤無料提供案内",
    laundryAcTitle: "❄️ 冷暖房のご利用案内",
    laundryAcLi1: "寒い日・暑い日は、作業台の上のリモコンでエアコンを操作できます。",
    laundryAcLi2: "❗ ご利用後は必ず電源をお切りください。",
    laundryAcNote: "✔ 次に利用されるお客様のためにご協力をお願いします。",
    // 両替機ページ
    coinTitle: "両替機案内",
    coinMachineTitle: "💵 両替機",
    coinMachineBullet1:
      "自販機左下の紙幣投入口に1万ウォン以下の紙幣を入れると、500ウォン硬貨に両替されます。",
    backToLaundry: "← ランドリー案内ページに戻る",
    // 新規プリペイドカード発行
    cardIssuePageTitle: "🆕 新規プリペイドカード発行案内",
    cardIssueHeroDesc:
      "初めてご利用の方は、まずプリペイドカードを発行してください。",
    cardIssueCashTitle: "💵 現金でカード発行",
    cardIssueHowTo: "📌 発行方法",
    cardIssueCashStep1: "「カード発行」ボタンを選択",
    cardIssueCashStep2: "現金を選択",
    cardIssueCashStep3: "金額を選んで「決済」ボタンを押す",
    cardIssueCashStep4: "紙幣を投入",
    cardIssueCashStep5: "カード排出口からカードを受け取る",
    cardIssueCardTitle: "💳 クレジットカードでカード発行",
    cardIssueCardStep2: "クレジットカードを選択",
    cardIssueCardStep3: "金額を選んで「決済」ボタンを押す",
    cardIssueCardStep4: "クレジットカード決済を行う",
    cardIssueWarnTitle: "⚠️ 重要な注意事項",
    cardIssueWarn1:
      "🔴 現金投入口にカードを入れないでください！カードが機械内部に入り込むと取り出しが難しく、故障の原因になります。",
    cardIssueWarn2: "✔ 紙幣のみ投入してください。",
    cardIssueCommonWarnTitle: "🚨 よくある間違い",
    cardIssueCommonWarn1: "❌ 現金投入口にカードを入れる",
    cardIssueCommonWarn2: "❌ 発行後にカードを取り忘れる",
    cardIssueCommonWarn3: "❌ 金額選択後に決済ボタンを押さない",
    cardIssueCommonWarn4:
      "✔ 発行完了後、必ずカードを受け取ったか確認してください。",
    // プリペイドカードチャージ案内
    cardTopupTitle: "プリペイドカードチャージ案内",
    cardTopupMustReadTitle: "⚠️ 必ずお読みください（重要）",
    cardTopupMustReadLead1:
      "🔴 チャージの途中で必ずカードをタッチしないと、チャージが完了しません。",
    cardTopupMustReadLead2:
      "👉 最後にカードをタッチしないと、決済完了でも残高が増えません。",
    cardTopupQuickTitle: "💡 チャージ手順（かんたんまとめ）",
    cardTopupQuickLead:
      "カードチャージ → クレジットカード → 金額選択 → カード決済 → カードをタッチ → 完了",
    cardTopupStep1:
      "画面で「カードチャージ」ボタンを選択します。",
    cardTopupStep2:
      "支払い方法でクレジットカードを選び、チャージ金額を選択します。",
    cardTopupStep3:
      "カードリーダーでクレジットカード決済を行います（挿入またはタッチ）。",
    cardTopupStep4:
      "決済後、右下のチャージ用リーダーにプリペイドカードをタッチし、「完了」画面が出るまで待ちます。",
    cardTopupMistakeTitle: "🚨 最も多いミス",
    cardTopupMistake1:
      "❌ 最後にカードをタッチしない → この場合、決済されても残高は増えません。",
    cardTopupMistake2:
      "✔ 決済完了後、必ずもう一度プリペイドカードをタッチしてください。",
    cardTopupConfirmTitle: "④ チャージ完了の確認",
    cardTopupConfirm1:
      "画面に「チャージ完了」メッセージが表示されているか確認します。",
    cardTopupConfirm2:
      "チャージ金額と残高を確認してから、洗濯機・乾燥機でご利用ください。",
    // 洗濯機案内
    washerTitle: "洗濯機ご利用案内",
    washerBanTitle: "🚫 ご利用いただけないもの",
    washerBan1: "🔴 ペット用品の洗濯・乾燥はできません。",
    washerBan2:
      "違反された場合、クリーニング費用や損害賠償を請求する場合があります。",
    washerBasicTitle: "📌 基本情報",
    washerInfo1: "洗濯機タイプ：中型",
    washerInfo2: "大型の布団は洗濯できない場合があります。",
    washerInfo3: "ご利用料金：1回 4,000ウォン",
    washerInfo4: "洗濯時間：36分",
    washerImportantTitle: "⚠️ 特に重要な注意事項",
    washerImportant1Title:
      "1️⃣ 必ず電源が「切」の状態でお支払いください",
    washerImportant1Lead1:
      "電源が入った状態で4,000ウォンを投入すると、電源が切れて使えなくなることがあります。",
    washerImportant1Lead2:
      "💡 4,000ウォン投入のたびに、前回の状態に応じて電源がオン/オフに切り替わります。✔ ご利用前に必ず電源状態を確認してください。",
    washerImportant2Title: "2️⃣ 洗剤は自動投入です",
    washerImportant2Li1:
      "洗剤と柔軟剤は洗濯中に自動で複数回投入されます。",
    washerImportant2Li2:
      "❌ 追加で洗剤や柔軟剤を入れないでください。",
    washerPayTitle: "💰 お支払い方法",
    washerCashTitle: "💵 現金でのお支払い",
    washerCashWarn:
      "⚠️ ご利用の洗濯機と同じ番号の投入口か必ず確認してください。",
    washerCashStep1:
      "両替機で紙幣を500ウォン硬貨に両替します。",
    washerCashStep2:
      "4,000ウォン投入 → 洗濯機の電源が入ります。",
    washerCashStep3:
      "洗濯物を入れ、ドアをしっかり閉めます。",
    washerCashStep4: "「動作」ボタンを押します。",
    washerCashNote:
      "❗ ドアが完全に閉まっていないと、dc1エラーが表示され動作しません。",
    washerCardTitle: "💳 プリペイドカードでのお支払い",
    washerCardWarn:
      "⚠️ ご利用の洗濯機と同じ番号のカードリーダーか必ず確認してください。",
    washerCardStep1:
      "カードリーダーにプリペイドカードをタッチします（1回で4,000ウォン減額）。",
    washerCardStep2:
      "4,000ウォン分決済されると、洗濯機の電源が入ります。",
    washerCardStep3:
      "洗濯物を入れ、ドアをしっかり閉めます。",
    washerCardStep4: "「動作」ボタンを押します。",
    washerCardNote:
      "❗ ドアが十分に閉まっていないと、dc1エラーが表示され動作しません。",
    washerCommonMistakeTitle: "🚨 よくあるミス",
    washerCommonMistake1: "❌ 電源が入った状態で支払う",
    washerCommonMistake2: "❌ 他の番号の投入口/カードリーダーに支払う",
    washerCommonMistake3: "❌ ドアが閉まりきっていない状態でスタート",
    washerCommonMistake4:
      "✔ ご利用前にもう一度ご確認ください。",
    // 中型乾燥機
    dryerMediumTitle: "中型乾燥機ご利用案内",
    dryerMediumBanTitle: "🚫 ご利用いただけないもの",
    dryerMediumBan1: "🔴 ペット用品の乾燥はできません。",
    dryerMediumBan2:
      "違反された場合、クリーニング費用や損害賠償を請求する場合があります。",
    dryerMediumBasicTitle: "📌 基本情報",
    dryerMediumInfo1: "乾燥機タイプ：中型",
    dryerMediumInfo2:
      "大型の布団や大きな洗濯物は大型乾燥機のご利用をおすすめします。",
    dryerMediumInfo3: "ご利用料金：1回 3,000ウォン",
    dryerMediumInfo4: "乾燥時間：45分",
    dryerMediumNote:
      "⏱ より長時間の乾燥が必要な場合は大型乾燥機をご利用ください。",
    dryerMediumImportantTitle: "⚠️ 特に重要な注意事項",
    dryerMediumImportant1Title:
      "1️⃣ 必ず電源が「切」の状態でお支払いください",
    dryerMediumImportant1Lead1:
      "前の方の残り時間がある状態で3,000ウォンを投入すると、電源が切れて使えない場合があります。",
    dryerMediumImportant1Lead2:
      "💡 3,000ウォン投入のたびに、前回の状態に応じて電源がオン/オフに切り替わります。✔ ご利用前に必ず電源状態を確認してください。",
    dryerMediumImportant2Title:
      "2️⃣ 乾燥コースを適切に選んでください",
    dryerMediumImportant2Lead:
      "衣類の種類に合わせて温度とコースを選んでください。",
    dryerMediumPayTitle: "💰 お支払い方法",
    dryerMediumCashTitle: "💵 現金でのお支払い",
    dryerMediumCashWarn:
      "⚠️ ご利用の乾燥機と同じ番号の投入口か必ず確認してください。",
    dryerMediumCashStep1:
      "両替機で紙幣を500ウォン硬貨に両替します。",
    dryerMediumCashStep2:
      "3,000ウォン投入 → 乾燥機の電源が入ります。",
    dryerMediumCashStep3:
      "洗濯物を入れ、ドアをしっかり閉めます。",
    dryerMediumCashStep4: "乾燥コースを選びます。",
    dryerMediumCashStep5: "「動作」ボタンを押します。",
    dryerMediumCashNote:
      "❗ ドアが完全に閉まっていないと、dc1エラーが表示され動作しません。",
    dryerMediumCardTitle: "💳 プリペイドカードでのお支払い",
    dryerMediumCardWarn:
      "⚠️ ご利用の乾燥機と同じ番号のカードリーダーか必ず確認してください。",
    dryerMediumCardStep1:
      "カードリーダーにプリペイドカードをタッチします（合計で3,000ウォン減額）。",
    dryerMediumCardStep2:
      "3,000ウォン分決済されると、乾燥機の電源が入ります。",
    dryerMediumCardStep3:
      "洗濯物を入れ、ドアをしっかり閉めます。",
    dryerMediumCardStep4: "乾燥コースを選びます。",
    dryerMediumCardStep5: "「動作」ボタンを押します。",
    dryerMediumCardNote:
      "❗ ドアが十分に閉まっていないと、dc1エラーが表示され動作しません。",
    dryerMediumCommonMistakeTitle: "🚨 よくあるミス",
    dryerMediumCommonMistake1: "❌ 電源が入った状態で支払う",
    dryerMediumCommonMistake2: "❌ 他の番号の投入口/カードリーダーに支払う",
    dryerMediumCommonMistake3: "❌ ドアが閉まりきっていない状態でスタート",
    dryerMediumCommonMistake4:
      "❌ 大型布団を中型乾燥機で乾燥させる",
    dryerMediumCommonMistake5:
      "✔ ご利用前にもう一度ご確認ください。",
    // 大型乾燥機
    dryerLargeTitle: "大型乾燥機ご利用案内",
    dryerLargeBanTitle: "🚫 ご利用いただけないもの",
    dryerLargeBan1: "🔴 ペット用品の乾燥はできません。",
    dryerLargeBan2:
      "違反された場合、クリーニング費用や損害賠償を請求する場合があります。",
    dryerLargeBasicTitle: "📌 基本情報",
    dryerLargeInfo1: "乾燥機タイプ：大型",
    dryerLargeInfo2:
      "料金：500ウォン投入ごとに4分追加されます。",
    dryerLargeInfo3:
      "例：2,000ウォン → 16分 / 4,000ウォン → 32分",
    dryerLargeBasicNote:
      "✔ 必要な時間分の金額を投入してご利用ください。",
    dryerLargeTempTitle: "🌡 温度選択の目安",
    dryerLargeTempLead:
      "衣類の素材に合わせて温度を選んでください。",
    dryerLargeTempLi1:
      "🔹 低温 → デリケート衣類・機能性ウェア",
    dryerLargeTempLi2:
      "🔸 中温 → 一般的な衣類（Tシャツ、ナイロンなど）",
    dryerLargeTempLi3:
      "🔺 高温 → タオルや厚手の衣類",
    dryerLargeTempNote:
      "✔ 生地に合った温度と時間を選んでください。",
    dryerLargePayTitle: "💰 お支払い方法",
    dryerLargeCashTitle: "💵 現金でのお支払い",
    dryerLargeCashWarn:
      "⚠️ ご利用の乾燥機と投入口の番号・位置が合っているか必ず確認してください。",
    dryerLargeCashStep1:
      "洗濯物を入れ、ドアをしっかり閉めます。",
    dryerLargeCashStep2:
      "500ウォン硬貨を投入します（投入金額に応じて時間が増加）。",
    dryerLargeCashStep3:
      "低温・中温・高温のいずれかを選択します。",
    dryerLargeCashStep4:
      "STARTボタンを押して乾燥を開始します。",
    dryerLargeCardTitle: "💳 プリペイドカードでのお支払い",
    dryerLargeCardWarn:
      "⚠️ ご利用の乾燥機とカードリーダーの番号・位置が合っているか必ず確認してください。",
    dryerLargeCardStep1:
      "洗濯物を入れ、ドアをしっかり閉めます。",
    dryerLargeCardStep2:
      "プリペイドカードをタッチし、500ウォン単位で決済します（1回タッチごとに4分追加）。",
    dryerLargeCardStep3:
      "低温・中温・高温のいずれかを選択します。",
    dryerLargeCardStep4:
      "STARTボタンを押して乾燥を開始します。",
    dryerLargeCardNote:
      "✔ 例：合計4,000ウォン分タッチ → 32分乾燥。",
    dryerLargeCommonMistakeTitle: "🚨 よくあるミス",
    dryerLargeCommonMistake1:
      "❌ 別の乾燥機の投入口/カードリーダーで支払う",
    dryerLargeCommonMistake2:
      "❌ 高温でデリケートな衣類を乾燥させる",
    dryerLargeCommonMistake3:
      "❌ ドアが完全に閉まっていない状態で開始する",
    dryerLargeCommonMistake4:
      "✔ ご利用前にもう一度ご確認ください。",
    // 掛け布団袋・無料サービス案内
    goodsTitle:
      "布団用ビニール袋販売・乾燥機用柔軟剤無料提供案内",
    goodsDuvetTitle:
      "🛍 布団用ビニール袋（1枚500ウォン）",
    goodsDuvetLead:
      "大型布団専用のビニール袋を1枚500ウォンで販売しています。",
    goodsDuvetHowTo: "📌 購入方法",
    goodsDuvetStep1:
      "両替機兼自販機で500ウォンを支払います（プリペイドカードまたはコイン）。",
    goodsDuvetStep2:
      "自販機最上段の「袋」ボタンを押します。",
    goodsDuvetStep3:
      "左側の壁にかけてある袋の束から1枚取ってください。",
    goodsFreeTitle: "🎁 無料サービスのご案内",
    goodsWasherDetergentTitle:
      "🧼 洗濯機用洗剤＆柔軟剤",
    goodsWasherDetergentLi1:
      "洗濯時に洗剤と柔軟剤が自動で複数回に分けて投入されます。",
    goodsWasherDetergentLi2:
      "追加で洗剤を入れる必要はありません。",
    goodsDryerSoftenerTitle:
      "🌸 乾燥機用柔軟剤（無料）",
    goodsDryerSoftenerLi1:
      "場所：作業台の上の保存容器（タッパー）の中にあります。",
    goodsDryerSoftenerLi2:
      "必要な分だけお使いください。",
    goodsDryerSoftenerNote:
      "⚠️ 使いすぎると、無料提供を中止し有料販売に変更する場合があります。",
    goodsStainRemoverTitle: "✨ シミ抜き剤（無料）",
    goodsStainRemoverLi1:
      "場所：作業台の上に置いてあります。",
    goodsStainRemoverLi2:
      "洗濯前に汚れた部分に十分に塗ってからご利用ください。",
    goodsTipsTitle: "💡 ご利用のコツ",
    goodsTipsLi1:
      "✔ 洗剤は自動投入されます。",
    goodsTipsLi2:
      "✔ 乾燥機用柔軟剤は少量だけご利用ください。",
    goodsTipsLi3:
      "✔ 袋はお支払い後、お客様ご自身でお取りください。",
    laundryIntro: "コインで洗濯・乾燥ができるセルフ洗濯場です。24時間利用可能。洗剤・柔軟剤が自動投入の機種もあります。",
    laundryVisualCap: "セルフ洗濯場案内画像",
    laundryHowToTitle: "ご利用方法",
    laundryStep1: "衣類を色・素材で分け、洗濯機に入れます。",
    laundryStep2: "両替機で500円玉を用意するか、カード・モバイル決済を選びます。",
    laundryStep3: "コース（通常・ウール・デリケート等）を選び、決済後に洗濯を開始します。",
    laundryStep4: "洗濯終了後、衣類を乾燥機に移し、コインを入れて乾燥します。",
    laundryFeeTitle: "料金・所要時間",
    laundryFeeLabel: "洗濯・乾燥料金",
    laundryFeeValue: "1回 約8,000～12,000ウォン",
    laundryFeeNote: "（洗濯+乾燥目安。機種・店舗により異なります）",
    laundryTimeLabel: "所要時間",
    laundryTimeValue: "洗濯35～40分 / 乾燥30～40分",
    laundryTimeNote: "合計60～75分程度",
    laundryNoticeTitle: "ご利用上の注意",
    laundryNotice1: "洗剤・柔軟剤の自動投入の有無は機種により異なります。利用前にご確認ください。",
    laundryNotice2: "上着・布団などは大型洗濯機・乾燥機の利用が便利です。",
    laundryNotice3: "洗濯・乾燥後は必ずお取りください。",
  },
};

let currentLang = localStorage.getItem("lang") || "ko";

function t(key) {
  return translations[currentLang]?.[key] ?? translations.ko[key] ?? key;
}

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang === "zh" ? "zh-CN" : lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key) el.textContent = t(key);
  });
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });
  const titleEl = document.querySelector("title");
  if (titleEl) titleEl.textContent = t(titleEl.getAttribute("data-i18n") || "siteTitle");
}

function initI18n() {
  const saved = localStorage.getItem("lang");
  if (saved && translations[saved]) currentLang = saved;
  document.documentElement.lang = currentLang === "zh" ? "zh-CN" : currentLang;
  setLanguage(currentLang);
}
