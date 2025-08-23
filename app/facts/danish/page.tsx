export default function DanishFactsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Danish Facts 🇩🇰
        </h1>

        <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 border border-white/20">
          <h2 className="text-2xl font-semibold text-white mb-4">
            About Danish Language
          </h2>
          <p className="text-white/80 mb-4">
            Danish is a North Germanic language spoken primarily in Denmark and
            parts of Germany.
          </p>

          <h3 className="text-xl font-semibold text-white mb-3">
            Key Features:
          </h3>
          <ul className="text-white/80 space-y-2">
            <li>• Uses the Latin alphabet with 29 letters</li>
            <li>• Known for its "stød" (glottal stop) sound</li>
            <li>• Has soft pronunciation compared to other Nordic languages</li>
            <li>• Related to Swedish and Norwegian</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
