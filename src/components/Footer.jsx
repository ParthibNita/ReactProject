import React from "react";
import { resourcesLinks, communityLinks, platformLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="mt-10">
      <div className="flex flex-wrap ">
        <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <div className="p-10">
            <h3 className="mb-4 text-md font-semibold">Resources</h3>
            <ul className="space-y-2">
              {resourcesLinks.map((e, idx) => (
                <li key={idx} className="text-neutral-300">
                  <a
                    href={e.href}
                    className="text-neutral-400 hover:text-white"
                  >
                    {e.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3">
          <div className="p-10">
            <h3 className="mb-4 text-md font-semibold">Platform</h3>
            <ul className="space-y-2">
              {platformLinks.map((e, idx) => (
                <li key={idx} className="text-neutral-300">
                  <a
                    href={e.href}
                    className="text-neutral-400 hover:text-white"
                  >
                    {e.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3">
          <div className="p-10">
            <h3 className="mb-4 text-md font-semibold">Community</h3>
            <ul className="space-y-2">
              {communityLinks.map((e, idx) => (
                <li key={idx} className="text-neutral-300">
                  <a
                    href={e.href}
                    className="text-neutral-400 hover:text-white"
                  >
                    {e.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
