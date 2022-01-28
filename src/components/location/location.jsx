import { useEffect, useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { SecondaryLoader } from "../../shared/loader";

const LocationSearchInput = ({ setLong, setLat, setAddress, address }) => {
  const [innerAddress, setInnerAddress] = useState("");

  useEffect(() => {
    if (address.length >= 0) {
      setInnerAddress(address);
    }
  }, [address]);

  const handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => results[0])
      .then(async (res) => {
        //save address
        setInnerAddress(res?.formatted_address);
        setAddress(res?.formatted_address);
        const latLng = await getLatLng(res);
        setLong(latLng?.lng);
        setLat(latLng?.lat);
      })
      .catch((error) => console.error("Error", error));
  };

  return (
    <PlacesAutocomplete
      value={innerAddress}
      onChange={setInnerAddress}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <input
            autoComplete="off"
            {...getInputProps({
              placeholder: "Type your address...",
              className:
                "block w-full px-5 py-3 text-sm  placeholder-gray-300   transition  duration-500 ease-in-out transform   border border-transparent   rounded-lg  text-gray-600  focus:outline-none  focus:border-transparent   focus:ring-2  focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300",
            })}
            value={innerAddress}
          />
          {suggestions?.length > 0 && (
            <div
              style={{
                width: "85vh",
              }}
              className={`absolute z-10 border  rounded-md mt-1 bg-white`}
            >
              {loading && (
                <div className={"flex justify-center my-4"}>
                  <SecondaryLoader
                    size="w-6 h-6"
                    color="border-green-600"
                    border="border-2 "
                  />
                </div>
              )}
              {suggestions.map((suggestion) => {
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      //   className,
                      // style,
                    })}
                    className={`p-2 rounded-t-lg border-b cursor-pointer hover:bg-gray-50 ${
                      suggestion?.active ? "bg-gray-50" : "bg-white"
                    }`}
                  >
                    <span className={"text-xs text-gray-600"}>
                      {suggestion.description}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </PlacesAutocomplete>
  );
};

LocationSearchInput.defaultProps = {
  hidePlaceholder: false,
};
export default LocationSearchInput;
