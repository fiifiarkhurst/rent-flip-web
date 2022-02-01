import React from "react";
import { FeaturedImageLargeComponentProp } from "./types";
import { SecondaryLoader } from "../../../shared/loader";
import { UploadSvg } from "../../../components/svgs/upload";
import { TrashIcon } from "@heroicons/react/outline";
import useImageUpload from "../../../components/hooks/useImageUpload";
import toast from "react-hot-toast";

export const FeaturedImageLarge = ({
  setImages,
}: FeaturedImageLargeComponentProp) => {
  const [image, setImage] = React.useState<File | null>(null);
  const [url, setUrl] = React.useState<string>("");
  const { loading, upload, progress } = useImageUpload("properties");

  const handleChange = (e: any) => {
    if (e.target.files?.length) {
      setUrl(URL.createObjectURL(e.target.files[0]));
      setImage(e.target.files[0]);
    } else {
      setUrl(url);
      setImage(image);
    }
  };

  const handleUpload = async () => {
    if (!image) return toast.error("Kindly select an Image");
    const fileUrl = await upload(image as File);
    setImages((prev: string[]) => [...prev, fileUrl]);
    // setImage(null);
    // setUrl("");
  };

  React.useEffect(() => {
    if (image) {
      handleUpload();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [image]);

  return (
    <>
      {image === null ? (
        <>
          <button
            type="button"
            className="relative block w-full border-2 h-44 border-gray-300 border-dashed rounded-lg p-2 text-center hover:border-gray-400 focus:outline-none focus:ring-0"
          >
            <UploadSvg className="mx-auto h-16 w-16 sm:h-16 sm:w-16 md:h-20 md:w-20 text-gray-400" />
            <span className="mt-2 block text-xs font-medium text-gray-600">
              Upload
            </span>{" "}
            <label
              htmlFor="featured-large-file"
              className="absolute inset-0 w-full h-full bg-white bg-opacity-10 flex items-center justify-center text-sm font-medium text-white"
            >
              <input
                type="file"
                accept={"image/*"}
                onChange={handleChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
              />
            </label>
          </button>
        </>
      ) : (
        <>
          <div className="relative h-44   w-full">
            <img alt="" className="h-full w-full rounded-lg" src={url} />
            <div
              className={
                "absolute top-0 bg-gray-900 bg-opacity-60 rounded-lg h-full w-full flex justify-center items-center"
              }
            >
              {loading && (
                <>
                  <div className="relative">
                    <SecondaryLoader
                      size="w-10 h-10"
                      color="border-gray-50"
                      border="border-2 "
                    />
                    <div className="text-xs text-gray-50 absolute top-3 left-2.5">
                      {progress === null ? 0 : Math.floor(progress)}%
                    </div>
                  </div>
                </>
              )}
            </div>
            <div
              onClick={() => {
                setImage(null);
                setUrl("");
              }}
              className="bg-red-500 cursor-pointer h-8 w-8 absolute -top-4 -right-3 rounded-full flex justify-center items-center"
            >
              <TrashIcon className="text-white h-4 w-4" />
            </div>
          </div>
        </>
      )}

      <p className="block text-xs font-normal  text-gray-400">
        Featured image (large). The image must be 1440x810
      </p>
    </>
  );
};

export const FeaturedImageSmall = () => {
  const [image, setImage] = React.useState<File | null>(null);
  const [url, setUrl] = React.useState<string>("");

  const handleChange = (e: any) => {
    if (e.target.files?.length) {
      setUrl(URL.createObjectURL(e.target.files[0]));
      setImage(e.target.files[0]);
    } else {
      setUrl(url);
      setImage(image);
    }
  };
  return (
    <>
      {image === null ? (
        <>
          <div className="w-full  space-y-3">
            <label
              htmlFor="images"
              className="block text-sm mt-8 font-medium text-gray-600"
            />

            <button
              type="button"
              className="relative block w-full border-2 h-44 border-gray-300 border-dashed rounded-lg p-2 text-center hover:border-gray-400 focus:outline-none focus:ring-0"
            >
              <UploadSvg className="mx-auto h-14 w-14 sm:h-14 sm:w-14 md:h-16 md:w-16 text-gray-400" />
              <span className="mt-2 block text-xs font-medium text-gray-600">
                Upload
              </span>{" "}
              <label
                htmlFor="report-file"
                className="absolute inset-0 w-full h-full bg-white bg-opacity-10 flex items-center justify-center text-sm font-medium text-white"
              >
                <input
                  type="file"
                  id="report-file"
                  name="report-file"
                  accept={"image/*"}
                  onChange={handleChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                />
              </label>
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="w-full  space-y-3">
            <label
              htmlFor="images"
              className="block text-sm mt-8 font-medium text-gray-600"
            />

            <div className="relative h-44   w-full">
              <img alt="" className="h-full w-full rounded-lg" src={url} />

              <div
                className={
                  "absolute top-0 bg-gray-900 bg-opacity-60 rounded-lg h-full w-full flex justify-center items-center"
                }
              ></div>
            </div>
          </div>
        </>
      )}

      <p className="block text-xs font-normal pt-2  text-gray-400">
        Featured image (small)
      </p>
    </>
  );
};
