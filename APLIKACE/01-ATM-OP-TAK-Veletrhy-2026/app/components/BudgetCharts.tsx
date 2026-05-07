"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// ── Data ─────────────────────────────────────────────────────────────────────

const fairData = [
  { name: "AERO 2027", pronajem: 300, stavba: 500, doprava: 35, propagace: 50 },
  { name: "AERO 2028", pronajem: 300, stavba: 500, doprava: 35, propagace: 50 },
  { name: "AIX 2027",  pronajem: 280, stavba: 200, doprava: 35, propagace: 30 },
  { name: "AIX 2028",  pronajem: 280, stavba: 200, doprava: 35, propagace: 30 },
  { name: "EATS 2026", pronajem: 100, stavba:  80, doprava: 50, propagace: 40 },
];

const yearData = [
  { year: "2026", total: 270 },
  { year: "2027", total: 1430 },
  { year: "2028", total: 1430 },
];

const categoryData = [
  { name: "Stavba stánku",   value: 1480 },
  { name: "Pronájem plochy", value: 1260 },
  { name: "Propagace",       value: 200  },
  { name: "Doprava",         value: 190  },
];

const COLORS = ["#507499", "#93b3cf", "#cddce8", "#4d606f"];

const STACKED_COLORS = {
  pronajem:  "#507499",
  stavba:    "#153151",
  doprava:   "#93b3cf",
  propagace: "#cddce8",
};

const tooltipStyle = {
  backgroundColor: "#10253e",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: 4,
  color: "#cddce8",
  fontSize: 12,
};

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
          formatter={(v: unknown) => [`${v} tis. Kč`]}
          cursor={{ fill: "rgba(255,255,255,0.04)" }}
        />
        <Legend wrapperStyle={{ fontSize: 11, color: "#93b3cf" }} />
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
    <ResponsiveContainer width="100%" height={160}>
      <BarChart data={yearData} margin={{ top: 4, right: 8, left: 0, bottom: 4 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
        <XAxis dataKey="year" tick={axisStyle} axisLine={false} tickLine={false} />
        <YAxis tick={axisStyle} axisLine={false} tickLine={false} unit=" tis." width={60} />
        <Tooltip
          contentStyle={tooltipStyle}
          formatter={(v: unknown) => [`${v} tis. Kč`, "Způsobilé výdaje"]}
          cursor={{ fill: "rgba(255,255,255,0.04)" }}
        />
        <Bar dataKey="total" name="Způsobilé výdaje" fill="#507499" radius={[3, 3, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function CategoryDonutChart() {
  return (
    <ResponsiveContainer width="100%" height={220}>
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
          formatter={(v: unknown) => [`${v} tis. Kč`]}
        />
        <Legend
          wrapperStyle={{ fontSize: 11, color: "#93b3cf" }}
          formatter={(value: string, entry: { payload?: { value?: number } }) =>
            `${value} (${entry?.payload?.value} tis.)`
          }
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
