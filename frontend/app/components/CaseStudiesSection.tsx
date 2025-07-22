'use client'

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// Icon components
const DataVisIcon = () => (
  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
    <path d="M26 21.9911C25.2879 21.9951 24.5901 22.1909 23.98 22.5579L20.167 18.7456C20.7103 17.9306 21.0001 16.9731 21.0001 15.9938C21.0001 15.0145 20.7103 14.057 20.167 13.242L22.714 10.6961C23.3583 11.0064 24.0917 11.0786 24.7842 10.9001C25.4767 10.7216 26.0836 10.3038 26.4975 9.72087C26.9113 9.13789 27.1054 8.42731 27.0453 7.715C26.9852 7.00269 26.6748 6.33462 26.1691 5.82916C25.6635 5.32369 24.9951 5.01344 24.2825 4.95337C23.5698 4.89331 22.8589 5.0873 22.2757 5.50098C21.6925 5.91466 21.2745 6.52133 21.096 7.21352C20.9174 7.90571 20.9897 8.63875 21.3 9.28277L18.753 11.8286C17.9376 11.2856 16.9798 10.9959 16 10.9959C15.0202 10.9959 14.0624 11.2856 13.247 11.8286L9.433 8.01633C9.80001 7.40678 9.99587 6.70964 10 5.99823C10 5.20745 9.7654 4.43444 9.32588 3.77693C8.88635 3.11943 8.26164 2.60696 7.53073 2.30435C6.79983 2.00173 5.99556 1.92255 5.21964 2.07683C4.44372 2.2311 3.73098 2.61189 3.17157 3.17105C2.61216 3.73022 2.2312 4.44263 2.07686 5.21821C1.92252 5.99379 2.00173 6.7977 2.30448 7.52828C2.60723 8.25886 3.11992 8.8833 3.77772 9.32263C4.43552 9.76196 5.20888 9.99645 6 9.99645C6.71207 9.99251 7.40989 9.79672 8.02 9.4297L11.833 13.242C11.2897 14.057 10.9999 15.0145 10.9999 15.9938C10.9999 16.9731 11.2897 17.9306 11.833 18.7456L8.019 22.5579C7.40918 22.191 6.71173 21.9953 6 21.9911C5.20888 21.9911 4.43552 22.2256 3.77772 22.665C3.11992 23.1043 2.60723 23.7287 2.30448 24.4593C2.00173 25.1899 1.92252 25.9938 2.07686 26.7694C2.2312 27.5449 2.61216 28.2574 3.17157 28.8165C3.73098 29.3757 4.44372 29.7565 5.21964 29.9108C5.99556 30.065 6.79983 29.9858 7.53073 29.6832C8.26164 29.3806 8.88635 28.8682 9.32588 28.2106C9.7654 27.5531 10 26.7801 10 25.9894C9.99605 25.2776 9.80018 24.5801 9.433 23.9702L13.247 20.1589C13.7792 20.5126 14.3743 20.7609 15 20.8906V24.1742C14.3328 24.4099 13.7704 24.8739 13.4124 25.4841C13.0543 26.0942 12.9235 26.8112 13.0432 27.5084C13.1629 28.2056 13.5253 28.8381 14.0663 29.294C14.6074 29.7499 15.2923 30 16 30C16.7077 30 17.3926 29.7499 17.9337 29.294C18.4747 28.8381 18.8371 28.2056 18.9568 27.5084C19.0765 26.8112 18.9457 26.0942 18.5876 25.4841C18.2296 24.8739 17.6672 24.4099 17 24.1742V20.8906C17.6257 20.7609 18.2208 20.5126 18.753 20.1589L22.567 23.9712C22.2 24.5808 22.0041 25.2779 22 25.9894C22 26.7801 22.2346 27.5531 22.6741 28.2106C23.1136 28.8682 23.7384 29.3806 24.4693 29.6832C25.2002 29.9858 26.0044 30.065 26.7804 29.9108C27.5563 29.7565 28.269 29.3757 28.8284 28.8165C29.3878 28.2574 29.7688 27.5449 29.9231 26.7694C30.0775 25.9938 29.9983 25.1899 29.6955 24.4593C29.3928 23.7287 28.8801 23.1043 28.2223 22.665C27.5645 22.2256 26.7911 21.9911 26 21.9911Z" fill="#C4E538" />
  </svg>
);

