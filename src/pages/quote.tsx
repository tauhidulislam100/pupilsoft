import { FeatureItem } from 'interfaces';
import Image from 'next/image';
import React, { useState } from 'react';
import { BiCheck } from 'react-icons/bi';
import { BsListColumns } from 'react-icons/bs';
import { platformData, webQuotes } from 'utils/sample-data';

const Quote = () => {
  const [features, setFeatures] = useState(webQuotes);
  const [platform, setPlatform] = useState<number | null>(null);

  const handleSelect = (featureId: number, itemId: number) => {
    setFeatures((prev) => [
      ...prev.map((feature) =>
        feature.id === featureId
          ? {
              ...feature,
              value: feature.multiSelect
                ? (feature.value as number[]).includes(itemId)
                  ? (feature.value as number[]).filter((id) => id !== itemId)
                  : [...(feature.value as number[]), itemId]
                : itemId,
            }
          : feature
      ),
    ]);
  };

  const handlePlatform = (platformId: number) =>
    setPlatform((prev) => (prev === platformId ? null : platformId));

  const getTitle = (
    featureItems: FeatureItem[],
    featureIds: number | number[]
  ) => {
    return featureItems
      .filter((feature) =>
        Array.isArray(featureIds)
          ? (featureIds as number[]).includes(feature.id)
          : featureIds === feature.id
      )
      .map((ft) => ft.title);
  };

  return (
    <main className="bg-dark px-[3%] pb-5 select-none">
      <header className="w-full flex items-center gap-5 min-h-screen">
        <div className="w-full">
          <h1 className="text-6xl font-bold text-primary">
            Calculate your app{' '}
          </h1>
          <p className="text-white mt-10 text-xl">
            Geniusee estimator will help you to calculate the expected
            development time of your application as well as budget based on our
            experience working with software products.
          </p>
          <p className="mt-10 text-white text-xl">
            Select the items below which best describes your app and the
            features you require.
          </p>
        </div>
        <div className="w-full">
          <Image
            src="/quote/construct.webp"
            width={784}
            height={451}
            alt="akdjfkd"
          />
        </div>
      </header>
      <section className="text-white">
        <h2 className="text-5xl mt-10">01</h2>
        <h4 className="pt-5 text-2xl">
          What is your current or expected average hourly rate in USD per one
          team member ?
        </h4>
        <div className="flex gap-5 mt-5">
          <div className="w-2/12">adkfjdk</div>
          <p className="flex-1">
            Define average hourly rate of your development team. It can be
            average hourly cost of your inhouse team member or rates that you
            are paying to your technology partner.
          </p>
        </div>
      </section>
      <section className="text-white">
        <h2 className="text-5xl mt-10">02</h2>
        <h4 className="pt-5 text-2xl">What platforms do you need?</h4>
        <div className="flex gap-5 mt-5">
          {platformData.map((pf) => (
            <div
              onClick={() => handlePlatform(pf.id)}
              className="w-full p-3 shadow bg-primary cursor-pointer"
            >
              <div className="flex justify-between items-center">
                <h2 className="uppercase text-xl font-semibold">{pf.title}</h2>
                {platform === pf.id && (
                  <div className="w-5 h-5 rounded-full bg-white text-primary flex justify-center items-center">
                    <BiCheck />
                  </div>
                )}
              </div>
              <div className="relative w-full h-44 my-10">
                <Image src={'/quote/web.webp'} alt="kdfjkd" layout="fill" />
              </div>
              <h6 className="h-12 text-lg font-semibold text-center mt-3">
                {pf.description.main}
              </h6>
            </div>
          ))}
        </div>
      </section>
      {/* Render all the features dynamically */}
      <div className="mt-20 relative flex justify-between">
        <div className="w-2/3 mr-auto">
          {features.map((feature) => (
            <section key={feature.id} className="text-white">
              <h2 className="text-5xl mt-10">{feature.id}</h2>
              <h4 className="pt-2 text-2xl font-medium">{feature.title}</h4>
              <div className="grid grid-cols-3 gap-5 mt-5">
                {feature.features.map((featureItem) => (
                  <div
                    onClick={() => handleSelect(feature.id, featureItem.id)}
                    className="relative w-full p-5 shadow-sm shadow-primary bg-primary cursor-pointer rounded-lg"
                    key={`${feature.title.trim() + featureItem.id}`}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-5">
                        <BsListColumns />
                        <span className="">{featureItem.title}</span>
                      </div>
                      {(Array.isArray(feature.value)
                        ? feature.value.includes(featureItem.id)
                        : feature.value === featureItem.id) && (
                        <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-white text-primary flex justify-center items-center">
                          <BiCheck />
                        </div>
                      )}
                    </div>
                    <p className="text-xs mt-5 font-bold leading-5">
                      {featureItem.description.main}
                      <span className="font-normal">
                        {featureItem.description.explanation}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
        <div className="relative mt-5 flex-1 text-white max-w-[350px]">
          <h2 className="text-3xl font-semibold text-center mt-3">
            Personal Estimate
          </h2>
          <div className="mt-20 sticky top-2 bg-primary rounded-lg px-7 py-10">
            <div className="grid grid-cols-2 gap-5">
              <div className="">
                <h5 className="font-medium text-xs">Platform</h5>
                <div className="text-[10px]">
                  {platformData.find((pf) => pf.id === platform)?.title}
                </div>
              </div>
              {features.map((feature) => {
                const extractedTitle = getTitle(
                  feature.features,
                  feature.value
                );
                const title =
                  extractedTitle.length > 1
                    ? extractedTitle[0] + '...'
                    : extractedTitle;

                return (
                  <div className="">
                    <h5 className="text-xs font-medium">
                      {feature.estimateTitle}
                    </h5>
                    <div className="mt-2 text-[10px] font-medium">{title}</div>
                  </div>
                );
              })}
            </div>
            <div className="grid grid-cols-2 gap-5 mt-5 border-t border-gray-50/20">
              <div className="space-y-2 mt-5">
                <h5 className="font-medium text-xs">Designer man/hours</h5>
                <div className="text-[10px]">{546}</div>
                <h5 className=" font-medium text-xs">Total man/hours</h5>
                <div className="text-[10px]">{102}</div>
              </div>
              <div className="space-y-2 mt-5">
                <h5 className="font-medium text-xs">Developer man/hours</h5>
                <div className="mt-2 text-[10px]">{21454}</div>
                <h5 className="font-medium text-xs">Budget</h5>
                <div className="text-[10px]">${120}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Quote;
