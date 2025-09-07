import Image from "next/image";
import React from "react";
import { Container }  from "@/components/Container";

export const Benefits = (props: any) => {
  const { data } = props;
  const {title, description, image, items, imagePosition} = data
  return (
    <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
      <div
        className={`flex items-center justify-center w-full lg:w-1/2 ${
          imagePosition === "right" ? "lg:order-1" : ""
        }`}
      >
        <div>
          <Image
            src={`http://127.0.0.1:1337${image.url}`}
            width={image.width}
            height={image.height}
            alt={image.alternativeText}
            className={"object-cover"}
          />
        </div>
      </div>

      <div
        className={`flex flex-wrap items-center w-full lg:w-1/2 ${
          imagePosition === "right" ? "lg:justify-end" : ""
        }`}
      >
        <div>
          <div className="flex flex-col w-full mt-4">
            <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
              {title}
            </h3>

            <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
              {description}
            </p>
          </div>

          <div className="w-full mt-5">
            {items.map((item: any, index: number) => (
              <Benefit key={index} title={item.title} icon={item.icon}>
                {item.description}
              </Benefit>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

function Benefit(props: {title: string, icon: any, children: string}) {
  const {title, icon, children} = props;
  return (
      <div className="flex items-start mt-8 space-x-3">
        <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11 ">
          {icon && icon.url ? (
            <Image
              src={`http://127.0.0.1:1337${icon.url}`}
              width={28}
              height={28}
              alt={icon.alternativeText || title}
              className="w-7 h-7 text-indigo-50"
            />
          ) : (
            <div className="w-7 h-7 bg-indigo-300 rounded"></div>
          )}
        </div>
        <div>
          <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
            {title}
          </h4>
          <p className="mt-1 text-gray-500 dark:text-gray-400">
            {children}
          </p>
        </div>
      </div>
  );
}
