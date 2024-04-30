import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import Button from "../components/Button";
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const SendMoney = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const[apiError,setApiError]=useState("")
  const id = searchParams.get("id");
  console.log(id, ">>user id");
  const name = searchParams.get("name");
  console.log(name, ">>user name");
  const [amount, setAmount] = useState(0);

  console.log(amount, ">>amount");

  const sendMoney = async () => {
    try {
      const response = await axios.post(
        BASE_URL + "/transfer",
        {
          to: id,
          amount,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      toast.success("Payment successful");
      console.log(response, ">>response data");
    } catch (error) {
      console.log(error, ">>error while payment");
      setApiError(error.response.data.message)
      toast.dismiss("Error In Payment");
      throw new Error(error);
    }
  };

  return (
  
    <div className="flex justify-center h-screen bg-gray-100">
      
      <div className="h-full flex flex-col justify-center">
        <div className="border max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg">
          <div className="flex flex-col space-y-1.5 p-6">
            <h2 className="text-3xl font-bold text-center">Send Money</h2>
            <div className="m-14">
            <Link to={"/dashboard"}>
             <Button label={"Back to Dashboard"} />
            </Link>
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                <span className="text-2xl text-white">
                  {name && name[0].toUpperCase()}
                </span>
              </div>
              <h3 className="text-2xl font-semibold">{name}</h3>
            </div>
            <div className="space-y-4">
              {apiError&& <p className="text-red">{apiError}</p>}
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none"
                  htmlFor="amount"
                >
                  Amount (in Rs)
                </label>
                
                <input
                  onChange={(e) => {
                    setAmount(e.target.value);
                  }}
                  type="number"
                  className="w-full h-10 rounded-md border bg-gray-100 px-3 py-2 text-sm"
                  id="amount"
                  placeholder="Enter amount"
                />
              </div>
              <button
                onClick={sendMoney}
                className="w-full h-10 bg-green-500 rounded-md text-sm font-medium text-white transition-colors duration-300 hover:bg-green-600"
              >
                Initiate Transfer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendMoney;
