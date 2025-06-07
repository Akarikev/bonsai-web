export default function ComparisonTable() {
  return (
    <div className="overflow-x-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
        🌿 Bonsai vs The Rest
      </h2>
      <div className="min-w-[800px] md:min-w-full">
        <table className="w-full border border-gray-300 rounded-xl overflow-hidden text-xs md:text-sm lg:text-base">
          <thead className="bg-green-100 ">
            <tr>
              <th className="px-2 md:px-4 py-2 md:py-3 font-semibold">
                Feature
              </th>
              <th className="px-2 md:px-4 py-2 md:py-3 font-semibold">
                Bonsai 🌱
              </th>
              <th className="px-2 md:px-4 py-2 md:py-3 font-semibold">
                Zustand 🐻
              </th>
              <th className="px-2 md:px-4 py-2 md:py-3 font-semibold">
                Jotai 🧪
              </th>
              <th className="px-2 md:px-4 py-2 md:py-3 font-semibold">
                Redux 🧛‍♂️
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {[
              [
                "Dev Panel 🛠️",
                "Built-in & sleek 😎",
                "3rd party tools 😬",
                "Nope",
                "Redux DevTools 🧓",
              ],
              [
                "Selector Access 🎯",
                "`use(select => state.todo)` ✅",
                "✅",
                "✗",
                "✗",
              ],
              ["Tree Path 🌳", '`use("todos.byId.1")` ✅', "✗", "✅", "✗"],
              [
                "Middleware 🧩",
                "Built-in & stackable 🪄",
                "Yes",
                "Limited",
                "Complex 🥱",
              ],
              [
                "TS Support 🧠",
                "✨ Full autocomplete ✨",
                "Good",
                "Basic",
                "Manual 🪦",
              ],
              ["Boilerplate 😩", "None 😇", "Minimal", "Small", "Lots 🌲"],
              ["Learning 🎢", "Smooth 🧈", "Easy", "Abstract", "Steep 🐉"],
              ["Speed ⚡", "Optimized ⚛️", "Good", "Decent", "Variable"],
              ["Concept 🧘", "Intuitive 🧠", "Simple", "Atomic", "Complex 🧮"],
            ].map(([feature, bonsai, zustand, jotai, redux], idx) => (
              <tr key={idx} className="hover:bg-green-50 transition">
                <td className="px-2 md:px-4 py-2 md:py-3 font-medium whitespace-nowrap">
                  {feature}
                </td>
                <td className="px-2 md:px-4 py-2 md:py-3">{bonsai}</td>
                <td className="px-2 md:px-4 py-2 md:py-3">{zustand}</td>
                <td className="px-2 md:px-4 py-2 md:py-3">{jotai}</td>
                <td className="px-2 md:px-4 py-2 md:py-3">{redux}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-center text-gray-500 italic mt-4 text-xs md:text-sm">
        ⚠️ No bears or atoms were harmed. Your state logic might never be the
        same 😏
      </p>
    </div>
  );
}