const LogicalPartitionIcon = () => (
  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
    <path d="M9 8C9.55228 8 10 7.55228 10 7C10 6.44772 9.55228 6 9 6C8.44772 6 8 6.44772 8 7C8 7.55228 8.44772 8 9 8Z" fill="#C4E538" />
    <path d="M27 22V18C27 17.4696 26.7893 16.9609 26.4142 16.5858C26.0391 16.2107 25.5304 16 25 16H17V12H26C26.5304 12 27.0391 11.7893 27.4142 11.4142C27.7893 11.0391 28 10.5304 28 10V4C28 3.46957 27.7893 2.96086 27.4142 2.58579C27.0391 2.21071 26.5304 2 26 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V10C4 10.5304 4.21071 11.0391 4.58579 11.4142C4.96086 11.7893 5.46957 12 6 12H15V16H7C6.46957 16 5.96086 16.2107 5.58579 16.5858C5.21071 16.9609 5 17.4696 5 18V22H4C3.46957 22 2.96086 22.2107 2.58579 22.5858C2.21071 22.9609 2 23.4696 2 24V28C2 28.5304 2.21071 29.0391 2.58579 29.4142C2.96086 29.7893 3.46957 30 4 30H8C8.53043 30 9.03914 29.7893 9.41421 29.4142C9.78929 29.0391 10 28.5304 10 28V24C10 23.4696 9.78929 22.9609 9.41421 22.5858C9.03914 22.2107 8.53043 22 8 22H7V18H15V22H14C13.4696 22 12.9609 22.2107 12.5858 22.5858C12.2107 22.9609 12 23.4696 12 24V28C12 28.5304 12.2107 29.0391 12.5858 29.4142C12.9609 29.7893 13.4696 30 14 30H18C18.5304 30 19.0391 29.7893 19.4142 29.4142C19.7893 29.0391 20 28.5304 20 28V24C20 23.4696 19.7893 22.9609 19.4142 22.5858C19.0391 22.2107 18.5304 22 18 22H17V18H25V22H24C23.4696 22 22.9609 22.2107 22.5858 22.5858C22.2107 22.9609 22 23.4696 22 24V28C22 28.5304 22.2107 29.0391 22.5858 29.4142C22.9609 29.7893 23.4696 30 24 30H28C28.5304 30 29.0391 29.7893 29.4142 29.4142C29.7893 29.0391 30 28.5304 30 28V24C30 23.4696 29.7893 22.9609 29.4142 22.5858C29.0391 22.2107 28.5304 22 28 22H27ZM8 28H4V24H8V28ZM18 24V28H14V24H18ZM6 10V4H26V10H6ZM28 28H24V24H28V28Z" fill="#C4E538" />
  </svg>
);

const GraphBarIncreaseIcon = () => (
  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
    <path d="M4 21.0002V28H7V21.0002H4ZM14 18.0002V28H17V18.0002H14ZM24 15.0003V28H27V15.0003H24ZM22.8359 2.01229L23.0332 2.06502L27.332 3.68413C27.783 3.85401 28.0404 4.31561 27.9688 4.77395L27.918 4.96926L26.3164 9.26995C26.1235 9.7869 25.5485 10.0503 25.0312 9.85783C24.5136 9.66524 24.2508 9.08835 24.4434 8.57075L25.2031 6.52782L4.39453 15.9905C3.89191 16.2191 3.29907 15.9969 3.07031 15.4944C2.84168 14.9917 3.06367 14.3989 3.56641 14.1702L24.3711 4.70559L22.3281 3.93608L22.1465 3.84624C21.7527 3.5984 21.5737 3.09938 21.7441 2.64704C21.9146 2.19564 22.3772 1.93942 22.8359 2.01229ZM9 29C9 29.5523 8.55228 30 8 30H3C2.44772 30 2 29.5523 2 29V21.0002C2 20.4698 2.21086 19.9612 2.58594 19.5861C2.96101 19.2111 3.46957 19.0002 4 19.0002H7C7.53043 19.0002 8.03899 19.2111 8.41406 19.5861C8.78914 19.9612 9 20.4698 9 21.0002V29ZM19 29C19 29.5523 18.5523 30 18 30H13C12.4477 30 12 29.5523 12 29V18.0002C12 17.4698 12.2109 16.9613 12.5859 16.5862C12.961 16.2111 13.4696 16.0003 14 16.0003H17C17.5304 16.0003 18.039 16.2111 18.4141 16.5862C18.7891 16.9613 19 17.4698 19 18.0002V29ZM29 29C29 29.5523 28.5523 30 28 30H23C22.4477 30 22 29.5523 22 29V15.0003C22 14.4699 22.2109 13.9613 22.5859 13.5863C22.961 13.2112 23.4696 13.0003 24 13.0003H27C27.5304 13.0003 28.039 13.2112 28.4141 13.5863C28.7891 13.9613 29 14.4699 29 15.0003V29Z" fill="#C4E538" />
  </svg>
);

const GeoFenceIcon = () => (
  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
    <path d="M16 2C14.2863 2 12.6428 2.68077 11.431 3.89254C10.2192 5.10431 9.53846 6.74783 9.53846 8.46154C9.53846 12.0305 15.1589 20.8925 15.1589 25.6923H16.8411C16.8411 20.9086 22.4615 11.7397 22.4615 8.46154C22.4615 6.74783 21.7808 5.10431 20.569 3.89254C19.3572 2.68077 17.7137 2 16 2ZM16 5.23077C16.8569 5.23077 17.6786 5.57115 18.2845 6.17704C18.8904 6.78293 19.2308 7.60469 19.2308 8.46154C19.2308 9.31839 18.8904 10.1402 18.2845 10.746C17.6786 11.3519 16.8569 11.6923 16 11.6923C15.1431 11.6923 14.3214 11.3519 13.7155 10.746C13.1096 10.1402 12.7692 9.31839 12.7692 8.46154C12.7692 7.60469 13.1096 6.78293 13.7155 6.17704C14.3214 5.57115 15.1431 5.23077 16 5.23077Z" fill="#C4E538" />
  </svg>
);

