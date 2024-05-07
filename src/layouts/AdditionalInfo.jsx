import { Link } from "react-router-dom";
import { baseImgURL } from "../../config";
const AdditionalInfo = ({
  status,
  languages,
  budget,
  revenue,
  production_companies,
  keywords,
}) => {
  const currency_option = {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  };
  return (
    <section className="py-12 px-5">
      <div>
        <h1 className="font-commissioner text-white text-3xl font-bold px-5">
          Additional Information
        </h1>
        <div className="mx-5 py-5">
          <div className="text-white font-commissioner mb-6">
            <h2 className="font-semibold">Status</h2>
            <p>{status}</p>
          </div>
          <div className="text-white font-commissioner mb-6">
            <h2 className="font-semibold">Language</h2>
            <p>{languages?.toUpperCase()}</p>
          </div>
          {budget && (
            <div className="text-white font-commissioner mb-6">
              <h2 className="font-semibold">Budget</h2>
              <p>
                {Intl.NumberFormat("en-US", currency_option).format(budget)}
              </p>
            </div>
          )}
          {revenue && (
            <div className="text-white font-commissioner mb-6">
              <h2 className="font-semibold">Revenue</h2>
              <p>
              {Intl.NumberFormat("en-US", currency_option).format(revenue)}
              </p>
            </div>
          )}
          {production_companies?.length > 0 && (
            <div className="text-white font-commissioner mb-6">
              <h2 className="font-semibold mb-1">Production</h2>
              <div className="flex flex-wrap gap-1 text-sm">
                {production_companies.map((company) => {
                  return (
                    <p
                      key={company.id}
                      className="p-2 border-[1px] rounded-lg border-[#2f2f2f] hover:bg-[#2f2f2f]"
                    >
                      {" "}
                      {company.name}
                    </p>
                  );
                })}
              </div>
            </div>
          )}
          {keywords?.length > 0 && (
            <div className="text-white font-commissioner mb-6">
              <h2 className="font-semibold mb-1">Keywords</h2>
              <div className="flex flex-wrap gap-1 text-sm">
                {keywords.map((word) => {
                  return (
                    <Link
                      to="#"
                      key={word.id}
                      className="p-2 border-[1px] rounded-lg border-[#2f2f2f] hover:bg-[#2f2f2f]"
                    >
                      {word.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AdditionalInfo;
