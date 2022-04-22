import * as React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useCurrentUser } from "../../../../services/context/auth";
import { SecondaryLoader } from "../../../../shared/loader";
import { UpdateDetailsInputProps, useUpdateDetails } from "./broker";

export const UpdateDetails = () => {
  const [{ signIn }, userData] = useCurrentUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UpdateDetailsInputProps>();

  React.useEffect(() => {
    if (userData) {
      reset({
        name: userData?.data?.name,
      });
    }
  }, [reset, userData]);

  const { mutateAsync, isLoading } = useUpdateDetails();

  const handleUpdateDetails: SubmitHandler<UpdateDetailsInputProps> =
    React.useCallback(
      async (data) => {
        try {
          await mutateAsync(data);
          await signIn({
            token: userData?.userToken,
            data: {
              ...userData?.data,
              ...data,
            },
          });
          toast.success("Hurray, you updated name succesfully!");
        } catch (error: any) {
          toast.error("Update was not successfuly, please try again later!");
        }
      },
      [mutateAsync, signIn, userData?.data, userData?.userToken]
    );
  return (
    <>
      <form onSubmit={handleSubmit(handleUpdateDetails)}>
        <div className="mt-8">
          <div className=" py-6">
            <div>
              <h2
                id="payment-details-heading"
                className="text-lg leading-6 font-medium text-gray-900"
              >
                Your details
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Update your information.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-4 gap-6">
              <div className="col-span-4 sm:col-span-4 space-y-2">
                <label
                  htmlFor="first-name"
                  className="block text-xs font-medium text-gray-600"
                >
                  Full name
                </label>
                <input
                  type="text"
                  {...register("name", {
                    required: "You must enter your name",
                  })}
                  id="first-name"
                  className="block w-full px-5 py-3 text-base  placeholder-gray-300   transition  duration-500 ease-in-out transform   border border-transparent   rounded-lg  text-gray-600  focus:outline-none  focus:border-transparent   focus:ring-2  focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                />
                {errors.name ? (
                  <p className="mt-2 text-xs text-red-600" id="email-error">
                    Please enter your name
                  </p>
                ) : null}
              </div>
            </div>
          </div>
          <div className="px-4 py-3 text-right sm:px-6">
            <button
              type="submit"
              disabled={isLoading}
              className="bg-green-600 border border-transparent rounded-md shadow-sm py-3 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-green-500 focus:outline-none focus:ring-0 focus:ring-offset-0"
            >
              {isLoading ? (
                <>
                  <SecondaryLoader
                    size="w-6 h-6"
                    color="border-white"
                    border="border-2 "
                  />
                </>
              ) : (
                "Update Name"
              )}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