const CallIcon = () => (
  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
    <path d="M9.05143 3.02286L10.9486 2.45143C11.8122 2.19088 12.7411 2.25352 13.5619 2.62765C14.3827 3.00178 15.0393 3.66182 15.4091 4.48457L16.5897 7.11086C16.9078 7.81836 16.9964 8.6077 16.8431 9.36813C16.6898 10.1286 16.3023 10.8219 15.7349 11.3509L13.672 13.2743C13.6473 13.2988 13.6265 13.3269 13.6103 13.3577C13.3943 13.7989 13.7223 14.9771 14.7497 16.7577C15.9086 18.7646 16.8034 19.5577 17.2183 19.4354L19.9257 18.6069C20.6672 18.3804 21.4609 18.3917 22.1957 18.6391C22.9304 18.8864 23.5693 19.3575 24.0229 19.9863L25.7006 22.3097C26.2273 23.0392 26.4713 23.9352 26.3872 24.831C26.3031 25.7269 25.8967 26.5618 25.2434 27.1806L23.8 28.5463C23.2981 29.0217 22.6885 29.3687 22.0235 29.5576C21.3584 29.7464 20.6575 29.7716 19.9806 29.6309C15.9611 28.7943 12.36 25.5577 9.14629 19.992C5.93143 14.4229 4.92914 9.68 6.22057 5.77943C6.43675 5.12641 6.80694 4.53501 7.29986 4.05522C7.79278 3.57543 8.39281 3.22133 9.05143 3.02286Z" fill="#C4E538" />
  </svg>
);

const MapIcon = () => (
  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
    <path d="M12 2.456L20.0987 7.18133L29.3333 3.33333V24.0987L20 29.544L11.9013 24.8187L2.66667 28.6667V7.90133L12 2.456ZM13.3333 22.568L18.6667 25.6787V9.432L13.3333 6.32133V22.568ZM10.6667 6.32L5.33333 9.432V24.6667L10.6667 22.444V6.32ZM21.3333 9.55467V25.6773L26.6667 22.5667V7.33333L21.3333 9.55467Z" fill="#C4E538" />
  </svg>
);

const LeftArrowIcon = () => (
    <svg className="size-5" fill="none" viewBox="0 0 20 20">
        <path d="M11.9108 4.41081C12.2362 4.08537 12.7638 4.08537 13.0892 4.41081C13.4146 4.73624 13.4146 5.26376 13.0892 5.58919L8.67838 10L13.0892 14.4108L13.1462 14.4743C13.4131 14.8016 13.3943 15.2841 13.0892 15.5892C12.7841 15.8943 12.3016 15.9131 11.9743 15.6462L11.9108 15.5892L6.91081 10.5892C6.58537 10.2638 6.58537 9.73624 6.91081 9.41081L11.9108 4.41081Z" fill="white" />
    </svg>
);

const RightArrowIcon = () => (
    <svg className="size-5" fill="none" viewBox="0 0 20 20">
        <path d="M8.08919 4.41081C7.76375 4.08537 7.23624 4.08537 6.91081 4.41081C6.58537 4.73624 6.58537 5.26376 6.91081 5.58919L11.3216 10L6.91081 14.4108L6.85384 14.4743C6.58688 14.8016 6.60571 15.2841 6.91081 15.5892C7.2159 15.8943 7.6984 15.9131 8.02571 15.6462L8.08919 15.5892L13.0892 10.5892C13.4146 10.2638 13.4146 9.73624 13.0892 9.41081L8.08919 4.41081Z" fill="white" />
    </svg>
);

// Interface definitions
interface CaseStudy {
  id: number;
  title: string;
  type?: string;
  stats?: Array<{
    value: string;
    label: string;
    description: string;
  }>;
  objective?: string;
  whatWeDid?: string[];
  impact?: string[];
  infoCards: Array<{
    icon: React.ReactNode;
    text: string;
  }>;
  sectors?: Array<{
    name: string;
    percentage: string;
    position: { top: string; left: string };
  }>;
  processCards?: Array<{
    icon: React.ReactNode;
    text: string;
  }>;
}

