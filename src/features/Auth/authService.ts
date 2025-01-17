import { hash, genSalt, compare } from 'bcryptjs';
import { generateToken } from "../../middleware/generateToken";
import { IAPIResponse } from "../../interface";
import { User } from '../../Schema/userSchema';
// Import the User model

class AuthService {
  private response: IAPIResponse | undefined;

  /**
   * SIGNUP
   */
  async signup({ firstName, lastName, email, password, phone, account_type }: { firstName: string; lastName: string; email: string, password: string, phone: string, account_type: string }) {
    try {
      if (firstName && lastName && email && password) {
        const newUser = await User.create({
          first_name: firstName,
          last_name: lastName,
          email,
          password: await hash(password, await genSalt(10)),
          phone,
          account_type
        });
        if (newUser) {
          this.response = {
            success: true,
            message: "User Register Successfully",
            data: [newUser]
          };
        } else {
          this.response = {
            success: false,
            message: "Unable to register new user",
          }
        };
      } else {
        this.response = {
          success: false,
          message: "Unable to get payload",
          statusCode: 400,
          data: []
        }
      };
    } catch (error) {
      console.error(error);
    };
    return this.response;
  };

  /**
   * LOGIN
   */
  async login({ email, password }: { email: string; password: string }) {
    try {
      if (email && password) {
        const existUser = await User.findOne({ email });

        if (existUser) {
          const isVarify = await compare(password, existUser.password);
          if (isVarify) {
            const token = generateToken(`${existUser._id}`, existUser.email);
            if (token && token !== "") {
              this.response = {
                success: true,
                message: "User login successfully",
                data: [{ ...existUser.toObject(), token }]
              };
            } else {
              this.response = {
                success: false,
                message: "Token not generated"
              }
            }
          } else {
            this.response = {
              success: false,
              message: "Credentials not match"
            }
          };
        } else {
          this.response = {
            success: false,
            message: "User not register"
          };
        };
      } else {
        this.response = {
          success: false,
          message: "Unable to get payload"
        }
      };
    } catch (error) {
      console.error(error);
    };
    return this.response;
  };

  /**
   * FORGOT PASSWORD
   */
  async forgotPassword({ email }: { email: string }) {
    try {
      const existUser = await User.findOne({ email });

      if (existUser) {
        // Implement forgot password logic here
      } else {
        // Handle user not found case
      }

    } catch (error) {
      console.error(error);
    };
    return this.response;
  };

  /**
   * CHANGE PASSWORD
   */
  async changePassword({ newPassword, userId, oldPassword }: { newPassword: string; oldPassword: string, userId: number }) {
    try {
      const existUser = await User.findById(userId);
      if (existUser) {
        const isVarify = await compare(oldPassword, existUser.password);
        if (isVarify) {
          existUser.password = await hash(newPassword, await genSalt(10));
          const updatePassword = await existUser.save();
          if (updatePassword) {
            this.response = {
              success: true,
              message: "password changed successfully"
            };
          } else {
            this.response = {
              success: false,
              message: "unable to change password"
            }
          }
        } else {
          this.response = {
            success: false,
            message: "Credentials not match"
          }
        };
      }
    } catch (error) {
      console.error(error);
    };
    return this.response;

  };
}

export default new AuthService();
