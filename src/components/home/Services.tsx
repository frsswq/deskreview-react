import { servicesData } from "../../data/home/servicesData";
import type { servicesDataTypes } from "../../types/homeTypes";

export default function Services() {
  return (
    <section className="desk-section">
      <h1 className="desk-title">Services</h1>
      <div className="flex flex-col gap-y-5">
        {servicesData.map((servicesCategory: servicesDataTypes) => (
          <div key={servicesCategory.type}>
            <h2 className="home-item-title">{servicesCategory.type}</h2>
            <hr className="desk-divider" />
            {servicesCategory.service.map((serviceName) => (
              <div key={`${servicesCategory.type}-${serviceName}`}>
                <p className="home-item-text">{serviceName}</p>
                <hr className="desk-divider" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