// Case studies data
const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Smart M&A Targeting for United Clinics — Poland's Dental Market",
    stats: [
      {
        value: "",
        label: "22,000+ Clinics Identified",
        description: "Web scraping + registry mining",
      },
      {
        value: "",
        label: "900 Precisely Validated Acquisition Targets",
        description: "",
      },
      {
        value: "",
        label: "2 Acquisitions closed in 30 days",
        description: "10x faster than Traditional Consulting",
      },
    ],
    infoCards: [
      { icon: <DataVisIcon />, text: "Smart data aggregation" },
      { icon: <LogicalPartitionIcon />, text: "AI logic filters" },
      { icon: <GraphBarIncreaseIcon />, text: "Proxy model: dental chair count" },
      { icon: <GeoFenceIcon />, text: "Geo + demand overlays" },
      { icon: <CallIcon />, text: "Selective cold calling" },
      { icon: <MapIcon />, text: "3D Map Validation" },
    ],
  },
  {
    id: 2,
    title: "Defence Cybersecurity Screening — NATO Region",
    type: "detailed",
    objective: "Identify bolt-on acquisition and partnership targets in defence-aligned cybersecurity across Nordics and Eastern Europe (NATO region).",
    whatWeDid: [
      "Mapped 2,700+ cybersecurity firms",
      "Applied filters for defence relevance + tech specialization",
      "Ranked targets using a custom scoring engine",
      "Shortlisted 124 high-relevance companies",
      "Vetted for certifications, team depth, and tech stack"
    ],
    impact: [
      "Exceeded expectations: 124 targets vs. 10–15",
      "Enabled entry into new defence ecosystems",
      "Surfaced targets missed by traditional deal methods"
    ],
    infoCards: [
      { icon: <DataVisIcon />, text: "2,700+ cybersecurity firms" },
      { icon: <LogicalPartitionIcon />, text: "Smart filters: defence alignment + services" },
      { icon: <GraphBarIncreaseIcon />, text: "Thematic scoring engine" },
      { icon: <GeoFenceIcon />, text: "Shortlist of 124 targets" },
      { icon: <CallIcon />, text: "Certifications + R&D team filters" },
      { icon: <MapIcon />, text: "Outcome: Entry into new markets" },
    ],
  },
  {
    id: 3,
    title: "Sector Mapping of B2B Niche Vertical Tech Across Europe",
    type: "map",
    sectors: [
      { name: "LegalTech", percentage: "12.5%", position: { top: "9%", left: "15%" } },
      { name: "Construction", percentage: "7.8%", position: { top: "40%", left: "9%" } },
      { name: "AgriTech", percentage: "9.1%", position: { top: "75%", left: "14%" } },
      { name: "CRM Platforms", percentage: "13%", position: { top: "51%", left: "40%" } },
      { name: "EdTech", percentage: "4.8%", position: { top: "7%", left: "44%" } },
      { name: "Industrial IoT", percentage: "11%", position: { top: "40%", left: "73%" } },
      { name: "AI/LLM SaaS", percentage: "8.6%", position: { top: "11%", left: "68%" } },
      { name: "HR Tech", percentage: "2.4%", position: { top: "75%", left: "74%" } },
      { name: "CRM Platforms", percentage: "2.4%", position: { top: "77%", left: "40%" } },
    ],
    processCards: [
      { icon: <GraphBarIncreaseIcon />, text: "Investment trends and competitive density analyzed" },
      { icon: <LogicalPartitionIcon />, text: "Screened using key investment criteria: revenue, EBITDA, team size" },
      { icon: <DataVisIcon />, text: "Adjacent sector bets identified via peer fund benchmarking" },
    ],
    infoCards: [],
  },
];

const VerticalConnector = () => (
  <div className="flex justify-center items-center h-8">
    <div className="w-px h-full bg-[#c4e538] opacity-30"></div>
  </div>
);

