import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider";

const AddNewService = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { user } = useContext(AuthContext);
  let Scodes = Math.floor(Math.random() * 1234567890 + 1);
  const onSubmit = (data, e) => {
    const SName = data.ServiceName;
    const SCategory = data.ServiceCategory;
    const SDetails = data.ServicingDetails;
    const SPhoto = data.ServicePhoto[0];
    const SCode = data.ServiceCode;
    const SCharge = data.ServiceCharge;
    const email = user?.email;
    const displayName = user?.displayName;
    const formData = new FormData();
    formData.append("image", SPhoto);
    const url = `https://api.imgbb.com/1/upload?key=a9092fb79f783fc4527950882d60d253`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const SPhoto = imageData.data.display_url;
        const allDetails = {
          SCode,
          SPhoto,
          SDetails,
          SCategory,
          SName,
          SCharge,
          displayName,
          email,
        };
        console.log(allDetails);
        fetch("https://mobile-masters-server.vercel.app/addService", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(allDetails),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.acknowledged) {
              e.target.reset();
              toast.success("Succesfully Added");
            }
          });
      });
  };

  return (
    <div className="flex justify-center my-10">
      <form onSubmit={handleSubmit(onSubmit)} class="w-full max-w-lg">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="ServiceCategory"
            >
              Service Category
            </label>
            <div class="relative">
              <select
                {...register("ServiceCategory")}
                class="block appearance-none w-60 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="ServiceCategory"
              >
                <option value="screen-replacement">Screen Replacement</option>
                <option value="battery-replacement">Battery Replacement</option>
                <option value="charging-port-repair">
                  Charging Port Repair
                </option>
                <option value="speaker-repair">Speaker Repair</option>
                <option value="microphone-repair">Microphone Repair</option>
                <option value="camera-repair">Camera Repair</option>
                <option value="water-damage-repair">Water Damage Repair</option>
                <option value="data-recovery">Data Recovery</option>
                <option value="software-updates">
                  Software Updates and Upgrades
                </option>
                <option value="network-issues">
                  Network Issues Troubleshooting
                </option>
                <option value="home-button-repair">Home Button Repair</option>
                <option value="power-button-repair">Power Button Repair</option>
                <option value="volume-button-repair">
                  Volume Button Repair
                </option>
                <option value="wifi-repair">Wi-Fi Connectivity Repair</option>
                <option value="bluetooth-repair">
                  Bluetooth Connectivity Repair
                </option>
                <option value="headphone-jack-repair">
                  Headphone Jack Repair
                </option>
                <option value="sim-card-replacement">
                  SIM Card Replacement
                </option>
                <option value="antenna-repair">Antenna Repair</option>
                <option value="back-cover-replacement">
                  Back Cover Replacement
                </option>
                <option value="lcd-replacement">LCD Replacement</option>
                <option value="touchscreen-repair">Touchscreen Repair</option>
                <option value="housing-repair">
                  Housing Repair or Replacement
                </option>
                <option value="motherboard-repair">Motherboard Repair</option>
                <option value="ic-replacement">IC Replacement</option>
                <option value="diagnosis-troubleshooting">
                  General Diagnosis and Troubleshooting
                </option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="ServicingDetails"
            >
              Servicing Details
            </label>
            <textarea
              {...register("ServicingDetails")}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="ServicingDetails"
              id="ServicingDetails"
              cols="30"
              placeholder="Write a Full Details in Service"
              rows="10"
            ></textarea>
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">
            Cover photo
          </label>
          <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div class="space-y-1 text-center">
              <svg
                class="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="True"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div class="flex text-sm text-gray-600">
                <label
                  for="ServicePhoto"
                  class="relative cursor-pointer bg-white rounded-md font-medium text-gray-600 hover:text-gray-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-gray-500"
                >
                  <span>Upload a file</span>
                  <input
                    {...register("ServicePhoto")}
                    id="ServicePhoto"
                    name="ServicePhoto"
                    type="file"
                    class="sr-only"
                  />
                </label>
                <p class="pl-1">or drag and drop</p>
              </div>
              <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="ServiceCode"
            >
              Service Code
            </label>
            <input
              {...register("ServiceCode")}
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-6 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="ServiceCode"
              type="number"
              name="ServiceCode"
              value={Scodes}
            />
          </div>

          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Service Charge
            </label>

            <input
              {...register("ServiceCharge")}
              class="appearance-none block w-72 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="text"
              placeholder="Enter Your Amount in Taka"
            />
          </div>
        </div>
        <input
          className="text-white btn btn-success btn-sm"
          type="submit"
          value="Add Service"
        />
      </form>
    </div>
  );
};

export default AddNewService;
