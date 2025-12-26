export function MethodologyComparisonChart() {
  const methodologies = [
    {
      name: "Towers (WTW) GGS",
      methodology: "Points-based; analytical and consistent approach to defining job size across an organization.",
      factors: [
        "Functional knowledge",
        "Business expertise",
        "Leadership scope",
        "Problem-solving complexity",
        "Impact",
        "Interpersonal skills",
      ],
      purpose:
        "Establishes job grades based on size/level, often tied to compensation structures. Typically uses up to 25 grades, adaptable based on org size/complexity.",
    },
    {
      name: "Mercer IPE",
      methodology:
        "Proprietary, customizable point-factor system; assesses value created within organizational context.",
      factors: ["Impact", "Communication", "Innovation", "Knowledge", "Risk"],
      purpose:
        "Establishes job value within context, often for compensation and internal equity. Flexible and tailored sizing.",
    },
    {
      name: "Korn Ferry (Hay) Method",
      methodology:
        "Widely accepted point-factor approach; measures and compares jobs based on contribution to the organization.",
      factors: ["Know-How", "Problem Solving", "Accountability", "Working Conditions"],
      purpose:
        "Establishes job grades based on contribution, widely used for compensation benchmarking. Adaptable to varying company sizes.",
    },
    {
      name: (
        <>
          <strong className="font-bold">Jo</strong>
        </>
      ),
      methodology:
        "Decomposes jobs into Input → Throughput → Output stages to evaluate Human vs. Machine suitability for augmentation. Focuses on optimizing the division of labor.",
      factors: [
        "Input: Knowledge/Skills, Compliance, Communication, Problem-Solving, Resources/Tools",
        "Throughput: Decision-Making, Info Processing, Creativity, Coordination, Adaptability",
        "Output: Deliverables, Service, Decisions, Performance, Knowledge Transfer",
      ],
      purpose:
        "Not a sizing/grading methodology. It's a way to look at work objectively to identify where Automation, AI, RPA, or Robotics will add value. It assesses the expected friction during implementation and informs strategies to preempt it. Applicable to any job.",
    },
  ]

  return (
    <div className="overflow-x-auto bg-white p-6 rounded-lg shadow-md border border-slate-200">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 text-center flex items-center justify-center gap-2">
        <span className="flex items-center">
          <div className="relative w-6 h-6 sm:w-7 sm:h-7"></div>
        </span>
        <span>Methodology</span>
      </h2>
      {/* </CHANGE> */}
      <table className="min-w-full divide-y divide-slate-200 border border-slate-200">
        <thead className="bg-slate-50">
          <tr>
            <th
              scope="col"
              className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider w-1/5"
            >
              Feature
            </th>
            {methodologies.map((method, index) => (
              <th
                key={index}
                scope="col"
                className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider w-1/5"
              >
                {method.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-slate-200">
          {/* Methodology Row */}
          <tr>
            <td className="px-4 py-4 align-top font-semibold text-sm text-slate-700">Methodology</td>
            {methodologies.map((method, index) => (
              <td key={index} className="px-4 py-4 align-top text-sm text-slate-600 leading-relaxed">
                {method.methodology}
              </td>
            ))}
          </tr>

          {/* Key Factors Row */}
          <tr>
            <td className="px-4 py-4 align-top font-semibold text-sm text-slate-700">Key Factors Evaluated</td>
            {methodologies.map((method, index) => (
              <td key={index} className="px-4 py-4 align-top text-sm text-slate-600">
                <ul className="list-disc pl-5 space-y-1">
                  {method.factors.map((factor, fIndex) => (
                    <li key={fIndex}>{factor}</li>
                  ))}
                </ul>
              </td>
            ))}
          </tr>

          {/* Purpose / Outcome Row */}
          <tr>
            <td className="px-4 py-4 align-top font-semibold text-sm text-slate-700">Purpose / Outcome</td>
            {methodologies.map((method, index) => (
              <td key={index} className="px-4 py-4 align-top text-sm text-slate-600 leading-relaxed">
                {method.purpose}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

// Example Usage in your methodology page component:
// import { MethodologyComparisonChart } from '@/components/methodology-comparison-chart';
//
// export default function MethodologyPage() {
//   return (
//     <div>
//       {/* ... other page content ... */}
//       <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-100">
//          <div className="max-w-7xl mx-auto">
//             <MethodologyComparisonChart />
//          </div>
//       </section>
//       {/* ... other page content ... */}
//       <Footer />
//     </div>
//   );
// }
