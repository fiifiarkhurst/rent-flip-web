import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { PencilIcon, XIcon } from "@heroicons/react/solid";
import { useHistory } from "react-router-dom";
import { PROPERTIES } from "../../navigation/constants";
import {
  FeaturedImageLarge,
  FeaturedImageSmall,
  OtherImages,
  Type,
} from "./components";
import { AxiosError } from "axios";
import { StateTypes } from "./components/types";
import { states } from "./components/type";
import { AddPropertyFormInput } from "./types";
import { useAddProperty } from "./broker";
import { SecondaryLoader } from "../../shared/loader";
import { classNames } from "../../components/className";
import LocationSearchInput from "../../components/location/location";
import toast from "react-hot-toast";

function MainComponent() {
  const [longitude, setLongitude] = React.useState("");
  const [latitude, setLatitude] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [selected, setSelected] = React.useState<StateTypes>(states[0]);
  const [images, setImages] = React.useState<string[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AddPropertyFormInput>();
  const { push } = useHistory();

  const { mutateAsync, isLoading } = useAddProperty();

  const onSubmit: SubmitHandler<AddPropertyFormInput> = (data) => {
    mutateAsync({
      name: data.name,
      type: selected.value,
      description: data.description,
      price: +data.price,
      gpsAddress: data.gpsAddress,
      address: address,
      latitude: +latitude,
      longitude: +longitude,
      featuredBigImage: images[0],
      featuredSmallImage: images[0],
      checkInTime: new Date("2022-01-27T07:53:39.325Z"),
      checkOutTime: new Date("2023-01-27T07:53:39.325Z"),
      numberOfBathrooms: data.rooms - 1,
      numberOfBedrooms: +data.rooms,
      numberOfKitchens: data.rooms - 1,
    })
      .then(() => {
        resetState();
        reset({
          name: "",
          description: "",
          price: 0,
          rooms: 0,
          gpsAddress: "",
        });
        toast.success("Property added successfully");
        push(PROPERTIES);
      })
      .catch((e: AxiosError) => {
        toast.error(e.response?.data?.message || e?.message);
      });
  };

  function resetState() {
    setLongitude("");
    setLatitude("");
    setAddress("");
    setSelected(states[0]);
    setImages([]);
  }

  const disableButton =
    longitude === "" ||
    latitude === "" ||
    address === "" ||
    selected.id === 1 ||
    images.length === 0 ||
    isLoading;

  return (
    <>
      <div className="relative  items-center  w-full px-5 py-12  mx-auto   md:px-12  lg:px-16  max-w-5xl">
        <div className="pb-5 border-b border-black flex flex-row items-center justify-between mr-20">
          {" "}
          <h3 className="text-lg font-medium leading-6 text-neutral-600">
            {" "}
            Add a property
          </h3>
          <button
            onClick={() => push(PROPERTIES)}
            type="button"
            className="focus:outline-none"
          >
            <XIcon className="h-7 w-7 text-gray-500" />
          </button>
        </div>
        <div className=" mt-6 rounded-lg">
          <div className="flex flex-row items-center space-x-1">
            <h2 className="text-lg font-medium text-neutral-600">
              Property Info
            </h2>
            <button
              type="button"
              className="px-2 space-x-1 flex items-center justify-center text-xs focus:outline-none leading-5 font-medium rounded-full bg-gray-100 text-gray-800 cursor-pointer hover:text-gray-700"
            >
              <PencilIcon className="h-3 w-3" />
              <div>Draft</div>
            </button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-4 grid grid-cols-5 gap-6">
              <div className="col-span-5 sm:col-span-4 space-y-2">
                <label
                  htmlFor="location"
                  className="block text-xs font-medium text-gray-600"
                >
                  Location <span>*</span>
                </label>
                <LocationSearchInput
                  address={address}
                  setLong={setLongitude}
                  setLat={setLatitude}
                  setAddress={setAddress}
                />
              </div>

              <div className="col-span-5 sm:col-span-4 space-y-2">
                <label
                  htmlFor="name"
                  className="block text-xs font-medium text-gray-600"
                >
                  Name of property <span>*</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Eg. Samuel's ranch"
                  className={classNames(
                    errors.name
                      ? "focus:ring-offset-red-400 "
                      : "focus:ring-offset-gray-300",
                    "block w-full px-5 py-3 text-sm  placeholder-gray-300   transition  duration-500 ease-in-out transform   border border-transparent   rounded-lg  text-gray-600  focus:outline-none  focus:border-transparent   focus:ring-2  focus:ring-white focus:ring-offset-2 "
                  )}
                />
              </div>
              <div className="col-span-5 sm:col-span-4 space-y-2">
                <label
                  htmlFor="location"
                  className="block text-xs font-medium text-gray-600"
                >
                  Desription{" "}
                  <span className="font-normal text-gray-500">
                    * Must be 50 characters or less with spaces. The first
                    letter of each word must be capitalize.
                  </span>
                </label>

                <textarea
                  rows={4}
                  {...register("description", { required: true })}
                  placeholder="Describe your apartment. Eg. Near Oyibi Police Station and fully furnished"
                  className={classNames(
                    errors.description
                      ? "focus:ring-offset-red-400"
                      : "focus:ring-offset-gray-300",
                    "block w-full px-5 py-2 text-sm  placeholder-gray-300   transition  duration-500 ease-in-out transform   border border-transparent   rounded-lg  text-gray-600  focus:outline-none  focus:border-transparent   focus:ring-2  focus:ring-white focus:ring-offset-2 "
                  )}
                />
              </div>
              <div className="col-span-1 sm:col-span-1 space-y-2" />
              <div className="col-span-5 sm:col-span-1 space-y-2">
                <label
                  htmlFor="price"
                  className="block text-xs font-medium text-gray-600"
                >
                  Price <span>*</span>
                </label>
                <input
                  type="number"
                  {...register("price", { required: true })}
                  placeholder="Eg. 400"
                  className={classNames(
                    errors.price
                      ? "focus:ring-offset-red-400"
                      : "focus:ring-offset-gray-300",
                    "block w-full px-5 py-2 text-sm  placeholder-gray-300   transition  duration-500 ease-in-out transform   border border-transparent   rounded-lg  text-gray-600  focus:outline-none  focus:border-transparent   focus:ring-2  focus:ring-white focus:ring-offset-2 "
                  )}
                />
              </div>

              <div className="col-span-5 sm:col-span-1 space-y-2">
                <label
                  htmlFor="room"
                  className="block text-xs font-medium text-gray-600"
                >
                  Number of rooms <span>*</span>
                </label>
                <input
                  type="number"
                  {...register("rooms", { required: true })}
                  placeholder="3"
                  className={classNames(
                    errors.rooms
                      ? "focus:ring-offset-red-400"
                      : "focus:ring-offset-gray-300",
                    "block w-full px-5 py-2 text-sm  placeholder-gray-300   transition  duration-500 ease-in-out transform   border border-transparent   rounded-lg  text-gray-600  focus:outline-none  focus:border-transparent   focus:ring-2  focus:ring-white focus:ring-offset-2 "
                  )}
                />
              </div>
              <div className="col-span-5 sm:col-span-1 space-y-2">
                <label
                  htmlFor="gps"
                  className="block text-xs font-medium text-gray-600"
                >
                  GPS Address <span>*</span>
                </label>
                <input
                  type="text"
                  {...register("gpsAddress", { required: true })}
                  placeholder="GE-234-034"
                  className={classNames(
                    errors.gpsAddress
                      ? "focus:ring-offset-red-400"
                      : "focus:ring-offset-gray-300",
                    "block w-full px-5 py-2 text-sm  placeholder-gray-300   transition  duration-500 ease-in-out transform   border border-transparent   rounded-lg  text-gray-600  focus:outline-none  focus:border-transparent   focus:ring-2  focus:ring-white focus:ring-offset-2 "
                  )}
                />
              </div>

              <div className="col-span-5 sm:col-span-1 space-y-2">
                <label
                  htmlFor="gps"
                  className="block text-xs font-medium text-gray-600"
                >
                  Type <span>*</span>
                </label>

                <Type selected={selected} setSelected={setSelected} />
              </div>

              <div className="col-span-2 sm:col-span-2 space-y-3">
                <label
                  htmlFor="images"
                  className="block text-xs font-medium text-gray-600"
                >
                  Property Images <span>*</span>
                </label>

                <FeaturedImageLarge setImages={setImages} />
              </div>
              <div className="col-span-1 sm:col-span-1">
                <FeaturedImageSmall />
              </div>

              <div className="col-span-1 sm:col-span-1">
                <OtherImages />
              </div>

              <div className="col-span-1 sm:col-span-1" />

              <div className="col-span-1 sm:col-span-1 my-2">
                {disableButton ? (
                  <>
                    <button
                      type="submit"
                      disabled
                      className={classNames(
                        isLoading ? "cursor-wait" : "cursor-not-allowed",
                        "bg-green-600 h-12   opacity-60 w-full border border-transparent rounded-md shadow-sm py-3 px-4 items-center flex justify-center text-sm font-medium text-white  focus:outline-none focus:ring-0 focus:ring-offset-0"
                      )}
                    >
                      {isLoading ? (
                        <>
                          <SecondaryLoader
                            size="w-5 h-5"
                            color="border-white"
                            border="border-2 "
                          />
                        </>
                      ) : (
                        <>Save</>
                      )}
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      type="submit"
                      className="bg-green-600 w-full h-12 items-center  border border-transparent rounded-md shadow-sm py-3 px-4 flex justify-center text-sm font-medium text-white hover:bg-green-500 focus:outline-none focus:ring-0 focus:ring-offset-0"
                    >
                      Save
                    </button>
                  </>
                )}
              </div>
              <div className="col-span-1 sm:col-span-1 my-2">
                <button
                  type="button"
                  onClick={() => push(PROPERTIES)}
                  className="bg-gray-100 h-12  w-full border border-transparent rounded-md shadow-sm py-3 px-4 items-center flex justify-center text-sm font-medium text-gray-600 hover:bg-gray-200 focus:outline-none focus:ring-0 focus:ring-offset-0"
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default MainComponent;
