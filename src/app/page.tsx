import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#010812] text-white">
      <Header />

      <section className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-14 px-6 pt-4 pb-20 md:grid-cols-[1.12fr_0.88fr] md:px-10 lg:px-14">
          <div className="max-w-3xl pt-10 md:pt-12 lg:pt-12">
      <p className="mb-5 text-sm font-medium uppercase tracking-[0.34em] text-[#C71343]">
        LLVM based polyglot language
      </p>  

      <h1 className="text-5xl font-semibold tracking-[-0.06em] text-white md:text-7xl lg:text-8xl">
        Lena
      </h1>

      <p className="mt-7 max-w-2xl text-xl leading-8 text-white/78 md:text-2xl md:leading-9">
        A programming language built on LLVM that lets you call functionality from
        other worlds in one native codebase.
      </p>

      <div className="mt-10 flex flex-wrap gap-3 text-sm text-white/64">
        <span className="rounded-full border border-white/16 px-4 py-2">
          character of Julia
        </span>
        <span className="rounded-full border border-white/16 px-4 py-2">
          appearance of Rust
        </span>
        <span className="rounded-full border border-white/16 px-4 py-2">
          speed of C
        </span>
      </div>
    </div>

        <CodeCard />
      </section>
      <section className="mx-auto w-full max-w-7xl px-6 pb-16 md:px-10 lg:px-14">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/16 bg-white/16 md:grid-cols-3">
          <Feature
            title="Imperative core"
            text="Lena is built around explicit imperative code: values, functions, impl blocks and control flow remain readable and predictable."
          />
          <Feature
            title="Type descriptors"
            text="All language types are described in the standard libraries for LLVM, and there are no classical primitives."
          />
          <Feature
            title="Safe polyglot model"
            text="Lena does not have pointers, and there are value passing and other safe constructs."
          />
        </div>
      </section>
      <ApplicationDiagram />
      <CodeExamples />
      <TriadGraph />
      <FinalCall />
      <Footer />
    </main>
  );
}

const menuItems = [
  { label: "Language", href: "#language" },
  { label: "Model", href: "#application-model" },
  { label: "Examples", href: "#examples" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "GitHub", href: "https://github.com/ElverseProjects/lena" },
];

function Header() {
  return (
    <header className="mx-auto flex w-full max-w-7xl items-center gap-10 px-6 py-8 md:px-10 lg:px-14">
      <Link className="flex shrink-0 items-center" href="/">
        <Image
          src="/lena-logo.png"
          alt="Lena"
          width={132}
          height={132}
          priority
          className="h-45 w-45 object-contain md:h-45 md:w-45"
        />
      </Link>

      <nav className="hidden flex-1 items-center md:flex">
        <div className="-translate-y-2 h-px w-[38%] bg-[#C71343]" />

        <div className="-translate-y-2 flex items-center gap-9 px-6 text-base text-white/86">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="-translate-y-2 h-px flex-1 bg-[#C71343]" />
      </nav>
    </header>
  );
}

