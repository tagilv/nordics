export default function NorwegianFactsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Norwegian Facts 🇳🇴
        </h1>

        <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 border border-white/20">
          <h2 className="text-2xl font-semibold text-white mb-4">
            About Norwegian Language
          </h2>
          <p className="text-white/80 mb-4">
            Norwegian is a North Germanic language with two official written
            forms: Bokmål and Nynorsk.
          </p>

          <h3 className="text-xl font-semibold text-white mb-3">
            Key Features:
          </h3>
          <ul className="text-white/80 space-y-2">
            <li>• Two written standards: Bokmål and Nynorsk</li>
            <li>• Uses the Latin alphabet with 29 letters</li>
            <li>• Has pitch accent (like Swedish)</li>
            <li>• Very similar to Danish and Swedish</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
