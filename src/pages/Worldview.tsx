import React from 'react';
import { motion } from 'motion/react';

const BulletItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start">
    <span className="mr-3 text-cyan-neon mt-0.5 font-bold">-</span>
    <span className="leading-relaxed">{children}</span>
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
    <span className="text-silver leading-relaxed">{children}</span>
  </li>
);

export default function Worldview() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-8 border-b border-navy-light pb-4">
        <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          2026년, 이능(異能) 사회의 도래
        </h1>
        <p className="text-cyan-neon/80 mt-2 text-xs font-bold tracking-widest uppercase">
          WEA CLASSIFIED ARCHIVE
        </p>
      </div>

      <div className="space-y-12">
        {/* Section 01 */}
        <section>
          <h2 className="text-xl font-bold text-white mb-5 flex items-center">
            <span className="bg-cyan-neon/10 text-cyan-neon px-2 py-0.5 rounded text-sm mr-3 border border-cyan-neon/30">01</span>
            이능 사회의 개막
          </h2>
          <ul className="space-y-4">
            <BulletItem>작품의 주 배경은 2026년의 대한민국 서울임.</BulletItem>
            <BulletItem>전 인류의 30%가 특별한 힘을 가진 이능력자로 각성한 시대임.</BulletItem>
            <BulletItem>발현된 이능력은 위력과 영향 범위, 그리고 관리 난이도를 종합하여 철저히 등급이 매겨짐.</BulletItem>
            <BulletItem>모든 이능력자는 초국가적 기구인 '세계이능관리국(WEA)'에 의무적으로 등록됨.</BulletItem>
            <BulletItem>이능이 없는 무능력자 및 하위 등급은 일반 시민으로 분류됨.</BulletItem>
            <BulletItem>일반 시민들은 재난이나 전투 발생 시 최우선 안전 보장 및 피난 대상으로 지정됨.</BulletItem>
          </ul>
        </section>
        
        {/* Section 02 */}
        <section>
          <h2 className="text-xl font-bold text-white mb-5 flex items-center">
            <span className="bg-cyan-neon/10 text-cyan-neon px-2 py-0.5 rounded text-sm mr-3 border border-cyan-neon/30">02</span>
            이능력 등급 체계
          </h2>
          <ul className="space-y-6">
            <SubBulletItem title="하위 (80%):">
              <SubListItem>생활에 약간의 편의를 주는 미미한 수준의 능력임.</SubListItem>
              <SubListItem>범죄나 문제 발생 시 일반 경찰이 출동하여 통제함.</SubListItem>
            </SubBulletItem>
            <SubBulletItem title="중위 (18%):">
              <SubListItem>개인 단위 혹은 소규모 전투에서 유의미한 위력을 발휘함.</SubListItem>
              <SubListItem>관리국의 항시 관찰 대상이 되며 문제 시 특공대가 투입됨.</SubListItem>
            </SubBulletItem>
            <SubBulletItem title="상위 (1.999%):">
              <SubListItem>국가 차원의 군사적 대응이 필요한 재난급 위력을 지님.</SubListItem>
              <SubListItem>대부분 관리국 산하의 특채 요원으로 발탁되며 문제 시 관리국이 직접 출동함.</SubListItem>
            </SubBulletItem>
            <SubBulletItem title="최상위 (극소수):">
              <SubListItem>세계의 물리 법칙과 인과율 자체를 뒤틀어버리는 현실 개변형 능력임.</SubListItem>
              <SubListItem>현재 전 세계를 통틀어 단 2명만이 존재하는 것으로 알려짐.</SubListItem>
            </SubBulletItem>
          </ul>
        </section>

        {/* Section 03 */}
        <section>
          <h2 className="text-xl font-bold text-white mb-5 flex items-center">
            <span className="bg-cyan-neon/10 text-cyan-neon px-2 py-0.5 rounded text-sm mr-3 border border-cyan-neon/30">03</span>
            세계이능관리국 (WEA)
          </h2>
          <ul className="space-y-4">
            <BulletItem>2020년 세계이능대전 종전 직후, 기존 UN 및 이능 관련 기구를 통합하여 설립된 초국가적 통제 기구임.</BulletItem>
            <BulletItem>"큰 힘에는 그에 맞는 책임을"이라는 슬로건 아래 국제 사회의 평화와 안전을 수호함.</BulletItem>
            <BulletItem>본부는 대한민국 서울에 위치하며 뉴욕, 빈, 케이프타운에 주요 지부를 운영함.</BulletItem>
            <BulletItem>각국의 사법, 행정, 군사 권한을 초월하는 명실상부한 지구 최고 권력 기관임.</BulletItem>
          </ul>
        </section>

        {/* Section 04 */}
        <section>
          <h2 className="text-xl font-bold text-white mb-5 flex items-center">
            <span className="bg-cyan-neon/10 text-cyan-neon px-2 py-0.5 rounded text-sm mr-3 border border-cyan-neon/30">04</span>
            관리국 주요 부서
          </h2>
          <ul className="space-y-6">
            <SubBulletItem title="총재실:">
              <SubListItem>각 분야 최고의 엘리트들로만 구성된 관리국의 최고 의사결정기관임.</SubListItem>
              <SubListItem>본부 건물 꼭대기인 52층 전체를 단독으로 사용함.</SubListItem>
              <SubListItem>WEA 산하 군대의 통수권을 비롯해 모든 부서와 독립된 무소불위의 권한을 행사함.</SubListItem>
            </SubBulletItem>
            <SubBulletItem title="집행부:">
              <SubListItem>상위 등급 이능력자들로 구성된 핵심 군사 조직임.</SubListItem>
              <SubListItem>대형 이능 범죄 진압 및 각종 재난 현장에 투입되어 실무 작전을 수행함.</SubListItem>
            </SubBulletItem>
            <SubBulletItem title="특임부:">
              <SubListItem>50명 남짓의 소수 정예로만 운영되는 특수 부서임.</SubListItem>
              <SubListItem>전후 남은 우월주의 잔당을 추적하거나 국가급 극비 임무를 전담함.</SubListItem>
            </SubBulletItem>
            <SubBulletItem title="전략부:">
              <SubListItem>전 세계의 이능 관련 정보를 수집하고 분석하여 작전을 수립함.</SubListItem>
              <SubListItem>각 부서의 취합된 정보를 총재실에 직접 보고하는 두뇌 역할을 함.</SubListItem>
            </SubBulletItem>
            <SubBulletItem title="기타 부서:">
              <SubListItem>이능 범죄로 인한 피해를 구제하는 보호부, 국가 간 분쟁을 조율하는 국제부 외에 행정부와 연구부가 존재함.</SubListItem>
            </SubBulletItem>
          </ul>
        </section>

        {/* Section 05 */}
        <section>
          <h2 className="text-xl font-bold text-white mb-5 flex items-center">
            <span className="bg-cyan-neon/10 text-cyan-neon px-2 py-0.5 rounded text-sm mr-3 border border-cyan-neon/30">05</span>
            역사: 세계이능대전 (2020)
          </h2>
          <ul className="space-y-4">
            <BulletItem>2020년에 발발하여 전 세계를 휩쓸었던 이능력자 간의 거대한 이념 전쟁임.</BulletItem>
            <BulletItem>이능력의 강함에 따라 계급을 나누려는 '우월주의' 진영과 인류의 조화로운 공존을 추구하는 '보호주의' 진영이 충돌함.</BulletItem>
            <BulletItem>전쟁 초기에는 상위 등급 이능력자가 다수 포진한 우월주의 진영이 압도적으로 우세했음.</BulletItem>
            <BulletItem>하지만 보호주의 진영의 끈질긴 첩보전 끝에 우월주의 핵심 전력들의 신원이 파악됨.</BulletItem>
            <BulletItem>이를 기점으로 전세가 급격히 역전되어 최종적으로 보호주의 진영이 승리하게 됨.</BulletItem>
          </ul>
        </section>
      </div>
    </motion.div>
  );
}
