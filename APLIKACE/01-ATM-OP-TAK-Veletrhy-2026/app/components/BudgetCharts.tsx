"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// ── Data ─────────────────────────────────────────────────────────────────────

const fairData = [
  { name: "AERO 2027", pronajem: 270, stavba: 550, doprava: 35, propagace: 50 },
  { name: "AERO 2028", pronajem: 300, stavba: 650, doprava: 35, propagace: 50 },
  { name: "AIX 2027",  pronajem: 280, stavba: 170, doprava: 35, propagace: 30 },
  { name: "AIX 2028",  pronajem: 280, stavba: 200, doprava: 35, propagace: 30 },
  { name: "EATS 2026", pronajem: 100, stavba:  80, doprava: 50, propagace: 40 },
];

const yearCategoryData = [
  { year: "2026", pronajem: 100, stavba: 80,  doprava: 50, propagace: 140, video: 300, inzerce: 0,   total: 670  },
  { year: "2027", pronajem: 550, stavba: 720, doprava: 70, propagace: 460, video: 0,   inzerce: 250, total: 2050 },
  { year: "2028", pronajem: 580, stavba: 850, doprava: 70, propagace: 430, video: 0,   inzerce: 250, total: 2180 },
];

const categoryData = [
  { name: "Stavba stánku",      value: 1650 },
  { name: "Pronájem plochy",    value: 1230 },
  { name: "Propagace + tisk",   value: 1030 },
  { name: "Inzerce zahraničí",  value: 500  },
  { name: "Videoprezentace",    value: 300  },
  { name: "Doprava",            value: 190  },
];

const COLORS = ["#507499", "#93b3cf", "#4d606f", "#2b4156", "#d51c17", "#cddce8"];

const projectItemsData = [
  { name: "Vizualizace\n+ tisk", value: 830 },
  { name: "Inzerce\nzahraničí", value: 500 },
  { name: "Video-\nprezentace", value: 300 },
];

const PROJECT_ITEM_COLORS = ["#507499", "#2b4156", "#d51c17"];

const STACKED_COLORS = {
  pronajem:  "#93b3cf",
  stavba:    "#507499",
  doprava:   "#4d606f",
  propagace: "#cddce8",
};

const tooltipStyle = {
  backgroundColor: "#10253e",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: 4,
  color: "#cddce8",
  fontSize: 12,
};

const tooltipLabelStyle = { color: "#ffffff", fontWeight: 600 };
const tooltipItemStyle  = { color: "#cddce8" };

const axisStyle = { fill: "#93b3cf", fontSize: 11 };

// ── Components ────────────────────────────────────────────────────────────────

export function StackedBarChart() {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={fairData} margin={{ top: 4, right: 8, left: 0, bottom: 4 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
        <XAxis dataKey="name" tick={axisStyle} axisLine={false} tickLine={false} />
        <YAxis tick={axisStyle} axisLine={false} tickLine={false} unit=" tis." width={60} />
        <Tooltip
          contentStyle={tooltipStyle}
          labelStyle={tooltipLabelStyle}
          itemStyle={tooltipItemStyle}
          formatter={(v: unknown) => [`${v} tis. Kč`]}
          cursor={{ fill: "rgba(255,255,255,0.04)" }}
        />
        <Legend wrapperStyle={{ fontSize: 11, color: "#cddce8" }} />
        <Bar dataKey="pronajem"  name="Pronájem plochy" stackId="a" fill={STACKED_COLORS.pronajem}  />
        <Bar dataKey="stavba"    name="Stavba stánku"   stackId="a" fill={STACKED_COLORS.stavba}    />
        <Bar dataKey="doprava"   name="Doprava"         stackId="a" fill={STACKED_COLORS.doprava}   />
        <Bar dataKey="propagace" name="Propagace"       stackId="a" fill={STACKED_COLORS.propagace} radius={[3, 3, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function YearBarChart() {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={yearCategoryData} margin={{ top: 24, right: 8, left: 0, bottom: 4 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
        <XAxis dataKey="year" tick={axisStyle} axisLine={false} tickLine={false} />
        <YAxis tick={axisStyle} axisLine={false} tickLine={false} unit=" tis." width={80} />
        <Tooltip
          contentStyle={tooltipStyle}
          labelStyle={tooltipLabelStyle}
          itemStyle={tooltipItemStyle}
          formatter={(v: unknown) => [`${v} tis. Kč`]}
          cursor={{ fill: "rgba(255,255,255,0.04)" }}
        />
        <Legend wrapperStyle={{ fontSize: 11, color: "#cddce8", paddingTop: 12 }} />
        <Bar dataKey="stavba"    name="Stavba stánku"      stackId="a" fill="#507499" />
        <Bar dataKey="pronajem"  name="Pronájem plochy"    stackId="a" fill="#93b3cf" />
        <Bar dataKey="propagace" name="Propagace + tisk"   stackId="a" fill="#4d606f" />
        <Bar dataKey="inzerce"   name="Inzerce zahraničí"  stackId="a" fill="#2b4156" />
        <Bar dataKey="video"     name="Videoprezentace"    stackId="a" fill="#d51c17" />
        <Bar dataKey="doprava"   name="Doprava"            stackId="a" fill="#cddce8" radius={[3, 3, 0, 0]}>
          <LabelList
            dataKey="total"
            position="top"
            formatter={(v: number) => `${v} tis.`}
            style={{ fill: "#cddce8", fontSize: 11, fontWeight: 600 }}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export function CategoryDonutChart() {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <PieChart>
        <Pie
          data={categoryData}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={90}
          dataKey="value"
          paddingAngle={3}
        >
          {categoryData.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={tooltipStyle}
          labelStyle={tooltipLabelStyle}
          itemStyle={tooltipItemStyle}
          formatter={(v: unknown) => [`${v} tis. Kč`]}
        />
        <Legend
          wrapperStyle={{ fontSize: 11, color: "#cddce8", paddingTop: 16, lineHeight: "1.8" }}
          formatter={(value: string, entry: { payload?: { value?: number } }) => (
            <span style={{ color: "#cddce8" }}>{value} ({entry?.payload?.value} tis.)</span>
          )}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}

export function ProjectItemsBarChart() {
  return (
    <ResponsiveContainer width="100%" height={160}>
      <BarChart data={projectItemsData} margin={{ top: 4, right: 8, left: 0, bottom: 4 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
        <XAxis dataKey="name" tick={axisStyle} axisLine={false} tickLine={false} />
        <YAxis tick={axisStyle} axisLine={false} tickLine={false} unit=" tis." width={60} />
        <Tooltip
          contentStyle={tooltipStyle}
          labelStyle={tooltipLabelStyle}
          itemStyle={tooltipItemStyle}
          formatter={(v: unknown) => [`${v} tis. Kč`]}
          cursor={{ fill: "rgba(255,255,255,0.04)" }}
        />
        <Bar dataKey="value" name="Výdaje" radius={[3, 3, 0, 0]}>
          {projectItemsData.map((_, i) => (
            <Cell key={i} fill={PROJECT_ITEM_COLORS[i]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
