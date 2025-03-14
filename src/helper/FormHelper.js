import toast from "react-hot-toast";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let mobileRegex = /^(?:\+88|88)?01[3-9]\d{8}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/; // At least 8 chars, 1 letter, 1 number

class FormHelper {
  IsEmpty(value) {
    return value.length === 0;
  }
  IsEmail(value) {
    return emailRegex.test(value);
  }
  IsMobile(value) {
    return mobileRegex.test(value);
  }
  IsPassword(value) {
    return passwordRegex.test(value);
  }
  ErrorToast(msg) {
    toast.error(msg, {
      position: "bottom-center",
    });
  }
  SuccessToast(msg) {
    toast.success(msg, {
      position: "bottom-center",
    });
  }
}
const formHelper = new FormHelper();
export default formHelper;
