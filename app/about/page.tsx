import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VideoGallery } from "@/components/about/VideoGallery";
import { BRAND } from "@/lib/data";

export default function AboutPage() {
  return (
    <main className="pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "About" }]} />
        <SectionHeading
          title="About Kanatal Outdoor"
          subtitle={`${BRAND.phones[0]} · ${BRAND.phones[1]} · ${BRAND.phones[2]} · ${BRAND.website}`}
          subtitleClassName="break-all sm:break-normal"
        />

        <div className="mt-16 max-w-3xl mx-auto">
          <p className="text-base text-ink-muted leading-relaxed">
            Kanatal Outdoor Adventure is a family-run adventure park at Village Saur Kanatal, 
            near the Winter Line Cafe, Tehri Garhwal, Uttarakhand. We offer 18 thrilling 
            activities — from the Giant Swing and Sky Roller to Rope Courses, Valley Crossing, 
            ATV rides, Zip Line, Jeep Safari, and guided treks.
          </p>
          <p className="text-base text-ink-muted mt-4 leading-relaxed">
            Every activity is supervised by trained instructors with proper safety equipment. 
            We also have package deals that bundle activities at discounted prices.
          </p>
        </div>

        <div className="mt-16 bg-brand-snow border border-border-subtle rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-black uppercase tracking-tight text-ink">Ajay Ramola</h2>
              <p className="text-xs font-bold uppercase tracking-wider text-brand-koa mt-1">Owner</p>
              <p className="text-sm text-ink-muted mt-4 leading-relaxed">
                Ajay Ramola runs Kanatal Outdoor Adventure. Born and raised in Tehri Garhwal, he 
                built this adventure park to share the thrill of the Himalayas with visitors from 
                across India. You can reach him directly on the numbers below.
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {BRAND.phones.map((p) => (
                  <span key={p} className="text-xs bg-brand-koa/10 text-brand-koa px-4 py-2 rounded-full font-bold">
                    {p}
                  </span>
                ))}
              </div>
            </div>
            <img
              src="/images/ajay-ramola.jpg"
              alt="Ajay Ramola"
              className="w-full h-[240px] md:h-[350px] object-cover rounded-2xl"
              loading="lazy"
            />
          </div>
        </div>

        <VideoGallery />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Phone", value: BRAND.phones[0] },
            { label: "Address", value: "Village Saur Kanatal, Tehri Garhwal" },
            { label: "Web", value: BRAND.website },
            { label: "Instagram", value: BRAND.instagram },
          ].map((item) => (
            <div key={item.label} className="bg-brand-snow border border-border-subtle rounded-2xl p-6 text-center">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-koa mb-1">{item.label}</p>
              <p className="text-sm text-ink-muted">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