const MobileCaseStudy = ({ study }: { study: CaseStudy }) => {
  if (!study) return null;

  if (study.id === 1) {
    return (
      <div className="flex flex-col items-center gap-4 w-full max-w-sm mx-auto p-4">
        {/* Stat Card 1 */}
        <div className="bg-[#192c28] border border-[#c4e538] rounded-lg p-4 flex flex-col justify-center items-center text-center shadow-lg w-full">
          <h3 className="font-space-grotesk text-xl font-medium text-[#c4e538] uppercase">
            {study.stats?.[0].label}
          </h3>
          <p className="font-space-grotesk text-base text-white">
            {study.stats?.[0].description}
          </p>
          <h3 className="font-space-grotesk text-6xl font-medium text-white uppercase">
            {study.stats?.[0].value}
          </h3>
        </div>

        <VerticalConnector />

        {/* Info Cards - Group 1 & 2 */}
        <div className="flex flex-col gap-2 w-full">
          {study.infoCards.map((card, idx) => (
            <React.Fragment key={idx}>
              <div className="bg-[#192c28] border border-[#c4e538] rounded-lg p-3 flex items-center gap-3 shadow-lg">
                <div className="relative shrink-0 size-6">{card.icon}</div>
                <span className="font-space-grotesk text-base leading-tight text-white">{card.text}</span>
              </div>
              {idx === 3 && <VerticalConnector />}
            </React.Fragment>
          ))}
        </div>
        
        <VerticalConnector />

        {/* Stat Card 3 */}
        <div className="bg-[#192c28] border border-[#c4e538] rounded-lg p-4 flex flex-col justify-center items-center text-center shadow-lg w-full">
          <h3 className="font-space-grotesk text-xl font-medium text-[#c4e538] uppercase">
            {study.stats?.[2].label}
          </h3>
          <p className="font-space-grotesk text-base text-white">
            {study.stats?.[2].description}
          </p>
          <h3 className="font-space-grotesk text-6xl font-medium text-white uppercase">
            {study.stats?.[2].value}
          </h3>
        </div>

        {/* Stat Card 2 */}
        <div className="bg-[#c4e538] text-black border border-[#192c28] rounded-lg p-4 flex flex-col justify-center items-center text-center shadow-lg w-full mt-2">
            <p className="font-space-grotesk text-base text-[#333333]">{study.stats?.[1].description}</p>
            <h3 className="font-space-grotesk text-xl font-medium text-[#141414] uppercase">
                <span className="text-4xl">{study.stats?.[1].value}</span> {study.stats?.[1].label}
            </h3>
        </div>
      </div>
    );
  }

  if (study.id === 2) {
    return (
      <div className="flex flex-col items-center gap-4 w-full max-w-sm mx-auto p-4">
        {/* Main content card */}
        <div className="bg-gradient-to-r from-[#142420] to-[#304323] border border-[#c4e538] rounded-lg p-4 flex flex-col gap-4 w-full shadow-lg">
          <div>
            <h3 className="font-space-grotesk text-lg font-medium text-[#c4e538]">Objective</h3>
            <p className="font-space-grotesk text-sm text-white mt-1 leading-relaxed">{study.objective}</p>
          </div>
          <div>
            <h3 className="font-space-grotesk text-lg font-medium text-[#c4e538]">What We Did:</h3>
            <ul className="list-disc list-inside text-white font-space-grotesk text-sm space-y-1 mt-1">
              {study.whatWeDid?.map((item, idx) => (<li key={idx} className="leading-relaxed">{item}</li>))}
            </ul>
          </div>
          <div>
            <h3 className="font-space-grotesk text-lg font-medium text-[#c4e538]">Impact:</h3>
            <ul className="list-disc list-inside text-white font-space-grotesk text-sm space-y-1 mt-1">
              {study.impact?.map((item, idx) => (<li key={idx} className="leading-relaxed">{item}</li>))}
            </ul>
          </div>
        </div>

        <VerticalConnector />

        {/* Info Cards */}
        <div className="flex flex-col gap-2 w-full">
          {study.infoCards.map((card, idx) => (
            <div key={idx} className={`bg-gradient-to-r ${idx % 2 === 0 ? 'from-[#142420] to-[#304323]' : 'from-[#304323] to-[#142420]'} border border-[#4f6426] rounded-lg p-3 flex items-center gap-3 shadow-lg`}>
              <div className="relative shrink-0 size-6">{card.icon}</div>
              <span className="font-space-grotesk text-base text-white leading-tight">{card.text}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (study.id === 3) {
    return (
      <div className="flex flex-col items-center gap-4 w-full max-w-sm mx-auto p-4">
        {/* Map section */}
        <div className="bg-gradient-to-r from-[#142420] to-[#304323] border border-[#4f6426] rounded-lg p-4 relative w-full h-80 shadow-lg overflow-hidden">
          <div className="absolute inset-0 overflow-hidden rounded-lg">
            <img src="/assets/world-map-new.svg" alt="World Map" className="absolute top-1/2 left-1/2 w-auto h-auto min-w-full min-h-full max-w-none transform -translate-x-1/2 -translate-y-1/2 scale-[1.8] opacity-10" style={{ objectPosition: 'center 40%' }}/>
          </div>
          <div className="absolute bottom-4 left-4 right-4 flex flex-col items-center gap-4">
            <div className="bg-[#d0f030] rounded-lg p-3 shadow-lg w-56 text-center">
              <div className="text-[#141414] font-space-grotesk">
                <div className="text-base font-bold leading-tight">100+ High-Growth</div>
                <div className="text-sm leading-tight">Tech Verticals Identified</div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {study.sectors?.map((sector, idx) => (
                <div key={idx} className="bg-gradient-to-r from-[#304323] to-[#142420] border border-[rgba(208,240,48,0.2)] rounded px-2 py-1 shadow-lg">
                  <div className="font-space-grotesk text-xs leading-tight">
                    <span className="text-white">{sector.name} </span>
                    <span className="text-[#d0f030]">({sector.percentage})</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <VerticalConnector />
        
        {/* Grid section */}
        <div className="bg-[#1420] border border-[#4f6426] rounded-lg p-2 w-full h-48 shadow-lg relative">
          <div className="grid grid-cols-11 gap-0.5 h-full w-full">
            {Array.from({ length: 110 }).map((_, i) => (<div key={i} className={`w-full h-full rounded-sm ${[5, 6, 9, 11, 17, 19, 27, 34, 41, 47, 52, 58, 67, 73, 78, 84, 90, 97, 107].includes(i) ? 'bg-[#21413c]' : 'border border-[#21413c]'}`}/>))}
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#d0f030] rounded-lg p-3 shadow-lg w-48 text-center">
            <div className="text-[#141414] font-space-grotesk text-sm leading-tight">
              <span>Identified 15 overlooked but </span>
              <span className="font-bold">high-fit sectors</span>
            </div>
          </div>
        </div>

        <VerticalConnector />
        
        {/* Process cards */}
        <div className="flex flex-col gap-2 w-full">
            {study.processCards?.map((card, idx) => (
                <div key={idx} className="bg-gradient-to-r from-[#304323] to-[#142420] border border-[#4f6426] rounded-lg p-3 flex flex-col justify-end h-24 shadow-lg">
                    <div className="flex flex-col gap-2 items-start">
                    <div className="relative shrink-0 size-5">{card.icon}</div>
                    <div className="font-space-grotesk text-sm text-white leading-tight w-full">{card.text}</div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    );
  }

  // Fallback for other case studies
  return (
    <div className="flex flex-col items-center gap-4 w-full p-4">
      <p>Mobile view for this case study is not yet implemented.</p>
    </div>
  );
};


const CaseStudiesSection = () => {
  const [currentCase, setCurrentCase] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    if (!isMobile || !scrollContainerRef.current) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = parseInt(entry.target.getAttribute('data-index') || '0', 10);
                    setCurrentCase(index);
                }
            });
        },
        {
            root: scrollContainerRef.current,
            threshold: 0.5,
        }
    );

    const items = scrollContainerRef.current.querySelectorAll('.case-study-mobile-item');
    items.forEach((item) => observer.observe(item));

    return () => {
        items.forEach((item) => observer.unobserve(item));
    };
  }, [isMobile]);

  const handleNext = () => {
    setCurrentCase((prev) => (prev + 1) % caseStudies.length);
  };

  const handlePrev = () => {
    setCurrentCase((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const study = caseStudies[currentCase];

  return (
    <div className="bg-primary-green text-white px-4 py-20 relative overflow-hidden">
        {/* Top-Left Decorator */}
        <div className="absolute top-0 left-0 w-3/4 h-auto z-0 opacity-50">
        <Image
          src="/assets/left-pattern.svg"
          alt="Decorative pattern"
          layout="responsive"
                width={971}
          height={412}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center gap-6 text-center mb-16">
          <div className="bg-[#21413c] rounded-[40px] px-4 py-2 inline-block">
            <span className="font-space-grotesk text-base uppercase tracking-wider">
              Case Study {isMobile ? currentCase + 1 : study.id}
            </span>
          </div>
          <h2 className="font-instrument-serif text-4xl md:text-5xl lg:text-6xl max-w-4xl leading-tight">
            {isMobile ? caseStudies[currentCase].title : study.title}
          </h2>
        </div>

        {/* Content Wrapper */}
        <div className="min-h-[520px] flex items-center justify-center">
          {isMobile ? (
            <div className="w-full">
              <div ref={scrollContainerRef} className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
                  {caseStudies.map((study, index) => (
                      <div key={study.id} data-index={index} className="case-study-mobile-item w-full flex-shrink-0 snap-center">
                          <MobileCaseStudy study={study} />
                      </div>
                  ))}
              </div>
              {/* Dots indicator */}
              <div className="flex justify-center gap-2 mt-8">
                  {caseStudies.map((_, index) => (
                      <div
                          key={index}
                          className={`w-2 h-2 rounded-full transition-colors ${currentCase === index ? 'bg-white' : 'bg-gray-600'}`}
                      />
                  ))}
              </div>
            </div>
          ) : (
            <>
              {!study.type && (
                <div className="flex items-center justify-start lg:justify-center gap-4 min-w-[1200px] px-4">
                  {/* Card 1 */}
                  <div className="bg-[#192c28] border border-[#c4e538] rounded-lg p-6 flex flex-col justify-center items-center text-center w-60 h-[438px] shadow-lg flex-shrink-0">
                    <h3 className="font-space-grotesk text-2xl font-medium text-[#d0f030] uppercase">
                      {study.stats?.[0].label}
                    </h3>
                    <p className="font-space-grotesk text-lg text-white mt-2 text-center">
                      {study.stats?.[0].description}
                    </p>
                  </div>

                  {/* Connecting graphic */}
            <div className="h-full relative shrink-0 w-[72px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 72 435">
                      <path d="M72 28.0005H50.3945C42.6629 28.0007 36.3948 34.2688 36.3945 42.0005V164.42C39.6945 160.342 44.7396 157.733 50.3945 157.733H72V161.733H50.3945C42.6629 161.733 36.3948 168.001 36.3945 175.733V201.415C36.3945 208.381 32.4356 214.423 26.6455 217.415C32.4357 220.406 36.3944 226.448 36.3945 233.415V259.096C36.3945 266.828 42.6627 273.096 50.3945 273.096H72V277.096H50.3945C44.7394 277.096 39.6944 274.488 36.3945 270.409V393C36.3945 400.731 42.6627 406.999 50.3945 407H72V411H50.3945C40.4536 410.999 32.3945 402.941 32.3945 393V233.415C32.3943 225.804 26.3207 219.611 18.7559 219.419L18.3945 219.415H0V215.415H18.3945L18.7559 215.411C26.3209 215.219 32.3945 209.026 32.3945 201.415V42.0005C32.3948 32.0597 40.4537 24.0007 50.3945 24.0005H72V28.0005Z" fill="url(#paint1_linear_397_51212)"/>
                <defs>
                        <linearGradient id="paint1_linear_397_51212" x1="72" x2="0" y1="217.5" y2="217.5" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#192C28"/><stop offset="0.8" stopColor="#C4E538"/><stop offset="1" stopColor="#192C28"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>

                  {/* Info Cards */}
            <div className="flex flex-col gap-4 flex-shrink-0 h-[438px] justify-between">
                    {study.infoCards.slice(0, 4).map((card, idx) => (
                      <div key={idx} className="bg-[#192c28] border border-[#c4e538] rounded-lg p-4 flex items-center gap-4 w-64 h-20 shadow-lg">
                        <div className="relative shrink-0 size-8">{card.icon}</div>
                        <span className="font-space-grotesk text-lg leading-tight">{card.text}</span>
                      </div>
                    ))}
            </div>

                  {/* Connecting graphic */}
            <div className="h-full relative shrink-0 w-[74.012px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 75 435">
                      <path d="M74.0098 28H38.4062V150.64C38.4062 152.582 38.7994 153.869 39.3555 154.752C39.9026 155.62 40.7146 156.268 41.8672 156.752C44.3229 157.784 47.8942 157.925 52.4062 157.925H74.0117V161.925H52.4062C48.0817 161.925 43.6525 161.841 40.3174 160.439C39.6423 160.156 38.9996 159.813 38.4023 159.401V201.331H38.6172V259.105C38.6172 260.053 38.5436 260.984 38.4023 261.893V393C38.4021 402.941 30.3433 411 20.4023 411H0.0078125V407H20.4023C28.1342 407 34.4021 400.732 34.4023 393V270.678C31.1004 274.607 26.1511 277.105 20.6172 277.105H0.0117188V273.105H20.6172C27.5118 273.105 33.242 268.121 34.4023 261.56V128.571H34.4062V28H0V24H74.0098V28Z" fill="url(#paint2_linear_397_51151)"/>
                      <defs>
                        <linearGradient id="paint2_linear_397_51151" x1="73.0379" x2="0" y1="217.5" y2="217.5" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#192C28"/><stop offset="0.8" stopColor="#C4E538"/><stop offset="1" stopColor="#192C28"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* Info Cards */}
                  <div className="flex flex-col gap-4 flex-shrink-0 h-[438px] justify-between">
                    {study.infoCards.slice(4, 6).map((card, idx) => (
                      <div key={idx} className="bg-[#192c28] border border-[#c4e538] rounded-lg p-4 flex items-center gap-4 w-64 h-20 shadow-lg">
                        <div className="relative shrink-0 size-8">{card.icon}</div>
                        <span className="font-space-grotesk text-lg leading-tight">{card.text}</span>
                </div>
                    ))}
                    <div className="bg-[#c4e538] text-black border border-[#192c28] rounded-lg p-6 flex flex-col justify-center items-center text-center w-60 h-44 shadow-lg">
                      <h3 className="font-space-grotesk text-2xl font-medium text-[#141414] uppercase">
                        {study.stats?.[1].label}
                      </h3>
                      <p className="font-space-grotesk text-lg text-[#333333] mt-2 text-center">
                        {study.stats?.[1].description}
                      </p>
                    </div>
                  </div>

                  {/* Final card */}
            <div className="bg-[#192c28] border border-[#c4e538] rounded-lg p-6 flex flex-col justify-center items-center text-center w-60 h-[438px] shadow-lg flex-shrink-0">
              <h3 className="font-space-grotesk text-2xl font-medium text-[#d0f030] uppercase">
                {study.stats?.[2].label}
              </h3>
              <p className="font-space-grotesk text-lg text-white mt-2 text-center">
                {study.stats?.[2].description}
              </p>
            </div>
          </div>
              )}

              {study.type === "detailed" && (
                <div className="flex items-start justify-center gap-6 w-full px-4 h-[516px]">
                  {/* Left side */}
                  <div className="bg-gradient-to-r from-[#192c28] to-[#304323] border border-[#c4e538] rounded-lg p-6 flex flex-col justify-between w-[600px] h-full shadow-lg flex-shrink-0">
                    <div className="flex flex-col gap-2">
                      <h3 className="font-space-grotesk text-xl font-medium text-[#c4e538]">Objective</h3>
                      <p className="font-space-grotesk text-lg text-white leading-relaxed">{study.objective}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="font-space-grotesk text-xl font-medium text-[#c4e538]">What We Did:</h3>
                      <ul className="list-disc list-inside text-white font-space-grotesk text-lg space-y-1">
                        {study.whatWeDid?.map((item, idx) => (<li key={idx} className="leading-relaxed">{item}</li>))}
                      </ul>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="font-space-grotesk text-xl font-medium text-[#c4e538]">Impact:</h3>
                      <ul className="list-disc list-inside text-white font-space-grotesk text-lg space-y-1">
                        {study.impact?.map((item, idx) => (<li key={idx} className="leading-relaxed">{item}</li>))}
                      </ul>
                    </div>
                  </div>
                  {/* Arrow */}
                  <div className="h-full relative shrink-0 w-[56px] flex items-center justify-center">
                    <svg className="block w-full h-[14.728px]" fill="none" viewBox="0 0 49 15">
                      <path d="M0 7.5h40m-6-6l6 6-6 6" stroke="#c4e538" strokeWidth="2" fill="none"/>
                    </svg>
                  </div>
                  {/* Right side */}
                  <div className="flex flex-col gap-3 flex-shrink-0 h-full justify-start w-[400px]">
                    {study.infoCards.map((card, idx) => (
                      <div key={idx} className={`bg-gradient-to-r ${idx % 2 === 0 ? 'from-[#142420] to-[#304323]' : 'from-[#304323] to-[#142420]'} border border-[#4f6426] rounded-lg p-4 flex items-center gap-4 h-[72px] shadow-lg`}>
                        <div className="relative shrink-0 size-8">{card.icon}</div>
                        <span className="font-space-grotesk text-lg text-white leading-tight">{card.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {study.type === "map" && (
                <div className="flex flex-col items-center justify-center w-full">
                  <div className="flex items-start justify-center gap-8 w-full px-4">
                    {/* Left side */}
                    <div className="bg-gradient-to-r from-[#142420] to-[#304323] border border-[#4f6426] rounded-lg p-6 relative w-[800px] h-[328px] shadow-lg flex-shrink-0 overflow-hidden">
                      <div className="absolute inset-0 overflow-hidden rounded-lg">
                        <img src="/assets/world-map-new.svg" alt="World Map" className="absolute top-1/2 left-1/2 w-auto h-auto min-w-full min-h-full max-w-none transform -translate-x-1/2 -translate-y-1/2 scale-[2] opacity-10" style={{ objectPosition: 'center 40%' }}/>
                      </div>
                      {study.sectors?.map((sector, idx) => (
                        <div key={idx} className="absolute bg-gradient-to-r from-[#304323] to-[#142420] border border-[rgba(208,240,48,0.2)] rounded px-3 py-1.5 shadow-lg" style={{top: sector.position.top, left: sector.position.left}}>
                          <div className="font-space-grotesk text-sm leading-tight">
                            <span className="text-white">{sector.name} </span>
                            <span className="text-[#d0f030]">({sector.percentage})</span>
                          </div>
                        </div>
                      ))}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#d0f030] rounded-lg p-4 shadow-lg w-[240px] text-center">
                        <div className="text-[#141414] font-space-grotesk">
                          <div className="text-lg font-bold leading-tight">100+ High-Growth</div>
                          <div className="text-base leading-tight">Tech Verticals Identified</div>
                        </div>
                      </div>
                    </div>
                    {/* Arrow */}
                    <div className="h-[328px] relative shrink-0 w-[56px] flex items-center justify-center">
                      <svg className="block w-full h-[14.728px]" fill="none" viewBox="0 0 49 15">
                        <path d="M0 7.5h40m-6-6l6 6-6 6" stroke="#c4e538" strokeWidth="2" fill="none"/>
                      </svg>
                    </div>
                    {/* Right side */}
                    <div className="bg-[#1420] border border-[#4f6426] rounded-lg p-2 w-[328px] h-[328px] shadow-lg flex-shrink-0 relative">
                      <div className="grid grid-cols-11 gap-0.5 h-full w-full">
                        {Array.from({ length: 110 }).map((_, i) => (<div key={i} className={`w-6 h-6 rounded-sm ${[5, 6, 9, 11, 17, 19, 27, 34, 41, 47, 52, 58, 67, 73, 78, 84, 90, 97, 107].includes(i) ? 'bg-[#21413c]' : 'border border-[#21413c]'}`}/>))}
                      </div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#d0f030] rounded-lg p-4 shadow-lg w-[200px] text-center">
                        <div className="text-[#141414] font-space-grotesk text-lg leading-tight">
                          <span>Identified 15 overlooked but </span>
                          <span className="font-bold">high-fit sectors</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Process cards */}
                  {study.processCards && (
                    <div className="flex flex-row gap-4 items-start justify-center w-full mt-8 px-4 max-w-[1200px]">
                      {study.processCards.map((card, idx) => (
                        <div key={idx} className="bg-gradient-to-r from-[#304323] to-[#142420] border border-[#4f6426] rounded-lg p-6 flex flex-col justify-end h-[120px] flex-1 shadow-lg">
                          <div className="flex flex-col gap-4 items-start">
                            <div className="relative shrink-0 size-6">{card.icon}</div>
                            <div className="font-space-grotesk text-lg text-white leading-tight w-full">{card.text}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
        
        {/* Navigation */}
        {!isMobile && (
        <div className="flex flex-row gap-6 items-center justify-center mt-10">
          <button onClick={handlePrev} className="bg-[#21413c] rounded-full p-4 transition-opacity hover:opacity-80 disabled:opacity-40">
            <LeftArrowIcon />
          </button>
          <button onClick={handleNext} className="bg-[#21413c] rounded-full p-4 transition-opacity hover:opacity-80 disabled:opacity-40">
            <RightArrowIcon />
          </button>
        </div>
        )}
      </div>
    </div>
  );
};

export default CaseStudiesSection; 