function CodeCard() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-[#C71343]/12 blur-3xl" />

      <div className="overflow-hidden rounded-2xl border border-white bg-white/[0.035] shadow-2xl shadow-black/40">
        <div className="flex items-center justify-between border-b border-white/18 px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#C71343]" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/42" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/24" />
          </div>

          <span className="text-xs text-white/65">main.le</span>
        </div>

        <pre className="overflow-x-auto p-6 text-[0.92rem] leading-7 text-white/88">
          <code>
            <span className="text-[#C71343]">from</span>
            <span className="text-white"> @Julia </span>
            <span className="text-[#C71343]">import</span>
            <span className="text-white"> </span>
            <span className="text-white/72">{'"Statistics"'}</span>
            <span className="text-white"> </span>
            <span className="text-[#C71343]">as</span>
            <span className="text-white"> Stats</span>
            {"\n"}
            <span className="text-[#C71343]">from</span>
            <span className="text-white"> @C </span>
            <span className="text-[#C71343]">embed</span>
            <span className="text-white"> </span>
            <span className="text-white/72">{'"fast_bytes.h"'}</span>
            <span className="text-white"> </span>
            <span className="text-[#C71343]">as</span>
            <span className="text-white"> C</span>
            {"\n\n"}
            <span className="text-white">main():</span>
            <span className="text-[#C71343]">nil</span>
            <span className="text-white"> {"{"}</span>
            {"\n"}
            <span className="text-white">    </span>
            <span className="text-[#C71343]">const</span>
            <span className="text-white"> data:u8[] = {"{"} </span>
            <span className="text-white/72">72</span>
            <span className="text-white">, </span>
            <span className="text-white/72">101</span>
            <span className="text-white">, </span>
            <span className="text-white/72">108</span>
            <span className="text-white">, </span>
            <span className="text-white/72">108</span>
            <span className="text-white">, </span>
            <span className="text-white/72">111</span>
            <span className="text-white"> {"}"}</span>
            {"\n\n"}
            <span className="text-white">    </span>
            <span className="text-[#C71343]">let</span>
            <span className="text-white"> sum:u64 = C::byte_sum(data)</span>
            {"\n"}
            <span className="text-white">    </span>
            <span className="text-[#C71343]">let</span>
            <span className="text-white"> avg:f64 = Stats::mean(data)</span>
            {"\n\n"}
            <span className="text-white">    console::outln(</span>
            <span className="text-white/72">{'"sum = @{sum}, mean = @{avg}"'}</span>
            <span className="text-white">)</span>
            {"\n"}
            <span className="text-white">{"}"}</span>
          </code>
        </pre>
      </div>
    </div>
  );
}

function Feature({ title, text }: { title: string; text: string }) {
  return (
    <article className="bg-[#010812] p-7">
      <h2 className="text-sm font-medium uppercase tracking-[0.24em] text-[#C71343]">
        {title}
      </h2>

      <p className="mt-4 text-base leading-7 text-white/68">
        {text}
      </p>
    </article>
  );
}

function ApplicationDiagram() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 pb-20 md:px-10 lg:px-14">
      <div className="rounded-[2rem] border border-white/14 bg-white/[0.025] p-8 md:p-10">
        <p className="text-sm font-medium uppercase tracking-[0.34em] text-[#C71343]">
          application model
        </p>

        <div className="mx-auto mt-12 flex max-w-4xl flex-col items-center">
          <ModelBox
            eyebrow="Lina bridge"
            title="Shared memory"
            text="Julia, Python and ML runtimes live beside the Lena application as connected external worlds."
            items={["Julia", "Python", "VMs"]}
          />

          <VerticalLink label="shared memory" />

          <LenaModelBox />

          <VerticalLink label="direct native calls" />

          <ModelBox
            eyebrow="Embedded calls"
            title="Native world"
            text="C, C++, Rust and LLVM-level functionality can be called directly from Lena code."
            items={["C", "C++", "Rust", "LLVM"]}
          />
        </div>
      </div>
    </section>
  );
}

