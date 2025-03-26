import toast from "react-hot-toast";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const mobileRegex = /^(?:\+88|88)?01[3-9]\d{8}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

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
    toast.error(msg, { position: "bottom-center" });
  }
  SuccessToast(msg) {
    toast.success(msg, { position: "bottom-center" });
  }
  //convert image to Base64
  Base64Image(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    }); // End of Promise
  }
}

export const {
  IsEmpty,
  IsEmail,
  IsMobile,
  IsPassword,
  ErrorToast,
  SuccessToast,
  Base64Image,
} = new FormHelper();
