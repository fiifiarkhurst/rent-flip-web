import * as React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { SecondaryLoader } from "../../../../shared/loader";
import { UpdatePasswordInputProps } from "../../broker";
import { useUpdatePassword } from "./broker";

export const UpdatePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdatePasswordInputProps>();
  const { mutateAsync, isLoading } = useUpdatePassword();

  const handleUpdatePassword: SubmitHandler<UpdatePasswordInputProps> =
    React.useCallback(
      async (data) => {
        if (data.newPassword !== data.confirmPassword) {
          return toast.error(
            "Your new password and confirmed password are not the same!"
          );
        }

        try {
          await mutateAsync(data);
          toast.success("Hurray, you updated your password successfully!");
        } catch (error: any) {
          toast.error(
            error?.response?.data?.message || "Something happened, try again!"
          );
        }
      },
      [mutateAsync]
    );
  return (
    <>
      <form onSubmit={handleSubmit(handleUpdatePassword)}>
        <div className="mt-8">
          <div className=" py-6">
            <div>
              <h2
                id="payment-details-heading"
                className="text-lg leading-6 font-medium text-gray-900"
              >
                Security
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Update your password here.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-4 gap-6">
              <div className="col-span-4 sm:col-span-4 space-y-2">
                <label
                  htmlFor="postal-code"
                  className="block text-xs font-medium text-gray-600"
                >
                  Old Password
                </label>
                <input
                  type="password"
                  id="password-code"
                  {...register("oldPassword", {
                    required: "You must enter your old password",
                  })}
                  className="focus:ring-offset-gray-300 focus:ring-offset-2 focus:ring-2 focus:border-transparent focus:outline-none  text-gray-600 rounded-lg border border-transparent transform  ease-in-out duration-500 block w-full px-5 py-3 text-base placeholder-gray-300  transition"
                />
                {errors.oldPassword ? (
                  <p className="mt-2 text-xs text-red-600" id="email-error">
                    Please enter a valid old password.
                  </p>
                ) : null}
              </div>

              <div className="col-span-4 sm:col-span-2 space-y-2">
                <label
                  htmlFor="postal-code"
                  className="block text-xs font-medium text-gray-600"
                >
                  New Password
                </label>
                <input
                  type="password"
                  id="password-code"
                  {...register("newPassword", {
                    required: "You must enter your new password",
                  })}
                  className="focus:ring-offset-gray-300 focus:ring-offset-2 focus:ring-2 focus:border-transparent focus:outline-none  text-gray-600 rounded-lg border border-transparent transform  ease-in-out duration-500 block w-full px-5 py-3 text-base placeholder-gray-300  transition"
                />
                {errors.newPassword ? (
                  <p className="mt-2 text-xs text-red-600" id="email-error">
                    Please enter a new password.
                  </p>
                ) : null}
              </div>

              <div className="col-span-4 sm:col-span-2 space-y-2">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium text-gray-600"
                >
                  Confirm New Password
                </label>
                <input
                  type="password"
                  {...register("confirmPassword", {
                    required: "You must confirm your password",
                  })}
                  id="confirm-code"
                  className="focus:ring-offset-gray-300 focus:ring-offset-2 focus:ring-2 focus:border-transparent focus:outline-none  text-gray-600 rounded-lg border border-transparent transform  ease-in-out duration-500 block w-full px-5 py-3 text-base placeholder-gray-300  transition"
                />
                {errors.newPassword ? (
                  <p className="mt-2 text-xs text-red-600" id="email-error">
                    Please confirm your new password.
                  </p>
                ) : null}
              </div>
            </div>
          </div>
          <div className="px-4 py-3 text-right sm:px-6">
            <button
              type="submit"
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
                "Update Password"
              )}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
