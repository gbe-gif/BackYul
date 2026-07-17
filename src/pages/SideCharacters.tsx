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

export default function SideCharacters() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-8 border-b border-navy-light pb-4">
        <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          총재실 주변의 인물들 및 요주의 대상
        </h1>
        <p className="text-cyan-neon/80 mt-2 text-xs font-bold tracking-widest uppercase">
          👥 주변 인물 (Characters)
        </p>
      </div>

      <div className="space-y-12">
        {/* Section 01 */}
        <section>
          <h2 className="text-xl font-bold text-white mb-5 flex items-center">
            <span className="bg-cyan-neon/10 text-cyan-neon px-2 py-0.5 rounded text-sm mr-3 border border-cyan-neon/30">01</span>
            클라우스 (Klaus)
          </h2>
          <img src="https://gbe88.uk/2/G/kl.webp" alt="클라우스 (Klaus)" className="w-full h-auto max-w-sm rounded-xl mb-6 border border-navy-light shadow-md" referrerPolicy="no-referrer" />
          <ul className="space-y-4">
            <BulletItem>직책: 세계이능관리국(WEA) 총재실 경호실장.</BulletItem>
            <BulletItem>나이 및 외형: 36세 남성임.</BulletItem>
            <BulletItem>신체 특징: 키 202cm의 거구와 우락부락하고 흉터가 남은 근육질 체형을 지님.</BulletItem>
            <BulletItem>인상 및 분위기: 짧게 깎은 백금발에 맑은 푸른 눈(벽안)을 가졌으며, 험악해 보이는 체격과 대비되는 무척 순한 눈매가 특징임.</BulletItem>
            <BulletItem>과거: 세계이능대전 당시 연합군 강습대대의 대위로 참전하여 활약한 베테랑 군인 출신임.</BulletItem>
            <BulletItem>이능력: 상위 등급의 '초강화' 능력을 보유함.</BulletItem>
            <BulletItem>능력 상세: 자신의 신체 능력을 인간의 한계를 넘어선 극한의 수준으로 끌어올릴 수 있음.</BulletItem>
            <SubBulletItem title="성격 및 행동 양식 (MBTI: ISTP):">
              <SubListItem>평소 과묵하고 묵묵히 자신의 자리를 지키는 우직한 성격임.</SubListItem>
              <SubListItem>백 율과 '당신'의 안전을 최우선으로 여기며, 위기 상황 시 한 치의 망설임 없이 기꺼이 자신의 몸을 고기 방패로 던지는 맹목적인 충성심을 보임.</SubListItem>
            </SubBulletItem>
          </ul>
        </section>

        {/* Section 02 */}
        <section>
          <h2 className="text-xl font-bold text-white mb-5 flex items-center">
            <span className="bg-cyan-neon/10 text-cyan-neon px-2 py-0.5 rounded text-sm mr-3 border border-cyan-neon/30">02</span>
            해리 클라크 (Harry Clark)
          </h2>
          <img src="https://gbe88.uk/2/G/ha.webp" alt="해리 클라크 (Harry Clark)" className="w-full h-auto max-w-sm rounded-xl mb-6 border border-navy-light shadow-md" referrerPolicy="no-referrer" />
          <ul className="space-y-4">
            <BulletItem>직책: 세계이능관리국(WEA) 총재실 수석 비서.</BulletItem>
            <BulletItem>나이 및 외형: 32세 남성임.</BulletItem>
            <BulletItem>신체 특징: 키 183cm의 탄탄하고 균형 잡힌 근육질 체형을 가짐.</BulletItem>
            <BulletItem>인상 및 분위기: 단정한 베이지색 머리카락과 지적인 녹색 눈(녹안)을 지닌 서늘한 인상의 냉미남임. 시력이 매우 뛰어남.</BulletItem>
            <BulletItem>과거: 세계이능대전 당시 백 율의 직속 부관이자 정보장교로 수행하며 두터운 신임을 쌓음.</BulletItem>
            <BulletItem>이능력: 상위 등급의 '맥락' 능력을 보유함.</BulletItem>
            <BulletItem>능력 상세: 드러나지 않은 정보의 이면이나 타인의 숨겨진 의도, 상황의 흐름(맥락)을 직관적이고 정확하게 포착해 냄.</BulletItem>
            <SubBulletItem title="성격 및 행동 양식 (MBTI: INTJ):">
              <SubListItem>매사 차분하고 이성적이며 상황 판단이 매우 빠르고 정확함.</SubListItem>
              <SubListItem>총재실의 방대한 실무와 스케줄을 오차 없이 완벽하게 통제하고 보좌하는 유능함을 자랑함.</SubListItem>
            </SubBulletItem>
          </ul>
        </section>

        {/* Section 03 */}
        <section>
          <h2 className="text-xl font-bold text-white mb-5 flex items-center">
            <span className="bg-cyan-neon/10 text-cyan-neon px-2 py-0.5 rounded text-sm mr-3 border border-cyan-neon/30">03</span>
            엔트로피 (Entropy)
          </h2>
          <img src="https://gbe88.uk/2/G/deltaS.webp" alt="엔트로피 (Entropy)" className="w-full h-auto max-w-sm rounded-xl mb-6 border border-navy-light shadow-md" referrerPolicy="no-referrer" />
          <ul className="space-y-4">
            <BulletItem>직책/위치: 소속 불명의 요주의 인물이자, 종종 '당신'을 채가는 별난 유괴범임.</BulletItem>
            <BulletItem>나이 및 외형: 나이 불명(불로불사의 존재로 추정됨)의 남성임.</BulletItem>
            <BulletItem>신체 특징: 키 197cm의 훤칠한 근육질 체형과 반짝이는 황금빛 눈동자를 가진 완벽한 조각 미남임.</BulletItem>
            <BulletItem>인상 및 분위기: 출몰할 때마다 헤어스타일과 착용하는 코스튬이 기상천외하게 바뀌어 종잡을 수 없는 분위기를 풍김.</BulletItem>
            <BulletItem>이능력: 세계관 내 단 2명뿐인 최상위 등급 중 하나로, '변수' 창출 능력을 보유함.</BulletItem>
            <BulletItem>능력 상세: 이미 발동된 인과율이나 확정된 물리 법칙에 개입하여 예측 불가능한 변수를 만들어냄.</BulletItem>
            <BulletItem>관리국 평가: 세계이능관리국 기준 적대감은 '0'이나, 그가 유발하는 혼돈 탓에 빌런들이 꼬이게 되어 위험도는 최고 등급인 '5'로 지정됨. (정작 본인은 자신을 숭배하는 빌런들에게 전혀 관심이 없음).</BulletItem>
            <BulletItem>과거: 전쟁 당시 끔찍한 살육전이 벌어지는 양 진영 사이를 구경 다니며, 그저 심심하다는 이유로 인명을 구조하는 기행을 벌임.</BulletItem>
            <SubBulletItem title="성격 및 행동 양식 (MBTI: ENTP):">
              <SubListItem>극도로 산만하고 잠시도 가만히 있지 못하는 통제 불능의 장난꾸러기 같은 성격임.</SubListItem>
              <SubListItem>상식이나 뚜렷한 목적이 완전히 결여되어 있으며, 오직 자신의 흥미와 재미만을 좇아 행동함.</SubListItem>
            </SubBulletItem>
            <SubBulletItem title="'당신'과의 관계 및 기행:">
              <SubListItem>심심해지면 단순히 관심을 끌기 위해 요란하게 '당신'을 납치해 감.</SubListItem>
              <SubListItem>해칠 의도는 전혀 없으며, 그저 '당신'을 곁에 두고 쉴 새 없이 수다를 떨거나 다음 기행을 구상하며 즐거워함.</SubListItem>
              <SubListItem>백 율이 무서운 기세로 쫓아오면 미련 없이 '당신'을 내려놓고 훌쩍 도망쳐 버림.</SubListItem>
              <SubListItem>평소 의류 소재로는 절대 쓰지 않을 황당한 재질로 만든 옷을 입고 다니며, 도무지 용도를 알 수 없는 괴랄한 물건들을 소지함.</SubListItem>
              <SubListItem>상상을 초월하는 미친 운동 신경을 바탕으로 현실의 물리 법칙을 비웃는 듯한 기상천외한 방식으로 등장함.</SubListItem>
            </SubBulletItem>
          </ul>
        </section>
      </div>
    </motion.div>
  );
}
