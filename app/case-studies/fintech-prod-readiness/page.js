export const metadata = {
  title: "FinTech Production Readiness | Zenteq Private Limited",
  description:
    "Compliance-ready AWS DevOps platforms for FinTech companies built by Zenteq Private Limited.",
};

export default function FintechProdReadiness() {
  return (
    <main className="relative">
      <section className="py-24 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-white">
            FinTech Production Readiness
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-3xl">
            Zenteq enables FinTech platforms to launch and scale on AWS with
            security, compliance, and operational excellence built-in.
          </p>
        </div>
      </section>

      <section className="py-24 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Secure Cloud Architecture",
              desc: "VPC isolation, IAM least privilege, encryption everywhere.",
            },
            {
              title: "Audit & Compliance Ready",
              desc: "SOC-friendly logging, traceability, and access controls.",
            },
            {
              title: "Zero-Downtime Deployments",
              desc: "Blue-green & canary releases with rollback safety.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6"
            >
              <h3 className="text-white font-semibold">{item.title}</h3>
              <p className="mt-3 text-slate-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
