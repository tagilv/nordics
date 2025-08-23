export default function SwedishFactsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Swedish Facts 🇸🇪
        </h1>

        <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 border border-white/20">
          <h2 className="text-2xl font-semibold text-white mb-4">
            About Swedish Language
          </h2>
          <p className="text-white/80 mb-4">
            Swedish is a North Germanic language spoken primarily in Sweden and
            parts of Finland.
          </p>

          <h3 className="text-xl font-semibold text-white mb-3">
            Key Features:
          </h3>
          <ul className="text-white/80 space-y-2">
            <li>• Uses the Latin alphabet with 29 letters</li>
            <li>• Has two grammatical genders (common and neuter)</li>
            <li>• Known for its melodic intonation</li>
            <li>• Related to Danish and Norwegian</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
