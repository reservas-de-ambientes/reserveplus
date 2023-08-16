type SectionProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

const Section = ({ title, description, children }: SectionProps) => (
  <section className="p-6 mx-2 my-4 bg-gray-100 rounded-md">
    <div className="container mx-auto">
      <div className="flex flex-col items-center mb-8">
        <h4 className="mb-4 text-xl font-semibold">{title}</h4>
        {children}
        <div className="w-full px-4 text-justify text-gray-600">
          <p className="text-center">{description}</p>
        </div>
      </div>
    </div>
  </section>
);

export default Section;