function ModelBox({
  eyebrow,
  title,
  text,
  items,
}: {
  eyebrow: string;
  title: string;
  text: string;
  items: string[];
}) {
  return (
    <article className="w-full rounded-[1.5rem] border border-white/16 bg-[#010812] p-6 md:p-7">
      <div className="mb-5 flex items-center gap-4">
        <span className="text-sm font-medium uppercase tracking-[0.28em] text-[#C71343]">
          {eyebrow}
        </span>
        <div className="h-px flex-1 bg-white/18" />
      </div>

      <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-end">
        <div>
          <h3 className="text-3xl font-semibold tracking-[-0.045em] text-white">
            {title}
          </h3>

          <p className="mt-4 max-w-xl text-base leading-7 text-white/58">
            {text}
          </p>
        </div>

        <div className="flex flex-wrap gap-3 md:justify-end">
          {items.map((item) => (
            <span
              key={item}
              className="rounded-xl border border-white/14 bg-white/[0.035] px-5 py-3 text-base text-white/84"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}



function LenaModelBox() {
  return (
    <article className="relative w-full rounded-[1.75rem] border border-[#C71343] bg-[#010812] p-7 shadow-2xl shadow-black/40 md:p-8">
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-[#C71343]/12 blur-3xl" />

      <div className="mb-7 flex items-center justify-between gap-6">
        <span className="text-sm font-medium uppercase tracking-[0.28em] text-[#C71343]">
          Lena application
        </span>
        <span className="text-sm text-white/38">main.le</span>
      </div>

      <div className="grid gap-7 md:grid-cols-[0.95fr_1.05fr] md:items-center">
        <div>
          <h3 className="text-4xl font-semibold tracking-[-0.055em] text-white">
            One native codebase
          </h3>

          <p className="mt-5 text-base leading-7 text-white/58">
            Application logic stays typed, structured and compiled in Lena,
            while other worlds are connected only where they are useful.
          </p>
        </div>

        <pre className="overflow-x-auto rounded-xl border border-white/12 bg-white/[0.035] p-5 text-sm leading-6 text-white/78">
          <code>{`let sum:u64 = C::byte_sum(data)
let avg:f64 = Stats::mean(data)

console::outln("sum = @{sum}, mean = @{avg}")`}</code>
        </pre>
      </div>
    </article>
  );
}


function VerticalLink({ label }: { label: string }) {
  return (
    <div className="grid w-full max-w-4xl grid-cols-[1fr_auto_1fr] items-center py-3">
      <SideArrow />

      <span className="px-8 text-center text-sm font-medium uppercase tracking-[0.24em] text-[#C71343]">
        {label}
      </span>

      <SideArrow />
    </div>
  );
}

function SideArrow() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center">
        <div className="h-2.5 w-2.5 rotate-45 border-l border-t border-[#C71343]" />
        <div className="h-8 w-px bg-[#C71343]" />
        <div className="h-2.5 w-2.5 rotate-45 border-b border-r border-[#C71343]" />
      </div>
    </div>
  );
}

function TriadGraph() {
  const colors = {
    lena: "#C71245",
    lina: "#6200EB",
    liya: "#5DE602",
    emilia: "#924A24",
    amalia: "#315975",
  };

  const nodes = {
    // Триада — теперь ближе друг к другу, равносторонний треугольник
    Lena: { x: 50, y: 20, kind: "core" as const, color: colors.lena },
    Lina: { x: 33, y: 52, kind: "core" as const, color: colors.lina },
    Liya: { x: 67, y: 52, kind: "core" as const, color: colors.liya },

    // Дети Lena — симметрично сверху
    Selena: { x: 26, y: 14, kind: "own" as const, color: colors.lena },
    Milena: { x: 76, y: 14, kind: "own" as const, color: colors.lena },

    // Дети Lina — веером вниз-влево, разнесены и по x, и по y
    Polina: { x: 13, y: 50, kind: "own" as const, color: colors.lina },
    Melina: { x: 14, y: 67, kind: "own" as const, color: colors.lina },
    Malina: { x: 31, y: 73, kind: "own" as const, color: colors.lina },

    // Гибриды — сдвинуты так, чтобы не задевать соседей
    Emilia: { x: 76, y: 33, kind: "mixed" as const, color: colors.emilia },
    Amalia: { x: 51, y: 70, kind: "mixed" as const, color: colors.amalia },
  };

  const links: Array<{
    from: keyof typeof nodes;
    to: keyof typeof nodes;
    type: "core" | "own" | "mixed";
    curve?: number;
  }> = [
    { from: "Lena", to: "Lina", type: "core" },
    { from: "Lina", to: "Liya", type: "core" },
    { from: "Liya", to: "Lena", type: "core" },
  
    { from: "Lena", to: "Selena", type: "own", curve: -4 },
    { from: "Lena", to: "Milena", type: "own", curve: 4 },
  
    { from: "Lina", to: "Polina", type: "own", curve: -4 },
    { from: "Lina", to: "Melina", type: "own" },
    { from: "Lina", to: "Malina", type: "own", curve: 4 },
  
    { from: "Lena", to: "Emilia", type: "mixed", curve: 6 },
    { from: "Liya", to: "Emilia", type: "mixed", curve: -6 },
  
    { from: "Lina", to: "Amalia", type: "mixed", curve: 6 },
    { from: "Liya", to: "Amalia", type: "mixed", curve: -6 },
  ];

  const view = {
    xMin: 4,
    xMax: 88,
    yMin: 4,
    yMax: 82,
  };
  
  const mapX = (x: number) => ((x - view.xMin) / (view.xMax - view.xMin)) * 100;
  const mapY = (y: number) => ((y - view.yMin) / (view.yMax - view.yMin)) * 100;

  return (
    <section className="mx-auto w-full max-w-7xl px-6 pb-20 md:px-10 lg:px-14">
      <div className="rounded-[2rem] border border-white/14 bg-white/[0.025] p-8 md:p-10">
        <div className="mb-8 flex items-center gap-4">
          <p className="text-sm font-medium uppercase tracking-[0.34em] text-[#C71343]">
            project triad
          </p>
          <div className="h-px flex-1 bg-white/18" />
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.45fr] lg:items-center">
          <div>
            <h2 className="text-4xl font-semibold tracking-[-0.055em] text-white md:text-5xl">
              Basis
              <br />
              Three ideas
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-white/58">
              Lena, Lina and Liya form the central triad. Some projects grow
              from one root, while others appear where two roots meet.
            </p>

            <div className="mt-8 grid gap-3 text-sm text-white/62">
              <LegendDot color={colors.lena} label="Lena - execution basis" />
              <LegendDot color={colors.lina} label="Lina - linking basis" />
              <LegendDot color={colors.liya} label="Liya - declarative basis" />
            </div>
          </div>

          <div className="relative h-[500px] w-full overflow-hidden rounded-[1.75rem] border border-white/12 bg-[#010812]">
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              {links.map(({ from, to, type, curve = 0 }) => {
                const a = nodes[from];
                const b = nodes[to];

                const ax = mapX(a.x);
                const ay = mapY(a.y);
                const bx = mapX(b.x);
                const by = mapY(b.y);

                const midX = (ax + bx) / 2;
                const midY = (ay + by) / 2;

                const dx = bx - ax;
                const dy = by - ay;
                const length = Math.sqrt(dx * dx + dy * dy) || 1;

                const normalX = -dy / length;
                const normalY = dx / length;

                const controlX = midX + normalX * curve;
                const controlY = midY + normalY * curve;

                const stroke =
                  type === "core"
                    ? a.color
                    : type === "mixed"
                      ? `${b.color}bb`
                      : `${a.color}55`;

                return (
                  <path
                    key={`${from}-${to}`}
                    d={`M ${ax} ${ay} Q ${controlX} ${controlY} ${bx} ${by}`}
                    fill="none"
                    stroke={stroke}
                    strokeWidth={type === "core" ? 1.15 : 0.75}
                    vectorEffect="non-scaling-stroke"
                  />
                );
              })}
            </svg>

            {Object.entries(nodes).map(([name, node]) => (
              <GraphNode
                key={name}
                name={name}
                x={mapX(node.x)}
                y={mapY(node.y)}
                kind={node.kind}
                color={node.color}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function GraphNode({
  name,
  x,
  y,
  kind,
  color,
}: {
  name: string;
  x: number;
  y: number;
  kind: "core" | "own" | "mixed";
  color: string;
}) {
  const isCore = kind === "core";
  const isMixed = kind === "mixed";

  const background = isCore
    ? `${color}20`
    : isMixed
      ? `${color}22`
      : `${color}10`;

  const border = `1px solid ${isCore ? color : `${color}cc`}`;

  const boxShadow = isCore
    ? `0 0 34px ${color}22`
    : isMixed
      ? `0 0 28px ${color}16`
      : "0 18px 40px rgba(0,0,0,0.28)";

  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <div
        className={[
          "flex items-center justify-center rounded-2xl text-center",
          isCore
            ? "h-24 w-32 text-2xl font-semibold tracking-[-0.04em] text-white"
            : isMixed
              ? "h-16 w-28 text-base font-medium text-white"
              : "h-14 w-24 text-sm text-white/82",
        ].join(" ")}
        style={{
          background,
          border,
          boxShadow,
        }}
      >
        {name}
      </div>
    </div>
  );
}

function LegendDot({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className="h-3 w-8 rounded-full border"
        style={{
          borderColor: color,
          background: `${color}24`,
        }}
      />
      <span>{label}</span>
    </div>
  );
}

function CodeExamples() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 pb-20 md:px-10 lg:px-14">
      <div className="mb-8 flex items-center gap-4">
        <p className="text-sm font-medium uppercase tracking-[0.34em] text-[#C71343]">
          code examples
        </p>
        <div className="h-px flex-1 bg-white/18" />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <ExampleCodeWindow title="Using high-level libraries." file="chemistry.le">
          <span className="text-[#C71343]">from</span>
          <span className="text-white"> @Julia </span>
          <span className="text-[#C71343]">import</span>
          <span className="text-white"> </span>
          <span className="text-white/72">{'"ChemEquations"'}</span>
          <span className="text-white"> </span>
          <span className="text-[#C71343]">as</span>
          <span className="text-white"> Chem</span>
          {"\n\n"}

          <span className="text-white">main():nil {"{"}</span>
          {"\n"}

          <span className="text-white">    </span>
          <span className="text-[#C71343]">let</span>
          <span className="text-white"> eq = Chem::equation(</span>
          {"\n"}
          <span className="text-white">        </span>
          <span className="text-white/72">
            {'"BaCl2(aq) + Na2SO4(aq) -> BaSO4(s) + NaCl(aq)"'}
          </span>
          {"\n"}
          <span className="text-white">    )</span>
          {"\n\n"}

          <span className="text-white">    </span>
          <span className="text-[#C71343]">let</span>
          <span className="text-white">
            {" "}
            result = eq.balance().to_ionic().remove_spectators()
          </span>
          {"\n\n"}

          <span className="text-white">    cli::out(</span>
          <span className="text-white/72">{'"@{result}"'}</span>
          <span className="text-white">)</span>
          {"\n"}

          <span className="text-white">    </span>
          <span className="text-[#C71343]">nil</span>
          {"\n"}
          <span className="text-white">{"}"}</span>
        </ExampleCodeWindow>

        <ExampleCodeWindow
          title="Providers can expose platform-specific backend functionality, not only languages."
          file="avr_port.le"
        >
          <span className="text-white">port8 = </span>
          <span className="text-[#C71343]">struct</span>
          <span className="text-white"> {"{"}</span>
          {"\n"}
          <span className="text-white">    </span>
          <span className="text-[#C71343]">private</span>
          <span className="text-white"> addr:u8,</span>
          {"\n"}
          <span className="text-white">{"}"}</span>
          {"\n\n"}

          <span className="text-[#C71343]">impl</span>
          <span className="text-white"> port8 {"{"}</span>
          {"\n"}
          <span className="text-white">    read(r:self):u8 {"{"}</span>
          {"\n"}
          <span className="text-white">        </span>
          <span className="text-[#C71343]">return</span>
          <span className="text-white"> @AVR::in(r.addr)</span>
          {"\n"}
          <span className="text-white">    {"}"}</span>
          {"\n\n"}

          <span className="text-white">    write(r:self, v:u8):</span>
          <span className="text-[#C71343]">nil</span>
          <span className="text-white"> {"{"}</span>
          {"\n"}
          <span className="text-white">        @AVR::out(r.addr, v)</span>
          {"\n"}
          <span className="text-white">        </span>
          <span className="text-[#C71343]">return</span>
          <span className="text-white"> </span>
          <span className="text-[#C71343]">nil</span>
          {"\n"}
          <span className="text-white">    {"}"}</span>
          {"\n\n"}

          <span className="text-white">    set_bit(r:self, bit:u8):</span>
          <span className="text-[#C71343]">nil</span>
          <span className="text-white"> {"{"}</span>
          {"\n"}
          <span className="text-white">        @AVR::sbi(r.addr, bit)</span>
          {"\n"}
          <span className="text-white">        </span>
          <span className="text-[#C71343]">return</span>
          <span className="text-white"> </span>
          <span className="text-[#C71343]">nil</span>
          {"\n"}
          <span className="text-white">    {"}"}</span>
          {"\n\n"}

          <span className="text-white">    clear_bit(r:self, bit:u8):</span>
          <span className="text-[#C71343]">nil</span>
          <span className="text-white"> {"{"}</span>
          {"\n"}
          <span className="text-white">        @AVR::cbi(r.addr, bit)</span>
          {"\n"}
          <span className="text-white">        </span>
          <span className="text-[#C71343]">return</span>
          <span className="text-white"> </span>
          <span className="text-[#C71343]">nil</span>
          {"\n"}
          <span className="text-white">    {"}"}</span>
          {"\n"}
          <span className="text-white">{"}"}</span>
        </ExampleCodeWindow>
      </div>
    </section>
  );
}

function ExampleCodeWindow({
  title,
  file,
  children,
}: {
  title: string;
  file: string;
  children: ReactNode;
}) {
  return (
    <article className="relative h-full">
      <div className="absolute -inset-5 -z-10 rounded-[2rem] bg-[#C71343]/8 blur-3xl" />

      <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white bg-white/[0.035] shadow-2xl shadow-black/40">
        <div className="flex items-center justify-between border-b border-white/18 px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#C71343]" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/42" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/24" />
          </div>

          <span className="text-xs text-white/65">{file}</span>
        </div>

        <div className="border-b border-white/12 px-6 py-5">
          <h3 className="text-xl font-semibold tracking-[-0.035em] text-white">
            {title}
          </h3>
        </div>

        <pre className="min-h-[470px] flex-1 overflow-x-auto p-6 text-[0.86rem] leading-7 text-white/88">
          <code>{children}</code>
        </pre>
      </div>
    </article>
  );
}

function FinalCall() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 pb-16 md:px-10 lg:px-14">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/14 bg-white/[0.025] p-8 md:p-10">
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#C71343]/12 blur-3xl" />

        <p className="text-sm font-medium uppercase tracking-[0.34em] text-[#C71343]">
          native where possible
        </p>

        <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.055em] text-white md:text-6xl">
          One language for code that has to live between worlds.
        </h2>

        <p className="mt-6 max-w-3xl text-base leading-7 text-white/58 md:text-lg md:leading-8">
        Lena was created to unite ecosystems rather than try to replace everything, 
        preserving native performance where possible 
        and minimizing losses when interacting with others.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <Link
            href="#"
            className="rounded-full border border-[#C71343] bg-[#C71343]/12 px-5 py-3 text-sm font-medium text-white transition hover:bg-[#C71343]/22"
          >
            Read the book
          </Link>

          <Link
            href="https://github.com/ElverseProjects/lena"
            className="rounded-full border border-white/18 px-5 py-3 text-sm font-medium text-white/78 transition hover:border-white/40 hover:text-white"
          >
            View on GitHub
          </Link>

          <Link
            href="https://github.com/ElverseProjects"
            className="rounded-full border border-white/18 px-5 py-3 text-sm font-medium text-white/78 transition hover:border-white/40 hover:text-white"
          >
            Explore ecosystem
          </Link>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto w-full max-w-7xl px-6 pb-10 md:px-10 lg:px-14">
      <div className="flex flex-col gap-4 border-t border-white/14 pt-8 text-sm text-white/46 md:flex-row md:items-center md:justify-between">
        <p>
          Lena Language · Elverse Projects
        </p>

        <p>
          Built with care, named with meaning.
        </p>
      </div>
    </footer>
  );
}
