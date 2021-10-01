import React, { useState } from "react";
import "./skill.scss";
import Roll from "react-reveal/Roll";
import { useMediaQuery } from "react-responsive";
import {useTranslation} from 'react-i18next'
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Bar,
  Cell,
} from "recharts";
export default function Skill() {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#8884d8",
    "#8884d8",
  ];
  const data = [
    { name: t("front"), value: 40, tag: "frontend" },
    { name:  t("back"), value: 30, tag: "backend" },
    { name:  t("machinelearning"), value: 10, tag: "machineLearning" },
    { name:  t("managment"), value: 15, tag: "managment" },
    { name:  t("crawler"), value: 15, tag: "webCrawler" },
  ];
  const skillDetail = [
    {
      title: "frontend",
      color: COLORS[0],
      data: [
        {
          name: "React",
          pv: 60,
        },
        {
          name: "Flutter",
          pv: 20,
        },
        {
          name: "Java",
          pv: 20,
        },
      ],
    },
    {
      title: "backend",
      color: COLORS[1],
      data: [
        {
          name: "Express",
          pv: 80,
        },
        {
          name: "MongoDB",
          pv: 60,
        },
        {
          name: "Postgresql",
          pv: 40,
        },
        {
          name: "Docker",
          pv: 40,
        },
      ],
    },
    {
      title: "machineLearning",
      color: COLORS[2],
      data: [
        {
          name: "Tensorflow",
          pv: 10,
        },
      ],
    },
    {
      title: "managment",
      color: COLORS[3],
      data: [
        {
          name: "Leadership",
          pv: 80,
        },
        {
          name: "Collaboration",
          pv: 60,
        },
        {
          name: "Adaptability",
          pv: 80,
        },
      ],
    },
    {
      title: "webCrawler",
      color: COLORS[4],
      data: [
        {
          name: "Selenium",
          pv: 80,
        },
        {
          name: "BeautifulSoup",
          pv: 60,
        },
        {
          name: "Python",
          pv: 40,
        },
      ],
    },
  ];
  const [skill, setSkill] = useState(skillDetail[0].data);
  const [color, setColor] = useState(skillDetail[0].color);
  const changeSkill = (e) => {
    const newSkill = skillDetail.find((s) => s.title === e.tag);
    setColor(newSkill.color);
    setSkill(newSkill.data);
  };
  return (
    <div className="skill" id="skill">
      <div className="title">
        <p className="titleFont">{t("skill")}</p>
      </div>
      <div className="content">
        {isMobile ? (
          <>
            <div className="left">
              <Roll left>
                <PieChart width={350} height={250}>
                  <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={50}
                    fill="#8884d8"
                    label={(entry) => entry.name}
                    onClick={changeSkill}
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </Roll>
            </div>
            <div className="right">
              <Roll right>
                <BarChart
                  width={375}
                  height={175}
                  data={skill}
                  layout="vertical"
                  margin={{ top: 0, left: 50, right: 0, bottom: 0 }}
                >
                  <XAxis
                    type="number"
                    tickFormatter={(tick) => {
                      return `${tick}%`;
                    }}
                  />
                  <YAxis type="category" dataKey="name" />
                  {/* <XAxis type="category" dataKey="name" />
              <YAxis type="number" /> */}
                  <Bar dataKey="pv" fill={color} />
                </BarChart>
              </Roll>
            </div>
          </>
        ) : (
          <>
            <div className="left">
              <Roll left>
                <PieChart width={550} height={300}>
                  <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={125}
                    fill="#8884d8"
                    label={(entry) => entry.name}
                    onClick={changeSkill}
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </Roll>
            </div>
            <div className="right">
              <Roll right>
                <BarChart
                  width={750}
                  height={350}
                  data={skill}
                  layout="vertical"
                  margin={{ top: 0, left: 60, right: 0, bottom: 0 }}
                >
                  <XAxis
                    type="number"
                    tickFormatter={(tick) => {
                      return `${tick}%`;
                    }}
                  />
                  <YAxis type="category" dataKey="name" />
                  {/* <XAxis type="category" dataKey="name" />
              <YAxis type="number" /> */}
                  <Bar dataKey="pv" fill={color} />
                </BarChart>
              </Roll>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
