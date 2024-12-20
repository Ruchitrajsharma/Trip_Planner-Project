import React from "react";
import PackageCard from "./PackageCard";
import packages from "./PackageData";

const Packages = () => {
  return (
    <section id="packages" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Popular Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pack) => (
            <PackageCard key={pack.id} {...pack} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
