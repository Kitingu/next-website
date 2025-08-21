"use client";

const docs = [
  {
    id: 1,
    title: "Bidding Document",
    type: "PDF",
    size: "181 KB",
    date: "15/01/2024",
    href: "/docs/bidding_document",
  },
  {
    id: 2,
    title: "List of Vehicles",
    type: "PDF",
    size: "3.1 MB",
    date: "10/01/2024",
    href: "/docs/list_of_vehicles.pdf",
  },
  {
    id: 3,
    title: "Bidding Form",
    type: "Excel",
    size: "246 KB",
    date: "05/01/2024",
    href: "/docs/bidding_form.xlsx",
  },
];

// Inline SVGs
const DocumentIcon = ({ className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
    <polyline points="14 3 14 8 19 8" />
    <line x1="8" y1="13" x2="16" y2="13" />
    <line x1="8" y1="17" x2="16" y2="17" />
  </svg>
);

const DownloadIcon = ({ className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 3v10" />
    <polyline points="8 11 12 15 16 11" />
    <path d="M4 21h16" />
  </svg>
);

const Dot = () => <span className="mx-2 text-slate-300">•</span>;

function AnnouncementCard() {
  return (
    <div className="mt-32  rounded-xl border border-slate-200 bg-white p-5 shadow-sm ring-1 ring-black/5 sm:p-6">
      {/* left accent */}
      <span className="absolute inset-y-0 left-0 w-1 bg-protopink" aria-hidden="true" />
      <div className="relative">
        <h2 className="text-lg font-semibold text-slate-900">Invitation to Bid</h2>
        <p className="mt-2 text-sm leading-6 text-slate-700">
          Applications are invited from interested bidders for the purchase of the assets accessible on{" "}
          <a
            href="/docs/list_of_vehicles.pdf"
            className="font-medium underline underline-offset-2 hover:text-protoblue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-protoblue/50 rounded"
          >
            Asset List.pdf
          </a>{" "}
          (Assets). The Assets shall be sold on an &quot;AS IS WHERE IS&quot; basis. All interested bidders are
          requested to view the Assets at the locations indicated from <strong>25th August 2025</strong> to{" "}
          <strong>5th September 2025</strong> between <strong>08:00am to 05:00pm</strong>.
        </p>
        <p className="mt-3 text-sm leading-6 text-slate-700">
          In order to participate in this exercise, Prospective Bidders MUST pay a non-refundable fee of{" "}
          <strong>KES 10,000</strong> payable via <strong>Paybill Number: 247247</strong> Account Number:{" "}
          <strong>1560272926143</strong> and a copy of the payment receipt attached to the Bidding Document.
        </p>
        <p className="mt-3 text-sm leading-6 text-slate-700">
          Prospective Bidders are requested to submit their bids and all other requirements set out in the Bidding
          Documents electronically to{" "}
          <a
            href="mailto:bids@protoenergy.com"
            className="font-medium underline underline-offset-2 hover:text-protoblue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-protoblue/50 rounded"
          >
            bids@protoenergy.com
          </a>{" "}
          on or before <strong>11:00am - 10th September 2025</strong>. Physical Bidding Documents are not
          acceptable. Bidding Documents received after the closing date will be rejected.
        </p>

        
      </div>
    </div>
  );
}

function DocumentCard({ doc }) {
  return (
    <div className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-protoblue/40 sm:p-6">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        {/* Left */}
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-protoblue text-sm font-semibold text-white transition-colors duration-300 group-hover:bg-protoblue">
            {doc.id}
          </div>

          <div className="min-w-0">
            <div className="flex items-start gap-3">
              <DocumentIcon className="mt-0.5 h-6 w-6 text-blue-600 transition-colors duration-300 group-hover:text-protoblue" />
              <h3 className="truncate text-base font-semibold leading-6 text-slate-900 transition-colors duration-300 group-hover:text-protoblue">
                {doc.title}
              </h3>
            </div>

            <div className="mt-2 flex flex-wrap items-center text-sm text-slate-600">
              <span className="font-medium">{doc.type}</span>
              <Dot />
              <span>{doc.size}</span>
              <Dot />
              <span>{doc.date}</span>
            </div>
          </div>
        </div>

        {/* Download button */}
        <div className="md:pl-6 md:pt-0">
          <a
            href={doc.href}
            download
            aria-label={`Download ${doc.title}`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-protopink px-4 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-black/5 transition-all duration-200 hover:bg-protopink/90 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-protopink md:w-auto"
          >
            <DownloadIcon className="h-5 w-5" />
            Download
          </a>
        </div>
      </div>
    </div>
  );
}

export default function BiddingDocumentsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Top announcement card */}
        <AnnouncementCard />

        {/* Header */}
        <header className="mt-8">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Bidding Documents
          </h1>
        
        </header>

        {/* List */}
        <section className="mt-6 space-y-4">
          {docs.map((doc) => (
            <DocumentCard key={doc.id} doc={doc} />
          ))}
        </section>
      </div>
    </main>
  );
}
