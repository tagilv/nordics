import Image from "next/image";

import { fallbackExpressions } from "@/lib/api";

export default function Home() {
  const expressions = fallbackExpressions;
  return (
    <div className="min-h-screen">
      <main>
        <div className="min-h-screen p-8">
          <h1 className="text-4xl font-bold text-center mb-8">
            Nordic Expressions
          </h1>
          {Object.entries(expressions).map(([country, countryExpression]) => (
            <div key={country}>
              {countryExpression.map((expression) => (
                <div key={expression.id}>
                  <h3>{expression.expression}</h3>
                  <p>{expression.pronunciation}</p>
                  <p>{expression.meaning}</p>
                  <p>{expression.translation}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
