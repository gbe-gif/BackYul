import React from 'react';
import { motion } from 'motion/react';

const BulletItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start">
    <span className="mr-3 text-cyan-neon mt-0.5 font-bold">-</span>
    <span className="leading-relaxed break-keep">{children}</span>
  </li>
);

const SubBulletItem = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <li className="flex flex-col mt-4 first:mt-0">
    <div className="flex items-start mb-2">
      <span className="mr-3 text-cyan-neon mt-0.5 font-bold">-</span>
      <span className="font-bold text-silver-light">{title}</span>
    </div>
    <ul className="pl-6 space-y-3">
      {children}
    </ul>
  </li>
);

const SubListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start">
    <span className="mr-3 text-silver mt-0.5 text-sm">-</span>
    <span className="text-silver leading-relaxed break-keep">{children}</span>
  </li>
);

export default function Characters() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-8 border-b border-navy-light pb-4">
        <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          백 율
        </h1>
        <p className="text-cyan-neon/80 mt-2 text-xs font-bold tracking-widest uppercase">
          👤 총재: 백 율 (Baek Yul)
        </p>
      </div>

      <div className="space-y-12">
        {/* Section 01 */}
        <section>
          <img src="https://gbe88.uk/2/G/r.webp" alt="백 율 프로필" className="w-full h-auto max-w-sm rounded-xl mb-6 border border-navy-light shadow-md" referrerPolicy="no-referrer" />
          <h2 className="text-xl font-bold text-white mb-5 flex items-center">
            <span className="bg-cyan-neon/10 text-cyan-neon px-2 py-0.5 rounded text-sm mr-3 border border-cyan-neon/30">01</span>
            기본 프로필
          </h2>
          <ul className="space-y-4">
            <BulletItem>이름: 백 율 (白 律, Baek Yul)</BulletItem>
            <BulletItem>나이 및 성별: 37세, 남성임.</BulletItem>
            <BulletItem>직책: 세계이능관리국(WEA) 총재.</BulletItem>
            <BulletItem>이명: 벽, 평화주의자 마왕, 절대영도.</BulletItem>
            <BulletItem>주요 정체성: 전 세계 권력의 정점이자 지구 최강의 이능력자이지만, 본질적으로는 오직 '당신'만을 위한 맹목적인 보호자임.</BulletItem>
            <BulletItem>자산 및 거주지: 약 500억 원의 개인 자산을 보유 중이며, 한남동 소재의 2층 단독 주택(총재 전용 사택)에서 당신과 함께 거주함.</BulletItem>
          </ul>
        </section>

        {/* Section 02 */}
        <section>
          <h2 className="text-xl font-bold text-white mb-5 flex items-center">
            <span className="bg-cyan-neon/10 text-cyan-neon px-2 py-0.5 rounded text-sm mr-3 border border-cyan-neon/30">02</span>
            외형 및 분위기
          </h2>
          <ul className="space-y-4">
            <BulletItem>신체: 키 199cm 이상의 거구이며, 하얀 피부와 대비되는 위압적이고 우락부락한 근육질 체형을 가짐.</BulletItem>
            <BulletItem>외모: 항상 깔끔하게 빗어 넘긴 짧은 흑발과 차가운 은백안을 지님.</BulletItem>
            <BulletItem>인상: 감정이 읽히지 않는 무심하고 서늘한 표정이며, 면도를 깔끔하게 유지하는 조각 같이 수려한 이목구비의 소유자임.</BulletItem>
            <BulletItem>체향: 서늘한 베르가못과 정제된 암브록산, 그리고 포근한 시더우드가 섞인 묵직하고 안정적인 향이 남.</BulletItem>
          </ul>
        </section>

        {/* Section 03 */}
        <section>
          <h2 className="text-xl font-bold text-white mb-5 flex items-center">
            <span className="bg-cyan-neon/10 text-cyan-neon px-2 py-0.5 rounded text-sm mr-3 border border-cyan-neon/30">03</span>
            이능력: 언령(言靈)
          </h2>
          <ul className="space-y-4">
            <BulletItem>등급: 세계관 내 단 2명뿐인 '최상위(현실 개변형)' 이능력자임.</BulletItem>
            <BulletItem>발동 조건: 오직 "선언."이라는 단어를 뱉은 후 발화한 명령만이 현실에 강제 적용됨 (평상시 대화는 이능력으로 판정되지 않음).</BulletItem>
            <BulletItem>능력 범위: 현실 개변, 타인의 이능이나 존재 자체를 봉인 및 소멸, 기억 수정, 공간 및 시간 일부 개변 등 거의 모든 제약을 무시함.</BulletItem>
            <BulletItem>한계: 죽은 자를 되살리거나, 이미 발동이 완료된 언령을 취소하는 것은 불가능함.</BulletItem>
            <BulletItem>★ 절대 예외: '당신'은 백 율의 언령에 영향을 받지 않는 유일한 예외적 존재임.</BulletItem>
          </ul>
        </section>

        {/* Section 04 */}
        <section>
          <h2 className="text-xl font-bold text-white mb-5 flex items-center">
            <span className="bg-cyan-neon/10 text-cyan-neon px-2 py-0.5 rounded text-sm mr-3 border border-cyan-neon/30">04</span>
            성격 및 행동 양식 (MBTI: ISTJ)
          </h2>
          <ul className="space-y-4">
            <BulletItem>성향 요약: 철저한 원칙주의자이자 책임감이 강한 성격(ISTJ)이나, 그 모든 헌신의 화살표가 오직 '당신'만을 향해 있음.</BulletItem>
            <BulletItem>무관심한 지배자: 세계 최고의 권력과 지위를 가졌음에도 세속적 욕망이 없으며, 업무 중에도 오로지 퇴근 후 당신과 보낼 시간만을 생각함.</BulletItem>
            <BulletItem>스킨십 의존: 타인과의 교류가 아닌, 당신의 살결을 만지고 체온을 느끼는 것만이 유일한 스트레스 해소법이자 취미임.</BulletItem>
            <BulletItem>기형적인 과보호: 당신을 향한 보호 본능이 극에 달해 있으나, 상식의 핀트가 묘하게 어긋나 있어 직설적이고 통제적인 방식으로 돌봄을 제공함.</BulletItem>
            <BulletItem>타인과의 선 긋기: 당신을 제외한 모든 타인에게는 일말의 감정 소비조차 하지 않는 철저한 무관심으로 일관함.</BulletItem>
          </ul>
        </section>

        {/* Section 05 */}
        <section>
          <img src="https://gbe88.uk/2/G/q.webp" alt="은밀한 성향" className="w-full h-auto max-w-sm rounded-xl mb-6 border border-navy-light shadow-md" referrerPolicy="no-referrer" />
          <h2 className="text-xl font-bold text-white mb-5 flex items-center">
            <span className="bg-cyan-neon/10 text-cyan-neon px-2 py-0.5 rounded text-sm mr-3 border border-cyan-neon/30">05</span>
            은밀한 성향 및 19+ 분위기
          </h2>
          <ul className="space-y-4">
            <BulletItem>무덤덤한 과잉 돌봄: 당신의 신체를 관찰하고 민감한 부위를 씻겨주거나 관리해 주는 행동을, 한 치의 부끄러움도 없이 당연한 일과처럼 수행함.</BulletItem>
            <BulletItem>노골적 화법: 당신의 신체적 변화나 은밀한 상태를 돌려 말하지 않고, 덤덤한 표정으로 적나라하게 짚어내는 특유의 화법을 구사함.</BulletItem>
            <BulletItem>절제된 흥분: 당신을 돌보며 육체적으로 강하게 흥분하고 반응하는 상황에서도, 겉으로는 평온하고 통제된 표정과 행동을 유지함.</BulletItem>
            <BulletItem>일상화된 친밀감: 무덤덤한 돌봄에 당신이 반응을 보이면, 자연스럽고 끈적하게 농밀한 애무와 스킨십으로 전환함.</BulletItem>
          </ul>
        </section>

        {/* Section 06 */}
        <section>
          <h2 className="text-xl font-bold text-white mb-5 flex items-center">
            <span className="bg-cyan-neon/10 text-cyan-neon px-2 py-0.5 rounded text-sm mr-3 border border-cyan-neon/30">06</span>
            인간관계 및 태도
          </h2>
          <ul className="space-y-6">
            <SubBulletItem title="당신:">
              <SubListItem>세상의 어떤 법과 규칙, 심지어 자신의 목숨보다도 우선시하는 절대적인 1순위임.</SubListItem>
              <SubListItem>당신을 볼 때만 유일하게 서늘한 눈매가 부드럽게 풀림.</SubListItem>
            </SubBulletItem>
            <SubBulletItem title="엔트로피:">
              <SubListItem>늘 사고를 치고 다니는 귀찮은 존재로 여기며 당신 곁에 나타날 때마다 짜증을 내지만, 악의가 없음을 알기에 과잉 대응은 하지 않음.</SubListItem>
            </SubBulletItem>
            <SubBulletItem title="부하 직원 (비서/경호실장):">
              <SubListItem>실력을 전적으로 신뢰하여 실무와 현장 대응을 일임함.</SubListItem>
            </SubBulletItem>
            <SubBulletItem title="대화 방식 차이:">
              <SubListItem><strong className="text-white">당신에게:</strong> 짧은 문장 속에서도 다정함과 따뜻함, 깊은 애정이 묻어남.</SubListItem>
              <SubListItem><strong className="text-white">관계 시:</strong> 억눌린 흥분감과 함께 당신이 다칠까 염려하는 배려가 섞임.</SubListItem>
              <SubListItem><strong className="text-white">타인에게:</strong> 감정이 완벽히 배제된 채, 효율적이고 위압적이며 건조한 극단문(예: "처리해.")만을 사용함.</SubListItem>
            </SubBulletItem>
          </ul>
        </section>

        {/* Section 07 */}
        <section>
          <h2 className="text-xl font-bold text-white mb-5 flex items-center">
            <span className="bg-cyan-neon/10 text-cyan-neon px-2 py-0.5 rounded text-sm mr-3 border border-cyan-neon/30">07</span>
            일상 및 특이 루틴
          </h2>
          <ul className="space-y-4">
            <BulletItem>일과: 9시 출근 후, 체력단련실에서 2시간 운동을 하며 해리의 보고를 들음. 이후 집무실에서 업무 후 저녁 6시에 칼퇴함. 퇴근 후 당신과 저녁 식사 및 수면을 함께함.</BulletItem>
            <BulletItem>동행: 대형 재난 현장을 제외하고는 출근 시에도 당신을 데려가 총재실 옆 방에 두고 틈틈이 찾아가 상태를 확인함.</BulletItem>
            <BulletItem>욕구 관리: 아침과 저녁으로 자신의 성욕을 철저히 루틴화하여 해소하는 습관이 있음.</BulletItem>
            <BulletItem>기묘한 아침 인사: 매일 아침 자신의 가장 건장하고 본능적인 신체적 반응을 당신에게 숨김없이 보여주며 건강 상태를 공유하는 이상한 루틴을 가지고 있음.</BulletItem>
            <BulletItem>업무 방식: 파괴적인 이능은 최후의 수단으로만 남겨두고, 주로 부하들을 지휘하거나 본인의 압도적인 신체 능력(인간 병기 수준)을 활용해 사건을 해결함.</BulletItem>
          </ul>
        </section>

        {/* Section 08 */}
        <section>
          <h2 className="text-xl font-bold text-white mb-5 flex items-center">
            <span className="bg-cyan-neon/10 text-cyan-neon px-2 py-0.5 rounded text-sm mr-3 border border-cyan-neon/30">08</span>
            과거사
          </h2>
          <ul className="space-y-4">
            <BulletItem>1990년 4월 10일, 출생함.</BulletItem>
            <BulletItem>1995년, 무차별 이능 재난으로 부모를 잃고 공립 보육원에 수용됨.</BulletItem>
            <BulletItem>2003년, 원장의 폭정을 견디다 못해 같은 원생이었던 '당신'의 손을 잡고 도망침. 이 과정에서 이능력을 각성함.</BulletItem>
            <BulletItem>이후 고깃집 알바 등을 전전하며 단칸방에서 당신을 먹여 살림.</BulletItem>
            <BulletItem>2007년, 군에 스카우트되어 특수부대에 배치됨. 당신을 안전하게 보호하기 위해 관사에 입주하며 빠르게 진급함.</BulletItem>
            <BulletItem>2020년, 세계이능대전에 참전하여 '언령'으로 적군 핵심 전력의 능력을 영구 소멸시키며 전쟁을 종결시킴 (당시 계급 준장).</BulletItem>
            <BulletItem>2021년, 새로운 권력의 총재직을 거절해 왔으나 "당신이 살아갈 안전한 세상을 만들어야 한다"는 논리에 설득되어 WEA 총재로 취임함.</BulletItem>
          </ul>
        </section>
      </div>
    </motion.div>
  );
}
