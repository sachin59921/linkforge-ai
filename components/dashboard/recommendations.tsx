const recommendations = [
  {
    title: "Strengthen your About section",
    description:
      "Your experience is strong, but your positioning could be clearer to your target audience.",
    action: "Improve About",
  },
  {
    title: "Create your next post",
    description:
      "Turn one of your recent professional experiences into a story your network can learn from.",
    action: "Create Post",
  },
];

export function Recommendations() {
  return (
    <section>
      <div className="mb-4">
        <h2 className="text-lg font-semibold tracking-tight">
          Recommended next
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Small improvements that compound over time.
        </p>
      </div>

      <div className="space-y-3">
        {recommendations.map((recommendation) => (
          <div
            key={recommendation.title}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <h3 className="font-medium">{recommendation.title}</h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              {recommendation.description}
            </p>

            <button
              type="button"
              className="mt-4 text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              {recommendation.action} →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}