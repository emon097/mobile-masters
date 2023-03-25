import { Disclosure } from "@headlessui/react";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { AiOutlineArrowDown } from "react-icons/ai";
import { TbCurrencyTaka } from "react-icons/tb";

const Home = () => {
  const { user } = useContext(AuthContext);
  const [comment, setComment] = useState([]);
  useEffect(() => {
    fetch(`https://mobile-masters-server.vercel.app/allMobileService`)
      .then((res) => res.json())
      .then((data) => {
        setComment(data);
      });
  }, []);
  return (
    <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-3 bg-gray-200">
      {comment.map((comments) => (
        <>
          <body class="antialiased bg-gray-200 text-gray-900 font-sans p-6">
            <div class="container mx-auto">
              <div class="flex flex-wrap ">
                <div class="w-full  p-4">
                  <p
                    href=""
                    class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
                  >
                    <div class="relative pb-48 overflow-hidden">
                      <img
                        class="absolute inset-0 h-full w-full object-cover"
                        src={comments?.SPhoto}
                        alt=""
                      />
                    </div>
                    <div class="p-4">
                      <h2 class="mt-2 mb-2 text-lg  font-bold">
                        {comments?.SCategory}{" "}
                      </h2>
                      <p>ID: {comments?.SCode}</p>
                      <p class="text-sm text-black">
                        {comments?.SDetails.slice(0, 90)}
                        <Disclosure>
                          <Disclosure.Button className="mx-2 py-2">
                            <p className="text-emerald-400 font-bold flex items-center justify-center">
                              More <AiOutlineArrowDown></AiOutlineArrowDown>{" "}
                            </p>
                          </Disclosure.Button>
                          <Disclosure.Panel className="text-black">
                            {comments?.SDetails.slice(90, 100000)}
                          </Disclosure.Panel>
                        </Disclosure>
                      </p>

                      <div class="flex items-center space-x-4">
                        <span className="text-black font-semibold">
                          Worker Name:
                        </span>
                        <div class="font-medium dark:text-white">
                          <div className="text-black">
                            {comments?.displayName}
                          </div>
                        </div>
                      </div>
                      <div class="mt-3 flex items-center">
                        <span class="text-sm font-semibold">Price</span>&nbsp;
                        <span class="font-bold text-xl">
                          {comments?.SCharge}
                        </span>
                        &nbsp;
                        <span class="text-xl font-semibold">
                          <TbCurrencyTaka></TbCurrencyTaka>
                        </span>
                      </div>
                    </div>
                    <div class="p-4 border-t border-b text-xs text-gray-700">
                      <span class="rounded-md bg-emerald-400 p-2 text-white mb-1">
                        Order Service
                      </span>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </body>
        </>
      ))}
    </div>
  );
};

export default Home;
