import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useState } from "react";

const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.newPrice, 0)
    .toFixed(2);
  const currentUser = true; // Replace with actual user data
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [isChecked, setIsChecked] = useState(false);

  const onSubmit = (data) => {
    const newOrder = {
      name: data.name,
      email: currentUser?.email,
      address: {
        city: data.city,
        country: data.country,
        state: data.state,
        zipcode: data.zipcode,
      },
      phone: data.phone,
      productIds: cartItems.map((item) => item?._id),
      totalPrice: totalPrice,
    };
    console.log(newOrder);
  };

  return (
    <section>
      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <h2 className="font-semibold text-xl text-gray-600 mb-2">
              Cash On Delivery
            </h2>
            <p className="text-gray-500 mb-2">Total Price: ${totalPrice}</p>
            <p className="text-gray-500 mb-6">
              Items: {cartItems.length > 0 ? cartItems.length : 0}
            </p>

            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3 my-8"
              >
                <div className="text-gray-600">
                  <p className="font-medium text-lg">Personal Details</p>
                  <p>Please fill out all the fields.</p>
                </div>

                <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-5">
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        {...register("name", { required: true })}
                        id="name"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                      {errors.name && (
                        <span className="text-red-500 text-sm">
                          Name is required
                        </span>
                      )}
                    </div>

                    <div className="md:col-span-5">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="text"
                        id="email"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        defaultValue={currentUser?.email}
                        placeholder="email@domain.com"
                      />
                    </div>

                    <div className="md:col-span-5">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="number"
                        {...register("phone", { required: true })}
                        id="phone"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="+123 456 7890"
                      />
                      {errors.phone && (
                        <span className="text-red-500 text-sm">
                          Phone number is required
                        </span>
                      )}
                    </div>

                    <div className="md:col-span-3">
                      <label htmlFor="address">Address / Street</label>
                      <input
                        type="text"
                        {...register("address", { required: true })}
                        id="address"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                      {errors.address && (
                        <span className="text-red-500 text-sm">
                          Address is required
                        </span>
                      )}
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="city">City</label>
                      <input
                        type="text"
                        {...register("city", { required: true })}
                        id="city"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                      {errors.city && (
                        <span className="text-red-500 text-sm">
                          City is required
                        </span>
                      )}
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="country">Country</label>
                      <input
                        type="text"
                        {...register("country", { required: true })}
                        id="country"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                      {errors.country && (
                        <span className="text-red-500 text-sm">
                          Country is required
                        </span>
                      )}
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="state">State</label>
                      <input
                        type="text"
                        {...register("state", { required: true })}
                        id="state"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                      {errors.state && (
                        <span className="text-red-500 text-sm">
                          State is required
                        </span>
                      )}
                    </div>

                    <div className="md:col-span-1">
                      <label htmlFor="zipcode">Zipcode</label>
                      <input
                        type="text"
                        {...register("zipcode", { required: true })}
                        id="zipcode"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                      {errors.zipcode && (
                        <span className="text-red-500 text-sm">
                          Zipcode is required
                        </span>
                      )}
                    </div>

                    <div className="md:col-span-5 mt-3">
                      <div className="inline-flex items-center">
                        <input
                          type="checkbox"
                          id="billing_same"
                          className="form-checkbox"
                          onChange={(e) => setIsChecked(e.target.checked)}
                        />
                        <label
                          htmlFor="billing_same"
                          className="ml-2 text-sm"
                        >
                          I agree to the{" "}
                          <Link className="underline text-blue-600">
                            Terms & Conditions
                          </Link>{" "}
                          and{" "}
                          <Link className="underline text-blue-600">
                            Shopping Policy
                          </Link>
                        </label>
                      </div>
                    </div>

                    <div className="md:col-span-5 text-right">
                      <button
                        type="submit"
                        disabled={!isChecked}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Place an Order
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
