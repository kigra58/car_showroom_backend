import { IAPIResponse } from "../../interface";
import { SelledCar } from "../../Schema/soldCar";

class SoldCarService {
  private response: IAPIResponse | undefined;

  async addNew({
    client_id,
    car_id,
    price,
    agent_id,
    car_name,
    car_brand,
    car_model,
    car_color,
  }: {
    client_id: string;
    car_id: string;
    price: number;
    agent_id: string;
    car_name: string;
    car_brand: string;
    car_model: string;
    car_color: string;
  }) {

    if ( !car_id || !price ||!agent_id||car_name) {
      return (this.response = {
        message: "Please provide all required fields",
        success: false,
      });
    }

    try {
      const result = await SelledCar.create({
        client_id,
        car_id,
        price,
        agent_id,
        car_name,
        car_brand,
        car_model,
        car_color,
      });

      if (result && result._id) {
        this.response = {
          message: "Record added successfully",
          success: true,
        };
      } else {
        this.response = {
          message: "Record creation failed",
          success: false,
        };
      }
    } catch (error) {
      console.error(error);
    }
    return this.response;
  }

  getAllSelledCars = async () => {
    try {
      const result = await SelledCar.find();

      if (result && result.length) {
        this.response = {
          message: "Record found",
          data: result,
          success: true,
          statusCode: 200,
        };
      } else {
        this.response = {
          message: "No record found",
          success: false,
          statusCode: 404,
        };
      }
    } catch (error) {
      console.error(error);
    }
    return this.response;
  };  

  async getSelledCarById(id: string) {
    try {
      const result = await SelledCar.findById(id)
      if (result) {
        this.response = {
          message: "Record found",
          data: result,
          success: true,
          statusCode: 200,
        };
      } else {
        this.response = {
          message: "No record found",
          success: false,
          statusCode: 404,
        };
      }
    }
    catch (error) {
      console.error(error);
    }
    return this.response;
   }

   getCarByClientId = async (client_id: string) => {
    try {
      const result = await SelledCar.find({ client_id });

      if (result && result.length) {
        this.response = {
          message: "Record found",
          data: result,
          success: true,
          statusCode: 200,
        };
      } else {
        this.response = {
          message: "No record found",
          success: false,
          statusCode: 404,
        };
      }
    } catch (error) {
      console.error(error);
    }
    return this.response;
   }

    getCarByAgentId = async (agent_id: string) => {
      try {
        const result = await SelledCar.find({ agent_id });
  
        if (result && result.length) {
          this.response = {
            message: "Record found",
            data: result,
            success: true,
            statusCode: 200,
          };
        } else {
          this.response = {
            message: "No record found",
            success: false,
            statusCode: 404,
          };
        }
      } catch (error) {
        console.error(error);
      }
      return this.response;
    }
}

export default new SoldCarService();
